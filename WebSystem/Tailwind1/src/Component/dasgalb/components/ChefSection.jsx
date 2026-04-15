import React from "react";
import { chefInfo } from "../data/data";

const ChefSection = () => {
    return (
        <div className="w-full bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={chefInfo.image} alt="" className="w-full max-w-md rounded-2xl"/>
                </div>
                <div className="w-full md:w-1/2">
                    <p className="text-orange-400 font-semibold mb-3">Meet the Chef</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                        Our Special Chef
                    </h1>
                    <p className="text-gray-600 text-lg mb-6">
                        Our chef creates delicious dishes with fresh ingredients and a passion for quality food every day.
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-orange-400 px-6 py-3 rounded-xl">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefSection;