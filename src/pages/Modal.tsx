import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import doc from "../assets/doc.png";
import dropdown from "../assets/dropdown.png"
const Modal = () => {
  const navigate = useNavigate();
    const moduleData = {
      title: "Algebraic Operations",
      dateUploaded: "12-Apr-2026",
    };
  return (
    <div className="flex w-full">
      {/* LEFT: Sidebar */}
      <Sidebar />

      {/* RIGHT: Page Content */}
      <div className="w-full px-6 py-6">

        {/* Breadcrumbs */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">

          {/* LEFT — Breadcrumb */}
          <div className="flex flex-wrap items-center gap-[8px] md:gap-[10px] mt-2 md:mt-0">
            <p className="text-[#82C220] font-inter text-[16px] leading-[120%]">
              Modules
            </p>

            <div className="w-[16px] h-[16px] bg-[#F3F9E9] rounded-[4px] flex items-center justify-center">
              <span className="text-[#82C220] text-[12px]">{">"}</span>
            </div>

            <p className="text-[#82C220] font-inter font-medium text-[16px] whitespace-nowrap">
              2023/2024 - First Term
            </p>

            <div className="w-[16px] h-[16px] bg-[#F3F9E9] rounded-[4px] flex items-center justify-center">
              <span className="text-[#82C220] text-[12px]">{">"}</span>
            </div>

            <p className="text-[#82C220] font-inter font-medium text-[16px] whitespace-nowrap">
              JSS 1
            </p>

            <div className="w-[16px] h-[16px] bg-[#F3F9E9] rounded-[4px] flex items-center justify-center">
              <span className="text-[#82C220] text-[12px]">{">"}</span>
            </div>

            <p className="text-[#82C220] font-inter font-medium text-[16px] whitespace-nowrap">
              Mathematics
            </p>
            <div className="w-[16px] h-[16px] bg-[#F3F9E9] rounded-[4px] flex items-center justify-center">
              <span className="text-[#82C220] text-[12px]">{">"}</span>
            </div>
            <p className="text-[#4D4D4D] font-inter font-medium text-[16px] whitespace-nowrap">
              Algebraic Operation
            </p>
          </div>

          {/* Upload Button */}
          <div className="mt-4 md:mt-0 md:justify-end">
      <button
        onClick={() => navigate("/uploadschemethree")}
        className="
        flex items-center justify-center 
        gap-[4px]                      /* Figma gap */
        bg-[#82C220] text-white
        rounded-[8px]
        border 
  
        /* Mobile – unchanged */
        w-full h-[60px] px-3
  
        /* iPad + Desktop – refined sizing */
      
        md:pl-2
        md:w-[122px] md:h-[48px] md:px-2
  
        font-inter text-[14px] leading-[120%]
      
        "
      >
        <img src={dropdown} alt="upload" className="w-[20px] h-[20px] object-contain" />
        <span className="whitespace-nowrap">Download</span>
      </button>
    </div>
        </div>
        <div className="p-4 md:p-6 lg:p-8 w-full flex justify-center">
  <div
    className="
      w-full 
      max-w-[1088px]
      min-h-[232px]
      border border-[#D1D5DB]
      rounded-md 
      bg-white
    "
  >
    {/* TOP SECTION */}
    <div
      className="
        w-full
        bg-[#F4F4F4]
        rounded-t-[6px]
        px-4 py-4
        flex flex-col md:flex-row
        md:items-center md:justify-between
        gap-3
      "
    >
      {/* LEFT — Icon + Title */}
      <div className="flex items-center gap-3">
        <img
          src={doc}
          alt="document"
          className="w-[20px] h-[20px] flex-shrink-0"
        />
        <span
          className="
            text-[#4B5563]
            text-[16px]
            font-medium
            leading-[120%]
          "
        >
          {moduleData.title}
        </span>
      </div>

      {/* RIGHT — Date Uploaded */}
      <div className="flex items-center gap-2 whitespace-nowrap">
        <span className="text-[#7A7A7A] text-[14px]">Date Uploaded:</span>
        <span className="text-[#4D4D4D] text-[16px] font-medium">
          {moduleData.dateUploaded}
        </span>
      </div>
    </div>

    {/* BOTTOM SPACING LINE */}
    <div className="border-t border-[#E5E7EB]"></div>

    {/* EMPTY BOTTOM AREA (matches Figma exact spacing) */}
    <div className="p-4"></div>
  </div>
</div>

    </div>
    </div>
  );
};

export default Modal;
