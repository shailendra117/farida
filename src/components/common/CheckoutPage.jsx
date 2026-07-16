import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import Announcement from "../common/AnnouncementBar";
import Navbar from "../common/Navbar";
import MobileSidebar from "../common/MobileSidebar";
import MobileBottomNav from "../common/MobileBottomNav";
import OrderSuccess from "../common/OrderSuccess";



const CheckoutPage = () => {
  
  const [isOpen, setIsOpen] = useState(false);


  const key = import.meta.env.VITE_RAZORPAY_KEY_ID;

  const { cartItems, cartTotal, clearCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  // Redirect away from checkout if user landed here with an empty cart.
  // Run only on mount so clearing the cart as part of placing an order
  // does not cause a navigation race (we navigate to success explicitly).
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/bag", { replace: true });
    }
    // intentionally run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [processing, setProcessing] = useState(false);
  // console.log(import.meta.env.VITE_RAZORPAY_KEY_ID);

const handlePlaceOrder = () => {
  try {
    setProcessing(true);

    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded");
      setProcessing(false);
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: cartTotal * 100,
      currency: "INR",
      name: "Farida Gupta",
      description: "Order Payment",

      handler: function (response) {
        const orderData = {
          paymentId: response.razorpay_payment_id,
          amount: cartTotal,
          items: cartItems,
          date: new Date().toLocaleString(),
        };

        localStorage.setItem("order", JSON.stringify(orderData));

        clearCart();

        navigate("/order-success");
      },

      prefill: {
        name: "Customer",
        email: "customer@example.com",
        contact: "9999999999",
      },

      notes: {
        address: "Farida Gupta Store",
      },

      theme: {
        color: "#7B1D2A",
      },
    };

    // Create Razorpay object
    const razorpay = new window.Razorpay(options);

    razorpay.on("payment.failed", function (response) {
      alert(response.error.description);
    });

    razorpay.open();

    setProcessing(false);
  } catch (error) {
    console.error(error);
    setProcessing(false);
  }
};

  return (
    <>
      <Announcement />
    <Navbar openMenu={() => setIsOpen(true)} />
    <MobileSidebar isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
    <section className="max-w-5xl mx-auto px-5 py-10 mt-8 lg:mt-28">


        <aside className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-[#3c2a21]">Order Total</h2>
              <p className="text-sm text-gray-500">Confirm your total before placing the order.</p>
            </div>
          </div>

            <div className="mt-6 divide-y divide-gray-200">
              <div className="space-y-4 pb-4">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.name}-summary`} className="flex items-start justify-between gap-3 text-sm">
                  <div className="min-w-0">
                    <p className="font-medium text-gray-900 truncate">{item.name}</p>
                    <p className="text-gray-500">{item.color} · {item.selectedSize ? `Size ${item.selectedSize} ·` : ""} Qty {item.quantity}</p>
                    </div>
                  <span className="font-medium text-gray-900">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 space-y-4">
              <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                <span className="font-medium text-[#3c2a21]">₹{cartTotal}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
               <div className="flex justify-between text-sm text-gray-500">
                  <span>Total Items </span>
                  <span>{cartItems.length}</span>
                </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between items-center text-lg font-semibold text-[#3c2a21]">
                  <span>Total</span>
                <span>₹{cartTotal}</span>
                </div>
              <p className="text-sm text-gray-500">Taxes and shipping will appear on the next screen.</p>
                <button
  onClick={handlePlaceOrder}
  disabled={processing}
  className={`mt-2 w-full rounded-full bg-[#7B1D2A] py-3 text-sm font-semibold text-white hover:bg-[#5b151f] transition ${
    processing ? "opacity-70 cursor-not-allowed" : ""
  }`}
>
  {processing ? "Processing..." : "Place Order"}
</button>
                <Link
                  to="/bag"
                className="mt-3 block text-center text-sm text-[#7B1D2A] hover:underline"
                >
                  Back to Bag
                </Link>
              </div>
            </div>
          </aside>
      
    </section>
    {showSuccessModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full max-w-3xl px-4">
          <OrderSuccess />
        </div>
      </div>
    )}
      <MobileBottomNav />
    </>
  );
};

export default CheckoutPage;  
