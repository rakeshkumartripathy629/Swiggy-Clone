import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { RestaurantCard } from './RestaurantCard';

export function TopRestaurantSlider({ restaurants }) {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Top Restaurants</h2>
      <div className="relative max-w-5xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 3000, // 4 seconds
            disableOnInteraction: false, // Continue autoplay even after user interaction
          }}
          spaceBetween={15}
          slidesPerView={3}
          centeredSlides={true}
          loop={true} // Ensures infinite sliding
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="restaurant-slider"
        >
          {restaurants.map((restaurant) => (
            <SwiperSlide key={restaurant.id} className="flex justify-center">
              <div className="max-w-[240px]">
                <RestaurantCard {...restaurant} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Optional Custom Arrow Styling */}
        <style jsx>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: #ff5722;
            font-size: 1.5rem;
          }
        `}</style>
      </div>
    </div>
  );
}
