import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import image1 from "../assets/swaga3.jpg";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-6 relative w-full">
      <div className="flex flex-col lg:flex-row justify-between items-center mt-10">
        <div
          ref={heroRef}
          className={`text-3xl lg:text-5xl font-semibold ${
            isVisible ? "animate-fadeInDown" : ""
          }`}
        >
          <p>Taking Care of What's</p>
          <p>Important.</p>
        </div>
        <div className="text-center lg:text-left mt-6 lg:mt-0">
          <p className="text-base lg:text-lg mb-2">
            We've built our life and business insurance
          </p>
          <p className="text-base lg:text-lg mb-4">
            products from the ground up to both
          </p>
          <p className="text-base lg:text-lg mb-6">
            protect you and reward you.
          </p>

          <div className="flex flex-col lg:flex-row gap-4">
            <Button
              label="Start free trial"
              className="text-white text-sm px-6 py-2 bg-black border border-black hover:bg-white hover:text-black hover:border-black duration-300"
            />
            <Button
              label="Our Study Case"
              className="text-black text-sm px-6 py-2 border border-zinc-500 hover:bg-white duration-300"
            />
          </div>
        </div>
      </div>

      {/* Images positioned with overlap */}
      <div className="absolute top-[calc(100%)] left-0 right-0 grid grid-cols-2 gap-8 justify-center mt-20 max-sm:px-2 max-sm:flex max-sm:flex-col max-sm:space-y-4 max-sm:bg-custom-gray">
        <div className="rounded-xl bg-white flex flex-col shadow-lg max-sm:border">
          <div className="p-4">
            <h2 className="font-semibold text-lg pb-2">
              Individuals and Family
            </h2>
            <p className="text-md text-gray-500 pb-6">
              If you die, we give you a proper send-off and help your family
              keep living their best life.
            </p>
          </div>
          <img
            src={image1}
            width={300}
            height={300}
            alt="Individuals and Family"
            className="w-full h-[360px] rounded-bl-xl rounded-br-xl object-cover"
          />
        </div>

        <div className="rounded-xl bg-white flex flex-col shadow-lg max-sm:border">
          <div className="p-4">
            <h2 className="font-semibold text-lg pb-2">Business Protection</h2>
            <p className="text-md text-gray-500 pb-6">
              Protecting your business means staying one step ahead and helping
              you prevent problems before they happen.
            </p>
          </div>
          <img
            src={image1}
            width={300}
            height={300}
            alt="Business Protection"
            className="w-full h-[360px] rounded-bl-xl rounded-br-xl object-cover"
          />
        </div>

        {/* Border line after images */}
        <div className="col-span-2 flex justify-between items-center ">
          <div className="border-t border-gray-200 w-full mx-8 "></div>
        </div>

        {/* Moved text closer to the border */}
        <div className="mt-0 lg:mt-0 lg:col-start-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-6 max-sm:bg-white">
          <div className="p-4">
            <div className="text-black font-bold text-xl lg:text-3xl">
              <p>Simpler, smarter, more</p>
              <p>rewarding cover.</p>
            </div>
          </div>

          <div className="p-4">
            <div className="text-gray-700">
              <span className="text-black text-lg lg:text-xl font-bold">
                <p>We help make sure you have no gaps</p>
              </span>
              <p className="text-sm mt-1">
                With Swagata, you get comprehensive, not patchwork protection
              </p>
            </div>
          </div>

          <div className="p-4">
            <div className="text-gray-700">
              <span className="text-lg lg:text-xl text-black font-bold">
                <p>We look out for you.</p>
              </span>
              <p className="text-sm mt-1">
                You get a proactive partner to help prevent issues from
                happening in the first place
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
