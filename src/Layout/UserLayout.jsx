import React from "react";
import NavBar from "../components/Header/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Global/Footer/Footer";
import SearchBar from "../components/Global/SearchBar/SearchBar";

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
    <div>
      <NavBar />
      <SearchBar />
      <Outlet />
      <Footer />
      {showScrollButton && (
        <button
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "10px 15px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      )}
    </div>
  );
}
