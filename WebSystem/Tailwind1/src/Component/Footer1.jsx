import React, { useState } from 'react'
import { footerLinks } from '../data/data'

const Footer1 = () => {
      const [menuOpen, setMenuOpen] = useState(false);
      
    return (
        <div className='w-full bg-indigo-600 text-white py-12 px-8'>
            <div className='flex justify-between items-center'>
            <div>
                <h1 className="text-white font-bold">EduSmart</h1>
                <p>Learn Simply. Build Confidently</p>
            </div>

        <div className="hidden md:flex gap-3">
          <a href="#">About Us</a>
          <a href="#">Courses</a>
          <a href="#">Blog</a>
          <a href="#">Help Center</a>
          <a href="#">Privacy Policy</a>
        </div>

        {menuOpen && (
        <div className="absolute top-full left-0 w-40 bg-amber-100 shadow-md z-10">
          <nav className="flex flex-col gap-2 p-2">
            <a href="#" className="block">About Us</a>
            <a href="#" className="block">Courses</a>
            <a href="#" className="block">Blog</a>
            <a href="#" className="block">Help Center</a>
            <a href="#" className="block">Privacy Policy</a>
          </nav>
        </div>
      )}
            </div>
            <div className="text-center text-sm mt-4">
              &#169;Bauaraa. All rights reserved.
            </div>
        </div>
    );
};

export default Footer1;