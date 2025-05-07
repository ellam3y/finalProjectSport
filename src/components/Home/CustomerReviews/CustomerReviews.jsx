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
      <div style={{ padding: "20px" }}>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#222",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Customer Reviews
        </h1>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          style={{ padding: "10px" }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  border: "1px solid #ccc",
                  padding: "20px",
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  flexDirection: "column",
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  height: "200px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 12px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 8px rgba(0, 0, 0, 0.1)";
                }}
              >
                <FaStar style={{ color: "#FFD700", fontSize: "28px" }} />
                <p style={{ margin: 0, fontSize: "1rem", color: "#444" }}>
                  {review}
                </p>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#888" }}>
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
