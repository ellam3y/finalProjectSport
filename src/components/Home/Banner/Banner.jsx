import React from "react";
import { assets } from "../../../assets/frontend_assets/assets";

export default function Banner() {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-300 rounded-lg overflow-hidden bg-white shadow-lg">
      {/* /* LeftSide */}
      <div className="flex flex-col justify-center items-center p-6 sm:w-1/2 bg-gradient-to-r from-blue-500 to-blue-300 text-white">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-lg mb-6">
          Discover the latest arrivals and exclusive collections.
        </p>
        <button
          className="px-6 py-2 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100"
          onClick={() => (window.location.href = "/collection")}
        >
          Shop Now
        </button>
      </div>
      <div className="w-full sm:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={assets.hero_img}
          alt="Latest arrivals collection"
        />
      </div>
    </div>
  );
}
