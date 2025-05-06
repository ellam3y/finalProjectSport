import React from "react";
import { assets } from "../../../assets/frontend_assets/assets";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut natus
            dolorum consequatur quaerat corrupti adipisci.
          </p>
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
        <p className="py-5 text-sm text-center">
          Copyright © 2025 Forever You. All rights reserved. Design by{" "}
          <span className="font-medium text-gray-600">Ellam3y</span>
        </p>
      </div>
    </div>
  );
}
