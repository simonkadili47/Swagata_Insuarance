import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';

const App: React.FC = () => {
  return (
    <div className="">
      <div className="bg-custom-gray pb-72">
        <Navbar />
        <div className="w-full mt-16">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default App;
