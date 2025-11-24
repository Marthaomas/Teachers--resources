import Sidebar from "../components/Sidebar";
import { useState } from "react";
import printIcon from "../assets/print.png";
import bookIcon from "../assets/book.png";
import medalIcon from "../assets/medal.png";
import layersIcon from "../assets/layers.png";
import graphIcon from "../assets/graph.png";
import { useNavigate } from "react-router-dom";

const Announcements = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("view");

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1">
        {/* <Header title="Session Record - JSS1 " /> */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-[45px] w-full max-w-[1200px] mx-auto px-4">
          {/* Mobile Heading */}
          <h1 className="block md:hidden text-[20px] font-semibold text-[#82C220] mb-4">
            Student - Session Record
          </h1>
          {/* LEFT SIDE */}
          <div className="flex items-center gap-[8px] md:ml-[20px] mt-2 md:mt-0">
            {/* Session Record */}
            <p className="text-[#82C220] font-['Inter'] font-normal text-[16px] leading-[120%]">
              Session Record
            </p>

            {/* Vector box */}
            <div className="w-[16px] h-[16px] rounded-[4px] bg-[#F3F9E9] flex items-center justify-center">
              <span className="text-[#82C220] text-[12px] font-['Inter']">
                {">"}
              </span>
            </div>

            {/* Term text */}
            <p className="text-[#4D4D4D] font-['Inter'] font-medium text-[16px] leading-[120%]">
              2023/2024 - First Term
            </p>
          </div>
          {/* RIGHT SIDE (Buttons) */}
          <div
            className="
    flex flex-col md:flex-row
    items-start md:items-center
    gap-3 md:gap-[12px]
    w-full md:w-auto
    mt-4 md:mt-0
  "
          >
            {/* VIEW RESULT BUTTON */}
            <button
              onClick={() => setActiveButton("view")}
              className={`
      w-full md:w-auto
      px-[20px] h-[48px]
      rounded-[8px] text-[14px] font-['Inter']
      flex items-center justify-center transition-all duration-200
      md:transform md:-translate-x-10
      ${
        activeButton === "view"
          ? "bg-[#66A81F] text-white"
          : "bg-transparent text-[#2A0019]"
      }
    `}
            >
              View Result
            </button>

            {/* PRINT RESULT */}
            <button
              onClick={() => navigate("/record-card")}
              className={`
      flex items-center justify-center gap-[8px]
      w-full md:w-auto
      px-[20px] h-[48px]
      rounded-[8px] text-[14px] font-['Inter']
      transition-all duration-200
      md:transform md:-translate-x-10   
      ${
        activeButton === "print"
          ? "bg-[#82C220] text-white border-none"
          : "bg-transparent border border-[#2A0019] text-[#2A0019]"
      }
    `}
            >
              <img
                src={printIcon}
                alt="Print"
                className={`
        w-[18px] h-[18px] object-contain
        ${activeButton === "print" ? "brightness-0 invert" : ""}
      `}
              />
              Print Result
            </button>
          </div>
        </div>

        {/* Stat cards section */}
        <div
          className="flex flex-wrap gap-4 w-full md:w-[1088px] ml-0 md:ml-[50px] mt-8 px-4 md:px-0">
          {/* Card Item */}
          <div
            className="w-[47%] md:w-[254px] h-auto bg-[#255C99] rounded-[20px] border border-[#255C99]
                       py-5 px-4 flex flex-col justify-between text-white " >
            <img src={bookIcon} className="w-10 h-10" />

            <div className="flex flex-col items-start mt-4 space-y-2">
              <span className="font-semibold text-[26px] leading-[130%]">
                16
              </span>
              <span className="text-[13px] leading-[120%] opacity-90">
                No of Subjects Offered
              </span>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="w-[47%] md:w-[254px] h-auto bg-[#E67E22] rounded-[20px] border border-[#E67E22]
                      py-5 px-4 flex flex-col justify-between text-white" >
            <img src={medalIcon} className="w-10 h-10" />

            <div className="flex flex-col items-start mt-4 space-y-2">
              <span className="font-semibold text-[26px] leading-[130%]">
                90 of 120
              </span>
              <span className="text-[13px] leading-[120%] opacity-90">
                No of Times Present
              </span>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            className="w-[47%] md:w-[254px] h-auto bg-[#6A0DAD] rounded-[20px] border border-[#6A0DAD]
                  py-5 px-4 flex flex-col justify-between text-white">
            <img src={layersIcon} className="w-10 h-10" />

            <div className="flex flex-col items-start mt-4 space-y-2">
              <span className="font-semibold text-[26px] leading-[130%]">
                1667
              </span>
              <span className="text-[13px] leading-[120%] opacity-90">
                Total Term Score
              </span>
            </div>
          </div>

          {/* CARD 4 */}
          <div
            className="
      w-[47%]
      md:w-[254px]
      h-auto
      bg-[#C0392B] rounded-[20px] border border-[#C0392B]
      py-5 px-4
      flex flex-col justify-between text-white
    "
          >
            <img src={graphIcon} className="w-10 h-10" />

            <div className="flex flex-col items-start mt-4 space-y-2">
              <span className="font-semibold text-[26px] leading-[130%]">
                58.1
              </span>
              <span className="text-[13px] leading-[120%] opacity-90">
                Average
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
