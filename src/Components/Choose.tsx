import React, { useEffect, useRef, useState } from "react";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { MdArrowOutward, MdPhoneAndroid } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";

const Choose: React.FC = () => {
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
    <div className="container mx-auto px-6 relative w-full mt-72">
      <div className="bg-white mb-4 pt-6">
        <div className="border-t border-gray-400 w-full"></div>
      </div>

      <div
        ref={heroRef}
        className={`bg-white lg:col-start-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 ${isVisible ? "animate-fadeInDown" : ""}`}
      >
        <div className={`p-4 ${isVisible ? "animate-fadeInDown" : ""}`}>
          <div className="text-black font-bold text-xl lg:text-3xl">
            <p>Simpler, smarter, more</p>
            <p>rewarding cover.</p>
          </div>
        </div>

        <div className={`p-4 ${isVisible ? "animate-fadeInDown" : ""}`}>
          <div className="text-gray-700">
            <span className="text-black text-lg lg:text-xl font-bold">
              <p>We help make sure you have no gaps</p>
            </span>
            <p className="text-sm mt-1">
              With Swagata, you get comprehensive, not patchwork protection
            </p>
          </div>
        </div>

        <div className={`p-4 ${isVisible ? "animate-fadeInDown" : ""}`}>
          <div className="text-gray-700">
            <span className="text-lg lg:text-xl text-black font-bold">
              <p>We look out for you.</p>
            </span>
            <p className="text-sm mt-1">
              You get a proactive partner to help prevent issues from happening in the first place
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-8">
        <div className="text-xl text-custom-green font-bold lg:text-left lg:w-1/2">
          <p>Why you choose</p>
          <p>Swagata</p>
        </div>

        <div className="text-black font-bold text-xl lg:text-5xl">
          <p>Build from the ground up for the internet generation.</p>
        </div>
      </div>

      <div className="mt-16 flex justify-center relative">
        <div className="relative w-full flex items-center">
          <div className="border-t border-gray-400" style={{ width: '55%' }}></div>

          <div className="absolute right-0 text-sm mr-68 flex">
            <div className="flex flex-col items-center">
              <div className="text-gray-500 font-bold">
                <p>Swagata insurance is a digital-first insurer, using technology to make</p>
                <p>life insurance simpler, smarter and more rewarding.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* container */}
      <div className="bg-white lg:col-start-1 mt-20 lg:col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="p-4 border bg-custom-orange rounded-lg">
          <div className="text-white font-semibold text-md lg:text-md">
            <div className='flex justify-between'>
              <MdPhoneAndroid />
              <span className='font-normal'><p>Learn more</p></span>
            </div>
            <div className='mx-2 mt-4'>
              <p>Do everything online in no time. No more paperwork</p>
            </div>
            <div className='font-normal text-md mt-1'>
              <p>Get quoted and covered in under 10 minutes online.</p>
            </div>
          </div>
        </div>

        <div className={`p-4 ${isVisible ? "animate-fadeInDown" : ""}`}>
          <div className="text-black text-md lg:text-md">
            <div className='flex justify-between'>
              <RxCounterClockwiseClock />
              <MdArrowOutward />
            </div>
            <div className='mx-2 mt-4 font-bold text-md'>
              <p>You're covered instantly with Swagata insurance</p>
            </div>
            <div className='text-zinc-500 text-md mt-2 ml-2'>
              <p>Buy your insurance online and get instant cover, before you've even paid for it.</p>
            </div>
          </div>
        </div>

        <div className={`p-4 ${isVisible ? "animate-fadeInDown" : ""}`}>
          <div className="text-black text-md lg:text-md">
            <div className='flex justify-between'>
              <CiCalendar />
              <MdArrowOutward />
            </div>
            <div className='mx-2 mt-6 font-bold text-md'>
              <p>Skip premiums. For when life happens.</p>
            </div>
            <div className='text-zinc-500 text-md mt-2 ml-2'>
              <p>We let you proactively skip premiums without losing cover or your Wealth Bonus.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
