import React from 'react';
import Image from 'next/image';

const UniqueFeature = () => {
  return (
    <div className="w-full h-auto flex justify-center mt-4 mb-2">
      <div className="bg-purple-100 h-full w-full md:w-[90%] lg:w-[80%] flex flex-col md:flex-row justify-between items-center md:items-start py-8 px-4 md:py-0 md:px-0">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative mt-6 md:mt-0">
          <div className="rounded-full bg-pink-200 w-36 h-36 sm:w-48 sm:h-48 md:w-72 md:h-72 absolute"></div>
          <Image
            src="/uniquefeature/sofa2.png"
            width={250}
            height={200}
            alt="sofa"
            className="relative z-10 ml-0 md:ml-10 lg:ml-20"
          />
        </div>

        {/* Right Section: Text and Button */}
        <div className="text-blue-950 w-full md:w-1/2 flex flex-col justify-center items-start mt-8 md:mt-14 mb-8 md:mb-20">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 md:ml-10">
            Unique Features Of Latest & <br /> Trending Products
          </h1>
          <ul className="text-sm sm:text-base mb-6 md:ml-10 space-y-2">
            <li>All frames constructed with hardwood solids and laminates</li>
            <li>
              Reinforced with double wood dowels, glue, screw nails, corner blocks, and machine nails
            </li>
            <li>Arms, backs, and seats are structurally reinforced</li>
          </ul>
          <button className="bg-[#FB2E86] font-bold text-sm sm:text-base px-4 sm:px-6 py-2 rounded ml-0 md:ml-10">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default UniqueFeature;
