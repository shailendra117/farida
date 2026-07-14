import { useState, useEffect } from "react";

function AnnouncementBar() {
  const announcements = [
    "New Launches Every Thursday, 11 AM IST",
    <>
      We're coming to your city. Shop offline |{" "}
      <a href="/exhibitions" className="underline">
        View Exhibitions
      </a>
    </>,
  ];

  const [current, setCurrent] = useState(0);

  const changeAnnouncement = (direction) => {
    setCurrent((prev) => {
      return (prev + direction + announcements.length) % announcements.length;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeAnnouncement(1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" hidden lg:flex fixed top-0 left-0 right-0 z-50 bg-[#E8C167] text-black flex items-center justify-between px-3 sm:px-5 lg:px-8  ">
      {/* Left Arrow */}
      <button
        onClick={() => changeAnnouncement(-1)}
        className="text-lg sm:text-xl md:text-2xl opacity-70 hover:opacity-100 transition px-2"
      >
        &#8249;
      </button>

      {/* Announcement */}
      <div className="flex-1 overflow-hidden mx-2 sm:mx-4">
        <div className="transition-all duration-500">
          <p className="text-center text-black text-xs sm:text-sm md:text-base leading-5 sm:leading-6 break-words">
            {announcements[current]}
          </p>
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => changeAnnouncement(1)}
        className="text-xl sm:text-2xl md:text-3xl opacity-70 hover:opacity-100 transition p-2"
      >
        &#8250;
      </button>
    </div>
  );
}

export default AnnouncementBar;