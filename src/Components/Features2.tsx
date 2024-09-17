import React from 'react';
import Button from "./Button";

const Features2: React.FC = () => {
  return (
    <div className='mt-16 bg-white mb-8'>
      <div className="flex flex-col lg:flex-row justify-between ml-4 lg:ml-12">
        <span className="text-custom-green text-lg lg:text-xl mt-4 lg:mt-6">
          <p>Get a</p>
          <p>quote</p>
        </span>
        <span className='text-black font-bold text-3xl lg:text-6xl mt-4 lg:mt-0 lg:mr-16'>
          <p>Customizable coverage options for</p>
          <p>businesses of all types and sizes.</p>
        </span>
      </div>
      <div className='flex flex-col lg:flex-row items-center ml-4 lg:ml-12 mt-6 lg:mt-9'>
        <div className='text-zinc-500 flex-1 mt-4 text-base lg:text-lg'>
          <p>Get a world-class cover that rewards you</p>
          <p>with wealth while you're alive.</p>
        </div>
        <div className='flex-1 mt-4 lg:mr-36 w-full'>
          <hr className='border-gray-300 border-t-2' />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mt-6 lg:mt-6 lg:mr-24 w-full lg:w-auto items-center justify-center">
          <Button
            label="Get a quote"
            className="text-white text-sm px-6 py-2 bg-zinc-950 border border-black hover:border-gray-400 w-[220px] sm:w-auto"
          />
          <Button
            label="Let us Contact you"
            className="text-black text-sm px-6 py-2 border border-zinc-500 hover:border-black duration-300 w-[220px] sm:w-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Features2;
