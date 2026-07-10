import { MapPin } from "lucide-react";

const ExhibitionCard = ({ item, onNotify }) => {
  return (
    <div className="bg-white text-gray-800 p-6 text-center">
      <h2 className="text-md font-medium mb-8">
        {item.city}
      </h2>

      <div className="flex justify-center items-center gap-6">

        {/* Start Date */}
        <div className=" rounded-md overflow-hidden w-15">
          <div className="bg-gray-200 py-1 text-xs">
            {item.month}
          </div>

          <div className="py-1 text-xs">
            {item.startDay}
          </div>

          <div className="text-lg text-gray-700 font-semibold pb-2">
            {item.startDate}
          </div>
        </div>

        <span>to</span>

        {/* End Date */}

        <div className=" rounded-md overflow-hidden w-15">
          <div className="bg-gray-200 py-1 text-xs">
            {item.month}
          </div>

          <div className="py-1 text-xs">
            {item.endDay}
          </div>

          <div className="text-lg text-gray-700 font-semibold pb-2">
            {item.endDate}
          </div>
        </div>

      </div>

      <p className="mt-3 text-xs">
        {item.time}
      </p>

      <div className="inline-block text-sm bg-gray-100 px-5 py-2 mt-3">
        {item.venue}
      </div>

      <p className="mt-8 text-sm text-gray-700 max-w-3xl mx-auto">
        {item.address}
      </p>

      <div className="flex justify-center gap-5 mt-5">

        <button onClick={() => window.open(item.mapLink, "_blank")} className="flex items-center text-sm gap-2 bg-[#7d1d28] hover:bg-[#6b1722] text-white px-4 py-2 md:px-6 md:py-3  rounded-full cursor-pointer" target="_blank">
          <MapPin size={12} />
          Directions
        </button>

        <button onClick={() => onNotify(item.city)} className="border text-sm border-[#7d1d28] text-[#7d1d28] px-4 py-2  md:px-6 md:py-3  rounded-full cursor-pointer">
          Notify Me
        </button>

      </div>

    </div>
  );
};

export default ExhibitionCard;