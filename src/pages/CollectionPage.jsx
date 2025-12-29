import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/products/FilterSidebar";
import SortOptions from "../components/products/SortOptions";
import ProductGrid from "../components/products/ProductGrid";
import { useSearchParams, useParams } from "react-router-dom";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchParams] = useSearchParams();

  const filtersFromURL = {
    materials: searchParams.getAll("material"),
    colors: searchParams.getAll("color"),
    sizes: searchParams.getAll("size"),
    occassions: searchParams.getAll("occassion"),
    minPrice: Number(searchParams.get("minPrice")) || 0,
    maxPrice: Number(searchParams.get("maxPrice")) || 1000,
    sort: searchParams.get("sort") || "",
  };

  const filteredProducts = products.filter((product) => {
    const { materials, colors, sizes, minPrice, maxPrice } = filtersFromURL;

    // Price filter
    if (product.price < minPrice || product.price > maxPrice) return false;

    // Multi-select filters
    if (materials.length && !materials.includes(product.material)) return false;
    if (colors.length && !colors.includes(product.color)) return false;
    if (sizes.length && !sizes.includes(product.size)) return false;

    return true;
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
   const fetchedProducts = [
  {
    id: "SL-SCR-002",
    name: "Rose Satin Scrunchie",
    collection: "Scrunchies",
    price: 199,
    material: "Pearl",
    color: "Pink",
    size: "Free Size",
    images: [{ url: "https://picsum.photos/400/400?random=1" }],
  },
  {
    id: "SL-SCR-003",
    name: "Ivory Pearl Scrunchie",
    collection: "Scrunchies",
    price: 229,
    material: "Pearl",
    color: "White",
    size: "Free Size",
    images: [{ url: "https://picsum.photos/400/400?random=2" }],
  },
  {
    id: "SL-CLP-004",
    name: "Floral Claw Clip",
    collection: "Claw Clips",
    price: 299,
    material: "Alloy",
    color: "Multicolor",
    size: "Medium",
    images: [{ url: "https://picsum.photos/400/400?random=3" }],
  },
  {
    id: "SL-BOW-005",
    name: "Velvet Hair Bow",
    collection: "Bow Accessories",
    price: 179,
    material: "Beads",
    color: "Black",
    size: "Small",
    images: [{ url: "https://picsum.photos/400/400?random=4" }],
  },
  {
    id: "SL-PIN-006",
    name: "Golden Hair Pins Set",
    collection: "Hair Pins",
    price: 159,
    material: "Gold Plated",
    color: "Gold",
    size: "Free Size",
    images: [{ url: "https://picsum.photos/400/400?random=5" }],
  },
  {
    id: "SL-EAR-007",
    name: "Minimal Pearl Earrings",
    collection: "Earrings",
    price: 349,
    material: "Pearl",
    color: "White",
    size: "Small",
    images: [{ url: "https://picsum.photos/400/400?random=6" }],
  },
  {
    id: "SL-BRC-008",
    name: "Delicate Silver Bracelet",
    collection: "Bracelets",
    price: 399,
    material: "Silver Plated",
    color: "Silver",
    size: "Medium",
    images: [{ url: "https://picsum.photos/400/400?random=7" }],
  },
  {
    id: "SL-ANK-009",
    name: "Oxidized Charm Anklet",
    collection: "Anklets",
    price: 279,
    material: "Oxidized",
    color: "Black",
    size: "Adjustable",
    images: [{ url: "https://picsum.photos/400/400?random=8" }],
  },
  {
    id: "SL-RNG-010",
    name: "Adjustable Gold Ring",
    collection: "Rings",
    price: 259,
    material: "Gold Plated",
    color: "Gold",
    size: "Adjustable",
    images: [{ url: "https://picsum.photos/400/400?random=9" }],
  },
  {
    id: "SL-NCK-011",
    name: "Festive Beaded Necklace",
    collection: "Necklaces",
    price: 499,
    material: "Beads",
    color: "Multicolor",
    size: "Large",
    images: [{ url: "https://picsum.photos/400/400?random=10" }],
  },
];


      setProducts(fetchedProducts);
    }, 1000);
  }, []);
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile filter button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" />
      </button>

      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>
      <div className="grow p-4 ">
        <h2 className="text-2xl uppercase mb-4 ">All Collection</h2>
        {/* Sort Options */}
        <SortOptions />

        {/* ProductGrid */}
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
};

export default CollectionPage;
