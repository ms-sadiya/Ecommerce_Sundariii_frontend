import React from "react";
import { Link } from "react-router-dom";

const featuredCollections = [
  {
    id: 1,
    title: "Everyday Essentials",
    subtitle: "Comfort meets style",
    image: "https://picsum.photos/600/600?random=21",
    link: "/collections/everyday",
  },
  {
    id: 2,
    title: "Festive & Party Edit",
    subtitle: "Shine in every moment",
    image: "https://picsum.photos/600/600?random=22",
    link: "/collections/festive",
  },
  {
    id: 3,
    title: "Minimal & Elegant",
    subtitle: "Soft. Simple. Sundari.",
    image: "https://picsum.photos/600/600?random=23",
    link: "/collections/minimal",
  },
  {
    id: 4,
    title: "Hair Goals",
    subtitle: "Style your hair, your way",
    image: "https://picsum.photos/600/600?random=24",
    link: "/collections/hair-goals",
  },
];

const FeaturedCollections = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Featured Collections
          </h2>
          <p className="text-gray-600">
            Curated styles to match every mood
          </p>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCollections.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              className="group relative overflow-hidden rounded-3xl shadow-md"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
                <h3 className="text-xl font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-sm mb-3 opacity-90">
                  {item.subtitle}
                </p>
                <span className="border border-white px-4 py-1 text-sm rounded-full">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
