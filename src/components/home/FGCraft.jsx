import makingImg from "../../assets/images/Making.webp";
import printingImg from "../../assets/images/Printing.webp";
import handEmbImg from "../../assets/images/Hand_Emb.webp";

const fgCrafts = [
  { src: makingImg, alt: "Block Making", label: "Block Making" },
  { src: printingImg, alt: "Block Printing", label: "Block Printing" },
  { src: handEmbImg, alt: "Hand Embroidery", label: "Hand Embroidery" },
];

export default function FGCrafts() {
  return (
    <div className="px-3 sm:px-4 lg:px-6 mt-8 sm:mt-10 mb-8 sm:mb-10">
      <h2 className="text-center text-lg sm:text-xl tracking-[0.08em] sm:tracking-[0.1em] uppercase text-gray-600 mb-8 sm:mb-10 font-brand">
        FG CRAFTS
      </h2>

      {/* Mobile View */}
      <div className="grid grid-cols-2 gap-1 h-[320px] sm:hidden">
        {/* Left big image */}
        <div className="relative row-span-2 overflow-hidden rounded-l-3xl group">
          <img
            src={fgCrafts[0].src}
            alt={fgCrafts[0].alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-black/40 py-4">
            <p className="text-center text-white uppercase tracking-[0.18em] text-sm">
              {fgCrafts[0].label}
            </p>
          </div>
        </div>

        {/* Top right */}
        <div className="relative overflow-hidden rounded-tr-3xl group">
          <img
            src={fgCrafts[1].src}
            alt={fgCrafts[1].alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-black/40 py-3">
            <p className="text-center text-white uppercase tracking-[0.18em] text-xs">
              {fgCrafts[1].label}
            </p>
          </div>
        </div>

        {/* Bottom right */}
        <div className="relative overflow-hidden rounded-br-3xl group">
          <img
            src={fgCrafts[2].src}
            alt={fgCrafts[2].alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-black/40 py-3">
            <p className="text-center text-white uppercase tracking-[0.18em] text-xs">
              {fgCrafts[2].label}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop/Tablet View */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
        {fgCrafts.map((craft) => (
          <div className="flex flex-col items-center gap-3" key={craft.alt}>
            <div className="rounded-xl sm:rounded-2xl overflow-hidden w-full">
              <img
                src={craft.src}
                alt={craft.alt}
                className="w-full h-72 md:h-80 lg:h-96 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <p className="text-xs sm:text-sm lg:text-[15px] tracking-[0.21em] uppercase text-[#7B1D2A]">
              {craft.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
