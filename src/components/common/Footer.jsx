import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiChevronDown } from "react-icons/hi";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";

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

const Footer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const shopRef = useRef(null);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

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
    <footer className="border-t bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div> 
          <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-500 mb-4">
            Be the first to hear about new products, exclusive events, and
            online offers.
          </p>
          <p className="font-medium text-sm text-gray-600 mb-6">
            Sign up and get 10% off on your first order
          </p>

          {/* Newsletter form */}
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
              required
            />
            <button
              type="submit"
              className="bg-gray-900 text-white px-5 py-3 text-sm rounded-md hover:bg-gray-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* Shop links */}
        <div className="md:flex flex-col gap-6 text-sm">
          {/* Shop dropdown */}
          <h3 className="text-lg text-gray-800 mb-4">Home Page</h3>
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
              className={`absolute left-0 mt-2 w-56 rounded-md shadow-sm ring-1 ring-black/5 bg-white z-10 transform transition-all origin-top ${
                shopOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
              }`}
            >
              <div className="py-1">
                {collections.map((c, i) => (
                  <Link
                    key={c}
                    to={`/shop/${c.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    onClick={() => setShopOpen(false)}
                  >
                    {c}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/new" className="hover:underline text-gray-700">
            New Arrivals
          </Link>
          <Link to="/best-sellers" className="hover:underline text-gray-700">
            Best Sellers
          </Link>
          <Link to="/sale" className="text-red-500 font-medium">
            Sale
          </Link>
          <Link to="/contact" className="hover:underline text-gray-700">
            Contact
          </Link>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <TbBrandMeta className="h-5 w-5 " />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <IoLogoInstagram className="h-5 w-5 " />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <RiTwitterXFill className="h-5 w-5 " />
            </a>
          </div>
          <p className="text-gray-600">Call Us</p>
          <p>
            <a href="tel:0123456789" className="text-gray-700 hover:underline inline-flex items-center">
              <FiPhoneCall className="inline-block mr-2 " />
              0123-456-789
            </a>
          </p>
        </div>
      </div>

      {/* footer bottom */}
      <div className="max-w-7xl mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            &copy; 2025, Sundarii. All rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-sm text-gray-600 hover:underline">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-gray-600 hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
