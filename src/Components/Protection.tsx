import React from "react";
import Button from "./Button";
import image1 from "../assets/swagat5.jpg";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const Protection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between mt-12 lg:mt-24 ml-4 lg:ml-12 mr-4">
      <div className="p-4 lg:p-6">
        <h1 className="text-custom-green font-bold text-xl lg:text-2xl">
          Partner in protection
        </h1>
        <div className="text-black font-bold text-3xl lg:text-5xl mt-2 lg:mt-1">
          <p>Doing more for you</p>
          <p>and your clients</p>
        </div>
        <div className="border-t border-gray-400 mt-6 lg:mt-8 border-dashed"></div>
        <div className="mt-8 lg:mt-12 text-gray-500 text-sm lg:text-base">
          <p>Agents and brokers are vital to Swagata's success. To better assist</p>
          <p>your growth, we provide a variety of tools, resources, and</p>
          <p>programming to help our agents and brokers succeed.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mt-6 lg:mt-8">
          <Button
            label="Start free trial"
            className="text-white text-sm px-6 py-2 bg-zinc-950 border border-black hover:border-gray-400"
          />
          <Button
            label="Login to Swagata Partner Portal"
            className="text-black text-sm px-6 py-2 border border-zinc-500 hover:border-black duration-300"
          />
        </div>
      </div>

      <div className="relative mt-8 lg:mt-12">
        {/* Image */}
        <img
          src={image1}
          alt="Swagata"
          className="rounded-lg h-48 lg:h-80 w-full object-cover"
        />
        <div className="absolute bottom-0 mb-4 lg:mb-8 left-0 right-0 flex flex-col justify-end items-start text-start p-4 text-white">
          <p className="text-sm bg-white text-gray-400 pl-1 rounded-full px-3 flex">
            <IoCheckmarkCircleSharp className="mt-1 text-md mr-1" />
            Detailed loss information
          </p>
          <p className="text-sm bg-white text-gray-400 pl-1 rounded-full px-2 mt-3 flex">
            <IoCheckmarkCircleSharp className="mt-1 text-md mr-1" />
            Risk Engineering Resource Center
          </p>
          <p className="text-sm bg-white text-gray-400 pl-1 pr-1 rounded-full px-4 mt-3 flex">
            <IoCheckmarkCircleSharp className="mt-1 text-md mr-1" />
            Audit and Adjustment Manager Portal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Protection;
