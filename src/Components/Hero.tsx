import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import image1 from '../assets/swaga3.jpg';

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
    <div className="relative">
      <div className="flex flex-col md:flex-row">
        <div
          ref={heroRef}
          className={`text-5xl font-bold ml-24 ${
            isVisible ? 'animate-fadeInDown' : ''
          }`}
        >
          <p>Taking Care of What's</p>
          <p>Important.</p>
        </div>
        <div className="ml-56 mt-4 md:mt-0">
          <p>We've built our life and business insurance</p>
          <p>products from the ground up to both</p>
          <p>protect you and reward you.</p>

          <div className="mt-6 flex">
            <Button
              label="Start free trial"
              className="text-white hover:border-zinc-500 px-6 bg-black py-2 border border-black"
            />
            <Button
              label="Our Study Case"
              className="text-black px-6 py-2 ml-4 border border-zinc-500"
            />
          </div>
        </div>
      </div>

      {/* Images positioned with overlap */}
      <div className="absolute top-[calc(100%)] left-0 right-0 flex gap-8 justify-center mt-[80px] ">
        
        <img
          src={image1}
          alt="Image1"
          className="w-[40%] h-[320px] object-cover z-10"
        />
        <img
          src={image1}
          alt="Image2"
          className="w-[40%] h-[320px] object-cover z-10"
        />
      </div>
    </div>
  );
};

export default Hero;
