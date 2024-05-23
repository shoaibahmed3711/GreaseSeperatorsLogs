import React, { useState }  from "react";
import { Link } from "react-router-dom";
const Help = () => {


  return (
    <div className=" flex flex-col shadow-xl  bg-[#ececec] rounded-md p-[1vw]">
    <div className="bg-[#444444] p-[1vw]  text-white mx-auto rounded-[5px] ">
      <h1 className="font-bold text-[28px] text-center">
        Welcome to Grease Separator Help Center👋
      </h1>
      <p className=" text-[14px] text-center">
        Welcome to the Grease Separator Help Center! This is your go-to
        resource for all your questions and concerns related to grease
        separator management in the catering industry. Whether you're a
        restaurant owner, operator, or maintenance personnel, we're here to
        provide you with the assistance you need to streamline your operations
        and ensure compliance with regulations.
      </p>
    </div>
    <div className="flex flex-col flex-wrap mx-auto">
      <div className="flex flex-col mx-auto md:flex-row ">
      <div className=" flex flex-col w-[250px] h-[280px] p-[13px] rounded-[0.4vw] bg-white m-[1vw] gap-[30px]">
        <img src="public/Help/1.png" className="w-[50px] shadow-lg" alt="" />
        <h1 className="text-[14px] font-bold mt-[1vw]">Beginnings</h1>
        <p className="text-[12px]">
          Discover grease separator basics for German restaurant owners: function, importance, and management responsibilities.
        </p>
        <Link to='/Chat'>Apply</Link>
      </div>
      <div className="flex flex-col w-[250px] h-[280px] p-[13px] rounded-[0.4vw] bg-white m-[1vw] gap-[30px]">
        <img src="public/Help/2.png" className="w-[50px] shadow-lg" alt="" />
        <h1 className="text-[14px] font-bold mt-[1vw]">
          Maintenance
        </h1>
        <p className="text-[12px]">
          Learn grease separator upkeep: regular inspections, cleaning, and addressing common problems. Efficiently schedule maintenance and handle emergencies.
        </p>
      </div>
      <div className="flex flex-col w-[250px] h-[280px] p-[13px] rounded-[0.4vw] bg-white m-[1vw] gap-[30px]">
        <img src="public/Help/3.png" className="w-[50px] shadow-lg" alt="" />
        <h1 className="text-[14px] font-bold mt-[1vw]">
        Compliance
        </h1>
        <p className="text-[12px]">
         Recognize documenting grease separator data: disposal records, self-inspection reports, certificates. Maintain updated, accessible records for inspections.
        </p>
      </div>
      </div>
      <div className="flex flex-col mx-auto md:flex-row ">
      <div className="flex flex-col w-[250px] h-[280px] p-[13px] rounded-[0.4vw] bg-white m-[1vw] gap-[30px]">
      <img src="public/Help/4.png" className="w-[50px] shadow-lg" alt="" />
        <h1 className="text-[14px] font-bold mt-[1vw]">
        Management
        </h1>
        <p className="text-[12px]">
        Discover advantages of switching to digital grease separator documentation. Our platform streamlines processes, maintains data integrity, and offers easy access to historical records.
        </p>
      </div>
      <div className="flex flex-col w-[250px] h-[280px] p-[13px] rounded-[0.4vw] bg-white m-[1vw] gap-[30px]">
      <img src="public/Help/5.png" className="w-[50px] shadow-lg" alt="" />
        <h1 className="text-[14px] font-bold mt-[1vw]">
          Console
        </h1>
        <p className="text-[12px]">
        Familiarize yourself with the Grease Separator Console: central hub for maintenance and documentation. Navigate dashboard, upload documents, customize forms, manage permissions.
        </p>
      </div>
      <div className="flex flex-col w-[250px] h-[280px] p-[13px] rounded-[0.4vw] bg-white m-[1vw] gap-[30px]">
      <img src="public/Help/6.png" className="w-[50px] shadow-lg" alt="" />
        <h1 className="text-[14px] font-bold mt-[1vw]">
          Troubleshoot
        </h1>
        <p className="text-[12px]">
        If you encounter grease separator or platform issues, consult troubleshooting guides and FAQs. Contact our dedicated support for personalized assistance.
        </p>
      </div>
      </div>
      <div className="flex flex-col mx-auto md:flex-row ">
      <div className="flex flex-col w-[250px] h-[280px] p-[13px] rounded-[0.4vw] bg-white m-[1vw] gap-[30px]">
      <img src="public/Help/7.png" className="w-[50px] shadow-lg" alt="" />
        <h1 className="text-[14px] font-bold mt-[1vw]">
          Updates
        </h1>
        <p className="text-[12px]">
         Stay updated on platform and grease separator management: latest enhancements, regulatory changes, and upcoming events.
        </p>
      </div>
      <div className="flex flex-col w-[250px] h-[280px] p-[13px] rounded-[0.4vw] bg-white m-[1vw] gap-[30px]">
      <img src="public/Help/8.png" className="w-[50px] shadow-lg" alt="" />
        <h1 className="text-[14px] font-bold mt-[1vw]">
          Feedback
        </h1>
        <p className="text-[12px]">
        Share feedback to improve platform and services. Your input shapes future grease separator management enhancements. We value your contribution!
        </p>
      </div>
      <div className="flex flex-col w-[250px] h-[280px] p-[13px] rounded-[0.4vw] bg-white m-[1vw] gap-[30px]">
      <img src="public/Help/9.png" className="w-[50px] shadow-lg" alt="" />
        <h1 className="text-[14px] font-bold mt-[1vw]">
         Privacy
        </h1>
        <p className="text-[12px]">
          Discover our commitment to data protection: safeguarding your information and adhering to industry best practices for security.
        </p>
      </div>
      </div>
    </div>
    
  </div>

  

  );
};

export default Help;