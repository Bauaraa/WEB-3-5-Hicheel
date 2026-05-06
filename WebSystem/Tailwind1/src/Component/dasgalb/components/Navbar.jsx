import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks } from "../data/data";

const Navbar = ({ openBooking, openLogin, openOrders }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full bg-sky-100 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-orange-600">FoodHouse</h1>

                <div className="hidden md:flex gap-6">
                    {navLinks.map((item, index) => (
                        <a key={index} href={item.href} className="text-gray-700 hover:text-orange-600">
                            {item.name}
                        </a>
                    ))}
                </div>

                <div className="flex justify-between gap-2.5">
                <button onClick={openOrders} className="hidden md:block bg-orange-50 border-amber-500 text-orange-400 px-4 py-2 rounded-lg">
                    My Orders
                </button>
                <button onClick={openBooking} className="hidden md:block bg-orange-600 text-white px-4 py-2 rounded-lg">
                    Book Table
                </button>
                <button onClick={openLogin} className="hidden md:block px-4 py-2 bg-orange-50 border-amber-500 text-orange-400 rounded-lg">
                    Login
                </button>
                </div>

                <div className="md:hidden">
                    {open ? (
                        <HiX className="w-8 h-8 cursor-pointer" onClick={() => setOpen(false)} />
                    ) : (
                        <HiMenu className="w-8 h-8 cursor-pointer" onClick={() => setOpen(true)} />
                    )}
                </div>
            </div>

            {open && (
                <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
                    {navLinks.map((item, index) => (
                        <a key={index} href={item.href} className="text-gray-700">
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Navbar;