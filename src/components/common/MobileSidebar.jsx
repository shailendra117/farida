import { Link } from "react-router-dom";
import { useEffect } from "react";

import logo from "../../assets/images/logo1.png";

function MobileSidebar({ isOpen, closeMenu }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [closeMenu]);

  return (
    <>
      {/* Overlay */}

      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/50 z-40"
        ></div>
      )}

      {/* Sidebar */}

      <div
        className={`fixed top-0 left-0 h-screen w-80 max-w-[85%] bg-white z-50 transition-transform duration-300 shadow-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="flex items-center justify-between px-6 py-5 border-b">
          <img src={logo} alt="Logo" className="w-28" />

          <button
            onClick={closeMenu}
            className="text-3xl hover:text-[#7B1D2A]"
          >
            &times;
          </button>
        </div>

        {/* Menu */}

        <div className="py-2">

          <Link
            to="/new-arrivals"
            onClick={closeMenu}
            className="flex justify-between items-center px-6 py-4 hover:bg-gray-100"
          >
            <span>NEW ARRIVALS</span>
            <span>›</span>
          </Link>

          <a
            href="#"
            onClick={closeMenu}
            className="flex justify-between items-center px-6 py-4 hover:bg-gray-100"
          >
            <span>FG WOMAN</span>
            <span>›</span>
          </a>

          <a
            href="#"
            onClick={closeMenu}
            className="flex justify-between items-center px-6 py-4 hover:bg-gray-100"
          >
            <span>FG BESTSELLERS</span>
            <span>›</span>
          </a>

          <a
            href="#"
            onClick={closeMenu}
            className="flex justify-between items-center px-6 py-4 hover:bg-gray-100"
          >
            <span>FG BASICS</span>
            <span>›</span>
          </a>

          <a
            href="#"
            onClick={closeMenu}
            className="flex justify-between items-center px-6 py-4 hover:bg-gray-100"
          >
            <span>SALE</span>
            <span>›</span>
          </a>

          <a
            href="#"
            onClick={closeMenu}
            className="flex justify-between items-center px-6 py-4 hover:bg-gray-100"
          >
            <span>FG SURPLUS</span>
            <span>›</span>
          </a>

          <a
            href="#"
            onClick={closeMenu}
            className="flex justify-between items-center px-6 py-4 hover:bg-gray-100"
          >
            <span>EXHIBITIONS</span>
            <span>›</span>
          </a>
        </div>

        {/* Bottom */}

        <div className="absolute bottom-0 left-0 right-0 border-t">
          <a href="#" className="block px-6 py-4 hover:bg-gray-100">
            ₹ INR
          </a>

          <a href="#" className="block px-6 py-4 hover:bg-gray-100">
            Wishlist
          </a>

          <a href="#" className="block px-6 py-4 hover:bg-gray-100">
            My Account
          </a>
        </div>
      </div>
    </>
  );
}

export default MobileSidebar;