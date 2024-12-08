import Image from "next/image"; // Import the Image component from Next.js

export default function DiscountSection() {
  return (
    <div className="flex items-center justify-center p-6 lg:p-10 h-auto md:h-[597px] w-full lg:w-[1214px] mx-auto">
      <div className="relative bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center w-full max-w-[1214px]">
        {/* Left Section */}
        <div className="p-6 md:p-8 w-full md:w-1/2">
          <div className="text-sm text-gray-600 space-x-2 md:space-x-3 mb-4">
            <span className="cursor-pointer hover:underline">Wood Chair</span>
            <span className="cursor-pointer hover:underline">Plastic Chair</span>
            <span className="cursor-pointer hover:underline">Sofa Collection</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            20% Discount On All Products
          </h2>
          <p className="text-gray-700 mb-4 md:mb-6">Eams Sofa Compact</p>
          <ul className="space-y-2 mb-4 md:mb-6 text-gray-700">
            <li className="flex items-center">
              <span className="mr-2 text-green-600">✔</span> Material exposed like metals
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">✔</span> Simple neutral colors
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">✔</span> Clear lines and geometric figures
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">✔</span> Material opposed like metals
            </li>
          </ul>
          <button className="bg-pink-500 text-white px-4 py-2 md:px-6 md:py-2 rounded-md hover:bg-pink-600">
            Shop Now
          </button>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative mt-6 md:mt-0">
          <div className="rounded-full bg-pink-100 w-48 h-48 md:w-72 md:h-72 absolute"></div>
          <Image
            src="/discountitem/sofa.png" // Replace with your actual image path
            alt="Eams Sofa Compact"
            className="relative w-48 h-48 md:w-72 md:h-72 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
