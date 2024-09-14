import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';

const App: React.FC = () => {
  return (
    <div className="relative">
      <div className="bg-custom-gray p-4 pb-52 relative">
        <Navbar />
        <div className="mt-16">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default App;
