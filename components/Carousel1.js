'use client';

import React from 'react';

const MyCarousel = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden mb-20 mt-20">
      {/* Responsive Background Image */}
      <picture>
        {/* Desktop (1920x1080 crop) */}
        <source
          media="(min-width: 768px)"
          srcSet="https://res.cloudinary.com/da8o9eb9e/image/upload/v1750000037/DIS5061_1x1tif-scaled_c8tea4.webp"
        />
        {/* Mobile (1080x1920 crop) */}
        <img
          src="https://res.cloudinary.com/da8o9eb9e/image/upload/v1750000037/DIS5061_1x1tif-scaled_c8tea4.webp"
          alt="Sunny-Day Sale Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </picture>

      {/* Overlay Content - CENTERED */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-black  ">
        <h1 className="text-5xl font-bold uppercase animate-slideInLeft text-black myBlack"> 
            Crafting 3D Realities
        </h1>
        <p className="text-[14px] mt-4 animate-slideInLeft delay-200 text-black max-w-md">
          Our mission is to make realistic, ready-to-use assets that bring your projects to life!
        </p>
        <a
          href="/shop"
          className="mt-10 px-12 py-4 bg-black font-semibold transition-all duration-300 transform hover:scale-105 text-white"
        >
          Shop Now!
        </a>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default MyCarousel;
