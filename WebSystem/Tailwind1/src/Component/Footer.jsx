import React, { useState } from 'react'
import { footerLinks } from '../data/data'
import { FaInstagram, FaFacebook, FaSquareXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='w-full bg-indigo-600 text-white py-12 px-8'>
            <div className='flex justify-between items-start'>
                <div className='flex gap-16'>
                    {Object.entries(footerLinks).map(([items, link]) => (
                        <div key={items}>
                            <p className='text-lg font-semibold mb-6'>{items}</p>
                            <div className='flex flex-col gap-3'>
                                {link.map((link, index) => (
                                    <a key={index} href={link.href} className='text-gray-100 hover:text-white transition'>
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex gap-6'>
                    <FaInstagram className='w-8 h-8 hover:opacity-80 transition cursor-pointer' />
                    <FaFacebook className='w-8 h-8 hover:opacity-80 transition cursor-pointer' />
                    <FaSquareXTwitter className='w-8 h-8 hover:opacity-80 transition cursor-pointer' />
                </div>
            </div>
        </div>
    );
};

export default Footer;