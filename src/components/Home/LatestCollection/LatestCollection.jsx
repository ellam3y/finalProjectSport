import React, { useEffect, useState } from "react";
import Title from "../../Global/Title/Title";
import ProductItem from "../../Global/ProductItem/ProductItem";
import { useProducts } from "../../../store";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function LatestCollection() {
  const { products } = useProducts();
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    // console.log(products)
    setLatestProducts(products.slice(0, 5));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-2xl md:text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          accusamus fugiat quod officiis aperiam tempora.
        </p>
      </div>
      {/* Latest Collection Products */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          576: { slidesPerView: 2, spaceBetween: 15 },
          992: { slidesPerView: 3, spaceBetween: 20 },
          1200: { slidesPerView: 4, spaceBetween: 20 },
        }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {latestProducts.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductItem
                key={index}
                id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
                bestseller={product.best_seller}
                category={product.category}
                subCategory={product.subCategory}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
