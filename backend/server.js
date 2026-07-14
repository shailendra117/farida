const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");
require("dotenv").config();
const crypto = require("crypto");

const app = express();

app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// 👇 SHIPROCKET TOKEN CODE YAHAN

let shiprocketToken = null;
let tokenCreatedAt = null;

async function getShiprocketToken() {
  const tenDays = 10 * 24 * 60 * 60 * 1000;

  if (
    shiprocketToken &&
    tokenCreatedAt &&
    Date.now() - tokenCreatedAt < tenDays
  ) {
    return shiprocketToken;
  }

  const response = await fetch(
    "https://apiv2.shiprocket.in/v1/external/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: process.env.SHIPROCKET_EMAIL,
        password: process.env.SHIPROCKET_PASSWORD,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Shiprocket authentication failed");
  }

  shiprocketToken = data.token;
  tokenCreatedAt = Date.now();

  return shiprocketToken;
}

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100),
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    res.json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Create Order Error:", error);

    res.status(500).json({
      success: false,
      message: "Order creation failed",
    });
  }
});

app.post("/verify-payment", (req, res) => {
  console.log("Verify payment API called");
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      console.log("Payment verified successfully");
      res.json({
        success: true,
        message: "Payment verified",
      });
    } else {
      console.log("Invalid payment signature");
      res.json({
        success: false,
        message: "Invalid signature",
      });
    }

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Verification failed",
    });
  }
});

app.post("/create-shiprocket-order", async (req, res) => {
  try {
    console.log("create-shiprocket-order payload:", req.body);
    if (!req.body) {
      console.error("SHIPROCKET ERROR: empty request body");
      return res.status(400).json({
        success: false,
        message: "Request body is required",
      });
    }

    const { customer, items, amount, paymentId } = req.body || {};

    if (!customer || !items?.length || !amount || !paymentId) {
      return res.status(400).json({
        success: false,
        message: "Missing order details",
      });
    }

    // sanitize and validate pincode and phone to satisfy Shiprocket requirements
    const sanitizeDigits = (v) => String(v || "").replace(/\D/g, "");

    const billingPincodeRaw = sanitizeDigits(customer.pincode);
    const billingPhoneRaw = sanitizeDigits(customer.phone);

    if (billingPincodeRaw.length !== 6) {
      return res.status(400).json({
        success: false,
        message: "Invalid billing pincode",
        billing_pincode: billingPincodeRaw,
      });
    }

    if (billingPhoneRaw.length !== 10) {
      return res.status(400).json({
        success: false,
        message: "Invalid billing phone",
        billing_phone: billingPhoneRaw,
      });
    }

    // Keep pincode and phone as digit-strings (Shiprocket expects 6/10 digit strings)
    const billingPincode = billingPincodeRaw;
    const billingPhone = billingPhoneRaw;

    const token = await getShiprocketToken();

    const now = new Date();

    const orderDate = now
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

    const shiprocketOrder = {
      order_id: Date.now().toString(),
      order_date: orderDate,

      // Use configured pickup location (must match one in your Shiprocket account)
      pickup_location: process.env.SHIPROCKET_PICKUP_LOCATION || "work",

      billing_customer_name: customer.name,
      billing_last_name: "",
      billing_address: customer.address,
      billing_address_2: "",
      billing_city: customer.city,
      billing_state: customer.state,
      billing_country: "India",
      billing_email: customer.email,
      billing_pincode: billingPincode,
      billing_phone: billingPhone,

      shipping_is_billing: true,

      order_items: items.map((item) => ({
        name: item.name,
        sku: String(item.id),
        units: item.quantity,
        selling_price: item.price,
        discount: 0,
        tax: 0,
        hsn: "",
      })),

      payment_method: "Prepaid",

      shipping_charges: 0,
      giftwrap_charges: 0,
      transaction_charges: 0,
      total_discount: 0,

      sub_total: amount,

      length: 10,
      breadth: 10,
      height: 10,
      weight: 0.5,
    };

    const response = await fetch(
      "https://apiv2.shiprocket.in/v1/external/orders/create/adhoc",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify(shiprocketOrder),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("SHIPROCKET ERROR:", data);

      // If Shiprocket complains about pickup location, extract available locations
      const wrongPickupMsg =
        typeof data?.message === "string" &&
        data.message.toLowerCase().includes("pickup");

      const available = data?.data?.data || data?.data || null;

      if (wrongPickupMsg && Array.isArray(available) && available.length) {
        // Try to determine a sensible pickup location name from the first available option
        const first = available[0];
        const pickName =
          first.pickup_location ||
          first.pickup_location_name ||
          first.name ||
          first.warehouse_name ||
          null;

        // If we can pick a name, retry once using that location
        if (pickName) {
          console.log("Retrying Shiprocket order using pickup_location:", pickName);

          const retryOrder = { ...shiprocketOrder, pickup_location: pickName };

          const retryResp = await fetch(
            "https://apiv2.shiprocket.in/v1/external/orders/create/adhoc",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify(retryOrder),
            }
          );

          const retryData = await retryResp.json();

          if (retryResp.ok) {
            console.log("Shiprocket order created on retry", retryData);

            const orderId =
              retryData?.order_id || retryData?.data?.order_id || null;
            const shipmentId =
              retryData?.shipment_id || retryData?.data?.shipment_id || null;

            return res.json({
              success: true,
              message: "Shiprocket order created (retried with valid pickup)",
              orderId,
              shipmentId,
              raw: retryData,
            });
          }

          // retry failed — fall through to return options
        }

        return res.status(422).json({
          success: false,
          message: "Wrong pickup location. Choose one of the available locations.",
          availablePickupLocations: available,
          error: data,
        });
      }

      return res.status(response.status).json({
        success: false,
        message: "Shiprocket order creation failed",
        error: data,
      });
    }

    console.log("Shiprocket order created successfully", data);

    // Shiprocket may return ids at the top-level or nested under `data`.
    const orderId = data?.order_id || data?.data?.order_id || null;
    const shipmentId = data?.shipment_id || data?.data?.shipment_id || null;

    res.json({
      success: true,
      message: "Shiprocket order created",
      orderId,
      shipmentId,
      raw: data,
    });
  } catch (error) {
    console.error("SHIPROCKET ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Shiprocket order creation failed",
    });
  }
});


app.listen(5000, () => {
  console.log("Server running on port 5000");
});

// Proxy endpoint to fetch tracking/status from Shiprocket using order/shipment/awb
app.get("/shiprocket/track", async (req, res) => {
  try {
    const { orderId, shipmentId, awb } = req.query;

    const token = await getShiprocketToken();

    const endpoints = [];
    if (orderId) endpoints.push(`https://apiv2.shiprocket.in/v1/external/orders/show/${orderId}`);
    if (shipmentId) endpoints.push(`https://apiv2.shiprocket.in/v1/external/shipments/${shipmentId}`);
    if (awb) endpoints.push(`https://apiv2.shiprocket.in/v1/external/courier/track?awb=${awb}`);

    if (!endpoints.length) {
      return res.status(400).json({ success: false, message: "Provide orderId, shipmentId, or awb as query param" });
    }

    let lastError = null;
    for (const url of endpoints) {
      try {
        const r = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const body = await r.json().catch(() => null);

        if (r.ok) {
          return res.json({ success: true, source: url, data: body });
        } else {
          lastError = { status: r.status, body };
        }
      } catch (err) {
        lastError = { error: String(err) };
      }
    }

    return res.status(502).json({ success: false, message: "No tracking info available", error: lastError });
  } catch (error) {
    console.error("SHIPROCKET TRACK ERROR:", error);
    res.status(500).json({ success: false, message: "Tracking failed" });
  }
});