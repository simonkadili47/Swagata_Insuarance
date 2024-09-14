import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import { BsUmbrella } from "react-icons/bs";

const App: React.FC = () => {
  return (
    <div>
      <div className="bg-custom-gray pb-72"> 
        <Navbar
          brandName="Swagata"
          brandIcon={<BsUmbrella />} 
          links={[
            { label: "Our Product", href: "#product" },
            { label: "Why Swagata", href: "#why" },
            { label: "Study Case", href: "#study" },
            { label: "About Us", href: "#about" },
            { label: "Contact Us", href: "#contact" },
          ]}
        />
        <div className="w-full mt-16"> 
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default App;
