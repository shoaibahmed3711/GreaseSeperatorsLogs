import React, { useState } from "react";

const Repositary = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [formData, setFormData] = useState({
    type: "",
    file: null,
    createdDate: "",
    modifiedDate: "",
  });
  const [tableData, setTableData] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleTab = (index) => {
    setActiveTab(index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, formData]);
    setFormData({
      type: "",
      file: null,
      createdDate: "",
      modifiedDate: "",
    });
    setIsFormVisible(false);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const openFileInNewTab = (fileUrl) => {
    window.open(fileUrl, "_blank");
  };


  return (
<div className='absolute top-[4vw] right-0 bg-[#ececec] p-[0.5vw] w-[84vw] overflow-y-auto'>    <h1 className="m-[1vw] font-bold text-[2vw]">Repository</h1>
    <div className="flex flex-col gap-[1vw] p-[1vw]">
      <ul className="flex flex-row gap-[1.3vw]">
        <li
          className="cursor-pointer font-bold font-roboto"
          onClick={() => toggleTab(0)}
          style={{
            borderBottom: activeTab === 0 ? "1px solid green" : "none",
          }}
        >
           <h1 className="text-[1.3vw]">All</h1>
        </li>
        <li
          className="cursor-pointer font-bold font-roboto"
          onClick={() => toggleTab(1)}
          style={{
            borderBottom: activeTab === 1 ? "1px solid green" : "none",
          }}
        >
           <h1 className="text-[1.3vw]">Documents</h1>
        </li>
        
      </ul>
      <div style={{ display: activeTab === 0 ? "" : "none" }}>
        <div className="box w-[80vw] h-[40vw] shadow-2xl p-[2vw] ">
          <div className=" flex flex-row justify-between mb-[1vw] px-[5vw]">
            <div className="flex flex-row gap-[4vw]">
              <div className="flex flex-row">
                <input
                  type="text"
                  placeholder="search.."
                  className="px-[2vw] py-[0.5vw] border-[#444444] border-[.1vw] bg-[#ececec] text-[1.3vw]"
                />
                <button className="bg-[#ececec] border-[#444444] border-[.1vw]">
                  <img
                    src="public/Repository/search.png"
                    className="w-[4vw] "
                    alt=""
                  />
                </button>
              </div>
              <button className="px-[2vw] py-[0.5vw] rounded-sm border-[#444444] border-[.1vw] bg-[#ececec] flex flex-row items-center">
                <img src="public/Repository/filter.png" className="w-[2vw]" alt="" />
                <h1 className="text-[1.3vw]">Filter</h1>
              </button>
            </div>
            <div>
                {!isFormVisible && (
                <button className="px-[2vw] py-[0.5vw] rounded-sm bg-[#444444] flex flex-row items-center gap-[0.2vw]"
                  onClick={toggleFormVisibility}
                > 
                <img src="public/Repository/upload.png" className="w-[2vw]" alt="" />
                   <h1 className="text-[1.3vw] text-white">Add File</h1>
                  </button>
                )}
           
            </div>
          </div>
          <div>
            <div className="table-container mx-[5vw]">
              <table className="w-[60vw] overflow-y-auto">
                <thead className="bg-[#444444] w-[80vw]">
                  <tr>
                    <th className="border p-[0.5vw]  text-[1vw]">
                      <div className="flex flex-row items-center justify-center gap-[0.3vw]">
                        <img
                          className="w-[2vw]"
                          src="public/Repository/folder.png"
                          alt=""
                        />
                        <h1 className="text-white">Folder Type</h1>
                      </div>
                    </th>
                    <th className="border p-[0.5vw]  text-[1vw]">
                      <div className="flex flex-row items-center justify-center gap-[0.3vw]">
                        <img
                          className="w-[2vw]"
                          src="public/Repository/filename.png"
                          alt=""
                        />
                        <h1 className="text-white">Name of File</h1>
                      </div>
                    </th>
                    <th className="border p-[0.5vw]  text-[1vw]">
                      <div className="flex flex-row items-center justify-center gap-[0.3vw]">
                        <img
                          className="w-[2vw]"
                          src="public/Repository/created.png"
                          alt=""
                        />
                        <h1 className="text-white">Created</h1>
                      </div>
                    </th>
                    <th className="border p-[0.5vw]  text-[1vw]">
                      <div className="flex flex-row items-center justify-center gap-[0.3vw]">
                        <img
                          className="w-[2vw]"
                          src="public/Repository/last.png"
                          alt=""
                        />
                        <h1 className="text-white">Last Modified</h1>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody >
                  {tableData.map((data, index) => (
                    <tr key={index}>
                      <td className="p-[1vw] bg-[#ececec] text-center">
                        {data.type}
                      </td>
                      <td className="p-[1vw] bg-[#ececec] text-center">
                        {data.file ? data.file.name : "No file uploaded"}
                      </td>
                      <td className="p-[1vw] bg-[#ececec] text-center">
                        {data.createdDate}
                      </td>
                      <td className="p-[1vw] bg-[#ececec] text-center">
                        {data.modifiedDate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {isFormVisible && (
              <div className="w-[25vw] bg-white shadow-lg absolute right-0 z-10 top-[15vw]  rounded-lg ml-4 h-[30vw]">
                <div className="flex justify-between p-[0.5vw]">
                  <button
                    className="hover:bg-red-500 w-[2vw] bg-white shadow-lg rounded-[0.7vw] text-white p-[0.2vw]"
                    onClick={toggleFormVisibility}
                  >
                    <img src="public/Repository/close.png" alt="" />
                  </button>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="overflow-y-auto p-[1vw] h-[30vw]"
                >
                  <div className="mb-[0.3vw]">
                    <h1 className="text-[1.2vw] font-semibold">Type:</h1>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="p-[1vw] w-[20vw]"
                      placeholder="Select Type"
                    >
                      <option value="Document">Document</option>
                      <option value="Image">Image</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <h1 className="text-[1.2vw] font-semibold">File:</h1>
                    <input
                      type="file"
                      name="file"
                      onChange={handleFileChange}
                      className="p-[1vw] w-[20vw]"
                    />
                  </div>
                  <div className="form-group">
                    <h1 className="text-[1.2vw] font-semibold">Created Date:</h1>
                    <input
                      type="date"
                      name="createdDate"
                      value={formData.createdDate}
                      onChange={handleInputChange}
                      className="p-[1vw] w-[20vw]"
                    />
                  </div>
                  <div className="form-group">
                    <h1 className="text-[1.2vw] font-semibold">Modified Date:</h1>
                    <input
                      type="date"
                      name="modifiedDate"
                      value={formData.modifiedDate}
                      onChange={handleInputChange}
                      className="p-[1vw] w-[20vw]"
                    />
                  </div>
                  <button className="bg-black mx-[7vw] font-roboto text-[1.2vw] rounded-sm py-[0.3vw] w-[8vw] text-white" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            )}
        </div>
      </div>
      </div>
      <div style={{ display: activeTab === 1 ? "block" : "none" }}>
        <div className="box w-[95vw] h-[40vw] shadow-2xl flex flex-wrap gap-[2vw] p-[2vw] overflow-auto">
          {tableData.map((data, index) => (
            <div
              key={index}
              className="file-box cursor-pointer "
              onClick={() => openFileInNewTab(URL.createObjectURL(data.file))}
            >
              <div className="file-preview text-center">
                {data.type === "Image" ? (
                  <img
                    src="public/Repository/img.png"
                    alt=""
                    className="w-[10vw] h-[10vw] object-contain border-[0.2vw] rounded-md border-[#444444] bg-[#ececec]"
                  />
                ) : (
                  <img
                    src="public/Repository/doc.png"
                    alt=""
                    className="w-[10vw] h-[10vw] object-contain border-[0.2vw] rounded-md border-[#444444] bg-[#ececec]"
                  />
                )}
                <p className="text-[1.2vw] mt-[0.5vw]">{data.file.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Repositary;