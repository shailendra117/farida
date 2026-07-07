import { useState } from "react";
import { Heart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({ product, collection }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [liked, setLiked] = useState(false);
  const [hover, setHover] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || null);

  // Notification state
  const [showNotification, setShowNotification] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{
          y: -8,
        }}
        onClick={() =>
          navigate(`/product/${product.id}`, {
            state: {
              collection,
            },
          })
        }
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="group bg-white rounded-[28px] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-shadow duration-300"
      >
        <div className="relative overflow-hidden bg-gray-100">
          <div className="relative w-full aspect-[3/4] overflow-hidden flex items-center justify-center bg-[#f8f8f8]">
            <motion.img
              src={hover ? product.hoverImage : product.image}
              alt={product.name}
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: 0.5,
              }}
              className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Wishlist Button */}
          <div className="absolute top-4 right-4 flex justify-between items-start">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLiked(!liked);
              }}
              className="bg-white p-2 rounded-full shadow-sm hover:scale-105 transition"
            >
              <Heart
                size={18}
                className={
                  liked ? "fill-red-500 text-red-500" : "text-gray-600"
                }
              />
            </button>
          </div>

          {/* Add To Bag Button */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-black/60 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex justify-end">
              <button
                onClick={(e) => {
                  e.stopPropagation();

                  addToCart({
                    ...product,
                    selectedSize,
                  });

                  // Show notification
                  setShowNotification(true);

                  setTimeout(() => {
                    setShowNotification(false);
                  }, 5000);
                }}
                className="rounded-full bg-white text-sm font-semibold text-[#3c2a21] py-2 px-4 shadow-md hover:bg-[#f8f0ee] transition flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add to bag
              </button>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-[#3c2a21] truncate">
                {product.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">{product.craft}</p>

              <div className="flex items-center gap-3 mt-3">
                <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium">
                  {product.color}
                </span>

                <div className="flex items-center gap-2 flex-wrap lg:flex-nowrap">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedSize(s);
                      }}
                      className={`
                        h-7 lg:h-8 px-2 lg:px-3 text-xs lg:text-sm rounded-full border
                        ${
                          selectedSize === s
                            ? "bg-[#7B1D2A] text-white border-[#7B1D2A]"
                            : "bg-gray-50 text-gray-700 border-gray-200"
                        }
                      `}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-lg font-semibold text-[#3c2a21]">
              ₹{product.price}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Success Notification */}
      {showNotification && (
        <div
          className="
          fixed 
          top-5 
          right-5 
          z-50 
          bg-green-600
         text-white 
          px-5 
          py-3 
          rounded-xl 
          shadow-xl 
          flex 
          items-center 
          gap-2
          animate-bounce
        "
        >
          <span className="text-lg">✓</span>
          Added successfully
        </div>
      )}
    </>
  );
};

export default ProductCard;
