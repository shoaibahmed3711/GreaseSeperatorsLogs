import React from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {
  
  return (
    <div className="flex flex-row">
      <div className="bg-[#ececec] border-r-[0.2vw] border-[#d5d5d5] flex flex-col items-center w-[25vw] h-[50vw]">
        {/* Profile */}
        <div className="hover:bg-[#d5d5d5] px-2  py-1 rounded-md mt-[1.5vh] flex flex-row justify-center items-center gap-[0.4vw]">
          <img
            src="public/Home/profile.png"
            className="w-[3vw] rounded-full"
            alt="icon"
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-black font-roboto font-extrabold text-[1.2vw]">
              Shoaib Ahmed
            </h1>
            <h1 className="text-black font-roboto font-bold text-[0.8vw]">
              xxxxxxxxxxx@gmail.com
            </h1>
          </div>
        </div>
        <div className="flex flex-col mt-[3vw]">
          <div>
            <Link
              to="/Analytics"
              className="text-black  rounded-sm w-[9vw] h-[2.3vw] text-[1vw] border-black border-l-[0.3vw] pt-[0.4vw] my-[0.4vw] px-[0.31vw] flex flex-row gap-[0.3vw] items-center hover:bg-[#d5d5d5]"
              style={{
                backgroundColor:
                  location.pathname === "/Analytics" ? "#c1c1c1" : "",
              }}
            >
              <img
                className="w-[1.6vw]"
                src="public/Dashboard/analytics.png"
                alt=""
              />
              <h1>Analytics</h1>
            </Link>
          </div>
          <div>
            <Link
              to="/Report"
              className="text-black  rounded-sm w-[9vw] h-[2.3vw] text-[1vw] border-black border-l-[0.3vw] pt-[0.4vw] my-[0.4vw] px-[0.31vw] flex flex-row gap-[0.3vw] items-center hover:bg-[#d5d5d5]"
              style={{
                backgroundColor: location.pathname === "/Report" ? "#c1c1c1" : "",
              }}
            >
              <img
                className="w-[1.6vw]"
                src="public/Dashboard/report.png"
                alt=""
              />
              <h1>Reports</h1>
            </Link>
          </div>
          <div>
            <Link
              to="/Integration"
              className="text-black  rounded-sm w-[9vw] h-[2.3vw] text-[1vw] border-black border-l-[0.3vw] pt-[0.4vw] my-[0.4vw] px-[0.31vw] flex flex-row gap-[0.3vw] items-center hover:bg-[#d5d5d5]"
              style={{
                backgroundColor:
                  location.pathname === "/Integration" ? "#c1c1c1" : "",
              }}
            >
              <img
                className="w-[1.6vw]"
                src="public/Dashboard/integration.png"
                alt=""
              />
              <h1>Integration</h1>
            </Link>
          </div>
          <div>
            <Link
              to="/Repositary"
              className="text-black  rounded-sm w-[9vw] h-[2.3vw] text-[1vw] border-black border-l-[0.3vw] pt-[0.4vw] my-[0.4vw] px-[0.31vw] flex flex-row gap-[0.3vw] items-center hover:bg-[#d5d5d5]"
              style={{
                backgroundColor: location.pathname === "/Help" ? "#c1c1c1" : "",
              }}
            >
              <img
                className="w-[1.6vw]"
                src="public/Dashboard/repo.png"
                alt=""
              />
              <h1>Repositary</h1>
            </Link>
          </div>
          <div>
            <Link
              to="/Logs"
              className="text-black  rounded-sm w-[9vw] h-[2.3vw] text-[1vw] border-black border-l-[0.3vw] pt-[0.4vw] my-[0.4vw] px-[0.31vw] flex flex-row gap-[0.3vw] items-center hover:bg-[#d5d5d5]"
              style={{
                backgroundColor: location.pathname === "/Logs" ? "#c1c1c1" : "",
              }}
            >
              <img
                className="w-[1.6vw]"
                src="public/Dashboard/logs.png"
                alt=""
              />
              <h1>Logs</h1>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="container h-[10vh] border-b-[0.2vw] border-[#d5d5d5] rounded-sm w-[85vw] top-[1vh] bg-[#ececec] flex flex-row justify-between py-1 px-2">
          <div className="flex flex-row justify-center items-center gap-[1vw]">
            <img
              src="public/Home/profile.png"
              className="w-[3vw] rounded-full"
              alt="icon"
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-black font-roboto font-extrabold text-[1.3vw]">
                Hi, Shoaib Ahmed
              </h1>
              <h1 className="text-black font-roboto text-[0.8vw]">
              Willkommen in Ihrem Dashboard
              </h1>
            </div>
          </div>

          <div className="flex items-center">
            <img
              className="w-[1.5vw] cursor-pointer"
              src="public/Home/profile.png"
              alt="Notifications"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;