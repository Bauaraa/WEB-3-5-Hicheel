import React, { useState } from 'react'
import { services } from '../data/data'

const Service = () => {
  return (
    <div className='w-full flex flex-col md:flex-row gap-12 px-8'>
        <div className='w-1/2 flex flex-col'>
        <h1 className='text-4xl md:text-5xl font-bold mb-6'>
            Future of support with new shape
        </h1>
        <p className='text-gray-600 mb-8 text-lg'>
            Discuss your goals, determine success metrics, identify problems
        </p>
        <div className='space-y-4 mb-8'>
            {services.map((item, index) => (
                <p key={index} className='flex items-center gap-3'>
                    <div className='w-5 h-5 rounded-full bg-indigo-600'></div>
                    {item.title}
                </p>
            ))}
        </div>
        <button className='w-fit bg-indigo-600 text-white rounded-full px-8 py-3 font-semibold hover:bg-indigo-700'>
            Get Started
        </button>
        </div>
        <div className='w-1/2 grid grid-cols-2 gap-8'>
        {services.map((item, index) => (
            <div key={index} className='flex flex-col'>
            <div className='text-5xl mb-4'>{item.icon}</div>
            <h2 className='text-2xl font-bold mb-3'>{item.title}</h2>
            <p className='text-gray-600 mb-4'>{item.description}</p>
            <a href='#' className='text-indigo-600 font-bold uppercase tracking-wide text-sm hover:text-indigo-700'>
                Learn More
            </a>
            </div>
        ))}
        </div>
    </div>
  );
};

export default Service;