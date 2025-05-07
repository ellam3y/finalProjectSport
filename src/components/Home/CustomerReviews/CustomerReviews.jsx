import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";

const CustomerReviews = () => {
  const reviews = [
    "Excellent and fast service!",
    "Great product quality.",
    "Amazing experience, will come back again.",
    "Polite service and reasonable prices.",
    "Fast delivery and excellent customer service.",
    "Products exceed expectations.",
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        direction: "ltr",
        textAlign: "left",
        margin: 0,
        padding: 0,
        backgroundColor: "#f9f9fc",
      }}
    >
      <div style={{ padding: "30px" }}>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#222",
            fontSize: "2.5rem",
            fontWeight: "bold",
          }}
        >
          Customer Reviews
        </h1>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          style={{ padding: "20px" }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  border: "1px solid #ccc",
                  padding: "30px",
                  borderRadius: "15px",
                  backgroundColor: "#fff",
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  flexDirection: "column",
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  height: "250px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 12px rgba(0, 0, 0, 0.1)";
                }}
              >
                <FaStar style={{ color: "#FFD700", fontSize: "32px" }} />
                <p style={{ margin: 0, fontSize: "1.2rem", color: "#444" }}>
                  {review}
                </p>
                <p style={{ margin: 0, fontSize: "1rem", color: "#888" }}>
                  {index % 2 === 0
                    ? "Excellent service and fast delivery!"
                    : "Great quality products and amazing experience!"}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerReviews;
