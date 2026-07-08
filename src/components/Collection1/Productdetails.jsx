import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { motion } from "framer-motion";
import products from "../../data/products";
import ProductSlider from "../Collection1/ProductSlider";
import Announcement from "../common/AnnouncementBar";
import Navbar from "../common/Navbar";
import MobileSidebar from "../common/MobileSidebar";
import Footer from "../common/Footer";
import AnnouncementBar from "../common/AnnouncementBar";
import MobileBottomNav from "../common/MobileBottomNav";

export default function ProductDetails() {
  const location = useLocation();

  const allProducts = location.state?.collection || products;

  const [isOpen, setIsOpen] = useState(false);

  const [showNotification, setShowNotification] = useState(false);

  const { id } = useParams();
  const { addToCart } = useCart();

  const product = allProducts.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="text-center py-20 text-2xl font-semibold">
        Product Not Found
      </div>
    );
  }

  const relatedProducts = allProducts.filter((item) => item.id !== product.id);

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <>
      <Announcement />
      <Navbar openMenu={() => setIsOpen(true)} />
      <MobileSidebar isOpen={isOpen} closeMenu={() => setIsOpen(false)} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-28">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          {/* LEFT IMAGES */}

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="overflow-hidden rounded-2xl bg-[#f8f8f8] aspect-[3/4] sm:aspect-[4/5]"
              >
                <motion.img
                  src={product.image}
                  className="h-full w-full object-contain"
                  alt={product.name}
                />
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="overflow-hidden rounded-2xl bg-[#f8f8f8] aspect-[3/4] sm:aspect-[4/5]"
              >
                <motion.img
                  src={product.hoverImage}
                  className="h-full w-full object-contain"
                  alt={`${product.name} alternate view`}
                />
              </motion.div>
            </div>
           </div>

           {/* RIGHT DETAILS */}

           <motion.div
             initial={{
               opacity: 0,
               x: 50,
             }}
             animate={{
               opacity: 1,
               x: 0,
             }}
             transition={{
               duration: 0.6,
             }}
             className="lg:sticky lg:top-24 h-fit border border-gray-200 rounded-3xl p-5 sm:p-7 bg-white shadow-sm"
           >
             <h1 className="text-2xl sm:text-3xl font-semibold text-[#3c2a21]">
               {product.name}
             </h1>

            <p className="text-gray-500 text-sm mt-2">
              {product.craft} Hand Block Printed Kurta
            </p>

            {/* THUMBNAILS */}

            <div className="mt-8">
              <p className="font-medium mb-3">Images</p>

              <div className="flex gap-3">
                <img
                  src={product.image}
                  alt=""
                  className="w-20 h-24 rounded-lg border object-cover cursor-pointer"
                />

                <img
                  src={product.hoverImage}
                  alt=""
                  className="w-20 h-24 rounded-lg border object-cover cursor-pointer"
                />
              </div>
            </div>

            <p className="text-xl font-semibold mt-4 text-[#3c2a21]">
              ₹{product.price}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              ( Incl. of all taxes ) Shipping calculated at checkout.
            </p>

            {/* SIZE */}

            <div className="mt-8">
              <p className="font-medium mb-4">Select Size</p>

              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2 rounded-full border transition ${
                      selectedSize === size
                        ? "bg-[#7B1D2A] text-white border-[#7B1D2A]"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* BUTTON */}

            <button
              onClick={() => {
                addToCart({
                  ...product,
                  selectedSize,
                });

                setShowNotification(true);

                setTimeout(() => {
                  setShowNotification(false);
                }, 5000);
              }}
              className="w-full mt-10 bg-[#7B1D2A] hover:bg-[#641824] text-white py-4 rounded-full font-medium transition cursor-pointer"
            >
              Add To Bag
            </button>
          </motion.div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}

      <ProductSlider title="You Might Also Like" products={relatedProducts} />
      {showNotification && (
        <div
          className="
      fixed
      top-24
      right-5
      z-50
      bg-green-600
      text-white
      px-6
      py-3
      rounded-xl
      shadow-xl
      flex
      items-center
      gap-2
    "
        >
          ✓ Added successfully
        </div>
      )}
      <Footer />
      <MobileBottomNav />
    </>
  );
}
