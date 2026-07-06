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

  // Create clones for seamless loop: [last, ...slides, first]
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const [index, setIndex] = useState(1); // start at first real slide (extendedSlides[1])
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const startX = useRef(0);
  const endX = useRef(0);
  const sliderRef = useRef(null);
  const wrapperRef = useRef(null);

  const nextSlide = () => {
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIndex((prev) => prev - 1);
  };

  // Autoplay
  useEffect(() => {
    if (isPaused) return undefined;

    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Handle transition end to jump from clones to real slides without visible jump
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const onTransitionEnd = () => {
      // If we've moved to the cloned first (right-most) slide, jump to real first
      if (index === extendedSlides.length - 1) {
        setIsAnimating(false);
        setIndex(1);
      }

      // If we've moved to the cloned last (left-most) slide, jump to real last
      if (index === 0) {
        setIsAnimating(false);
        setIndex(slides.length);
      }
    };

    el.addEventListener("transitionend", onTransitionEnd);
    return () => el.removeEventListener("transitionend", onTransitionEnd);
  }, [index, extendedSlides.length, slides.length]);

  // Re-enable animation after a programmatic jump
  useEffect(() => {
    if (!isAnimating) {
      // Force reflow then enable animation again on next tick
      // eslint-disable-next-line no-unused-expressions
      sliderRef.current && sliderRef.current.offsetHeight;
      requestAnimationFrame(() => setIsAnimating(true));
    }
  }, [isAnimating]);

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
        <div
        ref={wrapperRef}
        className="relative overflow-hidden py-4 sm:py-8 mt-4 sm:mt-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        {/* Slider */}
        <div
          ref={sliderRef}
          className={`flex ${isAnimating ? 'transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]' : ''}`}
          style={{ transform: `translateX(-${index * (wrapperRef.current?.clientWidth || 0)}px)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {extendedSlides.map((slide, idx) => (
            <div
              key={idx}
              className="w-full flex-shrink-0 flex justify-center px-2 sm:px-4"
            >
              <div className="relative w-full overflow-hidden rounded-2xl shadow-sm sm:shadow-md">

                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />

                {/* Animated content wrapper */}
                <div
                  className={`w-full h-full transition-all duration-700 ease-out transform ${
                    idx === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  {/* Mobile Image */}
                  <img
                    src={slide.mobile}
                    alt={`Slide ${idx}`}
                    className="block sm:hidden w-full h-auto rounded-2xl"
                    onClick={(e) => e.stopPropagation()}
                  />

                  {/* Desktop Image */}
                  <img
                    src={slide.desktop}
                    alt={`Slide ${idx}`}
                    className="hidden sm:block w-full h-[550px] rounded-2xl"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="hidden sm:flex absolute left-10 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg items-center justify-center z-10 transition hover:scale-105"
        >
          ❮
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="hidden sm:flex absolute right-10 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg items-center justify-center z-10 transition hover:scale-105"
        >
          ❯
        </button>

        {/* Dots (map to real slides) */}
        <div className="absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10 rounded-full bg-black/10 px-2 py-1 sm:px-3 sm:py-2 backdrop-blur-sm">
          {slides.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setIndex(dotIndex + 1)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === dotIndex + 1 ? "bg-white scale-110" : "bg-white/50"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default HeroSlider;