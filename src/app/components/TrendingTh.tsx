import Image from "next/image";
import Link from "next/link";

export default function Th() {
  return (
    <div className="m-4 py-10">
      {/* Main Grid Layout with responsive breakpoints */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* First Column */}
        <div className="relative bg-[#FFF6FB] p-4 flex flex-col justify-between h-[180px] sm:h-[250px] lg:h-[300px]">
          <div
            className="absolute inset-0 bg-no-repeat bg-bottom w-full h-full"
            style={{ backgroundImage: "url('/trendingTh/image1.png')" }}
          >
            {/* Image as background */}
          </div>
          <div className="relative z-10 text-left p-4">
            <h2 className="text-[#151875] text-base sm:text-lg lg:text-xl font-semibold mb-2">
              23% off in all products
            </h2>
            <Link href="/" className="text-pink-500 hover:underline">Shop Now</Link>
          </div>
        </div>

        {/* Second Column */}
        <div className="relative bg-[#EEEFFB] p-4 flex flex-col justify-between h-[180px] sm:h-[250px] lg:h-[300px]">
          <div
            className="absolute inset-0 bg-no-repeat bg-bottom w-full h-full"
            style={{ backgroundImage: "url('/trendingTh/image2.png')" }}
          >
            {/* Image as background */}
          </div>
          <div className="relative z-10 text-left p-4">
            <h2 className="text-[#151875] text-base sm:text-lg lg:text-xl font-semibold mb-2">
              23% off in all products
            </h2>
            <Link href="/" className="text-pink-500 hover:underline">View Collection</Link>
          </div>
        </div>

        {/* Third Column (Contains 3 rows with 2 columns each) */}
        <div className="grid grid-rows-3 gap-6">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="relative w-full h-16 sm:h-20 lg:h-24 bg-gray-300 rounded-lg overflow-hidden">
              <Image
                src="/trendingTh/image3.png"
                alt="Image 3"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-[#151875] text-sm sm:text-base lg:text-lg font-semibold mb-2">
                Executive Seat Chair
              </h3>
              <p className="text-[#151875] text-xs sm:text-sm lg:text-base line-through">$32.00</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="relative w-full h-16 sm:h-20 lg:h-24 bg-gray-300 rounded-lg overflow-hidden">
              <Image
                src="/trendingTh/image4.png"
                alt="Image 4"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-[#151875] text-sm sm:text-base lg:text-lg font-semibold mb-2">
                Executive Seat Chair
              </h3>
              <p className="text-[#151875] text-xs sm:text-sm lg:text-base line-through">$32.00</p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="relative w-full h-16 sm:h-20 lg:h-24 bg-gray-300 rounded-lg overflow-hidden">
              <Image
                src="/trendingTh/image5.png"
                alt="Image 5"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-[#151875] text-sm sm:text-base lg:text-lg font-semibold mb-2">
                Executive Seat Chair
              </h3>
              <p className="text-[#151875] text-xs sm:text-sm lg:text-base line-through">$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
