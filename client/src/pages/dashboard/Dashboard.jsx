import React,{useState} from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleNotification = () => {
    setIsVisible((prev) => !prev);
  };

  const [Visible, setVisible] = useState(false);
  const toggleNotice = () => {
    setVisible((prev) => !prev);
  };
  return (
    <div className="flex flex-row ">
      <div className="bg-white border-r-[0.2vw] border-[#d5d5d5] flex flex-col items-center w-[15vw] h-[50vw]">
      <div className="text-[1.5vw] font-bold text-left w-[13vw]">
        <Link to='/'>
          ← Home
        </Link>
          </div>
        {/* Profile */}
        <div className="hover:bg-[#d5d5d5] px-[0.2vw]  py-[0.4vw] rounded-[0.2vw] mt-[1.5vh] flex flex-row justify-center items-center gap-[0.4vw]">
          <img
            src="public/Home/profile.png"
            className="w-[3vw] rounded-[0.2vw]"
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
                src="/Dashboard/analytics.png"
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
                src="/Dashboard/report.png"
                alt=""
              />
              <h1>Reports</h1>
            </Link>
          </div>
          <div>
            <Link
              to="/Messages"
              className="text-black  rounded-sm w-[9vw] h-[2.3vw] text-[1vw] border-black border-l-[0.3vw] pt-[0.4vw] my-[0.4vw] px-[0.31vw] flex flex-row gap-[0.3vw] items-center hover:bg-[#d5d5d5]"
              style={{
                backgroundColor:
                  location.pathname === "/Messages" ? "#c1c1c1" : "",
              }}
            >
              <img
                className="w-[1.6vw]"
                src="/Dashboard/messages.png"
                alt=""
              />
              <h1>Messages</h1>
            </Link>
          </div>
          <div>
            <Link
              to="/Repositary"
              className="text-black  rounded-sm w-[9vw] h-[2.3vw] text-[1vw] border-black border-l-[0.3vw] pt-[0.4vw] my-[0.4vw] px-[0.31vw] flex flex-row gap-[0.3vw] items-center hover:bg-[#d5d5d5]"
              style={{
                backgroundColor: location.pathname === "/Repositary" ? "#c1c1c1" : "",
              }}
            >
              <img
                className="w-[1.6vw]"
                src="/Dashboard/repo.png"
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
                src="/Dashboard/logs.png"
                alt=""
              />
              <h1>Logs</h1>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[85vw]">
        <div className="container h-[4vw] border-[#d5d5d5] border-b-[0.2vw] bg-white flex flex-row justify-between py-[0.5vw] px-[1vw]">
          <div className="flex flex-row justify-center items-center gap-[1vw]">
            <img
              src="/Home/profile.png"
              className="w-[3vw] rounded-[0.2vw]"
              alt="icon"
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-black font-roboto font-extrabold text-[1.3vw]">
                Hello, Admin 
              </h1>
              <h1 className="text-black font-roboto text-[0.8vw]">
              Willkommen in Ihrem Dashboard
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-[3vw] mr-[2vw]">
          <div className="flex flex-row items-center gap-[1.2vw]">
          <button
            onClick={toggleNotice}
            className=" mx-[0.4vw] hover:bg-gray-300 p-[0.3vw] rounded-[0.2vw]"
          >
            <img className="w-[2vw]  " src="/Header/notice.png" alt="" />
          </button>
          {Visible && (
            <div
              className="absolute bg-gray-300 bg-opacity-50 backdrop-blur-md flex justify-center items-center z-[10] top-[4vw] right-[5vw] p-[0.5vw] rounded"
              style={{ width: "60vw", height: "10vw" }}
            >
              <img src="/Header/noticeboard.png" className="w-[8vw]" alt="" />
            </div>
          )}
          <button
            onClick={toggleNotification}
            className="mx-[0.4vw] hover:bg-gray-300 p-[0.3vw] rounded-[0.2vw]"
          >
            <img className="w-[2vw]" src="/Dashboard/bell.png" alt="" />
          </button>
          {isVisible && (
            <div
              className="absolute bg-gray-300 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-[10] top-[4vw] right-[5vw] p-[0.5vw] rounded"
              style={{ width: "20vw", height: "20vw" }}
            >
              <img src="/Dashboard/notice.png" className="w-[8vw]" alt="" />
            </div>
          )}
        </div>
            <img
              className="w-[2vw] cursor-pointer"
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