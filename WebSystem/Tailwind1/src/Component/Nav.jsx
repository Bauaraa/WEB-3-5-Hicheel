import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
// Logo
// Sign Up Login
// Home Products Solutions Pricing Contact

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="relative bg-amber-100 shadow-sm p-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {menuOpen ? (
            <HiX className="w-8 h-8 cursor-pointer" onClick={toggleMenu} />
          ) : (
            <HiMenu className="w-8 h-8 cursor-pointer" onClick={toggleMenu} />
          )}
          <div className="w-10 h-10 bg-orange-500 rounded-full ml-2"></div>
        </div>

        <div className="hidden md:flex gap-3">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="">Solution</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>

        <div className="hidden md:flex gap-4">
          <button className="bg-white w-25 h-10 rounded-xl">Sign Up</button>
          <button className="bg-[#8b3dff] w-25 h-10 rounded-xl text-white">Login</button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-40 bg-amber-100 shadow-md z-10">
          <nav className="flex flex-col gap-2 p-2">
            <a href="#" className="block">Home</a>
            <a href="#" className="block">Products</a>
            <a href="" className="block">Solution</a>
            <a href="#" className="block">Pricing</a>
            <a href="#" className="block">Contact</a>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Nav;