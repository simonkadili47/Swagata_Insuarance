import React from "react";
import { IoIosCar } from "react-icons/io";
import { TbCone2Filled } from "react-icons/tb";
import { FaUsers } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { PiHospitalThin } from "react-icons/pi";
import { FaFlask } from "react-icons/fa";
import profile_image from "../assets/profile1.webp";

const Features: React.FC = () => {
  return (
    <div className="bg-custom-gray1 mt-10 px-4 sm:px-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between pt-8 md:ml-12">
        <div className="text-lg text-custom-green pt-4 mb-4 md:mb-0">
          <p>Swagata featured</p>
          <p>products</p>
        </div>
        <div className="text-black font-bold text-2xl sm:text-3xl md:text-5xl">
          <p>Raise your expectation of what</p>
          <p>your insurer should deliver.</p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="p-4">
          <div className="text-gray-400 text-sm md:text-md">
            <p>
              We think life insurance should be about living. So we've designed
              our products to protect and create wealth while you're alive.
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="text-gray-700">
            <p>
              <span className="text-3xl font-bold text-black">19</span>
              <span className="text-md font-bold text-black">K+</span>{" "}
              <span className="ml-3">client trust with us</span>
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="text-gray-700">
            <p>
              <span className="text-3xl font-bold text-black">13</span>
              <span className="text-md font-bold text-black">K+</span>{" "}
              <span className="ml-3">Business protected.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="p-4">
          <div className="flex items-center">
            <IoIosCar className="text-2xl sm:text-3xl" />
            <span className="ml-auto text-sm">01</span>
          </div>
          <div className="mt-4">
            <p className="text-black font-bold">Auto insurance</p>
            <p className="text-zinc-500 text-sm mt-2">
              Your safety is what drives us to provide an exceptional standard
              of service.
            </p>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center">
            <TbCone2Filled className="text-2xl sm:text-3xl" />
            <span className="ml-auto text-sm">02</span>
          </div>
          <div className="mt-4">
            <p className="text-black font-bold">Valuables</p>
            <p className="text-zinc-500 text-sm mt-2">
              Protect your valuables so their stories continue for generations
              to come.
            </p>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center">
            <FaUsers className="text-2xl sm:text-3xl" />
            <span className="ml-auto text-sm">03</span>
          </div>
          <div className="mt-4">
            <p className="text-black font-bold">Liability</p>
            <p className="text-zinc-500 text-sm mt-2">
              Extra protection for you and the people you care about.
            </p>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center">
            <IoSettingsOutline className="text-2xl sm:text-3xl" />
            <span className="ml-auto text-sm">04</span>
          </div>
          <div className="mt-4">
            <p className="text-black font-bold">Risk Engineering Services</p>
            <p className="text-zinc-500 text-sm mt-2">
              The in-house Risk Engineering Services team provides customized
              services.
            </p>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center">
            <PiHospitalThin className="text-2xl sm:text-3xl" />
            <span className="ml-auto text-sm">05</span>
          </div>
          <div className="mt-4">
            <p className="text-black font-bold">Construction Safety</p>
            <p className="text-zinc-500 text-sm mt-2">
              We prioritize your safety with an exceptional standard of service.
            </p>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center">
            <FaFlask className="text-2xl sm:text-3xl" />
            <span className="ml-auto text-sm">06</span>
          </div>
          <div className="mt-4">
            <p className="text-black font-bold">Industrial Hygiene Analysis</p>
            <p className="text-zinc-500 text-sm mt-2">
              We help our clients customize IH services to meet their unique
              needs.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-dashed border-gray-300 mx-4 mt-8"></div>

      {/* Client Testimonial Section */}
      <div className="flex justify-between items-center mt-8 px-4">
        <div className="text-black text-xl font-bold">
          <p>Words From Our Clients</p>
        </div>
        <div className="text-custom-green">
          <p>
            <span>01</span>/<span className="ml-2">02</span>
          </p>
        </div>
      </div>

      <div className="mt-6 text-4xl text-zinc-600 px-4">
        <p>
          "They do it with integrity and honesty... that's why I'm a Swagata
          customer for 15 years.
        </p>
      </div>

      <div className="flex justify-between items-center mt-6 px-4 ">
        <div className="flex items-center mb-1">
          <img
            src={profile_image}
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
          <div className="ml-4">
            <p className="text-black font-bold">Jackline James</p>
            <p className="text-zinc-500 text-sm">Sacramento, CA</p>
          </div>
        </div>
        <div className="text-4xl text-gray-600">"</div>
      </div>

    </div>
  );
};

export default Features;
