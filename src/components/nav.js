import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow">
      <Link to="../" className="flex items-center">
        <span className="font-extrabold text-center font-[verdana] text-blue-600 text-2xl">BRAIN</span>
      </Link>
      <div className="flex items-center space-x-4 md:space-x-8">
        <a href="#" className="text-gray-600 hover:text-blue-600">All</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Links</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Videos</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Maps</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Images</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">News</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Chat</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">News</a>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <button className="ml-4 h-10 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path className="fill-white" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default NavigationBar;