import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../../../assets/frontend_assets/assets";
import {
  useCartStore,
  useLinks,
  useProducts,
  useSearchStore,
  useSideHeader,
  useAuthStore,
} from "../../../store";
import SideBar from "../SideBar/SideBar";
import { FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";

export default function NavBar() {
  const { getLinks } = useLinks();
  const [links, setLinks] = useState(getLinks());
  const { index, openSideHeader } = useSideHeader();
  const { openSearch } = useSearchStore();
  const { getCartCount } = useCartStore();
  const { products } = useProducts();
  const { isAuthenticated, currentUser, logout } = useAuthStore();
  const navigate = useNavigate();

  // Update links when auth state changes
  useEffect(() => {
    setLinks(getLinks());
  }, [isAuthenticated, currentUser, getLinks]);

  const handleLogout = () => {
    logout();
    navigate("/register");
  };

  const navigateToOrders = () => {
    if (isAuthenticated) {
      navigate("/orders");
    } else {
      navigate("/register");
    }
  };

  const navigateToWishlist = () => {
    if (isAuthenticated) {
      navigate("/wishlist");
    } else {
      navigate("/register");
      toast.info("Please login to view your wishlist", {
        position: "top-right",
        autoClose: 1200,
      });
    }
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-800">
        {links.map((link, index) => (
          <NavLink
            to={link?.url || "#"}
            key={index}
            className="group flex flex-col items-center gap-1 px-2 py-1 transition-all duration-300"
          >
            <p className="group-hover:text-blue-950">
              {link?.name || "Unnamed Link"}
            </p>
            <hr className="w-2/4 border-none h-[1.5px] bg-blue-600 hidden group-hover:block" />
          </NavLink>
        ))}
      </ul>
      {/* Icons */}
      <div className="flex items-center gap-5">
        <img
          src={assets.search_icon}
          className="w-4 cursor-pointer hover:opacity-70 hover:text-blue-950 transition-opacity duration-300"
          onClick={openSearch}
          alt=""
        />
        <div className="group relative hidden sm:block">
          {isAuthenticated ? (
            <div className="cursor-pointer relative">
              <img
                src={assets.profile_icon}
                alt=""
                className="w-4 hover:opacity-70 hover:text-blue-950 transition-opacity duration-300"
              />
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-20 transition-all duration-300 ease-in-out">
                <div className="flex flex-col gap-2 w-48 py-3 px-5 bg-blue-50 text-gray-700 rounded shadow-md">
                  <p className="font-medium text-black mb-1">
                    Hello, {currentUser?.name}
                  </p>
                  <p
                    className="cursor-pointer hover:text-blue-950"
                    onClick={() => navigate("/profile")}
                  >
                    My Profile
                  </p>
                  <p
                    className="cursor-pointer hover:text-blue-950"
                    onClick={() => navigate("/wishlist")}
                  >
                    My Wishlist
                  </p>
                  <p
                    className="cursor-pointer hover:text-blue-950"
                    onClick={navigateToOrders}
                  >
                    My Orders
                  </p>

                  <hr className="my-1 border-gray-300" />
                  <p
                    className="cursor-pointer hover:text-blue-950"
                    onClick={handleLogout}
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <Link to="/register">
              <img
                src={assets.profile_icon}
                alt=""
                className="w-4 cursor-pointer hover:opacity-70 hover:text-blue-950 transition-opacity duration-300"
              />
            </Link>
          )}
        </div>
        {/* Wishlist icon - visible when authenticated */}
        {isAuthenticated ? (
          <div
            onClick={navigateToWishlist}
            className="relative cursor-pointer hover:opacity-70 transition-opacity duration-300"
          >
            <FaRegHeart />
            {currentUser?.wishlist?.length > 0 && (
              <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-blue-600 text-white aspect-square rounded-full text-[8px]">
                {currentUser.wishlist.length}
              </p>
            )}
          </div>
        ) : (
          <div
            onClick={navigateToWishlist}
            className="relative cursor-pointer hover:opacity-70 transition-opacity duration-300"
          >
            <FaRegHeart />
          </div>
        )}
        {/* Cart icon - visible when authenticated */}
        {isAuthenticated && (
          <Link
            to="cart"
            className="relative hover:opacity-70 transition-opacity duration-300"
          >
            <img
              src={assets.cart_icon}
              className="w-5 min-w-5 cursor-pointer"
              alt="Cart"
            />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-blue-600 text-white aspect-square rounded-full text-[8px]">
              {Array.isArray(products) && products.length > 0
                ? getCartCount()
                : 0}
            </p>
          </Link>
        )}
        <img
          onClick={openSideHeader}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden hover:opacity-70 transition-opacity duration-300"
          alt=""
        />
      </div>
      {/* SideBar */}
      {index && <SideBar />}
    </div>
  );
}
