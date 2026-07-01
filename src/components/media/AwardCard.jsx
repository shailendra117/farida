import { useEffect } from "react";
const AwardCard = ({ award }) => {

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid lg:grid-cols-3 gap-12 items-center mb-12">

      <div className="lg:col-span-2">
        {award.type === "video" ? (
          <iframe
            className="w-full h-[350px]"
            src={award.media}
            title="Award Video"
            allowFullScreen
          />
        ) : (
          <img
            src={award.media}
            alt="Certificate"
            className="w-full"
          />
        )}
      </div>

      <div>
        <img
          src={award.logo}
          alt=""
          className="w-36 mx-auto mb-6  "
        />

        <p className="text-gray-600 text-xs leading-7">
          {award.description}
        </p>

        <p className="mt-2 text-xs text-gray-500">
          {award.date}
        </p>
      </div>

    </div>
  );
};

export default AwardCard;