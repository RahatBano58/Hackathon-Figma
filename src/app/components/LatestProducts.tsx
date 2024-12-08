import React from "react";
import Image from "next/image"; // Add this import statement

const LatestProducts = () => {
  const categories = ["New Arrival", "Best Seller", "Featured", "Special Offer"];
  const products = [
    {
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: 65.0,
      image: "/products/chair1.png",
    },
    {
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: 65.0,
      image: "/products/chair2.png",
      sale: true, // Toggle for showing the sale badge
    },
    {
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: 65.0,
      image: "/products/chair3.png",
    },
    {
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: 65.0,
      image: "/products/chair4.png",
    },
    {
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: 65.0,
      image: "/products/chair5.png",
    },
    {
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: 65.0,
      image: "/products/chair6.png",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 text-center mb-6">
          Latest Products
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center space-x-4 mb-10">
          {categories.map((category, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition"
            >
              {category}
            </div>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 text-center border border-gray-200 relative group"
            >
              {/* Product Image */}
              <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={150} // Add width
                  height={150} // Add height
                  className="object-contain"
                />
              </div>

              {/* Product Info */}
              <h3 className="text-gray-800 font-semibold mb-2">{product.name}</h3>
              <div className="text-gray-500">
                <span className="text-red-500 line-through mr-2">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span>${product.price.toFixed(2)}</span>
              </div>

              {/* Sale Badge */}
              {product.sale && (
                <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs px-2 py-1 rounded">
                  Sale
                </div>
              )}

              {/* Hover Icons */}
              <div className="flex justify-center space-x-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-gray-100 p-2 rounded-full hover:bg-pink-100">
                  ❤
                </button>
                <button className="bg-gray-100 p-2 rounded-full hover:bg-pink-100">
                  🛒
                </button>
                <button className="bg-gray-100 p-2 rounded-full hover:bg-pink-100">
                  🔍
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
