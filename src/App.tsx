import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';


const App: React.FC = () => {
  return (
    <div>
      <div className='bg-custom-gray pb-64'>
      <Navbar />
     <div className='mt-24'>
     <Hero/>
     </div>
      </div>
      
    
      
    </div>
  );
};

export default App;
