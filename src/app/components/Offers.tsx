import React from 'react';
import Image from 'next/image';

const Offers = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="w-full h-[300px] sm:h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg.png')" }} // Ensure the correct path
      >
        {/* Content on top of the background */}
        <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-30">
          <div className="text-center text-blue-900 px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Get Latest Update By Subscribe Our Newsletter
            </h2>

            {/* Shop Now Button */}
            <button className="bg-pink-500 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md hover:bg-pink-600">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* White Space for two lines */}
      <div className="my-8 sm:my-12"></div>

      {/* Brand Image */}
      <div className="flex justify-center px-4 mt-4">
        <Image
          src="/images/brand.png"
          alt="Brand"
          width={800}  // Specify width
          height={400} // Adjusted for responsiveness
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-[800px] h-auto"
        />
      </div>
    </div>
  );
};

export default Offers;
