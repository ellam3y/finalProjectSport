import React from "react";
import { assets } from "../../../assets/frontend_assets/assets";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <div className="w-full h-64">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.9537353153169!3d-37.81627974202171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1f9c6b3b8d!2sYour%20Current%20Location!5e0!3m2!1sen!2sau!4v1611810193437!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-2">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+201557401577</li>
            <li> Metoo@Ellam3y.com </li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="border border-gray-300" />
        <div className="flex justify-around items-center gap-5 my-5">
          <img className="w-50 h-20" src={assets.logo} alt="Logo" />
          <p className="py-5 text-sm text-center">
            CopyRight © 2025 All R ights reserved. Design by{" "}
            <span className="font-medium text-gray-600">Ellam3y</span>
          </p>
        </div>
      </div>
    </div>
  );
}
