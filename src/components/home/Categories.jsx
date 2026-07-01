import kurtasImg from "../../assets/images/kurtas.jpg";
import topsImg from "../../assets/images/tops.jpg";
import loungewearImg from "../../assets/images/loungewear.jpg";
import accessoriesImg from "../../assets/images/accessories.jpg";

const categories = [
  { src: kurtasImg, alt: "kurtas", rounded: "rounded-tl-2xl sm:rounded-tl-3xl" },
  { src: topsImg, alt: "tops", rounded: "rounded-tr-2xl sm:rounded-tr-3xl" },
  { src: loungewearImg, alt: "loungewear", rounded: "rounded-bl-3xl sm:rounded-bl-4xl" },
  { src: accessoriesImg, alt: "accessories", rounded: "rounded-br-2xl sm:rounded-br-3xl" },
];

export default function Categories() {
  return (
    <div className="px-3 sm:px-4 lg:px-6 mt-8 sm:mt-10 mb-8 sm:mb-10">
      <h2 className="text-center text-lg sm:text-xl tracking-[0.08em] sm:tracking-[0.1em] uppercase text-gray-700 mb-6 sm:mb-8 font-brand">
        Categories
      </h2>

      <div className="grid grid-cols-2 gap-2 sm:gap-2 lg:gap-2 max-w-4xl mx-auto">
        {categories.map((item) => (
          <div
            key={item.alt}
            className={`relative overflow-hidden cursor-pointer group ${item.rounded}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-44 sm:h-64 md:h-80 lg:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
