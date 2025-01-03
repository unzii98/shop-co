"use client";

import Image from "next/image";

const BrowseByStyle = () => {
  const categories = [
    { name: "Casual", image: "/Frame61.png" },
    { name: "Formal", image: "/Frame 62.png" },
    { name: "Gym", image: "/Frame63.png" },
    { name: "Party", image: "/Frame64.png" },
  ];

  return (
    <div className="p-4 sm:w-full md:w-[800px] bg-gray-100 rounded-xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">BROWSE BY DRESS STYLE</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-md group bg-white"
          >
            {/* Image Container */}
            <div className="relative w-full h-64 md:h-80 lg:h-72">
              {/* Optimized Image */}
              <Image
                src={category.image}
                alt={category.name}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold text-lg">{category.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseByStyle;
