import React from "react";
import leftImage from "../assets/monitor-card.webp";

const Monitor = () => {
    return (
        <div className="flex sm:flex-col md:flex-row sm:items-center w-full gap-12 py-12">
            <div className="w-1/2 sm:w-full sm:px-4 md:px-8 flex flex-col justify-start">
                <p className="text-sm font-semibold mb-4 tracking-wider">MONITOR</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Introducing best mobile carousels
                </h2>
                <p className="text-lg mb-6 leading-relaxed">
                    Before the ship is really back. Round, round, all round the world. Round all around the world. Round all around the world.
                </p>
                <a href="#" className="text-blue-600 font-semibold">
                    Learn more about monitoring→
                </a>
            </div>
            <div className="w-1/2 sm:w-full sm:px-4 md:px-8 flex justify-center" >
                <img src={leftImage} alt="" />
            </div>
        </div>
    );
};

export default Monitor;
