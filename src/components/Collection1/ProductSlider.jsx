import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import SliderProductCard from "./SliderProductCard";

const ProductSlider = ({ title, products }) => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <h2 className="text-3xl font-semibold mb-8">{title}</h2>

      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={6}
        grabCursor={true}
  simulateTouch={true}
  allowTouchMove={true}
  touchRatio={1}
        breakpoints={{
          320: { slidesPerView: 1 ,spaceBetween:16},
          640: { slidesPerView: 2 ,spaceBetween:16},
          768: { slidesPerView: 3 ,spaceBetween:20},
          1024: { slidesPerView: 4 ,spaceBetween:20},
          1284: { slidesPerView: 5 ,spaceBetween:20},
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
   <SliderProductCard product={product} />
</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;