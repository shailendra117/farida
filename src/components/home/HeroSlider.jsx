import { useState, useEffect, useRef } from "react";

import mobileSehra from "../../assets/images/mobile-sehra-banner.jpg";
import sehraBanner from "../../assets/images/sehra-banner.png";

import mobileRoza from "../../assets/images/Roza-mobile-banner.jpg";
import rozaBanner from "../../assets/images/Roza-banner.jpg";

import mobileBestSeller from "../../assets/images/mobile-bestseller.jpg";
import bestSellerBanner from "../../assets/images/homepage_banner1.jpg";

import mobileBanner4 from "../../assets/images/mobile-homepage-banner-img4.jpg";
import banner4 from "../../assets/images/homepage_banner-img4.jpg";

function HeroSlider() {
  const slides = [
    {
      mobile: mobileSehra,
      desktop: sehraBanner,
    },
    {
      mobile: mobileRoza,
      desktop: rozaBanner,
    },
    {
      mobile: mobileBestSeller,
      desktop: bestSellerBanner,
    },
    {
      mobile: mobileBanner4,
      desktop: banner4,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const startX = useRef(0);
  const endX = useRef(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = startX.current - endX.current;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    startX.current = 0;
    endX.current = 0;
  };

  return (
    <section className="w-full mt-20">
      <div className="relative overflow-hidden py-8 mt-8">

        {/* Slider */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full flex justify-center"
            >
              <div className="w-[96%] overflow-hidden rounded-2xl">

                {/* Mobile Image */}
                <img
                  src={slide.mobile}
                  alt={`Slide ${index + 1}`}
                  className="block sm:hidden w-full h-auto rounded-2xl"
                />

                {/* Desktop Image */}
                <img
                  src={slide.desktop}
                  alt={`Slide ${index + 1}`}
                  className="hidden sm:block w-full h-auto rounded-2xl"
                />

              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-lg items-center justify-center z-10"
        >
          ❮
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-lg items-center justify-center z-10"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default HeroSlider;