import React, { useState } from 'react'
import Logo from '../../assets/iqoologo.png'
import { IoSearchCircleSharp } from "react-icons/io5"
import { FaBagShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext/CartContext'; 

const Menu = [
    {
        id: 1,
        name : "Home",
        link : "/" 
    },
    {
        id: 2,
        name: "Product",
        link : "/#product" 
    },
    {
        id: 3,
        name: "About",
        link: "/about" 
    }
];

const DropdownLinks = [
    {
        id: 1,
        name: "Z7X",
        link: "/ProductDetail/4" 
    },
    {
        id: 2,
        name: "Z9",
        link: "/ProductDetail/6" 
    },
    {
        id: 3,
        name: "Cooler",
        link: "/ProductDetail/5" 
    },
    {
        id: 4,
        name: "Best Seller",
        link: "/#bestseller" 
    }
];

const Navbar = () => { 
  const { cartItems } = useCart(); 
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm.trim()}`);
      setSearchTerm('');
    } else {
      navigate(`/search`);
    }
  };

  return (
    <div className="shadow-md bg-white dark:bg-yellow-800 dark:text-white duration-200 relative z-40">
        {/* atas Navbar */}
        <div className="bg-primary/60 py-3">
            <div className="container flex justify-between items-center"> 
                <div>
                    <Link to="/"> 
                        <img src={Logo} alt="Logo" 
                        className="w-20 uppercase"/>
                    </Link>
                </div>

                {/*Search bar & Cart button*/}
                <div className="flex items-center gap-4"> 
                    <form onSubmit={handleSearchSubmit} className="relative group hidden sm:block">
                        <input 
                            type="text"  
                            placeholder="Cari produk"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border-gray-300 
                            px-10 py-1 focus:outline-none focus:border-1 focus:border-primary text-black"
                        />
                        <button type="submit" className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-700 group-hover:text-primary">
                            <IoSearchCircleSharp className="text-2xl" />
                        </button>
                    </form>
                    
                    {/* Cart Button */}
                    <Link to="/cart" className="relative bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full
                    flex items-center gap-3 group border-none focus:outline-none"> 
                        <FaBagShopping className="text-xl text-white drop-shadow-sm cursor-pointer " />
                        {totalItemsInCart > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {totalItemsInCart}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </div>
        {/* bawah Navbar */}
        <div data-aos="fade-up" data-duration="500" data-aos-once="true" className="flex justify-center">
            <ul className="sm:flex hidden items-center gap-4">{
                    Menu.map((data)=>(
                        <li key={data.id}>
                            {data.link.startsWith("/#") ? (
                                <a href={data.link} className="inline-block px-4 hover:text-primary duration-200">{data.name}</a>
                            ) : (
                                <Link to={data.link} className="inline-block px-4 hover:text-primary duration-200">{data.name}</Link>
                            )}
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
                                        {data.link.startsWith("/#") ? (
                                            <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/50">{data.name}</a>
                                        ) : (
                                            <Link to={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/50">{data.name}</Link>
                                        )}
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
