import React from 'react';
import Image from 'next/image';

const UniqueFeature = () => {
  return (
    <div className="w-full h-[400px] flex justify-center mt-4 mb-2">
      <div className="bg-purple-100  h-full sm:w-full md:w-[80%] flex justify-between">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative mt-6 md:mt-0">
          <div className="rounded-full bg-pink-200 w-48 h-48 md:w-72 md:h-72 absolute"></div>
          <Image
            src={"/uniquefeature/stylishSofa.png"}
            width={250}
            height={200}
            alt="sofa"
            className="relative z-10 ml-20"
          />
        </div>

        {/* Right Section: Text and Button */}
        <div className="ml-8 mt-14 mb-20 text-blue-950 w-full md:w-1/2">
          <h1 className="text-2xl font-bold ml-10 mb-[30px]">
            Unique Features Of Latest & <br /> Trending Products
          </h1>
          <ul className="mb-6">
            <li>All frames constructed with hardwood solids and laminates</li>
            <li>
              Reinforced with double wood dowels, glue, screw nails, corner
              blocks, and machine nails
            </li>
            <li>Arms, backs, and seats are structurally reinforced</li>
          </ul>
          <button className="bg-[#FB2E86] font-bold px-6 py-2 rounded ml-10 mb-2">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default UniqueFeature;
