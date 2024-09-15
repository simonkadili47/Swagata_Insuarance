import React from 'react';

const Choose: React.FC = () => {
  return (
    <div className="container mx-auto px-6 relative w-full mt-72">
      <div className="bg-white mb-4">
        <div className="border-t border-gray-400 w-full"></div>
      </div>

      <div className="bg-white lg:col-start-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
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

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-8">
        <div className="text-xl text-green-500 font-bold lg:text-left lg:w-1/2">
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

          <div className="absolute right-0 txt-sm  mr-68 flex  ">
            <div className="flex flex-col items-center">
              <div className="text-gray-500 font-bold">
                <p>Swagata insuarance is a digital-first  insurer, using technology to make</p> 
                <p> life insuarance simpler, smarter and more rewarding.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
