import React, { useEffect, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import Title from "../../components/Global/Title/Title";
import ProductItem from "../../components/Global/ProductItem/ProductItem";
import { useProducts, useSearchStore } from "../../store";
import Pagination from "../../components/Collection/Pagination";
import { IoMdArrowDropdown } from "react-icons/io";
export default function Collection() {
  const [showFilters, setShowFilters] = useState(true);
  const [category, setCategory] = useState([]);
  const { products } = useProducts();
  const { search, openSearch } = useSearchStore();
  const [filterProducts, setFilterProducts] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("Relevant");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  //Logic for filtering products
  const applyFilters = () => {
    let productCopy = products.slice();

    // Search Filter
    if (openSearch && search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productCopy);
  };
  //Logic for toggleCategory
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  //Logic for Sorting
  const sortProducts = () => {
    let filterProductCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProductCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(filterProductCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilters();
        break;
    }
  };

  //Logic for Pagination
  const pagination = (products, currentPage, productsPerPage) => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return products.slice(startIndex, endIndex);
  };

  const filteredProducts = pagination(
    filterProducts,
    currentPage,
    productsPerPage
  );

  const totalPages = Math.ceil(filterProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    applyFilters();
  }, [category, subCategory, search, openSearch]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 pt-8 border-t border-gray-300 bg-gray-50">
      {/* Filter Option */}
      <div className="min-w-60 bg-white p-4 rounded-lg shadow-md">
        <p
          onClick={() => setShowFilters(!showFilters)}
          className="uppercase my-2 text-lg flex items-center cursor-pointer gap-2 font-semibold text-gray-800"
        >
          Filters
          <img
            className={`h-4 sm:hidden transform ${
              showFilters ? "rotate-90" : ""
            } transition-transform duration-300`}
            src={assets.dropdown_icon}
            alt="Toggle Filters"
          />
        </p>
        {/* Category Filter */}
        <div
          className={`border border-gray-200 rounded-lg px-4 py-3 my-4 bg-white ${
            showFilters ? "" : "hidden"
          } sm:block transition-all duration-300`}
        >
          <p className="uppercase mb-3 text-sm font-medium tracking-wide border-b border-gray-100 pb-2 text-indigo-700">
            Categories
          </p>
          <div className="flex flex-col gap-2 text-sm text-gray-700">
            {["Men", "Women", "Kids"].map((item) => (
              <label
                key={item}
                className="flex items-center gap-2 cursor-pointer group hover:bg-gray-100 p-2 rounded-lg transition-all duration-200"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                  onChange={toggleCategory}
                  value={item}
                  checked={category.includes(item)}
                />
                <span className="group-hover:text-indigo-700 transition-colors duration-200">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>
        {/* Sub Category Filter */}
        <div
          className={`border border-gray-200 rounded-lg px-4 py-3 my-4 bg-white ${
            showFilters ? "" : "hidden"
          } sm:block transition-all duration-300`}
        >
          <p className="uppercase mb-3 text-sm font-medium tracking-wide border-b border-gray-100 pb-2 text-indigo-700">
            Type
          </p>
          <div className="flex flex-col gap-3 text-sm text-gray-700">
            {[
              { value: "Topwear", label: "Topwear" },
              { value: "Bottomwear", label: "Bottomwear" },
              { value: "Winterwear", label: "Winterwear" },
            ].map((item) => (
              <label
                key={item.value}
                className="flex items-center gap-2 cursor-pointer group hover:bg-gray-100 p-2 rounded-lg transition-all duration-200"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                  onChange={toggleSubCategory}
                  value={item.value}
                  checked={subCategory.includes(item.value)}
                />
                <span className="group-hover:text-indigo-700 transition-colors duration-200">
                  {item.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
        {/* Title & Selector */}
        <div className="flex flex-col md:flex-row justify-between items-center text-base sm:text-lg mb-6">
          <Title text1={"All"} text2={"Collections"} />
          {/* Product Sort */}
          <div className="relative w-full max-w-xs mt-4 md:mt-0">
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="block w-full appearance-none bg-white border border-gray-300 rounded-lg py-2 px-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 shadow-sm hover:border-gray-400"
            >
              <option value="Relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low To High</option>
              <option value="high-low">Sort by: High To Low</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <IoMdArrowDropdown
                className="h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
              category={item.category}
              bestseller={item.bestseller}
              subCategory={item.subCategory}
            />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
