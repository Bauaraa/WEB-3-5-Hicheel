import React from "react";
import ShowCase from '../assets/ShowCaseImage.avif'

const Showcase = () => {
    return (
    <div className="bg-amber-50 w-full flex md:flex-row sm:flex-col pt-8 md:py-8 px-4">
      <div className="sm:w-full md:w-1/2">
        <p className="text-orange-600 text-lg font-semibold mb-4">Fresh and tasty</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
          Enjoy delicious meals made with fresh ingredients
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-8 w-2/3">
          Experience warm service, beautiful dishes, and a comfortable place for family and friends.
        </p>
        <div className="mt-8 p-4 flex gap-4 w-2/3">
          <button className="bg-orange-600 w-35 h-13 rounded-xl text-white">Order Now</button>
          <button className="bg-gray-200 w-35 h-13 rounded-xl">View Menu</button>
        </div>
      </div>
      <div className=" sm:w-full md:w-1/2 flex justify-center items-center">
        <img src={ShowCase} alt="" className="w-5/6" />
      </div>
    </div>
  );
};

export default Showcase;