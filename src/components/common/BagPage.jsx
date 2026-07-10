import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import Announcement from "../common/AnnouncementBar";
import Navbar from "../common/Navbar";
import MobileSidebar from "../common/MobileSidebar";
import Footer from "../common/Footer"
import MobileBottomNav from "../common/MobileBottomNav";
import cartBg from "../../assets/images/bagimg.jpg"

const BagPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, cartTotal, removeFromCart, updateQuantity } = useCart();

  return (
    <>
    <Announcement />
    <Navbar openMenu={() => setIsOpen(true)} />
    <MobileSidebar isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
    <section className="max-w-8xl mx-auto px-5 py-10 mt-22">

      {cartItems.length === 0 ? (
        <div
  className="relative h-[550px] w-full bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: `url(${cartBg})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/25"></div>

  {/* Text */}
  <div className="relative z-10 text-center text-white">
    <h2 className="text-3xl font-light">
      You have no items in your shopping cart.
    </h2>

    <p className="mt-4 text-lg">
      Click  <Link to="/new-arrivals" className="  underline transition text-lg  ">
          here
      </Link> to continue shopping.
    </p>
  </div>
       </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={`${item.id}-${item.name}`} className="flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
                <img src={item.image} alt={item.name} className="h-28 w-full rounded-3xl object-contain sm:h-28 sm:w-28 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#3c2a21]">{item.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.craft} • {item.color}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-gray-600 items-center">
                    <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium">{item.selectedSize || item.sizes?.slice(0,3).join(" • ")}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-gray-200 bg-white text-sm font-semibold"
                      >
                        -
                      </button>
                      <span className="px-3 text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-gray-200 bg-white text-sm font-semibold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-3 sm:items-end">
                  <p className="text-lg font-semibold text-[#3c2a21]">₹{item.price * item.quantity}</p>
                  <button
                    onClick={() => removeFromCart(item.id, item.selectedSize)}
                    className="text-sm text-[#7B1D2A] hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-[#3c2a21]">Order Summary</h2>
                <p className="text-sm text-gray-500">Review your subtotal and proceed to checkout.</p>
              </div>
              
            </div>

            <div className="mt-6 divide-y divide-gray-200">
              <div className="space-y-4 pb-4">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.name}-summary`} className="flex items-start justify-between gap-3 text-sm">
                    <div className="min-w-0">
                      <p className="font-medium text-gray-900 truncate">{item.name}</p>
                      <p className="text-gray-500">{item.color} · Qty {item.quantity}</p>
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
                <p className="text-sm text-gray-500">Your shipping options and taxes will be shown during checkout.</p>
                <Link
                  to="/checkout"
                  className="mt-2 block w-full rounded-full bg-[#7B1D2A] py-3 text-center text-sm font-semibold text-white hover:bg-[#5b151f] transition"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </aside>
        </div>
      )}
    </section>
    <Footer />
    <MobileBottomNav />
    </>
  );
};

export default BagPage;
