import React from "react";
import Header from "../component/Header";
import Hero from "../component/Hero";
import About from "../component/About";
import Service from "../component/Service";
import FAQ from "../component/FAQ";
import Footer from "../component/Footer";
import OurTopPatner from "../component/OurTopPatner";
import RoadMap from "../component/RoadMap";

const FrontPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Service />
      <RoadMap />
      <OurTopPatner />
      <FAQ />
      <Footer />
    </div>
  );
};

export default FrontPage;
