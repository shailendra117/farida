import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { FaBoxOpen, FaTags, FaSearch, FaCalendarAlt, FaShoppingBag, FaHome } from "react-icons/fa";

const navItems = [
  {
    label: "New Arrivals",
    path: "/new-arrivals",
    icon: <FaBoxOpen className="w-6 h-6 mb-1" />,
  },
  {
    label: "Sale",
    path: "/sale",
    icon: <FaTags className="w-6 h-6 mb-1" />,
  },
  {
    label: "Home",
    path: "/",
    icon: <FaHome className="w-6 h-6 mb-1" />,
  },
  {
    label: "Exhibitions",
    path: "/exhibitions",
    icon: <FaCalendarAlt className="w-6 h-6 mb-1" />,
  },
  {
    label: "Bag",
    path: "/bag",
    icon: <FaShoppingBag className="w-6 h-6 mb-1" />,
  },
];

export default function MobileBottomNav() {
  const location = useLocation();
  const { cartCount } = useCart();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg sm:hidden">
      <div className="grid grid-cols-5 h-14">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              to={item.path}
              key={item.label}
              className={`relative flex flex-col items-center justify-center text-[11px] ${
                isActive ? "text-[#7B1D2A]" : "text-gray-600 hover:text-[#7B1D2A]"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
              {item.label === "Bag" && cartCount > 0 && (
                <span className="absolute -top-1 right-6 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#7B1D2A] px-1 text-[9px] font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
