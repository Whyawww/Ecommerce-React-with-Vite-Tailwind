// src/pages/SearchResult.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { FaStar } from 'react-icons/fa';
import { ALL_PRODUCTS_DATA } from '../Data/products';
import AOS from "aos";
import "aos/dist/aos.css";

const SearchResult = () => {
  const { search } = useLocation();
  const navigate = useNavigate(); 
  const { q } = queryString.parse(search); 

  const results = ALL_PRODUCTS_DATA.filter((product) =>
    product.title.toLowerCase().includes(q?.toLowerCase() || '')
  );

  const handleProductClick = (productId) => {
    navigate(`/ProductDetail/${productId}`);
  };

  return (
    <div className="p-10 max-w-5xl mx-auto min-h-screen" data-aos="flip-left" data-aos-duration="1000"> 
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Hasil Pencarian untuk: <span className="text-primary">"{q || 'Semua Produk'}"</span>
      </h2>
      
      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.map((product) => (
            <div 
              key={product.id} 
              className="border border-gray-200 rounded-lg p-4 shadow-md 
                         cursor-pointer hover:shadow-lg transition-shadow duration-200 
                         flex flex-col items-center text-center"
              onClick={() => handleProductClick(product.id)}
              data-aos="flip-left" data-aos-duration="1000"
            >
              <img 
                src={product.img} 
                alt={product.title} 
                className="h-40 w-full object-contain rounded-md mb-3"
              />
              <h3 className="font-semibold text-lg text-gray-900">{product.title}</h3>
              <p className="text-sm text-gray-600">Warna: {product.color}</p>
              <div className="flex items-center justify-center gap-1 text-sm text-gray-700 mt-1">
                <FaStar className="text-yellow-400" />
                <span>{product.rating}</span>
              </div>
              <p className="text-md font-bold text-green-600 mt-2">
                Rp {product.price.toLocaleString('id-ID')}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-10 p-5 bg-red-100 border border-red-400 text-red-700 rounded-md" data-aos="flip-left" data-aos-duration="1000">
          <p className="text-lg font-semibold">Produk tidak ditemukan.</p>
          <p className="text-md mt-2">Coba kata kunci lain atau periksa kembali ejaan Anda.</p>
        </div>
      )}
    </div>
  );
};

export default SearchResult;

