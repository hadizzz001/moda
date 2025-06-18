'use client';

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const MyCarousel = () => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('/api/category');
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1000}
        className="h-screen"
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <div className="relative overflow-hidden">
              <img
                src={cat.img?.[0] || '/placeholder.jpg'}
                alt={cat.name}
                className="w-full h-screen object-cover transition-transform duration-[4000ms] ease-in-out scale-110"
              />
              <div className="absolute inset-0 bg-black/25 z-10"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-20">
                <p className="text-[12px] font-bold uppercase animate-slideInLeft">
                  {cat.name}
                </p>
              
                <a
                  onClick={() => router.push(`/search?cat=${encodeURIComponent(cat.name)}`)}
                  style={{ padding: "1em" }}
                  className="mt-2 px-6 py-2 text-white font-semibold rounded-lg transition-all duration-300 transform"
                >
                  Shop Collection →
                </a>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MyCarousel;
