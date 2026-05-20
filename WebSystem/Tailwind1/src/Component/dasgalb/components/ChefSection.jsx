import React, { useState } from "react";
import { chefInfo } from "../data/data";

const ChefSection = () => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="w-full bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-start">
                <div className="w-full flex justify-center">
                    <img src={chefInfo.image} alt="Chef" className="w-full max-w-md rounded-2xl shadow-lg" />
                </div>
                <div className="w-full">
                    {!expanded ? (
                        <div>
                            <p className="text-orange-400 font-semibold mb-3">Meet the Chef</p>
                            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                                Our Special Chef
                            </h1>
                            <p className="text-gray-600 text-lg mb-6">
                                {chefInfo.description}
                            </p>
                            <div className="flex gap-4">
                                <button onClick={() => setExpanded(true)} className="bg-orange-400 text-white px-6 py-3 rounded-xl transition hover:bg-orange-500">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="fixed inset-0 z-50 overflow-auto bg-orange-50 p-0">
                            <div className="min-h-screen w-full px-4 py-6 lg:px-10 lg:py-8">
                                <div className="flex justify-end mb-6">
                                    <button onClick={() => setExpanded(false)} className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-5 py-3 text-amber-50 text-sm font-semibold">
                                        Back to Home
                                    </button>
                                </div>
                                <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 items-start">
                                    <div className="w-full rounded-3xl overflow-hidden shadow-xl">
                                        <img src={chefInfo.image} alt="Chef" className="h-105 w-full object-cover" />
                                    </div>
                                    <div className="w-full">
                                        <div className="rounded-32px bg-white p-8 shadow-2xl">
                                            <p className="text-orange-400 font-semibold uppercase tracking-[0.25em] mb-3 text-sm">
                                                Chef Story
                                            </p>
                                            <h2 className="text-3xl md:text-4xl font-bold mb-5">
                                                A kitchen built on warmth and quality
                                            </h2>
                                            <p className="text-gray-700 text-base mb-8 leading-relaxed">
                                                {chefInfo.story}
                                            </p>
                                            <div className="space-y-4">
                                                {chefInfo.philosophy.map((item, idx) => (
                                                    <div key={idx} className="rounded-3xl bg-orange-50 px-5 py-4 text-gray-700 shadow-sm">
                                                        {item}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChefSection;