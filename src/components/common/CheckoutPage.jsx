import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";

import Announcement from "../common/AnnouncementBar";
import Navbar from "../common/Navbar";
import MobileSidebar from "../common/MobileSidebar";
import MobileBottomNav from "../common/MobileBottomNav";

const CheckoutPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [checkoutProduct, setCheckoutProduct] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCheckoutReady, setIsCheckoutReady] = useState(false);
  const [skipEmptyRedirect, setSkipEmptyRedirect] = useState(false);

  const { cartItems, cartTotal, clearCart } = useCart();
  const location = useLocation();

  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  useEffect(() => {
    const storedProduct = localStorage.getItem("checkoutProduct");
    const stateProduct = location.state?.product;

    if (stateProduct) {
      setCheckoutProduct(stateProduct);
      localStorage.setItem("checkoutProduct", JSON.stringify(stateProduct));
    } else if (storedProduct) {
      setCheckoutProduct(JSON.parse(storedProduct));
    }

    setIsCheckoutReady(true);
  }, [location.state]);

  useEffect(() => {
    if (skipEmptyRedirect || !isCheckoutReady) {
      return;
    }

    if (cartItems.length === 0 && !checkoutProduct) {
      navigate("/bag", { replace: true });
    }
  }, [cartItems, checkoutProduct, navigate, skipEmptyRedirect, isCheckoutReady]);

  if (!isCheckoutReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-lg text-gray-600">Preparing checkout...</p>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    // sanitize phone and pincode to digits only and limit lengths
    let newValue = value;
    if (name === "phone") {
      newValue = value.replace(/\D/g, "").slice(0, 10);
    }

    if (name === "pincode") {
      newValue = value.replace(/\D/g, "").slice(0, 6);
    }

    setAddress((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());

  const isValidPincode = (p) => String(p || "").replace(/\D/g, "").length === 6;
  const isValidPhone = (p) => String(p || "").replace(/\D/g, "").length === 10;

  const validateForm = () => {
    const nextErrors = {};

    if (!address.name.trim()) nextErrors.name = "Name is required.";
    if (!address.email.trim()) nextErrors.email = "Email is required.";
    else if (!isValidEmail(address.email)) nextErrors.email = "Enter a valid email.";

    if (!address.phone.trim()) nextErrors.phone = "Phone number is required.";
    else if (!isValidPhone(address.phone))
      nextErrors.phone = "Enter a valid 10-digit phone number.";

    if (!address.address.trim()) nextErrors.address = "Full address is required.";
    if (!address.city.trim()) nextErrors.city = "City is required.";
    if (!address.state.trim()) nextErrors.state = "State is required.";

    if (!address.pincode.trim()) nextErrors.pincode = "Pincode is required.";
    else if (!isValidPincode(address.pincode))
      nextErrors.pincode = "Enter a valid 6-digit pincode.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const checkoutItems = cartItems.length > 0 ? cartItems : checkoutProduct ? [checkoutProduct] : [];
  const checkoutTotal = cartItems.length > 0
    ? cartTotal
    : checkoutProduct
    ? (checkoutProduct.price || 0) * (checkoutProduct.quantity || 1)
    : 0;

  const handlePlaceOrder = async () => {
    if (!validateForm()) {
      return;
    }

    setProcessing(true);

    try {
      // 1. CREATE RAZORPAY ORDER
      const orderResponse = await fetch("http://localhost:5000/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: checkoutTotal,
        }),
      });

      const orderData = await orderResponse.json();

      if (!orderData.success) {
        throw new Error("Razorpay order creation failed");
      }

      // 2. RAZORPAY OPTIONS
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: orderData.order.amount,
        currency: "INR",
        name: "Your Store",
        description: "Order Payment",
        order_id: orderData.order.id,

        handler: async function (response) {
          try {
            // 3. VERIFY PAYMENT
            const verifyResponse = await fetch("http://localhost:5000/verify-payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyResponse.json();

            if (!verifyData.success) {
              throw new Error("Payment verification failed");
            }

            console.log("Payment Verified");

            let shippingError = null;
            let shiprocketOrderId = null;
            let shipmentId = null;

            try {
              const shiprocketResponse = await fetch(
                "http://localhost:5000/create-shiprocket-order",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    customer: address,
                    items: checkoutItems,
                    amount: checkoutTotal,
                    paymentId: response.razorpay_payment_id,
                  }),
                }
              );

              const shiprocketData = await shiprocketResponse.json();

              if (!shiprocketData.success) {
                shippingError = shiprocketData.message || "Shiprocket order creation failed.";
                console.error("Shiprocket Error:", shiprocketData);
              } else {
                shiprocketOrderId = shiprocketData.orderId || null;
                shipmentId = shiprocketData.shipmentId || null;
                console.log("Shiprocket Order Created");
              }
            } catch (shipError) {
              shippingError = String(shipError);
              console.error("Shiprocket request failed:", shipError);
            }

            const finalOrderData = {
              paymentId: response.razorpay_payment_id,
              amount: checkoutTotal,
              items: checkoutItems,
              customer: address,
              shiprocketOrderId,
              shipmentId,
              shippingError,
            };

            localStorage.setItem("order", JSON.stringify(finalOrderData));
            localStorage.removeItem("checkoutProduct");
            setSkipEmptyRedirect(true);
            clearCart();
            navigate("/order-success");
          } catch (error) {
            console.error("Verification Error:", error);
            setProcessing(false);
          }
        },

        prefill: {
          name: address.name,
          email: address.email,
          contact: address.phone,
        },

        theme: {
          color: "#2771F2",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment Error:", error);
      setProcessing(false);
    }
  };

  return (
    <>
      <Announcement />

      <Navbar
        openMenu={() => setIsOpen(true)}
      />

      <MobileSidebar
        isOpen={isOpen}
        closeMenu={() => setIsOpen(false)}
      />

      <section className="max-w-6xl mx-auto px-5 py-10 mt-8 lg:mt-28">

        <div className="grid gap-8 lg:grid-cols-2">

          {/* DELIVERY ADDRESS */}

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

            <h2 className="text-xl font-semibold text-[#3c2a21]">
              Delivery Address
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Enter your shipping details.
            </p>

            <div className="mt-6 space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={address.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#7B1D2A]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={address.email}
                onChange={handleChange}
                className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-[#7B1D2A] ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={address.phone}
                onChange={handleChange}
                className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-[#7B1D2A] ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
              )}

              <textarea
                name="address"
                placeholder="Full Address"
                value={address.address}
                onChange={handleChange}
                rows="4"
                className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-[#7B1D2A] ${
                  errors.address ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.address && (
                <p className="mt-1 text-xs text-red-500">{errors.address}</p>
              )}

              <div className="grid gap-4 sm:grid-cols-2">

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={address.city}
                  onChange={handleChange}
                className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-[#7B1D2A] ${
                  errors.city ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.city && (
                <p className="mt-1 text-xs text-red-500">{errors.city}</p>
              )}

              <input
                type="text"
                name="state"
                placeholder="State"
                value={address.state}
                onChange={handleChange}
                className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-[#7B1D2A] ${
                  errors.state ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.state && (
                <p className="mt-1 text-xs text-red-500">{errors.state}</p>
              )}

            </div>

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={address.pincode}
              onChange={handleChange}
              className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-[#7B1D2A] ${
                errors.pincode ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.pincode && (
              <p className="mt-1 text-xs text-red-500">{errors.pincode}</p>
            )}
          </div>

          <aside className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#3c2a21]">
              Order Total
            </h2>

            <p className="text-sm text-gray-500">
              Confirm your order before payment.
            </p>

            <div className="mt-6 divide-y divide-gray-200">
              <div className="space-y-4 pb-4">
                {checkoutItems.map((item) => (
                  <div
                    key={`${item.id}-${item.name}`}
                    className="flex justify-between gap-3 text-sm"
                  >
                    <div>
                      <p className="font-medium text-gray-900">
                        {item.name}
                      </p>
                      <p className="text-gray-500">Qty {item.quantity}</p>
                    </div>
                    <span className="font-medium">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{checkoutTotal}</span>
                </div>

                <div className="border-t pt-4 flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>₹{checkoutTotal}</span>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  disabled={processing}
                  className={`w-full rounded-full bg-[#7B1D2A] py-3 text-white font-semibold transition ${
                    processing
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:bg-[#5b151f]"
                  }`}
                >
                  {processing ? "Processing..." : "Place Order"}
                </button>

                <Link
                  to="/bag"
                  className="block text-center text-sm text-[#7B1D2A] hover:underline"
                >
                  Back to Bag
                </Link>
              </div>
            </div>
          </aside>
        </div>

        </div>
      </section>

      <MobileBottomNav />
    </>
  );
}

export default CheckoutPage;  