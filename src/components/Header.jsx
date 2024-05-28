import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navRoutes = [
    { path: "/", label: "Home", icon: "" },
    // { path: "/Login", label: "Dashboard" },
    { path: "/Problems", label: "Problems" },
    { path: "/Pricing", label: "Pricing" },
    { path: "/Help", label: "Help" },
    { path: "/Feedback", label: "Feedback" },
  ];
  return (
    <div className="bg-[#444444]  h-[4vw] flex flex-row justify-between px-[4vw]">
      <div className="text-white w-[7vw] flex  items-center h-[3vw]">
        <img src="/logo.png" alt="" />
      </div>
      <div className="text-white flex flex-row h-[6vw]">
        <ul className="flex flex-row gap-[1.5vw] mt-[1vw] ">
          {navRoutes.map((route, index) => (
            <li key={index} className="text-[1vw]">
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
        <Link to="/login" className=" mx-[2vw] ">
          <button className="bg-white text-[#444444] text-[1vw] py-[0.2vw] px-[0.4vw] rounded-[0.1vw] font-bold flex mt-[0.8vw] ">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;