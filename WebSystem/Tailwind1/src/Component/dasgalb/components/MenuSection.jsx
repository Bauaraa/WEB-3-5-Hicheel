import React from "react";
import { dishes } from "../data/data";

const MenuSection = () => {
    return (
        <div className="w-full py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-3">Popular Menu</h2>
                <p className="text-center text-gray-600 mb-10">
                    Discover our most loved dishes
                </p>

                <div className="flex flex-col md:flex-row gap-6">
                    {dishes.map((dishes, index) => (
                        <div key={index} className="flex-1 bg-orange-100 rounded-2xl overflow-hidden shadow-lg">
                            <img src={dishes.image} alt={dishes.name} className="w-full h-64 object-cover"/>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-2xl font-bold">{dishes.name}</h3>
                                    <p className="text-2xl font-bold text-orange-600">{dishes.price}</p>
                                </div>
                                <p className="text-gray-600">{dishes.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MenuSection;