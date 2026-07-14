import { useState } from "react";
import { Heart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({ product, collection, badgeLabel }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { items: wishlistItems, toggleWishlist, remove } = useWishlist();
  const [hover, setHover] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || null);

  // Notification state
  const [showNotification, setShowNotification] = useState(false);

  const handleBuyNow = (e) => {
    e.stopPropagation();

    const checkoutProduct = {
      ...product,
      selectedSize,
      quantity: 1,
    };

    addToCart(checkoutProduct);
    localStorage.setItem("checkoutProduct", JSON.stringify(checkoutProduct));
    navigate("/checkout", { state: { product: checkoutProduct } });
  };

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
          {badgeLabel && (
            <span className="absolute left-4 top-4 z-10 rounded-full bg-[#CE7C75] px-2 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-sm">
              {badgeLabel}
            </span>
          )}
          <div className="relative w-full min-h-[320px] overflow-hidden flex items-center justify-center bg-[#f8f8f8] sm:min-h-[340px] md:min-h-[360px]">
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
                const isWishlistPage = window.location.pathname === "/wishlist";
                if (isWishlistPage) {
                  // Remove irrespective of fromPage when user unlikes from wishlist page
                  remove(product.id, selectedSize);
                } else {
                  toggleWishlist({ ...product, selectedSize, fromPage: window.location.pathname });
                }
              }}
              className="bg-white p-2 rounded-full shadow-sm hover:scale-105 transition"
            >
              <Heart
                size={18}
                className={
                  (() => {
                    const isWishlistPage = window.location.pathname === "/wishlist";
                    if (isWishlistPage) {
                      return wishlistItems.some(
                        (p) => p.id === product.id && (p.selectedSize || null) === (selectedSize || null)
                      )
                        ? "fill-red-500 text-red-500"
                        : "text-gray-600";
                    }

                    return wishlistItems.some(
                      (p) =>
                        p.id === product.id &&
                        (p.selectedSize || null) === (selectedSize || null) &&
                        (p.fromPage || null) === (window.location.pathname || null)
                    )
                      ? "fill-red-500 text-red-500"
                      : "text-gray-600";
                  })()
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
                
                Add to bag
              </button>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            
            <div className="min-w-0 ">
              <h3 className="text-lg font-semibold text-[#3c2a21] truncate">
                {product.name}
              </h3>

             
                 
              <div className="flex items-center gap-3 ">
               
                <div className="flex items-center gap-1 mt-2 flex-wrap lg:flex-nowrap">
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

               {/* <p className="text-sm text-gray-500 ">{product.craft}</p> */}
                  <p className="text-xl text-[#3c2a21] mt-2">
                 ₹{product.price}
                 </p>

                
                 <button onClick={(e) => handleBuyNow(e)} className="cursor-pointer bg-[#7B1D2A] mt-3 px-4 py-2 border rounded-2xl  text-white">Buy Now</button>
            </div>

            
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
