import React from "react";
import { useNavigate } from "react-router-dom";
import schoollogo from "../assets/schoollogo.png";
import profileIcon from "../assets/profile.png";
import printIcon from "../assets/print.png";

const RecordCard: React.FC = () => {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  const handleClose = () => {
    navigate("/announcements");
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center pt-[36.78px] mt-[50px]">
      {/* BORDERED CONTENT BOX */}
      <button
        onClick={handleClose}
        className="absolute top-[20px] right-[40px] flex items-center justify-center cursor-pointer"
        style={{
          width: "24px",
          height: "24px",
          background: "transparent",
          border: "none",
          padding: 0,
        }}
      >
        <div style={{ position: "relative", width: "16px", height: "16px" }}>
          <span
            style={{
              position: "absolute",
              top: "7px",
              left: "0",
              width: "16px",
              height: "2px",
              backgroundColor: "#101010",
              transform: "rotate(45deg)",
              transformOrigin: "center",
            }}
          />
          <span
            style={{
              position: "absolute",
              top: "7px",
              left: "0",
              width: "16px",
              height: "2px",
              backgroundColor: "#101010",
              transform: "rotate(-45deg)",
              transformOrigin: "center",
            }}
          />
        </div>
      </button>
      <div
        className="border border-[#B2B2B2] rounded-[8px] bg-white flex flex-col gap-[6.62px] p-6 overflow-hidden"
        style={{ width: "985px", height: "auto" }}
      >
        {/* SCHOOL HEADER */}
        <div className="flex items-center w-full ">
          {/* Logo Left */}
          <img
            src={schoollogo}
            alt="School Logo"
            className="w-[129px] h-[132px] object-contain ml-[20px]"
          />

          {/* School Header */}
          <div
            className="ml-[70px] text-center"
            style={{
              letterSpacing: "0px",
              fontKerning: "normal",
              WebkitFontKerning: "normal",
            }}
          >
            <p className="leading-[100%] mt-0 m-0 flex flex-col gap-0 items-center">
              <h1
                className="font-['Inter'] font-bold text-[39.73px] leading-[100%] text-black m-0 p-0"
                style={{ lineHeight: "1.2", margin: 0, padding: 0 }}
              >
                Ajangbadi Grammar School
              </h1>

              <span className="font-['Inter'] font-[700] text-[19.87px] leading-[100%] m-0">
                Motto:{" "}
                <span className="font-['Inter'] font-[500] italic text-[19.87px]">
                  Programmed for perfection
                </span>
              </span>

              <span className="font-['Inter'] font-[500] text-[19.87px] leading-[100%] text-black m-0">
                12, Adefele street, Tanke, Ilorin Kwara State
              </span>

              <span className="font-['Inter'] font-[400] italic text-[19.87px] m-0">
                ajangbadigrammarschool@seamtrack.net
              </span>
              <span
                className="font-['Inter'] font-[700] text-[19.87px] text-black m-0"
                style={{ lineHeight: "2.5", marginTop: 0 }}
              >
                THIRD TERM STUDENT’S PERFORMANCE REPORT
              </span>
            </p>
          </div>

          {/* Profile Image */}
          <img
            src={profileIcon}
            alt="profile"
            className="w-[139px] h-[139px] object-cover -mt-8 mr-[30px] ml-auto"
          />
        </div>

        {/* STUDENT INFORMATION BOX */}
        <div
          className="mx-auto mt-[10px] overflow-hidden"
          style={{
            width: "903.88px",
            height: "144.54px",
            borderStyle: "solid",
            borderColor: "#101010",
            borderWidth: "0.66px",
            opacity: 1,
          }}
        >
          {/* Blue header bar */}
          <div
            className="flex items-center justify-center px-[16px]"
            style={{
              background: "#0D5D93",
              paddingTop: "6.62px",
              paddingBottom: "6.62px",
              height: "30.24px",
            }}
          >
            <span
              className="font-['Inter'] font-semibold text-[16.55px] text-[#FFFFFF] px-[8px]"
              style={{ lineHeight: "100%", letterSpacing: "0%" }}
            >
              STUDENT INFORMATION
            </span>
          </div>

          {/* Inner content grid */}
          <div className="w-[877.39px] mt-[10px]">
            {/* Row */}
            <div className="flex justify-between items-center h-[20px] mb-[6px] pl-[25px] pr-[12px]">
              {/* Name */}
              <div className="flex items-center gap-2">
                <span className="font-['Inter'] font-semibold text-[13.24px] text-black">
                  NAME:&nbsp;&nbsp;
                </span>
                <span className="font-['Inter'] font-normal text-[19.87px] text-black">
                  Adeyomola Emmanuel Smith
                </span>
              </div>

              {/* Class */}
              <div className="flex items-center gap-2">
                <span className="font-['Inter'] font-semibold text-[13.24px] text-black">
                  CLASS:&nbsp;&nbsp;
                </span>
                <span className="font-['Inter'] font-normal text-[19.87px] text-black">
                  SSS1A
                </span>
              </div>

              {/* Session */}
              <div className="flex items-center gap-2">
                <span className="font-['Inter'] font-semibold text-[13.24px] text-black">
                  SESSION:&nbsp;&nbsp;
                </span>
                <span className="font-['Inter'] font-normal text-[19.87px] text-black">
                  2024/2025
                </span>
              </div>

              {/* Age */}
              <div className="flex items-center gap-2">
                <span className="font-['Inter'] font-semibold text-[13.24px] text-black">
                  AGE:&nbsp;&nbsp;
                </span>
                <span className="font-['Inter'] font-normal text-[19.87px] text-black">
                  13yrs
                </span>
              </div>
            </div>

            {/* Divider line */}
            <div className="w-[845px] h-[0.66px] bg-[#A3A3A3] ml-[25px]" />
          </div>

          {/* Second Row */}
          <div className="w-[877.39px] mt-[10px]">
            <div className="flex justify-between items-center h-[20px] mb-[6px] pl-[25px] pr-[12px]">
              {/* Admission No */}
              <div className="flex items-center">
                <span className="font-['Inter'] font-semibold text-[13.24px] text-black">
                  ADMISSION NO:&nbsp;&nbsp;
                </span>
                <span className="font-['Inter'] font-normal text-[19.87px] text-black">
                  13424
                </span>
              </div>

              {/* No in Class */}
              <div className="flex items-center">
                <span className="font-['Inter'] font-semibold text-[13.24px] text-black">
                  NO IN CLASS:&nbsp;&nbsp;
                </span>
                <span className="font-['Inter'] font-normal text-[19.87px] text-black">
                  102
                </span>
              </div>

              {/* Term Score */}
              <div className="flex items-center">
                <span className="font-['Inter'] font-semibold text-[13.24px] text-black">
                  TERM SCORE:&nbsp;&nbsp;
                </span>
                <span className="font-['Inter'] font-normal text-[19.87px] text-black">
                  533
                </span>
              </div>

              {/* Percentage */}
              <div className="flex items-center">
                <span className="font-['Inter'] font-semibold text-[13.24px] text-black">
                  PERCENTAGE:&nbsp;&nbsp;
                </span>
                <span className="font-['Inter'] font-normal text-[19.87px] text-black">
                  60%
                </span>
              </div>
            </div>

            {/* Divider line */}
            <div className="w-[845px] h-[0.66px] bg-[#A3A3A3] ml-[25px]" />
          </div>

          {/* Third Row */}
          <div className="w-[877.39px] mt-[8px] mb-[4px]">
            <div className="flex justify-between items-center h-[20px] mb-[6px] pl-[25px] pr-[12px] relative -translate-y-[4px]">
              {/* Position */}
              <div className="flex items-center">
                <span className="font-['Inter'] font-semibold text-[13.24px] text-black">
                  POSITION:&nbsp;&nbsp;
                </span>
                <span className="font-['Inter'] font-normal text-[19.87px] text-black">
                  14th
                </span>
              </div>

              {/* House */}
              <div className="flex items-center">
                <span className="font-['Inter'] font-semibold text-[13.24px] text-black">
                  HOUSE:&nbsp;&nbsp;
                </span>
                <span className="font-['Inter'] font-normal text-[19.87px] text-black">
                  Green
                </span>
              </div>

              {/* Height/Weight */}
              <div className="flex items-center">
                <span className="font-['Inter'] font-semibold text-[13.24px] text-black">
                  HEIGHT/WEIGHT:&nbsp;&nbsp;
                </span>
                <span className="font-['Inter'] font-normal text-[19.87px] text-black">
                  12/34
                </span>
              </div>

              {/* Gender */}
              <div className="flex items-center">
                <span className="font-['Inter'] font-semibold text-[13.24px] text-black">
                  GENDER:&nbsp;&nbsp;
                </span>
                <span className="font-['Inter'] font-normal text-[19.87px] text-black">
                  Male
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Academic + Attendance */}
        <div
          className="mt-[20px] flex justify-between mx-auto"
          style={{
            width: "903.88px",
            paddingLeft: "8px",
            paddingRight: "8px",
          }}
        >
          {/* Academic Performance */}
          <div
            className="overflow-hidden"
            style={{
              width: "672.12px",
              borderStyle: "solid",
              borderColor: "#101010",
              borderWidth: "0.66px",
            }}
          >
            {/* Blue Header */}
            <div
              className="flex items-center justify-center"
              style={{
                background: "#0D5D93",
                paddingTop: "6.62px",
                paddingBottom: "6.62px",
                height: "30.24px",
              }}
            >
              <span
                className="font-['Inter'] font-semibold text-[16.55px] text-[#FFFFFF]"
                style={{ lineHeight: "100%", letterSpacing: "0%" }}
              >
                ACADEMIC PERFORMANCE
              </span>
            </div>

            {/* Table Header */}
            <div
              className="flex w-full font-['Inter'] font-semibold text-[13.24px] leading-[100%] tracking-[0%] text-[#101010]"
              style={{ background: "#1965981A" }}
            >
              <div className="w-[30px] h-[32px] flex items-center justify-center">
                S/N
              </div>
              <div className="w-[180px] h-[32px] flex items-center justify-center">
                SUBJECT
              </div>
              <div className="w-[50px] h-[32px] flex items-center justify-center">
                CA
              </div>
              <div className="w-[50px] h-[32px] flex items-center justify-center">
                EXAM
              </div>
              <div className="w-[60px] h-[32px] flex items-center justify-center">
                TOTAL
              </div>
              <div className="w-[60px] h-[32px] flex items-center justify-center">
                CAVG
              </div>
              <div className="w-[60px] h-[32px] flex items-center justify-center">
                GRADE
              </div>
              <div className="w-[70px] h-[32px] flex items-center justify-center">
                POSITION
              </div>
              <div className="w-[120px] h-[32px] flex items-center justify-center">
                REMARK
              </div>
            </div>

            {/* Data Row */}
            <div className="flex w-full font-['Inter'] font-normal text-[13.24px] leading-[100%] tracking-[0%] text-black border-t border-[#A3A3A3] border-b border-[#A3A3A3]">
              <div className="w-[30px] text-center p-[6px]">1.</div>
              <div className="w-[180px] text-center p-[6px]">English</div>
              <div className="w-[50px] text-center p-[6px]">32</div>
              <div className="w-[50px] text-center p-[6px]">40</div>
              <div className="w-[60px] text-center p-[6px]">72</div>
              <div className="w-[60px] text-center p-[6px]">54.5</div>
              <div className="w-[60px] text-center p-[6px]">A</div>
              <div className="w-[70px] text-center p-[6px]">3rd</div>
              <div className="w-[120px] text-center p-[6px]">Very Good</div>
            </div>
          </div>

          {/* Attendance */}
          <div
            className="overflow-hidden bg-white"
            style={{
              width: "218.52px",
              borderStyle: "solid",
              borderColor: "#101010",
              borderWidth: "0.66px",
            }}
          >
            {/* Blue Header */}
            <div
              className="flex items-center justify-center"
              style={{
                background: "#0D5D93",
                paddingTop: "6.62px",
                paddingBottom: "6.62px",
                height: "30.24px",
              }}
            >
              <span
                className="font-['Inter'] font-semibold text-[16.55px] text-[#FFFFFF]"
                style={{ lineHeight: "100%", letterSpacing: "0%" }}
              >
                ATTENDANCE
              </span>
            </div>

            {/* Table Section */}
            <div className="text-[13.24px] font-['Inter'] leading-[100%] tracking-[0%]">
              {/* SCHOOL OPENED */}
              <div className="flex border-t border-[#A3A3A3]">
                <div className="flex-1 bg-[#1965981A] text-[#101010] font-semibold px-[8px] py-[4px]">
                  SCHOOL OPENED
                </div>
                <div className="w-[60px] text-center px-[8px] py-[4px] bg-white">
                  120
                </div>
              </div>

              {/* TIME PRESENT */}
              <div className="flex border-t border-[#A3A3A3]">
                <div className="flex-1 bg-[#1965981A] text-[#101010] font-normal px-[8px] py-[4px]">
                  TIME PRESENT
                </div>
                <div className="w-[60px] text-center px-[8px] py-[4px] bg-white">
                  115
                </div>
              </div>

              {/* TIME ABSENT */}
              <div className="flex border-t border-b border-[#A3A3A3]">
                <div className="flex-1 bg-[#1965981A] text-[#101010] font-normal px-[8px] py-[4px]">
                  TIME ABSENT
                </div>
                <div className="w-[60px] text-center px-[8px] py-[4px] bg-white">
                  5
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRINT BUTTON — outside main box, aligned bottom-right (modified) 🔽 */}
      {/* PRINT BUTTON — outside main box, aligned bottom-right */}
      <div className="w-[985px] flex justify-end mt-[60px]">
        {" "}
        {/* increased margin-top to move button down */}
        <button
          onClick={handlePrint}
          className="relative flex items-center justify-center gap-[6px] w-[132px] h-[48px] rounded-[8px] px-[6px] py-[4px] border-none"
          style={{ backgroundColor: "#82C220", opacity: 1 }}
        >
          <img
            src={printIcon}
            alt="Print"
            className="absolute"
            style={{
              width: "24px",
              height: "22px",
              left: "12px",

              filter: "invert(1)", // makes icon white
              opacity: 1,
            }}
          />
          <span className="text-[#FFFFFF] font-['Inter'] text-[14px] font-normal leading-[100%] ml-[20px]">
            Print Result
          </span>
        </button>
      </div>
    </div>
  );
};

export default RecordCard;
