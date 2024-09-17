import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { BsUmbrella } from "react-icons/bs";
import Choose from "./Components/Choose";
import Protections from "./Components/protection";
import Features from "./Components/Features";
import Features2 from "./Components/Features2";
import Footer from "./Components/Footer";

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
      <Choose />

      <Protections />
      <Features />
      <Features2/>
      <Footer/>

    </div>
  );
};

export default App;
