import React from 'react';
import iqooz7 from '../../assets/Hero/iqooz7.png';
import iqoo11 from '../../assets/Hero/iqoo11.png';
import iqoo12 from '../../assets/Hero/iqoo12.png';
import iqoozx from '../../assets/Hero/iqooz7x.png';
import cool from '../../assets/Hero/pendingin.png';
import { FaStar } from 'react-icons/fa';

const ProductsData = [
  {
    id: 1,
    img: iqooz7,
    title: "IQOO Z7",
    rating: 4.9,
    color: "orange",
    aosDelay: "0",
  },
  {
    id: 2,
    img: iqoo11,
    title: "IQOO 11",
    rating: 5.0,
    color: "gray",
    aosDelay: "200",
  },
  {
    id: 3,
    img: iqoo12,
    title: "IQOO 12",
    rating: 5.0,
    color: "white",
    aosDelay: "400",
  },
  {
    id: 4,
    img: iqoozx,
    title: "IQOO Z7X",
    rating: 4.9,
    color: "blue",
    aosDelay: "600",
  },
  {
    id: 5,
    img: cool,
    title: "IQOO COOLER",
    rating: 4.9,
    color: "yellow",
    aosDelay: "800",
  },
];

const Products = ({ handleOrderPopup }) => {
  return (
    <div id="product" className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-3xl text-primary">IQOO</p>
          <h1 data-aos="fade-up" className="text-4xl font-bold">Products</h1>
          <p data-aos="fade-up" className="text-2xl text-gray-600">TEMUKAN PONSEL YANG TEPAT UNTUK ANDA</p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-flow-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card */}
            {ProductsData.map((data) => (
              <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className="space-y-3">
                <img src={data.img} alt={data.title} className="h-[220px] w-[190px] object-cover rounded-md" />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-700">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-primary/70" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* see more button */}
          <div data-aos="fade-up" className="flex justify-center">
            <button onClick={handleOrderPopup} className="text-center mt-10 px-6 py-1 bg-primary text-white rounded-md">
              Pesan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
