import React from 'react'
import Slider from 'react-slick'
import Yan from '../../assets/Teams/Yan.jpg'
import Alfa from '../../assets/Teams/Alfa.jpg'
import Rifki from '../../assets/Teams/Rifki.jpg'
import Adzriel from '../../assets/Teams/Adzriel.jpg'
import Aji from '../../assets/Teams/Aji.jpg'
import Rona from '../../assets/Teams/Rona.jpg'

const OurteamData = [
    {
        id: 1,
        name: "Wahyu Aji Nusantara",
        text: "Hallo saya di tim ini mengerjakan bagian Frontend.",
        img: Aji,    
    },
    {
        id: 2,
        name: "Muhamad Rona Anggara",
        text: "Hallo saya di tim ini mengerjakan bagian Design dan Frontend.",
        img: Rona,
    },
    {
        id: 3,
        name: "Yan Abelino",
        text: "Hallo saya di tim ini mengerjakan bagian Frontend dan Backend.",
        img: Yan,
    },
    {
        id: 4,
        name: "Muhammad Rifki",
        text: "Hallo saya di tim ini mengerjakan bagian Backend.",
        img: Rifki,
    },
    {
        id: 5,
        name: "Adzriel Naufal El Aizar",
        text: "Hallo saya di tim ini mengerjakan bagian Backend.",
        img: Adzriel,
    },
    {
        id: 6,
        name: "Moch Alfa Nur Maulid",
        text: "Hallo saya di tim ini mengerjakan bagian Backend.",
        img: Alfa,
    },
];

const Ourteam = () => {
    
var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: true,
    responsive: [
        {
            breakpoint: 10000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
            },
        },
    ],
};

  return (
    <div className='py-10 mb-10'>
        <div className='container max-w-screen-lg'>
            {/* Header */}
            <div className="text-center mb-10 max-w-[600px] mx-auto">
                <h1 data-aos="fade-up" className="text-4xl font-bold">Ourteam</h1>
                <p data-aos="fade-up" className="text-2xl text-gray-600">Ini adalah anggota kami</p>
            </div>

            {/* Ourteam  */}
            <div data-aos="zoom-in">
                <Slider {...settings}>
                    {OurteamData.map((data) => (
                        <div className='my-6' key={data.id}>
                            <div 
                            className='flex flex-col gap-4 shadow-lg rounded-xs py-3 px-6 mx-4 bg-primary/30 relative'>
                                <div className='mb-4'>
                                    <img src={data.img} alt="" 
                                    className=' w-40 h-30'/>
                                </div>
                                <div className='flex flex-col items-center gap-4'>
                                    <div className='space-y-3'>
                                        <p className='text-center text-xs text-gray-500'>{data.text}</p>
                                        <h1 className='text-xl font-bold text-black/80'>{data.name}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Ourteam
