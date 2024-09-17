import React from "react";
import { BsUmbrella } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <div className="bg-custom-blue">
      <div className="flex ml-24 text-white pt-12">
        <p className="text-zinc-400">Who we are</p>
        <div className="ml-16 font-bold">
          <p>Auto insuarance</p>
          <p>Valuables</p>
          <p>Liablity</p>
          <p>Risk Engineering</p>
          <p>Construction Safety</p>
          <p>Industrial Hygine</p>
        </div>

        <p className="text-zinc-400 ml-36">Campany</p>

        <div className="ml-16 font-bold">
          <p>About Swagita</p>
          <p>Login Swepartnet</p>
          <p>Career</p>
        </div>
        <p className="ml-32 text-zinc-400">Socials</p>
        <div className="ml-16 font-bold">
          <p>Facebook </p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Youtube</p>
          <p>Linkedin</p>
        </div>
      </div>
      <div className="flex">
        <p className="text-zinc-400 ml-526">About Us</p>
        <div className="text-white ml-20 font-bold">
          <p>Contact us</p>
          <p>Our Story</p>
        </div>
      </div>

      <div className="border-t mt-3 border-gray-300"></div>

      <div className="flex text-white ml-32 mt-6 justify-between">
        <div className="flex">
          <BsUmbrella className="text-4xl" />
          <p className="text-4xl ml-3">Swagata</p>
        </div>
        <div className="font-bold mr-16">
          <p>Stay informed with our newsletter</p>
        </div>
      </div>

      <div className="justify-between ml-32 mt-4 ">
        <div className="flex text-zinc-400 pb-3">
        <FaRegCopyright className="text-md mt-1" />
            <p className="ml-2">2022 Swagata.</p>
            <p className="ml-1">All right reserved.</p>
            <p className="ml-5">Privacy Policy</p>
            <p className="ml-6">Terms and Conditions</p>
            
        <p className="ml-96">Type your email address</p>
        <FaArrowRightLong className="mt-2 ml-16" />
      
        </div>
        
      </div>
      
    </div>
  );
};

export default Footer;
