import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { ALL_PRODUCTS_DATA } from '../../Data/products'; 

const Products = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true, 
    arrows: false, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 4, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 1500, 
    cssEase: 'linear', 
    pauseOnHover: true,
    responsive: [ 
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

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
        <div className="px-4"> 
          <Slider {...settings}>
            {ALL_PRODUCTS_DATA.map((data) => (
              <div
                key={data.id}
                onClick={() => navigate(`/ProductDetail/${data.id}`)}
                className="space-y-3 cursor-pointer hover:scale-105 transition-transform p-4"
              >
                <img src={data.img} alt={data.title} className="h-[220px] w-full object-contain rounded-md mx-auto" />
                <div className="text-center">
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-700">{data.color}</p>
                  <div className="flex items-center justify-center gap-1">
                    <FaStar className="text-primary/70" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Products;
