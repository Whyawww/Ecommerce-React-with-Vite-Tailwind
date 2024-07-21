import React from 'react';
import BannerImg from '../../assets/Hero/neo.jpeg';
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image content */}
          <div data-aos="zoom-in">
            <img 
              src={BannerImg} 
              alt="Banner" 
              className="max-w-[400px] h-[350px] w-full mx-auto object-cover drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]" 
            />
          </div>
          {/* Text content */}
          <div className="flex flex-col justify-center gap-5 sm:pt-0">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-700">Cashback 20%</h1>
            <h2 className="text-2xl text-gray-700 tracking-wide leading-5">IQOO NEO 9</h2>
            <p className="text-2xl text-gray-700 tracking-wide leading-5">
              Features 6.38″ display, Snapdragon 845 chipset 4500 mAh battery | 128 GB storage, 8 GB RAM.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-2 rounded-full bg-violet-300" />
                <p className="text-xl text-gray-700">Kualitas Produk</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-2 rounded-full bg-red-300" />
                <p className="text-xl text-gray-700">Produk Termurah</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-2 rounded-full bg-green-300" />
                <p className="text-xl text-gray-700">Mendukung Untuk Semua Game</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;