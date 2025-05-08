import React from "react";
import NavBar from "../components/Header/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Global/Footer/Footer";
import SearchBar from "../components/Global/SearchBar/SearchBar";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function UserLayout() {
  const [showScrollButton, setShowScrollButton] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {showScrollButton && (
        <button
          className="fixed bottom-5 right-2 p-3 bg-blue-950 text-white rounded-md shadow-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <AiOutlineArrowUp style={{ fontSize: "1.5rem" }} />
        </button>
      )}
      <NavBar />
      <SearchBar />
      <Outlet />
      <Footer />
    </div>
  );
}
