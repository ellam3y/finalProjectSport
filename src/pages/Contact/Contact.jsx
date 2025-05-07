import React from "react";
import Title from "../../components/Global/Title/Title";
import { assets } from "../../assets/frontend_assets/assets";
import NewsLetterBox from "../../components/Global/NewsLetterBox/NewsLetterBox";
import { toast } from "react-toastify";

export default function Contact() {
  return (
    <div className="bg-gray-50">
      <div className="text-center text-3xl pt-12 border-t border-gray-300">
        <Title text1="Get in" text2="Touch" />
      </div>
      <div className="my-12 flex flex-col justify-center md:flex-row gap-12 px-6 md:px-20">
        <img
          className="w-full md:max-w-[500px] rounded-lg shadow-lg"
          src={assets.contact_img}
          alt="Contact Us"
        />
        <div className="flex flex-col justify-center items-start gap-8 bg-white p-8 rounded-lg shadow-md">
          <p className="font-bold text-2xl text-gray-700">Visit Our Store</p>
          <p className="text-gray-600">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Tel:</span> (20) 1557401577 <br />
            <span className="font-medium">Email:</span> Ellamaey@gmail.com
          </p>
          <p className="font-bold text-2xl text-gray-700">Join Our Team</p>
          <p className="text-gray-600">
            Discover exciting opportunities and grow with us.
          </p>
          <button
            onClick={() =>
              toast.info("Coming soon!", {
                position: "top-right",
                autoClose: 1300,
              })
            }
            className="border border-gray-700 px-8 py-3 text-sm font-medium text-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-300 rounded-md"
          >
            Explore Careers
          </button>
        </div>
      </div>
      <div className="px-6 md:px-20">
        <NewsLetterBox />
      </div>
    </div>
  );
}
