"use client";
import Image from 'next/image'; // Import Image from next/image
import React, { useState } from 'react';

const TopCategory = () => {
  // State to track which circle is hovered
  const [hovered, setHovered] = useState<number | null>(null);

  // Array to hold the images for each circle
  const images = [
    '/topcategories/image-20.png',
    '/topcategories/image-1168.png',
    '/topcategories/image-1171.png',
    '/topcategories/image-20.png',
  ];

  return (
    <div className="text-center py-8 sm:py-12 lg:py-16">
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 lg:mb-12 text-blue-900">Top Categories</h1>

      {/* Category Circles */}
      <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16">
        {/* Ensures proper spacing and wraps on smaller screens */}
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Circle with Image */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden mb-4 sm:mb-6 md:mb-8">
              <Image
                src={image} // Assign each image from the array
                alt={`Category ${index + 1}`}
                className="w-full h-full object-cover"
                width={224} // Explicit width (same as w-56)
                height={224} // Explicit height (same as h-56)
              />
            </div>

            {/* Product Info */}
            <div className="text-center">
              <p className="text-lg sm:text-xl font-bold text-dark-blue">Mini LCW Chair</p>
              <p className="text-sm sm:text-lg text-dark-blue">$56.00</p>
            </div>

            {/* View Shop Button */}
            {hovered === index && (
              <button className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-md">
                View Shop
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategory;
