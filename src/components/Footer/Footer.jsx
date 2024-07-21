import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaMobileAlt, FaLocationArrow } from 'react-icons/fa';

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
];

const Footer = () => {
  return (
    <div className="bg-primary/70 text-black mb-20">
      <div data-aos="zoom-in" className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/* Copyright */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              IQOO
            </h1>
            <p>Temukan Smartphone Impianmu</p>
          </div>
          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Important</h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.link}
                        className="cursor-pointer hover:text-white hover:translate-x-1 duration-200 text-gray-600"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Social Media and Contact */}
            <div>
              <h1 className="text-xl font-bold">Contact:</h1>
              <div className="flex items-center justify-center gap-3 mt-6">
                <a href="#" aria-label="Instagram">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" aria-label="Facebook">
                  <FaFacebookF className="text-3xl" />
                </a>
                <a href="#" aria-label="YouTube">
                  <FaYoutube className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>IQOOIndonesia</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+62-2324-4986-886</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;