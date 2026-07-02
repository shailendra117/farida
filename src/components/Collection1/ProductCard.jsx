import { useState } from "react";
import { Heart } from "lucide-react";

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div
      className="group bg-white rounded-lg overflow-hidden cursor-pointer transition duration-300"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden ">

        <img
          src={hover ? product.hoverImage : product.image}
          alt={product.name}
        className="w-full h-full rounded-4xl  lg:h-[380px] object-cover transition duration-500"
        />

        {/* Wishlist */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow"
        >
          <Heart
            size={20}
            className={
              liked
                ? "fill-red-500 text-red-500 "
                : "text-gray-600"
            }
          />
        </button>

      </div>

      {/* Content */}
      <div className="py-4">

        <h3 className="text-lg font-semibold text-[#3c2a21]">
          {product.name}
        </h3>

        <p className="text-gray-800 text-sm mt-1">
          {product.craft}
        </p>

        <p className="text-sm text-gray-800  mt-3">
          ₹{product.price}  
        </p>

        <div className="flex flex-wrap gap-2 mt-2 text-gray-500">

          {product.sizes.map((size) => (
            <span
              key={size}
              className="border px-2 py-1 text-xs rounded"
            >
              {size}
            </span>
          ))}

        </div>

      </div>
    </div>
  );
};

export default ProductCard;