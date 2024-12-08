import React from "react";
import Image from "next/image"; // Import Image component from Next.js

const ShopexOffer: React.FC = () => {
  const offers = [
    { id: 1, title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/offer1.png" },
    { id: 2, title: "Free Shipping", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/offer2.png" },
    { id: 3, title: "Exclusive Discounts", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/offer3.png" },
    { id: 4, title: "Easy Returns", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/offer4.png" },
  ];

  return (
    <div className="py-10 px-5 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-5">What Shopex Offer!</h2>
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {offers.map((offer) => (
          <div key={offer.id} className="text-center p-4">
            {/* Image with responsive width and height */}
            <Image
              src={offer.image}
              alt={offer.title}
              className="mx-auto mb-4"
              width={64} // Default width
              height={64} // Default height
              sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px" // Make image smaller on mobile
            />
            <h3 className="text-lg font-semibold">{offer.title}</h3>
            <p className="text-gray-500 text-sm md:text-base">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopexOffer;
