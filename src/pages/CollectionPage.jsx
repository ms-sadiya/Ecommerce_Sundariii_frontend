import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/products/FilterSidebar";
import SortOptions from "../components/products/SortOptions";
import ProductGrid from "../components/products/ProductGrid";


const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  const handleClickOutside = (e) => {
    if(sidebarRef.current && !sidebarRef.current.contains(e.target)){
      setIsSidebarOpen(false);
    }
  }

  useEffect(() => {
    // Add event listeneres for clicks
    document.addEventListener("mousedown", handleClickOutside)
    // Remove event listener on mousedown
    document.removeEventListener("mousedown", handleClickOutside)
  })
  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          id: "SL-SCR-002",
          name: "Rose Satin Scrunchie",
          collection: "Scrunchies",
          price: 199,
          images: [
            {
              url: "https://picsum.photos/400/400?random=1",
              alt: "Rose satin scrunchie",
            },
          ],
        },
        {
          id: "SL-SCR-003",
          name: "Ivory Pearl Scrunchie",
          collection: "Scrunchies",
          price: 229,
          images: [
            {
              url: "https://picsum.photos/400/400?random=2",
              alt: "Ivory pearl scrunchie",
            },
          ],
        },
        {
          id: "SL-CLP-004",
          name: "Floral Claw Clip",
          collection: "Claw Clips",
          price: 299,
          images: [
            {
              url: "https://picsum.photos/400/400?random=3",
              alt: "Floral claw clip",
            },
          ],
        },
        {
          id: "SL-BOW-005",
          name: "Velvet Hair Bow",
          collection: "Bow Accessories",
          price: 179,
          images: [
            {
              url: "https://picsum.photos/400/400?random=4",
              alt: "Velvet hair bow",
            },
          ],
        },
        {
          id: "SL-PIN-006",
          name: "Golden Hair Pins Set",
          collection: "Hair Pins",
          price: 159,
          images: [
            {
              url: "https://picsum.photos/400/400?random=5",
              alt: "Golden hair pins set",
            },
          ],
        },
        {
          id: "SL-EAR-007",
          name: "Minimal Pearl Earrings",
          collection: "Earrings",
          price: 349,
          images: [
            {
              url: "https://picsum.photos/400/400?random=6",
              alt: "Minimal pearl earrings",
            },
          ],
        },
        {
          id: "SL-BRC-008",
          name: "Delicate Gold Bracelet",
          collection: "Bracelets",
          price: 399,
          images: [
            {
              url: "https://picsum.photos/400/400?random=7",
              alt: "Delicate gold bracelet",
            },
          ],
        },
        {
          id: "SL-ANK-009",
          name: "Silver Charm Anklet",
          collection: "Anklets",
          price: 279,
          images: [
            {
              url: "https://picsum.photos/400/400?random=8",
              alt: "Silver charm anklet",
            },
          ],
        },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  });
  return <div className="flex flex-col lg:flex-row">
    {/* Mobile filter button */}
    <button onClick={toggleSidebar} className="lg:hidden border p-2 flex justify-center items-center">
      <FaFilter className="mr-2"/>
    </button>

    {/* Filter Sidebar */}
    <div ref={sidebarRef} className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
      <FilterSidebar /> 
    </div>
    <div className="grow p-4 ">
      <h2 className="text-2xl uppercase mb-4 ">All Collection</h2>
      {/* Sort Options */}
      <SortOptions />

      {/* ProductGrid */}
      <ProductGrid products={products}/> 
    </div>
  </div>;
};

export default CollectionPage;
