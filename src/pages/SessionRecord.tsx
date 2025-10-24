import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";
import printIcon from "../assets/print.png";
import bookIcon from "../assets/book.png";
import medalIcon from "../assets/medal.png";
import layersIcon from "../assets/layers.png";
import graphIcon from "../assets/graph.png";
import { useNavigate } from "react-router-dom";


const SessionRecord = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("view");
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1">
        <Header />

        <div className="flex items-center justify-between mt-[45px] ml-[25px] mr-[25px]">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-[8px] ml-[20px]">
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

          {/* RIGHT SIDE (Button) */}
          <div className="flex items-center gap-[12px]">
            {/* View Result */}
            <button
              onClick={() => setActiveButton("view")}
              className={`w-[126px] h-[48px] rounded-[8px] font-['Inter'] text-[14px] text-[#FFFFFF] font-normal leading-[100%]
    border-none outline-none flex items-center justify-center transition-all duration-200
    ${
      activeButton === "view"
        ? "bg-[#66A81F] text-white" 
        : "bg-transparent text-[#2A0019]"
    }`}
            >
              View Result
            </button>

            {/* Print Result */}
            {/* <button
              className="flex items-center justify-center gap-[8px] w-[132px] h-[48px] rounded-[8px] 
             bg-transparent border border-[#2A0019] text-[#2A0019] 
             text-[14px] font-['Inter'] font-normal leading-[100%] 
             hover:bg-[#82C220] hover:text-white transition-all duration-200"
            >
              <img
                src={printIcon}
                alt="Print"
                className="w-[18px] h-[18px] object-contain"
              />
              Print Result
            </button> */}

<button
    onClick={() => setActiveButton("print")}
    className={`flex items-center justify-center gap-[8px] w-[132px] h-[48px] rounded-[8px]
      text-[14px] font-['Inter'] font-normal leading-[100%] transition-all duration-200
      ${
        activeButton === "print"
          ? "bg-[#82C220] text-white border-none"
          : "bg-transparent border border-[#2A0019] text-[#2A0019]"
      }`}
  >
    <img
      src={printIcon}
      alt="Print"
      className={`w-[18px] h-[18px] object-contain ${
        activeButton === "print" ? "brightness-0 invert" : ""
      }`}
    />
    Print Result
  </button>

  {/* <button
  onClick={() => navigate("/performance")}
  className="w-[160px] h-[48px] rounded-[8px] bg-[#82C220] text-white font-['Inter'] text-[14px] font-normal leading-[100%]
             border-none outline-none flex items-center justify-center transition-all duration-200 hover:bg-[#6FA71D]"
>
  Go to Performance Record
</button> */}


          </div>
        </div>

        {/* Stat cards section */}
        <div className="flex flex-row justify-between items-start gap-[24px] w-[1088px] h-[158px] ml-[50px] mt-[32px]">
          {/* 1️⃣ No of Subjects Offered */}
          <div className="w-[254px] h-[158px] bg-[#255C99] rounded-[20px] border border-[#255C99] py-[8px] px-[16px] flex flex-col justify-between text-white">
            <img
              src={bookIcon}
              alt="Subjects Icon"
              className="w-[42px] h-[42px] object-contain opacity-100 mt-[12px]"
            />
            <div className="flex flex-col items-start justify-center mt-[8px]">
              <span className="font-['Inter'] font-semibold text-[32px] text-[#FFFFFF] leading-[120%] -translate-y-[25px]">
                16
              </span>
              <span className="font-['Inter'] font-normal text-[14px] text-[#FFFFFF] leading-[100%] w-[180px] whitespace-nowrap -translate-y-[15px]">
                No of Subjects Offered
              </span>
            </div>
          </div>

          {/* 2️⃣ No of Times Present */}
          <div className="w-[254px] h-[158px] bg-[#E67E22] rounded-[20px] border border-[#E67E22] py-[8px] px-[16px] flex flex-col justify-between text-white">
            <img
              src={medalIcon}
              alt="Attendance Icon"
              className="w-[42px] h-[42px] object-contain opacity-100 mt-[12px]"
            />
            <div className="flex flex-col items-start justify-center mt-[8px]">
              <span className="font-['Inter'] font-semibold text-[32px] text-[#FFFFFF] leading-[120%] -translate-y-[25px]">
                90 of 120
              </span>
              <span className="font-['Inter'] font-normal text-[14px] text-[#FFFFFF] leading-[100%] w-[180px] whitespace-nowrap -translate-y-[15px]">
                No of Times Present
              </span>
            </div>
          </div>

          {/* 3️⃣ Total Term Score */}
          <div className="w-[254px] h-[158px] bg-[#6A0DAD] rounded-[20px] border border-[#6A0DAD] py-[8px] px-[16px] flex flex-col justify-between text-white">
            <img
              src={layersIcon}
              alt="Score Icon"
              className="w-[42px] h-[42px] object-contain opacity-100 mt-[12px]"
            />
            <div className="flex flex-col items-start justify-center mt-[8px]">
              <span className="font-['Inter'] font-semibold text-[32px] text-[#FFFFFF] leading-[120%] -translate-y-[25px]">
                1667
              </span>
              <span className="font-['Inter'] font-normal text-[14px] text-[#FFFFFF] leading-[100%] w-[180px] whitespace-nowrap -translate-y-[15px]">
                Total Term Score
              </span>
            </div>
          </div>

          {/* 4️⃣ Average */}
          <div className="w-[254px] h-[158px] bg-[#C0392B] rounded-[20px] border border-[#C0392B] py-[8px] px-[16px] flex flex-col justify-between text-white">
            <img
              src={graphIcon}
              alt="Average Icon"
              className="w-[42px] h-[42px] object-contain opacity-100 mt-[12px]"
            />
            <div className="flex flex-col items-start justify-center mt-[8px]">
              <span className="font-['Inter'] font-semibold text-[32px] text-[#FFFFFF] leading-[120%] -translate-y-[25px]">
                58.1
              </span>
              <span className="font-['Inter'] font-normal text-[14px] text-[#FFFFFF] leading-[100%] w-[180px] whitespace-nowrap -translate-y-[15px]">
                Average
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionRecord;
