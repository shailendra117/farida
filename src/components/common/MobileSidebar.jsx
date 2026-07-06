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
        className={`fixed top-0 left-0 h-screen w-[min(85%,320px)] bg-white z-50 transition-transform duration-300 shadow-2xl ${
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

          <Link
            to="/fg-woman"
            onClick={closeMenu}
            className="flex justify-between items-center px-6 py-4 hover:bg-gray-100"
          >
            <span>FG WOMAN</span>
            <span>›</span>
          </Link>

          <Link
            to="/fg-bestseller"
            onClick={closeMenu}
            className="flex justify-between items-center px-6 py-4 hover:bg-gray-100"
          >
            <span>FG BESTSELLERS</span>
            <span>›</span>
          </Link>

          <Link
            to="/fg-basics"
            onClick={closeMenu}
            className="flex justify-between items-center px-6 py-4 hover:bg-gray-100"
          >
            <span>FG BASICS</span>
            <span>›</span>
          </Link>

          <Link
            to="/sale"
            onClick={closeMenu}
            className="flex justify-between items-center px-6 py-4 hover:bg-gray-100"
          >
            <span>SALE</span>
            <span>›</span>
          </Link>

          

         
        </div>

       
      </div>
    </>
  );
}

export default MobileSidebar;