import mobileImpact from "../../assets/images/mobile-impact.png";
import desktopImpact from "../../assets/images/desktop-impact.webp";

const impactStats = [
  { value: "2000+", label1: "Women", label2: "Employed" },
  { value: "3000+", label1: "Artisans", label2: "Empowered" },
  { value: "200,000+", label1: "Happy", label2: "Customers" },
];

export default function Impact() {
  return (
    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
      <h2 className="text-center text-lg sm:text-xl tracking-[0.08em] sm:tracking-[0.1em] uppercase text-gray-700 mb-6 sm:mb-8 font-brand">
        fg impact
      </h2>

      {/* Mobile Image */}
      <img
        src={mobileImpact}
        alt="FG Impact"
        className="block sm:hidden w-full h-[300px] object-cover"
      />

      {/* Desktop Image */}
      <img
        src={desktopImpact}
        alt="FG Impact"
        className="hidden sm:block w-full h-[420px] lg:h-auto object-cover"
      />

      {/* Mobile Black Overlay */}
      <div className="absolute top-12 inset-0 bg-black/50 sm:hidden"></div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center lg:justify-end">
        <div className="px-4 sm:px-8 lg:pr-20 text-center lg:text-right">
          <p className="text-lg sm:text-lg lg:text-[22px] uppercase text-white mb-6 lg:mb-8 leading-relaxed">
            Bringing Joy, To Artisans And Customers Alike.
          </p>

          <div className="flex flex-wrap pr-10 justify-center lg:justify-end gap-6 sm:gap-10 lg:gap-14">
            {impactStats.map((stat) => (
              <div className="text-center" key={stat.value}>
                <p className="text-lg sm:text-xl lg:text-2xl text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-[10px] sm:text-xs lg:text-[15px] uppercase text-white">
                  {stat.label1} <br /> {stat.label2}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
