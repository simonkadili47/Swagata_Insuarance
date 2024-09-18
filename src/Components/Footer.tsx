import React from "react";
import { BsUmbrella } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <div className="bg-custom-blue">
      <div className="container mx-auto py-12">
        <div className="flex justify-between text-white max-sm:flex-col max-sm:justify-between max-sm:items-start max-sm:gap-8 max-sm:px-8">
          <div className="flex gap-8 max-sm:flex-col max-sm:gap-2">
            <p className="text-zinc-400">Who we are</p>
            <div className="font-bold">
              <p>Auto insuarance</p>
              <p>Valuables</p>
              <p>Liablity</p>
              <p>Risk Engineering</p>
              <p>Construction Safety</p>
              <p>Industrial Hygine</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-8 max-sm:flex-col max-sm:gap-2">
              <p className="text-zinc-400">Campany</p>
              <div className="font-bold">
                <p>About Swagita</p>
                <p>Login Swepartnet</p>
                <p>Career</p>
              </div>
            </div>

            <div className="flex gap-8 max-sm:flex-col max-sm:gap-2">
              <p className="text-zinc-400">About Us</p>
              <div className="text-white font-bold">
                <p>Contact us</p>
                <p>Our Story</p>
              </div>
            </div>
          </div>

          <div className="flex gap-8 max-sm:flex-col max-sm:gap-2">
            <p className="text-zinc-400">Socials</p>
            <div className="font-bold">
              <p>Facebook </p>
              <p>Instagram</p>
              <p>Twitter</p>
              <p>Youtube</p>
              <p>Linkedin</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t mt-3 border-gray-300"></div>

      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center text-white max-sm:flex-col max-sm:gap-8 max-sm:items-start max-sm:px-8">
          <div className="flex flex-col gap-4">
            <div className="flex">
              <BsUmbrella className="text-4xl" />
              <p className="text-4xl ml-3">Swagata</p>
            </div>

            <div className="flex gap-4 text-gray-500 max-sm:gap-2 max-sm:flex-col">
              <div className="flex items-center">
                <FaRegCopyright className="text-md" />
                <p className="hover:cursor-pointer">2022 Swagata.</p>
              </div>
              <p className="hover:cursor-pointer">All right reserved.</p>
              <p className="hover:cursor-pointer">Privacy Policy</p>
              <p className="hover:cursor-pointer">Terms and Conditions</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-b border-gray-500 max-sm:w-full">
            <div className="font-bold">
              <p>Stay informed with our newsletter</p>
            </div>
            <div className="flex justify-between items-center text-gray-500 pb-3">
              <p className="">Type your email address</p>
              <FaArrowRightLong className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
