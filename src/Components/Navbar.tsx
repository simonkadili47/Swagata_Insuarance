import React from 'react';
import { BsUmbrella } from "react-icons/bs";

const Navbar: React.FC = () => {
  return (
    <nav className="py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-black font-bold text-2xl ml-5 mt-2 flex">
          <BsUmbrella className="mr-2 mt-1 text-2xl" /> Swagata
        </div>
        <ul className="flex space-x-12 text-sm mr-12 text-black">
          <li>
            <a href="#" className="relative hover:text-black after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-orange-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Our Product</a>
          </li>
          <li>
            <a href="#" className="relative hover:text-black after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-orange-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Why Swagata</a>
          </li>
          <li>
            <a href="#" className="relative hover:text-black after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-orange-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Study Case</a>
          </li>
          <li>
            <a href="#" className="relative hover:text-black after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-orange-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">About Us</a>
          </li>
          <li>
            <a href="#" className="relative hover:text-black after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-orange-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
