import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRoutes = [
    { path: "/", label: "Home" },
    { path: "/Problems", label: "Problems" },
    { path: "/Pricing", label: "Pricing" },
    { path: "/Help", label: "Help" },
    { path: "/Feedback", label: "Feedback" },
  ];

  return (
    <div className="bg-[#444444] h-full flex flex-row justify-around items-center py-[10px]">
      <div className="w-[90px] flex items-center">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="text-white flex flex-row items-center">
        <div className="hidden lg:flex flex-row items-center gap-[20px]">
          <ul className="flex flex-row gap-[15px]">
            {navRoutes.map((route, index) => (
              <li key={index} className="text-[15px]">
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-white text-[#444444] p-[0.4vw] rounded-[0.1vw] font-bold"
                      : "text-white"
                  }
                >
                  {route.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/login" className="mx-[2vw]">
            <button className="bg-white hover:bg-gray-300 text-[#444444] text-[15px] py-[5px] px-[10px] rounded-[2px] font-bold flex">
              Login
            </button>
          </Link>
        </div>
        <div className="flex lg:hidden items-center">
          <div
            className="flex flex-col justify-between gap-[6px] cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="bg-white h-[4px] rounded-full w-[35px]"></div>
            <div className="bg-white h-[4px] rounded-full w-[25px]"></div>
            <div className="bg-white h-[4px] rounded-full w-[15px]"></div>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-[#444444] w-full  absolute top-[75px] p-[10px] left-0 flex flex-col items-center z-10">
          <ul className="flex flex-col gap-[2vw] mt-[4vw] text-center">
            {navRoutes.map((route, index) => (
              <li key={index} className="text-[3vw]">
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-white text-[#444444] p-[0.8vw] rounded-[0.2vw] font-bold"
                      : "text-white"
                  }
                  onClick={() => setMenuOpen(false)} // Close menu on link click
                >
                  {route.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/login" className="mt-[2vw]">
            <button className="bg-white text-[#444444] text-[3vw] py-[0.5vw] px-[1vw] rounded-[0.2vw] font-bold">
              Login
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
