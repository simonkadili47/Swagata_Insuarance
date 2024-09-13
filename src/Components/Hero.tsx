import React from "react";
import Button from "./Button";

const Hero: React.FC = () => {
  return (
    <div className="justify-between">
      <div className=" flex flex-col md:flex-row">
        <div className="text-5xl font-bold ml-24">
          <p>Taking Care of What's</p>
          <p>Important.</p>
        </div>
        <div className="ml-56 mt-4 md:mt-0">
          <p>We've built our life and business insurance</p>
          <p>products from the ground up to both</p>
          <p>protect you and reward you.</p>

          <div className="mt-6 flex ">
            <Button
              label="Start free trial"
              
              className="text-white px-6 bg-black  py-2 border border-black"
            />

            <Button
              label="Our Study Case"
              className="text-black px-6 py-2 ml-4 border border-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
