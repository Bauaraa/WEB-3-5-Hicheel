import React from "react";
import rightImage from "../assets/stats.webp";

const Schedule = () => {
    return (
        <div className="flex sm:flex-col md:flex-row sm:items-center w-full gap-12 py-12">
            <div className="w-1/2 sm:px-4 md:px-8 flex justify-center mr-8" >
            <img src={rightImage} alt="" />
        </div>
        <div className="w-1/2 sm:px-4 md:px-8">
        <p className="text-sm font-semibold mb-4 tracking-wider">SCHEDULE</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Streamline Your Business With Smart Scheduling Solutions
        </h2>
        <p className="text-lg mb-6 leading-relaxed">
            Take control of your time boost productivity with our intelligent scheduling system. Automate appointments, manage team availability, and deliver exceptional customer experience through seamless calender management.
        </p>
        <a href="#" className="text-blue-600 font-semibold">
            Explore scheduling features→
        </a>
        </div>
        </div>
    );
};

export default Schedule;
