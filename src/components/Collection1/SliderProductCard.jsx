import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SliderProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="cursor-pointer "
    >
      {/* Image */}
      <div className="overflow-hidden rounded-2xl bg-gray-100">
        
         <motion.img
              src={product.image}
              alt={product.name}
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: 0.5,
              }}
          className="w-full h-full sm:h-72 lg:h-80 object-cover  hover:scale-105 transition duration-500"
            />
      </div>

      {/* Details */}
      <div className="mt-3">
        <h3 className="text-sm lg:text-base font-semibold text-[#3c2a21] line-clamp-2">
          {product.name}
        </h3>

        <p className="mt-1 text-[#3c2a21] font-semibold">
          ₹{product.price}
        </p>
      </div>
    </div>
  );
};

export default SliderProductCard;