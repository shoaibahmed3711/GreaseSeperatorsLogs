import React, { useState, useEffect } from "react";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
} from 'chart.js';

// Register the necessary components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip);
const Report = () => {

 // Default number of users for each month
 const defaultUsers = 0;
 const default1Users = 0;
 const default2Users = 0;
 const default3Users = 0;
 const default4Users = 0;
 const default5Users = 0;
 const default6Users = 0;
 const default7Users = 0;
 const default8Users = 0;
 const default9Users = 0;
 const default10Users = 0;
 const default11Users = 0;

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
 const chart1Data = {
   labels: Object.keys(monthlyData), // Use months as labels
   datasets: [
     {
       data: userData,
       borderColor: 'yellow', // Line color
       borderWidth: 2,
       fill: false,
     },
   ],
 };

 // Line chart options
 const chart1Options = {
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
 

 const chart2Data = {
  labels: Object.keys(monthlyData), // Use months as labels
  datasets: [
    {
      data: userData,
      borderColor: 'yellow', // Line color
      borderWidth: 2,
      fill: false,
    },
  ],
};

// Line chart options
const chart2Options = {
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

const chart3Data = {
  labels: Object.keys(monthlyData), // Use months as labels
  datasets: [
    {
      data: userData,
      borderColor: 'yellow', // Line color
      borderWidth: 2,
      fill: false,
    },
  ],
};

// Line chart options
const chart3Options = {
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

const chart4Data = {
  labels: Object.keys(monthlyData), // Use months as labels
  datasets: [
    {
      data: userData,
      borderColor: 'yellow', // Line color
      borderWidth: 2,
      fill: false,
    },
  ],
};

// Line chart options
const chart4Options = {
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
<div className='absolute top-[4vw] h-[42vw] right-0 bg-[#ececec] p-[0.5vw] w-[84vw] overflow-y-auto'>      
<div className="h-[10vw] m-[1vw] w-[82vw] flex flex-row justify-between items-center">
        <div className='flex flex-row gap-[1vw]'>
          <div className='flex flex-row gap-[1vw]'>
            <div className="bg-white flex flex-col gap-[2vw] shadow-lg h-[10vw] p-[1vw] w-[19.5vw] rounded-[1vw]">
              <div className='flex flex-row justify-between'>
              <h1 className='font-bold text-[1.5vw]'>New User</h1>
              <img src="/Report/newuser.png" className='w-[3vw]' alt="" />
              </div>
              <div className='flex flex-row justify-between'>
                <h1 className='font-bold text-[1.5vw]'>0</h1>
                <div className='w-[8.5vw] '>
                <Line data={chart1Data} options={chart1Options} />
                </div>
              </div>
            </div>
              
            <div className="bg-white flex flex-col gap-[2vw] shadow-lg h-[10vw] p-[1vw] w-[19.5vw] rounded-[1vw]">
            <div className='flex flex-row justify-between'>
              <h1 className='font-bold text-[1.5vw]'>Unique user</h1>
              <img src="/Report/unique.png" className='w-[3vw]' alt="" />
              </div>
              <div className='flex flex-row justify-between'>
                <h1 className='font-bold text-[1.5vw]'>0</h1>
                <div className='w-[8.5vw] '>
                <Line data={chart2Data} options={chart2Options} />
                </div>
              </div>
              </div>
              
          </div>
          <div className='flex flex-row gap-[1vw]'>
            <div className="bg-white flex flex-col gap-[2vw] shadow-lg h-[10vw] p-[1vw] w-[19.5vw] rounded-[1vw]">
            <div className='flex flex-row justify-between'>
              <h1 className='font-bold text-[1.5vw]'>Mentioned in Tags</h1>
              <img src="/Report/tags.png" className='w-[3vw]' alt="" />
              </div>
              <div className='flex flex-row justify-between'>
                <h1 className='font-bold text-[1.5vw]'>0</h1>
                <div className='w-[8.5vw] '>
                <Line data={chart3Data} options={chart3Options} />
                </div>
              </div>
              </div>
            <div className="bg-white flex flex-col gap-[2vw] shadow-lg h-[10vw] p-[1vw] w-[19.5vw] rounded-[1vw]">
            <div className='flex flex-row justify-between'>
              <h1 className='font-bold text-[1.5vw]'>Website Visits</h1>
              <img src="/Report/visits.png" className='w-[3vw]' alt="" />
              </div>
              <div className='flex flex-row justify-between'>
                <h1 className='font-bold text-[1.5vw]'>0</h1>
                <div className='w-[8.5vw] '>
                <Line data={chart4Data} options={chart4Options} />
                </div>
              </div>
              </div>
              
          </div>
        </div>
       
      </div>
      <div className="h-[20vw] mt-[2vw] ml-[1vw] w-[82vw] flex flex-row justify-between">
        <div className="bg-white shadow-lg p-[1vw] h-[28vw] w-[41vw] rounded-[1vw]">
          <h1  className='font-bold text-[1.2vw]'>Best selling Products</h1>
         
         
          <div className='bg-[#ececec] w-[39vw] h-[4vw] rounded-md m-[0.2vw]  flex flex-row items-center justify-between px-[1vw]'>
            <div className='flex flex-row items-center'>
              <img src="/Report/profile.png" className='w-[3.2vw] m-[0.3vw]' alt="" />
                <h1 className='m-[0.3vw] text-[1.4vw]'>Grease Seperator</h1>
            </div>
              <div className='flex flex-col text-center'>
                <h1 className='font-bold text-[#454545]  text-[1vw]'>sold</h1>
                <h1 className='font-bold text-[1vw]'>no of unit</h1>
              </div>
          </div>
        </div>
        
        <div className="bg-white shadow-lg p-[1vw] h-[28vw] w-[40vw] rounded-[1vw]">
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
                      src="/Dashboard/images/profile.png"
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
        <div className="absolute bottom-0 left-[45vw]">
          <button
            className="w-[3vw] p-[0.1vw] rounded"
            onClick={() => setFormVisible(true)}
          >
            <img src="/Report/add.png" alt="" />
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
              <img src="/Report/close.png" alt="" />
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