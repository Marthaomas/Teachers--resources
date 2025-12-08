import React from "react";
import { useNavigate } from "react-router-dom";
import upload from "../assets/upload.png";
import Sidebar from "../components/Sidebar";
import doc from "../assets/doc.png";

const Modaltwo = () => {
  const navigate = useNavigate();

  const moduleData = {
    title: "Mathematics Syllabus for JSS 1",
    dateUploaded: "12-Apr-2026",
  };

  return (
    <div className="flex w-full">
      {/* LEFT: Sidebar */}
      <Sidebar />

      {/* RIGHT: PAGE CONTENT */}
      <div className="w-full px-4 sm:px-6 py-6">

        {/* BREADCRUMB + BUTTON */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-4">

          {/* LEFT — Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <p className="text-[#82C220] font-inter text-[16px] leading-[120%]">
              Syllabus
            </p>

            <div className="w-4 h-4 bg-[#F3F9E9] rounded flex items-center justify-center">
              <span className="text-[#82C220] text-[12px]">{">"}</span>
            </div>

            <p className="text-[#82C220] font-inter font-medium text-[16px] whitespace-nowrap">
              2023/2024
            </p>

            <div className="w-4 h-4 bg-[#F3F9E9] rounded flex items-center justify-center">
              <span className="text-[#82C220] text-[12px]">{">"}</span>
            </div>

            <p className="text-[#82C220] font-inter font-medium text-[16px] whitespace-nowrap">
              JSS 1
            </p>

            <div className="w-4 h-4 bg-[#F3F9E9] rounded flex items-center justify-center">
              <span className="text-[#82C220] text-[12px]">{">"}</span>
            </div>

            <p className="text-[#4D4D4D] font-inter font-medium text-[16px] whitespace-nowrap">
              Mathematics
            </p>
          </div>

          {/* Upload Button */}
          <button
            onClick={() => navigate("/uploadschemetwo")}
            className="
              flex items-center gap-2
              bg-[#82C220] text-white
              rounded-[8px]
              border border-[#B2B2B2]
              w-full sm:w-[200px] md:w-[176px]
              h-[48px]
              px-4
              font-inter text-[14px]
            "
          >
            <img src={upload} alt="upload" className="w-[20px] h-[20px]" />
            <span className="whitespace-nowrap">Upload Document</span>
          </button>
        </div>

        {/* CENTER BOX */}
        <div className="p-4 sm:p-6 lg:p-8 w-full flex justify-center">
          <div
            className="
              w-full 
              max-w-[1088px] md:h-[232px]
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
                  className="w-[20px] h-[20px]"
                />
                <span
                  className="
                    text-[#4B5563]
                    text-[16px]
                    font-medium
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

            {/* LINE */}
            <div className="border-t border-[#E5E7EB]"></div>

            {/* SPACING */}
            <div className="p-4"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Modaltwo;
