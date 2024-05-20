import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";

const Logs = () => {
  const [formData, setFormData] = useState({
    EntryDate: "",
    Name: "",
    RequesterEmail: "",
    CustomerEmail: "",
    Summary: "",
  });

  const [isFormVisible, setFormVisible] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [srNo, setSrNo] = useState(1);
  const [rows, setRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    const savedRows = localStorage.getItem("rows");
    if (savedRows) {
      setRows(JSON.parse(savedRows));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("rows", JSON.stringify(rows));
  }, [rows]);

  const addEmployee = () => {
    const newEmployee = {
      id: srNo,
      EntryDate: formData.EntryDate,
      Name: formData.Name,
      RequesterEmail: formData.RequesterEmail,
      CustomerEmail: formData.CustomerEmail,
      Summary: formData.Summary,
    };
    setRows([...rows, newEmployee]);
    setSrNo(srNo + 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      setRows((prevRows) => {
        const updatedRows = [...prevRows];
        updatedRows[editIndex] = formData;
        return updatedRows;
      });
      setEditIndex(null);
    } else {
      addEmployee();
    }

    setFormData({
      EntryDate: "",
      Name: "",
      RequesterEmail: "",
      CustomerEmail: "",
      Summary: "",
    });

    setFormVisible(false);
  };

  const handleDelete = (index) => {
    setRows((prevRows) => prevRows.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    const employeeToEdit = rows[index];
    setFormData(employeeToEdit);
    setEditIndex(index);
    setFormVisible(true);
  };

  const toggleFormVisibility = () => {
    setFormVisible((prevVisibility) => !prevVisibility);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleFilter = () => {
    let filteredRows = [];
    if (filter === "Active") {
      filteredRows = rows.filter((row) => row.status === "Active");
    } else if (filter === "Inactive") {
      filteredRows = rows.filter((row) => row.status === "Inactive");
    } else {
      filteredRows = rows;
    }
    setRows(filteredRows);
  };

  const handleExport = () => {
    const doc = new jsPDF();
    rows.forEach((row, index) => {
      const yPos = 10 + index * 10;
      doc.text(`${row.CustomerEmail} - ${row.status}`, 10, yPos);
    });
    doc.save("employee_table.pdf");
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRows = rows.filter((row) => {
    if (filter === "All") {
      return row.CustomerEmail.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return (
        row.status === filter &&
        row.CustomerEmail.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  });

  return (
    <div className="absolute top-[18.8vh] right-0 h-full bg-white p-[1vw] w-[85vw] overflow-y-auto">
      <h1 className="text-[2.5vw] font-bold font-roboto ">Logs</h1>
      <button className="text-white text-[1.1vw] my-[2vw] bg-[#444444] py-[0.5vw] px-[1.5vw] font-semibold">
        Integrate Logs
      </button>
      <div className="h-[50vw]">
        <div className="bg-white w-[80vw] h-[3vw] flex flex-row justify-between overflow-y-auto px-[2vw] items-center">
          <div>
            <input
              className="p-[0.3vw] w-[25vw] text-[1.3vw] border-[.1vw] border-[#444444] rounded-[0.2vw] mx-[1vw]"
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div>
            <button
              className="w-[3vw]  mx-[0.5vw] rounded-md"
              onClick={handleRefresh}
            >
              <img src="public/Logs/refresh.png" alt="" />
            </button>
            <button
              className="w-[3vw]  mx-[0.5vw] rounded-md"
              onClick={handleFilter}
            >
              <img src="public/Logs/filter.png" alt="" />
            </button>
            <button
              className="w-[3vw]  mx-[0.5vw] rounded-md"
              onClick={handleExport}
            >
              <img src="public/Logs/export.png" alt="" />
            </button>
          </div>
        </div>
        <table className="w-[80vw] overflow-y-auto">
          <thead className="bg-[#444444] w-[80vw]">
            <tr className="w-[80vw]">
              <th className="border text-white p-[0.5vw] text-[1vw]">Sr no</th>
              <th className="border text-white p-[0.5vw] text-[1vw]">
                Time Stamp
              </th>
              <th className="border text-white p-[0.5vw] text-[1vw]">Name</th>
              <th className="border text-white p-[0.5vw] text-[1vw]">
                Requester Email
              </th>
              <th className="border text-white p-[0.5vw] text-[1vw]">
                Customer Email
              </th>
              <th className="border text-white p-[0.5vw] text-[1vw]">
                Summary
              </th>
              <th className="border text-white p-[0.5vw] text-[1vw]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="rounded-lg  w-[80vw] text-center">
            {filteredRows.map((row, index) => (
              <tr key={index}>
                <td className="border-[0.1vw] border-[#444444]">{index + 1}</td>
                <td className="border-[0.1vw] border-[#444444]">
                  {row.EntryDate}
                </td>
                <td className="border-[0.1vw] border-[#444444]">{row.Name}</td>
                <td className="border-[0.1vw] border-[#444444]">
                  {row.RequesterEmail}
                </td>
                <td className="border-[0.1vw] border-[#444444]">
                  {row.CustomerEmail}
                </td>
                <td className="border-[0.1vw] border-[#444444]">
                  {row.Summary}
                </td>
                <td className="p-[0.1vw] border-[0.1vw] border-[#444444]">
                  <button
                    className="hover:bg-blue-500 p-2 rounded-full mb-2 mr-[0.6vw]"
                    onClick={() => handleEdit(index)}
                  >
                    <img src="/HRM/edit.png" className="w-[1.4vw]" alt="" />
                  </button>
                  <button
                    className="hover:bg-red-500 p-2 rounded-full"
                    onClick={() => handleDelete(index)}
                  >
                    <img src="/HRM/Trash.png" className="w-[1.4vw]" alt="" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!isFormVisible && (
        <div className="absolute bottom-4 left-4">
          <button
            className="w-[4vw] text-white p-2 rounded"
            onClick={toggleFormVisibility}
          >
            <img src="public/Logs/add.png" alt="" />
          </button>
        </div>
      )}

      {isFormVisible && (
        <div className="w-[30vw] bg-white shadow-lg absolute right-0 z-10 top-0 overflow-y-auto rounded-lg ml-4 h-[35vw]">
          <div className="flex justify-between p-4">
            <button
              className="hover:bg-red-500  bg-white shadow-lg rounded-[0.7vw] text-white p-[0.3vw]"
              onClick={toggleFormVisibility}
            >
              <img
                src="public/Logs/close.png"
                className="w-[2vw]"
                alt=""
              />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="overflow-y-auto p-[1vw] ">
            <div className="mb-[0.3vw]">
              <label htmlFor="EntryDate" className="block mb-1">
                Time Stamp:
              </label>
              <input
                type="date"
                name="EntryDate"
                value={formData.EntryDate}
                onChange={handleChange}
                className="p-[0.5vw] w-full border"
                
              />
            </div>

            <div className="mb-[0.3vw]">
              <label htmlFor="Name" className="block mb-1">
                Name:
              </label>
              <input
                type="text"
                id="Name"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                placeholder="Enter Name"
              />
            </div>
            <div className="mb-[0.3vw]">
              <label htmlFor="RequesterEmail" className="block mb-1">
                Requester Email:
              </label>
              <input
                type="text"
                id="RequesterEmail"
                name="RequesterEmail"
                value={formData.RequesterEmail}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                placeholder="Enter Requester Email"
              />
            </div>
            <div className="mb-[0.3vw]">
              <label htmlFor="CustomerEmail" className="block mb-1">
                Customer Email:
              </label>
              <input
                type="text"
                id="CustomerEmail"
                name="CustomerEmail"
                value={formData.CustomerEmail}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                placeholder="Enter Customer Email"
              />
            </div>
            <div className="mb-[0.3vw]">
              <label htmlFor="Summary" className="block mb-1">
                Summary:
              </label>
              <input
                type="text"
                id="Summary"
                name="Summary"
                value={formData.Summary}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                placeholder="Enter Summary"
              />
            </div>
            <div className="mb-[0.3vw]">
              {/* Status input field */}
              <label htmlFor="status" className="block mb-1">
                Status:
              </label>
              <select
                className="p-[1vw] text-[1vw] w-[13vw] rounded-md border"
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-black text-white p-2 rounded w-full"
            >
              {editIndex !== null ? "Edit" : "Add "}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Logs;
