import React from 'react';
import { FaStar } from 'react-icons/fa';
import iqooz7 from "../../assets/Hero/iqooz7.png";
import iqooz9 from "../../assets/Hero/iqooz9.png";
import cool from "../../assets/Hero/pendingin.png";

const ProductsData = [
  {
    id: 1,
    img: iqooz7,
    title: "IQOO Z7",
    description: "iQOO Z7 adalah salah satu smartphone keluaran iQOO yang menonjol dalam performa dan fitur yang ditawarkan.",
  },
  {
    id: 2,
    img: iqooz9,
    title: "IQOO Z9",
    description: "iQOO Z9 merupakan penerus dari seri Z sebelumnya yang membawa peningkatan signifikan dalam berbagai aspek.",
  },
  {
    id: 3,
    img: cool,
    title: "COOLER IQOO",
    description: "iQOO Cooler adalah aksesori pendingin eksternal yang dirancang untuk perangkat smartphone, terutama untuk ponsel iQOO.",
  },
];

const BestSeller = ({ handleOrderPopup }) => {
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
          {ProductsData.map((data) => (
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
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                  <h1 className="text-xl font-bold mb-2">{data.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 mb-4">
                    {data.description}
                  </p>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-black py-1 px-4 rounded-full group-hover:text-white"
                    onClick={handleOrderPopup}
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
