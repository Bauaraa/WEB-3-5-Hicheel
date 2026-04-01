import React from "react";
import { HiStar, HiArrowSmRight } from "react-icons/hi";
import HeroImage from "../assets/hero-image.png";
const Banner = () => {
  return (
    <div className="w-full flex md:flex-row sm:flex-col sd:pt-8 md:py-8 px-4">
      <div className=" sm:w-full md:w-1/2   ">
        <div className="flex items-center gap-2 bg-gray-150 w-fit p-4 text-xl">
          <span className="text-indigo-500">Start learning today</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Improve your skills with online courses
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mt-8 w-2/3">
          Learn programming, design, and teamwork with simple projects and clear lessons for beginners.
        </p>
        <div className="mt-8 p-4 flex gap-4 w-2/3">
          <button className="bg-indigo-600 w-35 h-13 rounded-xl text-white">Get Started</button>
          <button className="bg-gray-200 w-35 h-13 rounded-xl">View Courses</button>
        </div>
      </div>
      <div className=" sm:w-full md:w-1/2 flex justify-center items-center">
        <img src={HeroImage} alt="" className="w-5/6" />
      </div>
    </div>
  );
};

export default Banner;