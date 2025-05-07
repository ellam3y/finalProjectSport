import React from "react";
import Title from "../../components/Global/Title/Title";
import { assets } from "../../assets/frontend_assets/assets";
import NewsLetterBox from "../../components/Global/NewsLetterBox/NewsLetterBox";

export default function About() {
  return (
    <div className="bg-gray-50">
      <div className="text-3xl text-center pt-8 border-t border-gray-300">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16 px-6 md:px-20">
        <img
          className="w-full md:max-w-[450px] rounded-lg shadow-lg"
          src={assets.about_img}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-700">
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a
            modi quibusdam minima odit exercitationem corrupti nam. Amet
            accusantium earum repellat commodi assumenda iste in, eaque,
            laudantium ipsa rerum harum!
          </p>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            recusandae illo consectetur quasi. Aut, velit corrupti? Soluta qui
            aliquam consequuntur reprehenderit adipisci? Doloremque, rerum
            deleniti quo repudiandae sapiente necessitatibus laudantium.
          </p>
          <b className="text-gray-900 text-lg">Our Mission</b>
          <p className="leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem deleniti, perspiciatis nesciunt voluptatum recusandae
            impedit libero quidem blanditiis, modi pariatur laboriosam a ex
            praesentium nulla. Quos iusto laboriosam dolores enim.
          </p>
        </div>
      </div>
      <div className="text-2xl py-6 text-center">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 gap-6 px-6 md:px-20">
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-white rounded-lg shadow-md">
          <b className="text-lg text-gray-800">Quality Assurance:</b>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            reprehenderit, tempore, alias veniam officia eligendi illum quos
            fuga vitae ab totam animi et. Quidem maxime natus voluptas, quisquam
            provident modi.
          </p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-white rounded-lg shadow-md">
          <b className="text-lg text-gray-800">Convenience:</b>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            reprehenderit, tempore, alias veniam officia eligendi illum quos
            fuga vitae ab totam animi et. Quidem maxime natus voluptas, quisquam
            provident modi.
          </p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-white rounded-lg shadow-md">
          <b className="text-lg text-gray-800">Exceptional Customer Service:</b>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            reprehenderit, tempore, alias veniam officia eligendi illum quos
            fuga vitae ab totam animi et. Quidem maxime natus voluptas, quisquam
            provident modi.
          </p>
        </div>
      </div>
      <div className="px-6 md:px-20">
        <NewsLetterBox />
      </div>
    </div>
  );
}
