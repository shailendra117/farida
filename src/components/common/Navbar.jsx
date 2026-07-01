import { Link } from "react-router-dom";
import { FaSearch, FaRegHeart, FaRegUser, FaBars } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

import logo from "../../assets/images/logo1.png";

function Navbar({ openMenu }) {
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
      <ul className="hidden lg:flex items-center gap-7 text-[12px] tracking-[0.15em] uppercase text-gray-700 font-semibold">
        <li>
          <Link to="/new-arrivals" className="hover:text-[#7B1D2A]">
            New Arrivals
          </Link>
        </li>

        <li>
          <Link to="#" className="hover:text-[#7B1D2A]">
            FG Woman
          </Link>
        </li>

        <li>
          <Link to="#" className="hover:text-[#7B1D2A]">
            FG Bestsellers
          </Link>
        </li>

        <li>
          <Link to="#" className="hover:text-[#7B1D2A]">
            FG Basics
          </Link>
        </li>

        <li>
          <Link to="#" className="hover:text-[#7B1D2A]">
            Sale
          </Link>
        </li>

        <li>
          <Link to="#" className="hover:text-[#7B1D2A]">
            FG Surplus
          </Link>
        </li>

        <li>
          <Link to="#" className="hover:text-[#7B1D2A]">
            Exhibitions
          </Link>
        </li>
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-3 sm:gap-5">
        {/* Currency */}
        <span className="hidden sm:flex items-center gap-1 text-sm font-medium tracking-wider">
          ₹ INR
        </span>

        {/* Search */}
        <button className="hidden sm:block hover:text-[#7B1D2A]">
          <FaSearch size={22} />
        </button>

        {/* Wishlist */}
        <button className="hidden sm:block hover:text-[#7B1D2A]">
          <FaRegHeart size={22} />
        </button>

        {/* Account */}
        <button className="hidden sm:block hover:text-[#7B1D2A]">
          <FaRegUser size={22} />
        </button>

        {/* Cart */}
        <button className="hidden sm:block hover:text-[#7B1D2A]">
          <FiShoppingBag size={22} />
        </button>

        {/* Hamburger */}
        <button
    onClick={openMenu}
    className="lg:hidden hover:text-[#7B1D2A]">
          <FaBars size={28} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;