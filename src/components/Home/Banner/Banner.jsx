import React from "react";
import { assets } from "../../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 rounded-lg overflow-hidden bg-blue-900 shadow-2xl">
      {/* /* LeftSide */}
      <div className="order-2 sm:order-1 flex flex-col justify-center items-center p-6 sm:w-1/2 bg-gradient-to-r from-blue-950 to-blue-750 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-xl mb-6">
          Discover the latest arrivals and exclusive collections.
        </p>
        <Link
          to="/collection"
          className="px-6 py-2 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-gray-200"
        >
          Shop Now
        </Link>
      </div>
      <div className="order-1 sm:order-2 w-full sm:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={assets.hero_img}
          alt="Latest arrivals collection"
        />
      </div>
    </div>
  );
}
