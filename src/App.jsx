import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in-out",
      delay: 100,
    });
  });
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
