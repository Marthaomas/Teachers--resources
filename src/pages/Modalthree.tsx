import React from "react";
import { useNavigate } from "react-router-dom";
import upload from "../assets/upload.png";
import Sidebar from "../components/Sidebar";
import doc from "../assets/doc.png";
import dropdown from "../assets/dropdown.png"
const Modalthree = () => {
  const navigate = useNavigate();

  const moduleData = {
    title: "Mathematics Scheme of Work for JSS 1",
    dateUploaded: "12-Apr-2026",
  };

  return (
    <div className="flex w-full">
      {/* LEFT: Sidebar */}
      <Sidebar />

      {/* RIGHT: CONTENT */}
      <div className="w-full px-4 md:px-6 py-6">

        {/* TOP: Breadcrumb + Upload */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">

          {/* LEFT — Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-2 md:mt-0">
            <p className="text-[#82C220] text-[16px]">Scheme of Work</p>

            <span className="breadcrumb-arrow">{">"}</span>

            <p className="text-[#82C220] text-[16px] whitespace-normal">
              2023/2024 - First Term
            </p>

            <span className="breadcrumb-arrow">{">"}</span>

            <p className="text-[#82C220] text-[16px]">JSS 1</p>

            <span className="breadcrumb-arrow">{">"}</span>

            <p className="text-[#4D4D4D] font-medium text-[16px]">Mathematics</p>
          </div>

          {/* RIGHT — Upload Button */}
          <div className="mt-4 md:mt-0 w-full md:w-auto">
            <button
              onClick={() => navigate("/uploadscheme")}
              className="
              flex items-center justify-center 
              gap-[4px]                    
              bg-[#82C220] text-white
              rounded-[8px]
              border 
              w-full h-[60px] px-3
              md:pl-2
              md:w-[122px] md:h-[48px] md:px-2
        
              font-inter text-[14px] leading-[120%]
              "
            >
              <img src={dropdown} className="w-[20px] h-[20px] object-contain" alt="upload" />
              <span className="whitespace-nowrap">Download</span>
            </button>
          </div>
        </div>

        {/* DOCUMENT CARD */}
        <div className="p-4 md:p-6 lg:p-8 w-full flex justify-center">
          <div
            className="
              w-full max-w-[1088px]
              border border-[#D1D5DB]
              rounded-md bg-white md:h-[232px]
            "
          >
            {/* TOP SECTION */}
            <div
              className="
                w-full bg-[#F4F4F4] 
                rounded-t-[6px]
                px-4 py-4
                flex flex-col gap-3
                md:flex-row md:items-center md:justify-between
              "
            >
              {/* LEFT — Icon + Title */}
              <div className="flex items-center gap-3">
                <img src={doc} className="w-[20px] h-[20px]" alt="document" />
                <span className="text-[#4B5563] text-[16px] font-medium">
                  {moduleData.title}
                </span>
              </div>

              {/* RIGHT — Date Uploaded (wraps on mobile only) */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[#7A7A7A] text-[14px]">Date Uploaded:</span>
                <span className="text-[#4D4D4D] text-[16px] font-medium">
                  {moduleData.dateUploaded}
                </span>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="border-t border-[#E5E7EB]"></div>

            {/* EMPTY SPACING BOTTOM */}
            <div className="p-4"></div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Modalthree;
