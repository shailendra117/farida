import React from "react";

const MediaCard = ({ media }) => {
  return (
    <div className="flex  gap-4 items-start py-4 border-b border-gray-200">

      {/* Logo */}
      <div className="w-40 flex-shrink-0">
        <img
          src={media.image}
          alt={media.title}
          className="w-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">

        <h3 className="text-sm md:sm text-[#4a2d24] ">
          {media.title}
        </h3>

        <div className="flex gap-2">
          <p className="text-gray-500 text-xs ">
          {media.date} |
        </p>

        <a
          href={media.link}
          className=" text-gray-500 text-xs hover:underline"
        >
        Read More →
        </a>
        </div>

      </div>

    </div>
  );
};

export default MediaCard;