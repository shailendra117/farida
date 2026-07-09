import { useState } from "react";
import Announcement from "../common/AnnouncementBar";
import Navbar from "../common/Navbar";
import MobileSidebar from "../common/MobileSidebar";
import ProductGrid from "../Collection1/ProductGrid";
import Footer from "../common/Footer";
import MobileBottomNav from "../common/MobileBottomNav";
import { useWishlist } from "../../context/WishlistContext";

export default function Wishlist() {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useWishlist();

  return (
    <>
      <Announcement />
      <Navbar openMenu={() => setIsOpen(true)} />
      <MobileSidebar isOpen={isOpen} closeMenu={() => setIsOpen(false)} />

      <section className="w-full max-w-8xl mx-auto px-4 sm:px-5 py-10 mt-24 lg:mt-28">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#3c2a21]">
              Your Wishlist
            </h2>
            <p className="text-gray-500 text-sm mt-1">{items.length} items</p>
          </div>
        </div>

        {items.length > 0 ? (
          <ProductGrid products={items} />
        ) : (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-[#fdf7f2] p-10 text-center text-gray-600">
            <h3 className="text-xl font-semibold text-[#3c2a21]">Your wishlist is empty.</h3>
            <p className="mt-2">Browse products and tap the heart to add items here.</p>
          </div>
        )}
      </section>

      <Footer />
      <MobileBottomNav />
    </>
  );
}
