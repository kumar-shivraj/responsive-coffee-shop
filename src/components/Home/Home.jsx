import React from "react";
import HeroImg from "../../assets/coffee2.png";
const Home = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Text content section */}
          <div className="order-2 sm:order-1">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              We serve the richest{" "}
              <span className="text-primary font-cursive">Coffee</span> in the
              city
            </h1>
            <div>
              <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 text-white  hover:scale-105 duration-200">
                Coffee and Code
              </button>
            </div>
          </div>
          {/* Image section */}
          <div className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative">
            <img
              src={HeroImg}
              alt="HeroImg"
              className="w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin"
            />
            <div className="">Hey Coder</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
