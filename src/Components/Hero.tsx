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
      <div className="w-full flex justify-between items-center">
        <div
          ref={heroRef}
          className={`text-5xl font-semibold ${
            isVisible ? "animate-fadeInDown" : ""
          }`}
        >
          <p>Taking Care of What's</p>
          <p>Important.</p>
        </div>
        <div className="">
          <p>We've built our life and business insurance</p>
          <p>products from the ground up to both</p>
          <p>protect you and reward you.</p>

          <div className="mt-6 flex gap-4">
            <Button
              label="Start free trial"
              className="text-white text-sm px-6 bg-black py-2 border border-black hover:bg-white hover:text-black hover:border-black duration-300"
            />
            <Button
              label="Our Study Case"
              className="text-black text-sm px-6 py-2 border border-zinc-500 hover:bg-white duration-300"
            />
          </div>
        </div>
      </div>

      {/* Images positioned with overlap */}
      <div className="absolute top-[calc(100%)] left-0 right-0 grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center mt-20">
        <div className="rounded-xl bg-white flex flex-col shadow-lg">
          <div className="p-4">
            <h2 className="font-semibold text-lg pb-2">
              Individuals and Family
            </h2>
            <p className="text-sm text-gray-500 pb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
              harum aut sed enim! Quisquam, officiis. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <img
            src={image1}
            width={360}
            height={360}
            alt="Image1"
            className="w-full h-[360px] rounded-bl-xl rounded-br-xl object-cover"
          />
        </div>

        <div className="rounded-xl bg-white flex flex-col shadow-lg">
          <div className="p-4">
            <h2 className="font-semibold text-lg pb-2">
              Business Protection
            </h2>
            <p className="text-sm text-gray-500 pb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
              harum aut sed enim! Quisquam, officiis. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <img
            src={image1}
            width={360}
            height={360}
            alt="Image1"
            className="w-full h-[360px] rounded-bl-xl rounded-br-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
