import React from 'react';
import z7 from '../../assets/Hero/iqooz7.png';
import iqoo11 from '../../assets/Hero/iqoo11.png';
import iqoo12 from '../../assets/Hero/iqoo12.png';
import iqoozx from '../../assets/Hero/iqooz7x.png';
import cool from '../../assets/Hero/pendingin.png';
import Slider from 'react-slick';

const ImageList = [
  {
    id: 1,
    img: z7,
    title: "Power Up Your Life Z7",
    description: "FlashCharge 120W, Baterai 5000 mAh, Snapdragon 782",
  },
  {
    id: 2,
    img: iqoo11,
    title: "Monster Inside For Gaming IQOO11",
    description: "2K 144Hz, AMOLED display, Snapdragon 8 Gen 2",
  },
  {
    id: 3,
    img: iqoo12,
    title: "Melambung ke Cakrawala Tanpa Batas IQOO12",
    description: "Supercomputing Q1, RAM 16 GB + 16 GB, Snapdragon 8 Gen 3",
  },
  {
    id: 4,
    img: iqoozx,
    title: "Redefining Power IQOO Z7X",
    description: "FlashCharge 80W, Baterai 6000mAh, Penyimpanan 256 GB hingga 1 TB",
  },
  {
    id: 5,
    img: cool,
    title: "Cooling Back Flip Pro Cooler",
    description: "Pendingin Ultra, Lampu Halo Dinamis, Tampilan Suhu Realtime",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div id="home" className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-primary/30 flex justify-center items-center duration-200">
      {/* Background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/50 absolute -top-1/2 right-20 rounded-3xl rotate-45 -z-10"></div>
      {/* Hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((item) => (
            <div key={item.id}>
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Text content */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1 data-aos="zoom-out" data-duration="500" data-aos-once="true" className="text-4xl sm:text-5xl font-bold">
                    {item.title}
                  </h1>
                  <p data-aos="fade-up" data-duration="500" data-aos-delay="100" className="text-sm">
                    {item.description}
                  </p>
                  <div data-aos="fade-up" data-duration="500" data-aos-delay="300">
                    <button
                      className="bg-gradient-to-r from-orange-400 to-orange-600 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                      onClick={handleOrderPopup}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* Image content */}
                <div className="order-1 sm:order-2">
                  <div data-aos="zoom-in" data-aos-once="true" className="relative z-10">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-[350px] h-[350px] sm:h-[450px] sm:w-[400px] sm:scale-125 lg:scale-130 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;