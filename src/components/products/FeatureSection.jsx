import React from "react";
import { FaHeart, FaLeaf, FaGem, FaStar } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaHeart />,
    title: "Gentle on Hair",
    description: "Designed to avoid pulling, breakage, and discomfort.",
  },
  {
    id: 2,
    icon: <FaGem />,
    title: "Premium Quality",
    description: "Crafted with soft fabrics and durable materials.",
  },
  {
    id: 3,
    icon: <FaStar />,
    title: "Trendy & Timeless",
    description: "Styles that look good today and tomorrow.",
  },
  {
    id: 4,
    icon: <FaLeaf />,
    title: "Affordable Luxury",
    description: "Premium look without the premium price tag.",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0 bg-gray-50">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Why Sundari?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Thoughtfully designed accessories that blend comfort, quality,
            and style — just for you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-black text-white text-xl">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
