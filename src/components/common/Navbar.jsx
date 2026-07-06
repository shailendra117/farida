import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaRegHeart, FaRegUser, FaBars } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import SearchModal from "./SearchModal";
import { useEffect, useState } from "react";

import logo from "../../assets/images/logo1.png";

function Navbar({ openMenu }) {
  const { cartCount } = useCart();
  const { items: wishlistItems } = useWishlist();
  const [openSearch, setOpenSearch] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setOpenSearch(true);
    window.addEventListener("openSearch", handler);
    return () => window.removeEventListener("openSearch", handler);
  }, []);

  const handleCloseSearch = () => setOpenSearch(false);
  const handleSearch = (q) => {
    setOpenSearch(false);
    navigate(`/new-arrivals?search=${encodeURIComponent(q)}`);
  };
  return (
    <nav className="fixed top-11 left-0 right-0 z-50 bg-white border-b border-gray-100 px-4 sm:px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          className="w-32 sm:w-42 md:w-48 lg:w-50"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-4 text-[12px] uppercase text-gray-900 font-semibold">
        <li>
          <Link to="/new-arrivals" className="hover:text-[#7B1D2A]">
            New Arrivals
          </Link>
        </li>

        <li>
          <Link to="/fg-woman" className="hover:text-[#7B1D2A]">
            FG Woman
          </Link>
        </li>

        <li>
          <Link to="/fg-bestseller" className="hover:text-[#7B1D2A]">
            FG Bestsellers
          </Link>
        </li>

        <li>
          <Link to="/fg-basics" className="hover:text-[#7B1D2A]">
            FG Basics
          </Link>
        </li>

        <li>
          <Link to="/sale" className="hover:text-[#7B1D2A]">
            Sale
          </Link>
        </li>

        <li>
          <Link to="/fg-surplus" className="hover:text-[#7B1D2A]">
            FG Surplus
          </Link>
        </li>

        <li>
          <Link to="/exhibitions" className="hover:text-[#7B1D2A]">
            Exhibitions
          </Link>
        </li>
      </ul>

      {/* Right Icons */}
      <div className="flex items-center text-gray-800 gap-3 sm:gap-5">
        {/* Currency */}
        <span className="hidden sm:flex items-center gap-1 text-xs font-medium tracking-wider">
          ₹ INR
        </span>

        {/* Search */}
        <button className="hidden sm:block hover:text-[#7B1D2A]" onClick={() => setOpenSearch(true)}>
          <FaSearch size={18} />
        </button>

        {/* Wishlist */}
        <Link to="/wishlist" className="hidden sm:block relative hover:text-[#7B1D2A]">
          <FaRegHeart size={20} />
          {wishlistItems.length > 0 && (
            <span className="absolute -top-2 -right-3 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#7B1D2A] px-1.5 text-[10px] font-semibold text-white">
              {wishlistItems.length}
            </span>
          )}
        </Link>

        {/* Account */}
        <button className="hidden sm:block hover:text-[#7B1D2A]">
          <FaRegUser size={20} />
        </button>

        {/* Cart */}
        <Link to="/bag" className="relative hidden sm:block hover:text-[#7B1D2A]">
          <FiShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#7B1D2A] px-1.5 text-[10px] font-semibold text-white">
              {cartCount}
            </span>
          )}
        </Link>

        {/* Hamburger */}
        <button
    onClick={openMenu}
    className="lg:hidden text-gray-800 hover:text-[#7B1D2A]">
          <FaBars size={26} />
        </button>
      </div>
      {openSearch && <SearchModal onClose={handleCloseSearch} onSearch={handleSearch} />}
    </nav>
  );
}

export default Navbar;