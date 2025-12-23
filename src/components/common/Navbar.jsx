// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { HiChevronDown, HiOutlineUser } from "react-icons/hi";
import SearchBar from "./SearchBar";
import CartDrawer from "../layout/cartDrawer";

const collections = [
  "Scrunchies",
  "Claw Clips",
  "Headbands",
  "Hair Pins",
  "Bow Accessories",
  "Earrings",
  "Necklaces",
  "Bracelets",
  "Rings",
  "Anklets",
];

export default function Navbar() {
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const shopRef = useRef(null);

    const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  }

  // close dropdown when clicking outside
  useEffect(() => {
    const onDoc = (e) => {
      if (shopRef.current && !shopRef.current.contains(e.target))
        setShopOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <header className="w-full z-40 bg-(--content-bg) text-(--text-primary) border-b border-gray-300">
      <nav className="container mx-auto flex items-center justify-between py-3 px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="inline-flex items-center shrink-0">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-16 md:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {/* Shop dropdown */}
          <div
            ref={shopRef}
            className="relative"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <button
              onClick={() => setShopOpen((s) => !s)}
              aria-expanded={shopOpen}
              className="inline-flex items-center gap-1"
            >
              Shop <HiChevronDown className="h-4 w-4" />
            </button>

            <div
              className={`absolute left-0 mt-0 z-10 w-56 rounded-md shadow ring-1 ring-black/10 border bg-(--content-bg) transition ${
                shopOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <div className="py-1">
                {collections.map((c, i) => (
                  <Link
                    key={c}
                    to={`/shop/${c.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 text-sm hover:bg-(--navbar) hover:text-(--content-bg)"
                    onClick={() => setShopOpen(false)}
                  >
                    {c}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/new" className="hover:underline">
            New Arrivals
          </Link>
          <Link to="/best-sellers" className="hover:underline">
            Best Sellers
          </Link>
          <Link to="/sale" className="text-(--accent)">
            Sale
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        {/* Utilities */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="overflow-hidden">
            {" "}
            <SearchBar />
          </div>

          {/* Profile */}
          <Link
            to="/login"
            aria-label="profile"
            className="flex items-center justify-center p-2 rounded-md hover:bg-(--navbar)"
          >
            <HiOutlineUser className="h-6 w-6 text-(--text-primary)" />
          </Link>

          {/* Cart */}
          <Link
            to="#"
            aria-label="cart"
            className="relative flex items-center justify-center p-2 rounded-md hover:bg-(--navbar)"
            onClick={toggleCartDrawer}
          >
            <FiShoppingCart className="h-6 w-6 text-(--text-primary)" />

            {/* Badge */}
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center shadow-sm">
              4
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-(--navbar)"
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="menu"
          >
            {mobileOpen ? (
              <FiX className="h-6 w-6 text-(--text-primary)" />
            ) : (
              <FiMenu className="h-6 w-6 text-(--text-primary)" />
            )}
          </button>
        </div>
      </nav>

     <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>

      {/* Mobile menu */}
      <div
        className={`md:hidden border-t border-(--navbar) overflow-hidden transition-[max-height] duration-300 ${
          mobileOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 space-y-2 bg-(--content-bg)">
          {/* mobile Shop expandable */}
          <MobileShop onLinkClick={() => setMobileOpen(false)} />

          <Link
            to="/new"
            className="block px-2 py-2 rounded hover:bg-(--navbar)"
          >
            New Arrivals
          </Link>
          <Link
            to="/best-sellers"
            className="block px-2 py-2 rounded hover:bg-(--navbar)"
          >
            Best Sellers
          </Link>
          <Link
            to="/sale"
            className="block px-2 py-2 rounded text-(--accent) hover:bg-(--navbar)"
          >
            Sale
          </Link>
          <Link
            to="/contact"
            className="block px-2 py-2 rounded hover:bg-(--navbar)"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

/* Small mobile Shop subcomponent */
function MobileShop({ onLinkClick }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full flex items-center justify-between px-2 py-2 rounded hover:bg-(--navbar)"
      >
        <span>Shop</span>
        <HiChevronDown
          className={`h-4 w-4 transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`${
          open ? "block" : "hidden"
        } mt-2 pl-2 border-l border-(--muted)`}
      >
        {collections.map((c) => (
          <Link
            key={c}
            to={`/shop/${c.toLowerCase().replace(/\s+/g, "-")}`}
            className="block px-2 py-2 text-sm rounded hover:bg-(--navbar)"
            onClick={onLinkClick}
          >
            {c}
          </Link>
        ))}
      </div>
    </div>
  );
}
