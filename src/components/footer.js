import React from "react";
import { FaSearch } from "react-icons/fa";

function NavigationBar() {
  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow">
      <div className="flex items-center">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
          className="w-20"
        />
      </div>
      <div className="flex items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <FaSearch className="absolute top-2 right-3 text-gray-400" />
        </div>
        <button className="ml-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>
    </nav>
  );
}

export default NavigationBar;
