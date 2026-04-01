import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="relative bg-blue-200 shadow-sm p-2">
      <div className="flex justify-between items-center">
        <h1 className="text-indigo-600 font-bold">EduSmart</h1>

        <div className="hidden md:flex gap-3">
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">Teachers</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>

        <div className="hidden md:flex gap-4">
          <button className="bg-white w-25 h-10 rounded-xl">Sign Up</button>
          <button className="bg-indigo-600 w-25 h-10 rounded-xl text-white">Login</button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-40 bg-amber-100 shadow-md z-10">
          <nav className="flex flex-col gap-2 p-2">
            <a href="#" className="block">Home</a>
            <a href="#" className="block">Courses</a>
            <a href="#" className="block">Teachers</a>
            <a href="#" className="block">Pricing</a>
            <a href="#" className="block">Contact</a>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Header;