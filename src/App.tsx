import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import { BsUmbrella } from "react-icons/bs";
import Choose from './Components/Choose'; // Make sure the import path is correct

const App: React.FC = () => {
  return (
    <div>
      <div className="bg-custom-gray"> 
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
        <Hero />  
      </div>

      <div>
      <Choose  />
      </div>
      
    </div>
  );
};

export default App;
