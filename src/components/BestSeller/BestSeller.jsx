import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
import { ALL_PRODUCTS_DATA } from '../../Data/products';

const BestSeller = () => { 
  const navigate = useNavigate(); 

  const bestSellerProducts = ALL_PRODUCTS_DATA.filter(product => product.isBestSeller);

  const handleOrderNowClick = (productId) => {
    navigate(`/ProductDetail/${productId}`); 
  };

  return (
    <div id="bestseller" className="mt-14 mb-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-24">
          <p data-aos="fade-up" className="text-3xl text-primary">Paling TOP</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Best Product</h1>
          <p className="text-2xl text-gray-400">HP PALING TOP YA IQOO LAH</p>
        </div>
        {/* Body */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {bestSellerProducts.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white hover:bg-gray-600 hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              <div className="flex flex-col items-center p-4">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[140px] block mx-auto transform group-hover:scale-105 duration-300 drop-shadow-md"
                />
                {/* Detail */}
                <div className="mt-4 text-center">
                  {/* Rating */}
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(Math.floor(data.rating))].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                  <h1 className="text-xl font-bold mb-2">{data.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 mb-4">
                    {data.desc || data.description}
                  </p>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-black py-1 px-4 rounded-full group-hover:text-white hover:bg-secondary"
                    onClick={() => handleOrderNowClick(data.id)} 
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;

