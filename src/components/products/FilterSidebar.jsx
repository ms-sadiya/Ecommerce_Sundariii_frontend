import React, { useEffect, useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";

const FilterSidebar = () => {
  const { collection } = useParams(); // 👈 from navbar route
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    material: "",
    occassion: "",
    color: "",
    size: "",
    sort: "",
    minPrice: 0,
    maxPrice: 1000,
  });

  // ✅ Filter Options
  const materials = [
    "Alloy",
    "Oxidized",
    "Pearl",
    "Beads",
    "Gold Plated",
    "Silver Plated",
  ];

  const occassions = [
    "Daily Wear",
    "Party Wear",
    "Wedding",
    "Festive",
    "Office Wear",
  ];

  const colors = [
    { name: "Gold", value: "#D4AF37" },
    { name: "Silver", value: "#C0C0C0" },
    { name: "Black", value: "#000000" },
    { name: "Pink", value: "#FFC0CB" },
    { name: "White", value: "#FFFFFF" },
    {
      name: "Multicolor",
      value: "linear-gradient(45deg, red, yellow, green, blue)",
    },
  ];

  const sizes = ["Free Size", "Small", "Medium", "Large", "Adjustable"];

  const sortOptions = [
    { label: "New Arrivals", value: "new" },
    { label: "Price: Low to High", value: "price_asc" },
    { label: "Price: High to Low", value: "price_desc" },
    { label: "Popularity", value: "popular" },
  ];

  // ✅ Sync URL → State
  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilters({
      material: params.material || "",
      occassion: params.occassion || "",
      color: params.color || "",
      size: params.size || "",
      sort: params.sort || "",
      minPrice: Number(params.minPrice) || 0,
      maxPrice: Number(params.maxPrice) || 1000,
    });
  }, [searchParams]);

  // ✅ Update query params
  const updateFilter = (key, value) => {
    setSearchParams((prev) => {
      if (value) {
        prev.set(key, value);
      } else {
        prev.delete(key);
      }
      return prev;
    });
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <button
          onClick={() => setSearchParams({})}
          className="text-sm text-gray-500 hover:underline"
        >
          Clear All
        </button>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Price Range</h3>

        <div className="flex gap-2">
          <input
            type="number"
            value={filters.minPrice}
            className="w-full border rounded px-2 py-1 text-sm"
            placeholder="Min"
            onChange={(e) => updateFilter("minPrice", e.target.value)}
          />
          <input
            type="number"
            value={filters.maxPrice}
            className="w-full border rounded px-2 py-1 text-sm"
            placeholder="Max"
            onChange={(e) => updateFilter("maxPrice", e.target.value)}
          />
        </div>
      </div>

      {/* Color */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Color</h3>

        <div className="flex flex-wrap gap-2">
          {colors.map((c) => (
            <button
              key={c.name}
              title={c.name}
              onClick={() => updateFilter("color", c.name)}
              className={`h-8 w-8 rounded-full border-2 transition
            ${
              filters.color === c.name
                ? "border-black scale-105"
                : "border-gray-300"
            }
          `}
              style={{
                background: c.value,
              }}
            />
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Size</h3>

        <div className="flex flex-wrap gap-2">
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => updateFilter("size", s)}
              className={`px-3 py-1 text-sm rounded-full border transition
            ${
              filters.size === s
                ? "bg-black text-white border-black"
                : "border-gray-300 hover:border-black"
            }
          `}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Material</h3>

        {materials.map((m) => (
          <label key={m} className="flex items-center gap-2 text-sm mb-2">
            <input
              type="checkbox"
              checked={filters.material === m}
              onChange={() => updateFilter("material", m)}
            />
            {m}
          </label>
        ))}
      </div>

      {/* Occasion */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Occasion</h3>

        {occassions.map((o) => (
          <label key={o} className="flex items-center gap-2 text-sm mb-2">
            <input
              type="checkbox"
              checked={filters.occassion === o}
              onChange={() => updateFilter("occassion", o)}
            />
            {o}
          </label>
        ))}
      </div>

      {/* Sort */}
      <div>
        <h3 className="font-medium mb-3">Sort By</h3>

        {sortOptions.map((s) => (
          <label key={s.value} className="flex items-center gap-2 text-sm mb-2">
            <input
              type="radio"
              name="sort"
              checked={filters.sort === s.value}
              onChange={() => updateFilter("sort", s.value)}
            />
            {s.label}
          </label>
        ))}
      </div>
      </div>
  );
};

export default FilterSidebar;
