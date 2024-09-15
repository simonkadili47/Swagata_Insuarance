import React, { useState } from 'react';
import { BsX } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  brandName: string;
  brandIcon?: React.ReactNode;  
  links: NavLink[];             
}

const Navbar: React.FC<NavbarProps> = ({ brandName, brandIcon, links }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Section */}
        <div className="text-black font-bold text-2xl ml-5 mt-2 flex items-center">
          {brandIcon && <div className="mr-2 mt-1 text-2xl">{brandIcon}</div>}
          {brandName}
        </div>

        {/* Mobile Menu Icon */}
        <div className="block lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <BsX /> : <IoMenu />}
        </div>

        {/* Desktop Links Section */}
        <div className="hidden lg:flex lg:space-x-8 lg:text-sm lg:text-black lg:items-center lg:opacity-100">
          <ul className="flex lg:flex-row text-sm text-black space-x-8">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="relative hover:text-black after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-orange-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Sidebar Menu */}
        <div
          className={`fixed top-0 right-0 w-1/2 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}
        >
          {/* Close button for mobile */}
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-2xl">
              <BsX />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col items-start p-4 space-y-4">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="relative text-black text-lg hover:text-orange-500 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-orange-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
