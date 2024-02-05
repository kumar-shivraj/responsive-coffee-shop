import React from "react";
import Logo from "../../assets/website/coffee_logo.png";

const Navbar = () => {
  const menus = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Services",
      link: "/#services",
    },
    {
      id: 3,
      name: "About",
      link: "/#about",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
      <div className="container py-2">
        <div className="flex">
          {/* logo section */}
          <div className="">
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex justify-center aligns-center gap-2 tracking-wider font-cursive"
            >
              <img src={Logo} alt="Logo" className="w-16" /> Coffee Cafe
            </a>
          </div>
          {/* link section */}
          <div className="flex justify-between items-center gap-4">
            <ul className="hidden sm:flex items-center gap-4 ">
              {menus.map((menu, index) => (
                <li key={index}>
                  <a href={menu.link} className="">
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration:200">Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
