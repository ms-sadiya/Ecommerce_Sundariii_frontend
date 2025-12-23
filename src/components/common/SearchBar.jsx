import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Term:", searchTerm);
    setIsOpen(false)
  }

  return (
    <div
      className={` flex items-center justify-center w-full tracking-all duration-300 ${
        isOpen ? "absolute top-10 border-b border-gray-300 left-0 w-full bg-white h-24 z-50" : "w-auto"
      } `}
    >
      {isOpen ? (
        <form onSubmit={handleSearch} className="relative flex items-center justify-center w-full">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setsearchTerm(e.target.value)}
              className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-md focus:outline-none w-full placeholder:text-gray-700 "
            />
            {/* Search button  */}

            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <FiSearch className="h-6 w-6 " />
            </button>
          </div>

          {/* close button */}
          <button
            type="button"
            onClick={handleSearchToggle}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
          >
            <HiMiniXMark className="h-6 w-6 " />
          </button>
        </form>
      ) : (
        <button
          onClick={handleSearchToggle}
          className="hidden md:flex items-center justify-center p-2  rounded-md hover:bg-(--navbar)"
        >
          <FiSearch className="h-5 w-5 text-(--text-primary)" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
