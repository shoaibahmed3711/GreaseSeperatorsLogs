import React, { useState, useEffect } from "react";

import { Line } from 'react-chartjs-2';
const Report = () => {

 // Default number of users for each month
 const defaultUsers = 250;
 const default1Users = 270;
 const default2Users = 255;
 const default3Users = 260;
 const default4Users = 265;
 const default5Users = 270;
 const default6Users = 263;
 const default7Users = 273;
 const default8Users = 270;
 const default9Users = 276;
 const default10Users = 271;
 const default11Users = 280;

 // Data for the line chart (only user data, no labels)
 const monthlyData = {
   Jan: defaultUsers,
   Feb: default1Users,
   Mar: default2Users,
   Apr: default3Users,
   May: default4Users,
   June: default5Users,
   July: default6Users,
   Aug: default7Users,
   Sep: default8Users,
   Oct: default9Users,
   Nov: default10Users,
   Dec: default11Users,
 };

 // Extracting data (number of users) from monthlyData object
 const userData = Object.values(monthlyData);

 // Line chart data
 const chartData = {
   labels: Object.keys(monthlyData), // Use months as labels
   datasets: [
     {
       data: userData,
       borderColor: 'green', // Line color
       borderWidth: 2,
       fill: false,
     },
   ],
 };

 // Line chart options
 const chartOptions = {
   plugins: {
     tooltip: {
       callbacks: {
         label: function(context) {
           return `Users: ${context.parsed.y}`;
         },
       },
     },
     legend: {
       display: false, // Hide legend
     },
   },
   elements: {
     point: {
       radius: 0, // Hide points
     },
   },
   scales: {
     y: {
       display: false, // Hide y-axis
     },
     x: {
       display: false, // Hide x-axis
     },
   },
 };
 
 const [formData, setFormData] = useState({
  profilePic: null,
  name: "",
  issueDate: "",
  expiryDate: "",
});
const [isFormVisible, setFormVisible] = useState(false);
const [srNo, setSrNo] = useState(1);
const [rows, setRows] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [filter, setFilter] = useState("All");

useEffect(() => {
  const savedData = localStorage.getItem("formData");
  if (savedData) {
    setFormData(JSON.parse(savedData));
  }
  const savedRows = localStorage.getItem("rows");
  if (savedRows) {
    setRows(JSON.parse(savedRows));
  }
  const savedSrNo = localStorage.getItem("srNo");
  if (savedSrNo) {
    setSrNo(parseInt(savedSrNo));
  }
}, []);

useEffect(() => {
  localStorage.setItem("formData", JSON.stringify(formData));
  localStorage.setItem("rows", JSON.stringify(rows));
  localStorage.setItem("srNo", srNo.toString());
}, [formData, rows, srNo]);

const addEmployee = () => {
  const newEmployee = {
    id: srNo,
    name: `Employee ${srNo}`,
  };
  setRows([...rows, newEmployee]);
  setSrNo(srNo + 1);
};

const handleIssueDate = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

const handleExpiryDateChange = (e) => {
  setFormData({ ...formData, expiryDate: e.target.value });
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: name === "code" ? value.toUpperCase().replace(/[^A-Z-]/g, "") : value,
  }));
};

const handleFileChange = (e) => {
  setFormData((prevData) => ({
    ...prevData,
    profilePic: e.target.files[0],
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  setRows((prevRows) => [...prevRows, formData]);
  setFormData({
    profilePic: null,
    name: "",
    issueDate: "",
    expiryDate: "",
  });
  setFormVisible(false);
};

const handleSearch = (e) => {
  setSearchTerm(e.target.value);
};

const filteredRows = rows.filter((row) => {
  if (filter === "All") {
    return row.name.toLowerCase().includes(searchTerm.toLowerCase());
  } else {
    return (
      row.status === filter &&
      row.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
});



  return (
    <div className='absolute top-[18.8vh] right-0 h-full bg-[#ececec] p-[1vw] w-[85vw] overflow-y-auto'>
      <div className="h-[20vw] m-[1vw] w-[82vw] flex flex-row justify-between items-center">
        <div className='flex flex-row gap-[1vw]'>
          <div className='flex flex-col gap-[1vw]'>
            <div className="bg-white flex flex-col gap-[2vw] shadow-lg h-[10vw] p-[1vw] w-[20vw] rounded-[1vw]">
              <div className='flex flex-row justify-between'>
              <h1 className='font-bold text-[1.5vw]'>New User</h1>
              <img src="public/Report/newuser.png" className='w-[3vw]' alt="" />
              </div>
              <div className='flex flex-row justify-between'>
                <h1 className='font-bold text-[1.5vw]'>1.33k</h1>
                <div className='w-[8.5vw] '>
                <Line data={chartData} options={chartOptions} />
                </div>
              </div>
            </div>
              
            <div className="bg-white flex flex-col gap-[2vw] shadow-lg h-[10vw] p-[1vw] w-[20vw] rounded-[1vw]">
            <div className='flex flex-row justify-between'>
              <h1 className='font-bold text-[1.5vw]'>Unique user</h1>
              <img src="public/Report/unique.png" className='w-[3vw]' alt="" />
              </div>
              <div className='flex flex-row justify-between'>
                <h1 className='font-bold text-[1.5vw]'>230</h1>
                <div className='w-[8.5vw] '>
                <Line data={chartData} options={chartOptions} />
                </div>
              </div>
              </div>
              
          </div>
          <div className='flex flex-col gap-[1vw]'>
            <div className="bg-white flex flex-col gap-[2vw] shadow-lg h-[10vw] p-[1vw] w-[20vw] rounded-[1vw]">
            <div className='flex flex-row justify-between'>
              <h1 className='font-bold text-[1.5vw]'>Mentioned in Tags</h1>
              <img src="public/Report/tags.png" className='w-[3vw]' alt="" />
              </div>
              <div className='flex flex-row justify-between'>
                <h1 className='font-bold text-[1.5vw]'>110</h1>
                <div className='w-[8.5vw] '>
                <Line data={chartData} options={chartOptions} />
                </div>
              </div>
              </div>
              
            <div className="bg-white flex flex-col gap-[2vw] shadow-lg h-[10vw] p-[1vw] w-[20vw] rounded-[1vw]">
            <div className='flex flex-row justify-between'>
              <h1 className='font-bold text-[1.5vw]'>Website Visits</h1>
              <img src="public/Report/visits.png" className='w-[3vw]' alt="" />
              </div>
              <div className='flex flex-row justify-between'>
                <h1 className='font-bold text-[1.5vw]'>1.98k</h1>
                <div className='w-[8.5vw] '>
                <Line data={chartData} options={chartOptions} />
                </div>
              </div>
              </div>
              
          </div>
        </div>
        <div className="bg-white shadow-lg h-[21vw] w-[40vw] rounded-[1vw]">
          
        </div>
      </div>
      <div className="h-[20vw] mt-[2vw] ml-[1vw] w-[82vw] flex flex-row justify-between items-center">
        <div className="bg-white shadow-lg p-[1vw] h-[21vw] w-[41vw] rounded-[1vw]">
          <h1  className='font-bold text-[1.2vw]'>Best selling Products</h1>
          <div className='bg-[#ececec] w-[39vw] h-[4vw] rounded-md m-[0.2vw]  flex flex-row items-center justify-between px-[1vw]'>
            <div className='flex flex-row items-center'>
              <img src="public/Report/profile.png" className='w-[3.2vw] m-[0.3vw]' alt="" />
                <h1 className='m-[0.3vw]'>Grease Seperator</h1>
            </div>
              <div className='flex flex-col text-center'>
                <h1 className='font-bold text-[#454545]'>sold</h1>
                <h1 className='font-bold'>no of unit</h1>
              </div>
          </div>
          <div className='bg-[#ececec] w-[39vw] h-[4vw] rounded-md m-[0.2vw]  flex flex-row items-center justify-between px-[1vw]'>
            <div className='flex flex-row items-center'>
              <img src="public/Report/profile.png" className='w-[3.2vw] m-[0.3vw]' alt="" />
                <h1 className='m-[0.3vw]'>Grease Seperator</h1>
            </div>
              <div className='flex flex-col text-center'>
                <h1 className='font-bold text-[#454545]'>sold</h1>
                <h1 className='font-bold'>no of unit</h1>
              </div>
          </div>
          <div className='bg-[#ececec] w-[39vw] h-[4vw] rounded-md m-[0.2vw]  flex flex-row items-center justify-between px-[1vw]'>
            <div className='flex flex-row items-center'>
              <img src="public/Report/profile.png" className='w-[3.2vw] m-[0.3vw]' alt="" />
                <h1 className='m-[0.3vw]'>Grease Seperator</h1>
            </div>
              <div className='flex flex-col text-center'>
                <h1 className='font-bold text-[#454545]'>sold</h1>
                <h1 className='font-bold'>no of unit</h1>
              </div>
          </div>
        </div>
        
        <div className="bg-white shadow-lg p-[1vw] h-[21vw] w-[40vw] rounded-[1vw]">
          <h1  className='font-bold text-[1.2vw]'>Active Customer</h1>
          <div className="h-[20vw]">
        <table className="w-[36vw] overflow-y-auto">
          <thead className="bg-[#444444] w-[80vw]">
            <tr className="w-[80vw]">
              <th className="border p-[0.5vw] text-[1vw]">Picture</th>
              <th className="border p-[0.5vw] text-[1vw]">Name</th>
              <th className="border p-[0.5vw] text-[1vw]">Added date</th>
              <th className="border p-[0.5vw] text-[1vw]">Last added</th>
            </tr>
          </thead>
          <tbody className="rounded-lg bg-[#ececec] w-[80vw] text-center">
            {filteredRows.map((row, index) => (
              <tr key={index}>
                <td>
                  {row.profilePic ? (
                    <img
                      src={URL.createObjectURL(row.profilePic)}
                      alt="Profile"
                      width={50}
                      height={50}
                      className="rounded-full ml-[2vw]"
                    />
                  ) : (
                    <img
                      src="src/pages/Dashboard/images/profile.png"
                      className="w-[2vw] mx-auto"
                      alt=""
                    />
                  )}
                </td>
                <td className="p-[1.5vw]">{row.name}</td>
                <td className="p-[1.5vw]">{row.issueDate}</td>
                <td className="p-[1.5vw]">{row.expiryDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!isFormVisible && (
        <div className="absolute bottom-0 left-[46vw]">
          <button
            className="w-[3vw] p-[0.1vw] rounded"
            onClick={() => setFormVisible(true)}
          >
            <img src="public/Report/add.png" alt="" />
          </button>
        </div>
      )}

      {isFormVisible && (
        <div className="w-[25vw] bg-white shadow-lg absolute right-0 z-10 overflow-y-auto rounded-lg ml-4 top-[20vw] h-[24vw]">
          <div className="flex justify-between p-[0.5vw]">
            <button
              className="hover:bg-red-500 w-[2vw] bg-white shadow-lg rounded-[0.7vw] text-white p-[0.2vw]"
              onClick={() => setFormVisible(false)}
            >
              <img src="public/Report/close.png" alt="" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="overflow-y-auto p-[1vw] ">
            <div className="mb-[0.3vw]">
              <label htmlFor="profilePic" className="block mb-1">
                Picture:
              </label>
              <input
                type="file"
                name="profilePic"
                accept="image/*"
                onChange={handleFileChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mb-[0.3vw]">
              <label htmlFor="name" className="block mb-1">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mb-[0.3vw]">
              <label htmlFor="issueDate" className="block mb-1">
                Added Date:
              </label>
              <input
                type="date"
                id="issueDate"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleIssueDate}
                className="border p-2 rounded w-full"
                placeholder="MM/DD/YYYY"
              />
            </div>

            <div className="mb-[0.3vw]">
              <label htmlFor="expiryDate" className="block mb-1">
                Last added:
              </label>
              <input
                type="date"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleExpiryDateChange}
                className="border p-2 rounded w-full"
                placeholder="MM/DD/YYYY"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white p-2 rounded w-full"
            >
              Add
            </button>
          </form>
        </div>
      )}
        </div>
      </div>
    </div>
  );
};

export default Report;