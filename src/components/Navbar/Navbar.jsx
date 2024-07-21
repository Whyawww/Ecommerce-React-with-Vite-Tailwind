import React from 'react'
import Logo from '../../assets/iqoologo.png'
import { IoSearchCircleSharp } from "react-icons/io5"
import { FaBagShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";

const Menu = [
    {
        id: 1,
        name : "Home",
        link : "/#home"
    },
    {
        id: 2,
        name: "Product",
        link: "/#product"
    },
    {
        id: 3,
        name: "About",
        link: "/#about"
    }
];

const DropdownLinks = [
    {
        id: 1,
        name: "Z7X",
        link: "/#zx"
    },
    {
        id: 2,
        name: "Z9",
        link: "/#z9"
    },
    {
        id: 3,
        name: "Cooler",
        link: "/#cool"
    },
    {
        id: 4,
        name: "Best Seller",
        link: "/#bestseller"
    }
];
const Navbar = ({ handleOrderPopup}) => {
  return (
    <div className="shadow-md bg-white dark:bg-yellow-800 dark:text-white duration-200 relative z-40">
        {/* atas Navbar */}
        <div className="bg-primary/60 py-3">
            <div className="container flex justify-content items-center">
                <div>
                    <a href="#">
                        <img src={Logo} alt="Logo" 
                        className="w-20 uppercase"/>
                    </a>
                </div>

                {/*Search bar & button*/}
                <div className="flex justify-end w-full ">
                    <div className="rellative group hidden sm:block">
                        <input type="text"  
                        placeholder="Cari"
                        className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border-gray-300 
                        px-7 py-1 focus:outline-none focus:border-1 focus:border-primary"
                        />
                        <IoSearchCircleSharp className="text-2xl text-gray-700 group-hover:text-primary absolute 
                        top-1/2 -translate-y-8 "/>
                    </div>
                <div>
                    
                </div>
                </div>
                {/* order Button*/}
                <button onClick={() => handleOrderPopup()}
                className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full
                flex items-center gap-3 group">
                    <span className="group-hover:block hidden transition-all duration-200">Order</span>
                    <FaBagShopping className="text-xl text-white drop-shadow-sm cursor-pointer"/>
                </button>
                
            </div>
            
        </div>
        {/* bawah Navbar */}
        <div data-aos="fade-up" data-duration="500" data-aos-once="true" className="flex justify-center">
            <ul className="sm:flex hidden items-center gap-4">{
                    Menu.map((data)=>(
                        <li key={data.id}>
                            <a href={data.link}
                            className="inline-block px-4 hover:text-primary duration-200">{data.name}</a>
                        </li>
                    ))}
                    {/*dropdown */}
                    <li className="group relative cursor-pointer">
                        <a href="#" 
                        className="flex items-center gap-[2px] py-2">Best Seller
                        <span>
                            <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/>
                        </span>
                        </a>
                        <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
                            <ul>
                                {DropdownLinks.map((data)=>(
                                    <li key={data.id}>
                                        <a href={data.link}
                                        className="inline-block w-full rounded-md p-2 hover:bg-primary/50">{data.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;