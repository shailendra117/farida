import {Link, NavLink, useNavigate } from "react-router-dom";
import { FaSearch, FaRegHeart, FaRegUser, FaBars } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import SearchModal from "./SearchModal";
import { useEffect, useState } from "react";
import LoginModal from "../LoginPage/LoginModel";

import logo from "../../assets/images/logo1.png";

function Navbar({ openMenu }) {
  const [openLogin, setOpenLogin] = useState(false);
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
    <nav className="fixed top-11 left-0 right-0 z-50 bg-white border-b border-gray-100 px-4 sm:px-6 py-2 flex items-center justify-between">
      {/* Hamburger */}
        <button
          onClick={openMenu}
          className="rounded-full  p-2 text-gray-700 transition hover:bg-gray-100 hover:text-[#7B1D2A] lg:hidden"
        >
          <FaBars size={26}/>
        </button>
      {/* Logo */}
      <NavLink to="/">
        <img
          src={logo}
          alt="Logo"
          className="h-auto w-28 transition-all duration-300 sm:w-32 md:w-36 lg:w-44 xl:w-48"
        />
      </NavLink>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-4 text-black text-sm font-medium  tracking-wide">
        <li>
          <NavLink to="/new-arrivals" className="hover:text-[#7B1D2A]">
            New Arrivals
          </NavLink>
        </li>

        <li>
          <NavLink to="/fg-woman" className="hover:text-[#7B1D2A]">
            FG Woman
          </NavLink>
        </li>

        <li>
          <NavLink to="/fg-bestseller" className="hover:text-[#7B1D2A]">
            FG Bestsellers
          </NavLink>
        </li>

        <li>
          <NavLink to="/fg-basics" className="hover:text-[#7B1D2A]">
            FG Basics
          </NavLink>
        </li>

        <li>
          <NavLink to="/sale" className="hover:text-[#7B1D2A]">
            Sale
          </NavLink>
        </li>

        <li>
          <NavLink to="/fg-surplus" className="hover:text-[#7B1D2A]">
            FG Surplus
          </NavLink>
        </li>

        <li>
          <NavLink to="/exhibitions" className="hover:text-[#7B1D2A]">
            Exhibitions
          </NavLink>
        </li>
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-2 text-gray-800 md:gap-2 lg:gap-3">
       

        {/* Search */}
        <button
          className="hidden md:flex rounded-full p-2 transition hover:bg-gray-100 hover:text-[#7B1D2A]"
          onClick={() => setOpenSearch(true)}
        >
          <FaSearch size={18} />
        </button>

        {/* Wishlist */}
        <Link
          to="/wishlist"
          className="relative hidden md:flex rounded-full p-2 transition hover:bg-gray-100 hover:text-[#7B1D2A]"
        >
          <FaRegHeart size={20} />
          {wishlistItems.length > 0 && (
            <span className="absolute -top-2 -right-3 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#7B1D2A] px-1.5 text-[10px] font-semibold text-white">
              {wishlistItems.length}
            </span>
          )}
        </Link>

        {/* Account */}
        <button
          onClick={() => setOpenLogin(true)}
          className="relative  rounded-full p-2 transition hover:bg-gray-100 hover:text-[#7B1D2A]"
        >
          <FaRegUser size={22} />
        </button>

        {/* Cart */}
        <Link
          to="/bag"
          className="relative hidden md:flex rounded-full p-2 transition hover:bg-gray-100 hover:text-[#7B1D2A]"
        >
          <FiShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#7B1D2A] px-1.5 text-[10px] font-semibold text-white">
              {cartCount}
            </span>
          )}
        </Link>

        

        {openSearch && (
          <SearchModal onClose={handleCloseSearch} onSearch={handleSearch} />
        )}
      </div>
      <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} />
    </nav>
  );
}

export default Navbar;
