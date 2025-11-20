import React from "react";
import { useNavigate } from "react-router-dom";
import schoollogo from "../assets/schoollogo.png";
import profileIcon from "../assets/profile.png";
import printIcon from "../assets/print.png";
import signature from "../assets/signature.png"
import Qr from "../assets/Qr.png"
const RecordCard: React.FC = () => {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  const handleClose = () => {
    navigate("/announcements");
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center py-8 px-4 relative pt-[36.78px] mt-[50px]">
      {/* CLOSE BUTTON (outside / above the main box) */}
      <button
        onClick={handleClose}
        aria-label="Close"
        className="absolute top-[20px] right-[30px] z-50 w-6 h-6 flex items-center justify-center"
        style={{ background: "transparent", border: "none", padding: 0 }}
      >
        <div style={{ position: "relative", width: 16, height: 16 }}>
          <span
            style={{
              position: "absolute",
              top: 7,
              left: 0,
              width: 16,
              height: 2,
              backgroundColor: "#101010",
              transform: "rotate(45deg)",
              transformOrigin: "center",
            }}
          />
          <span
            style={{
              position: "absolute",
              top: 7,
              left: 0,
              width: 16,
              height: 2,
              backgroundColor: "#101010",
              transform: "rotate(-45deg)",
              transformOrigin: "center",
            }}
          />
        </div>
      </button>

      {/* BORDERED CONTAINER (wraps everything except Print button and X) */}
      <div className="relative w-full max-w-[985px] border border-[#B2B2B2] rounded-[16px] bg-white overflow-hidden mt-[80px]">
        {/* HEADER ROW - stays one row on all devices */}
<div className="
  w-full flex items-center justify-between 
  gap-2 sm:gap-6 px-2 py-2
  overflow-hidden
">

  {/* LEFT LOGO */}
  <div className="flex-shrink-0">
    <img
      src={schoollogo}
      alt="School Logo"
      className="
        object-contain ml-[20px]
        w-[129px] h-[132px]     /* desktop */
        max-md:w-[85px] max-md:h-[85px]
        max-sm:w-[55px] max-sm:h-[55px] /* mobile */
      "
    />
  </div>

  {/* CENTER TEXT */}
  <div className="flex-1 text-center px-2">

    {/* SCHOOL NAME */}
    <h1
      className="
        font-bold text-black leading-[100%]
        text-[40px]
        max-md:text-[24px]
        max-sm:text-[14px]
        whitespace-nowrap
      "
    >
      Ajangbadi Grammar School
    </h1>

    {/* SCHOOL DETAILS */}
    <div className="leading-tight whitespace-nowrap">

      <span className="font-semibold text-[20px] max-md:text-[14px] max-sm:text-[9px]">
        Motto: <span className="font-medium italic">Programmed for perfection</span>
      </span>

      <br />

      <span className="font-medium text-[20px] text-black max-md:text-[14px] max-sm:text-[9px]">
        12, Adefele street, Tanke, Ilorin Kwara State
      </span>

      <br />

      <span className="font-[400] italic text-[20px] max-md:text-[14px] max-sm:text-[9px]">
        ajangbadigrammarschool@seamtrack.net
      </span>

      <br />

      <span className="font-[700] text-[20px] text-black max-md:text-[14px] max-sm:text-[10px] mt-1 block">
        THIRD TERM STUDENT’S PERFORMANCE REPORT
      </span>

    </div>
  </div>

  {/* RIGHT PROFILE — stays at the right */}
  <div className="flex-shrink-0">
    <img
      src={profileIcon}
      alt="Profile"
      className="
        object-cover mr-[30px]
        w-[139px] h-[139px]     /* desktop */
        max-md:w-[100px] max-md:h-[100px]
        max-sm:w-[55px] max-sm:h-[55px] /* mobile */
      "
    />
  </div>

</div>

        {/* STUDENT INFORMATION BOX */}
        <div
  className="
    mx-auto mt-[20px] overflow-hidden
    w-full max-w-[904px]
    max-sm:px-2
  "
  style={{
    borderStyle: "solid",
    borderColor: "#101010",
    borderWidth: "0.66px",
    opacity: 1,
  }}
>
  {/* Blue Header */}
  <div
    className="flex items-center justify-center px-[16px] max-sm:px-0"
    style={{
      background: "#0D5D93",
      paddingTop: "6.62px",
      paddingBottom: "6.62px",
      height: "30.24px",
    }}
  >
    <span
      className="font-['Inter'] font-semibold text-[16.55px] text-[#FFFFFF] max-sm:text-[12px]"
    >
      STUDENT INFORMATION
    </span>
  </div>

  {/* ROW 1 */}
  <div className="w-full max-w-[877px] mt-[10px] max-sm:w-full max-sm:px-1">
    <div
      className="
        flex justify-between items-center h-[20px] mb-[6px] pl-[25px] pr-[12px]
        max-sm:flex-wrap max-sm:h-auto max-sm:gap-y-1 max-sm:pl-0 max-sm:pr-0 max-sm:text-[11px]
      "
    >
     
{/* NAME */}
<div className="flex items-center gap-2 max-sm:text-[11px] whitespace-nowrap overflow-hidden">
  <span className="font-['Inter'] font-semibold text-[13.24px] max-sm:text-[10px] whitespace-nowrap">
    NAME:
  </span>
  <span className="font-['Inter'] text-[19.87px] max-sm:text-[11px] font-medium whitespace-nowrap overflow-hidden text-ellipsis">
    Adeyomola Emmanuel Smith
  </span>
</div>


      {/* CLASS */}
      <div className="flex items-center gap-2">
        <span className="font-['Inter'] font-semibold text-[13.24px] max-sm:text-[10px]">
          CLASS:
        </span>
        <span className="font-['Inter'] text-[19.87px] max-sm:text-[12px]">
          SSS1A
        </span>
      </div>

      {/* SESSION */}
      <div className="flex items-center gap-2">
        <span className="font-['Inter'] font-semibold text-[13.24px] max-sm:text-[10px]">
          SESSION:
        </span>
        <span className="font-['Inter'] text-[19.87px] max-sm:text-[12px]">
          2024/2025
        </span>
      </div>

      {/* AGE */}
      <div className="flex items-center gap-2">
        <span className="font-['Inter'] font-semibold text-[13.24px] max-sm:text-[10px]">
          AGE:
        </span>
        <span className="font-['Inter'] text-[19.87px] max-sm:text-[12px]">
          13yrs
        </span>
      </div>
    </div>

    {/* Divider */}
    <div className="w-full max-w-[845px] h-[0.66px] bg-[#A3A3A3] ml-[25px] max-sm:w-full max-sm:ml-0" />
  </div>

  {/* ROW 2 */}
  <div className="w-full max-w-[877px] mt-[10px] max-sm:w-full max-sm:px-1">
    <div
      className="
        flex justify-between items-center h-[20px] mb-[6px] pl-[25px] pr-[12px]
        max-sm:flex-wrap max-sm:h-auto max-sm:gap-y-1 max-sm:pl-0 max-sm:pr-0 max-sm:text-[11px]
      "
    >
      {/* ADMISSION */}
      <div className="flex items-center">
        <span className="font-['Inter'] font-semibold text-[13.24px] max-sm:text-[10px]">
          ADMISSION NO:
        </span>
        <span className="font-['Inter'] text-[19.87px] max-sm:text-[12px]">
          13424
        </span>
      </div>

      {/* NO IN CLASS */}
      <div className="flex items-center">
        <span className="font-['Inter'] font-semibold text-[13.24px] max-sm:text-[10px]">
          NO IN CLASS:
        </span>
        <span className="font-['Inter'] text-[19.87px] max-sm:text-[12px]">
          102
        </span>
      </div>

      {/* TERM SCORE */}
      <div className="flex items-center">
        <span className="font-['Inter'] font-semibold text-[13.24px] max-sm:text-[10px]">
          TERM SCORE:
        </span>
        <span className="font-['Inter'] text-[19.87px] max-sm:text-[12px]">
          533
        </span>
      </div>

      {/* PERCENTAGE */}
      <div className="flex items-center">
        <span className="font-['Inter'] font-semibold text-[13.24px] max-sm:text-[10px]">
          PERCENTAGE:
        </span>
        <span className="font-['Inter'] text-[19.87px] max-sm:text-[12px]">
          60%
        </span>
      </div>
    </div>

    {/* Divider */}
    <div className="w-full max-w-[845px] h-[0.66px] bg-[#A3A3A3] ml-[25px] max-sm:w-full max-sm:ml-0" />
  </div>

  {/* ROW 3 */}
  <div className="w-full max-w-[877px] mt-[8px] mb-[4px] max-sm:w-full max-sm:px-1">
    <div
      className="
        flex justify-between items-center h-[20px] mb-[6px] pl-[25px] pr-[12px]
        max-sm:flex-wrap max-sm:h-auto max-sm:gap-y-1 max-sm:pl-0 max-sm:pr-0 max-sm:text-[11px]
      "
    >
      {/* POSITION */}
      <div className="flex items-center">
        <span className="font-['Inter'] font-semibold text-[13.24px] max-sm:text-[10px]">
          POSITION:
        </span>
        <span className="font-['Inter'] text-[19.87px] max-sm:text-[12px]">
          14th
        </span>
      </div>

      {/* HOUSE */}
      <div className="flex items-center">
        <span className="font-['Inter'] font-semibold text-[13.24px] max-sm:text-[10px]">
          HOUSE:
        </span>
        <span className="font-['Inter'] text-[19.87px] max-sm:text-[12px]">
          Green
        </span>
      </div>

      {/* HEIGHT/WEIGHT */}
      <div className="flex items-center">
        <span className="font-['Inter'] font-semibold text-[13.24px] max-sm:text-[10px]">
          HEIGHT/WEIGHT:
        </span>
        <span className="font-['Inter'] text-[19.87px] max-sm:text-[12px]">
          12/34
        </span>
      </div>

      {/* GENDER */}
      <div className="flex items-center">
        <span className="font-['Inter'] font-semibold text-[13.24px] max-sm:text-[10px]">
          GENDER:
        </span>
        <span className="font-['Inter'] text-[19.87px] max-sm:text-[12px]">
          Male
        </span>
      </div>
    </div>
  </div>
</div>

        {/* Academic + Attendance */}
        <div className="mt-[20px] flex justify-between items-start mx-auto w-full max-w-[904px] px-2">
          {/* Academic Performance */}
          <div className="
      w-full
      max-w-[672px]
      overflow-x-auto
      border border-[#101010]
      self-start
      mr-[20px]
      md:overflow-visible
    "
    style={{
      borderStyle: "solid",
      borderColor: "#101010",
      borderWidth: "0.66px",
      whiteSpace: "nowrap",
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
              >
                ACADEMIC PERFORMANCE
              </span>
            </div>

            {/* Table Header */}
            <div
              className="flex w-full font-['Inter'] font-semibold text-[13.24px] text-[#101010] bg-[#1965981A]
              overflow-x-auto whitespace-nowrap
              px-2 py-2 gap-x-4
              sm:gap-x-2"
              
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


            <div className="flex w-full font-['Inter'] font-normal text-[13.24px] leading-[100%] tracking-[0%] text-black border-t border-[#A3A3A3] border-b border-[#A3A3A3]">
              <div className="w-[30px] text-center p-[6px]">2.</div>
              <div className="w-[180px] text-center p-[6px]">Mathematics</div>
              <div className="w-[50px] text-center p-[6px]">32</div>
              <div className="w-[50px] text-center p-[6px]">40</div>
              <div className="w-[60px] text-center p-[6px]">72</div>
              <div className="w-[60px] text-center p-[6px]">54.5</div>
              <div className="w-[60px] text-center p-[6px]">A</div>
              <div className="w-[70px] text-center p-[6px]">3rd</div>
              <div className="w-[120px] text-center p-[6px]">Excellent</div>
            </div>

            <div className="flex w-full font-['Inter'] font-normal text-[13.24px] leading-[100%] tracking-[0%] text-black border-t border-[#A3A3A3] border-b border-[#A3A3A3]">
              <div className="w-[30px] text-center p-[6px]">3.</div>
              <div className="w-[180px] text-center p-[6px]">Biology</div>
              <div className="w-[50px] text-center p-[6px]">32</div>
              <div className="w-[50px] text-center p-[6px]">40</div>
              <div className="w-[60px] text-center p-[6px]">72</div>
              <div className="w-[60px] text-center p-[6px]">54.5</div>
              <div className="w-[60px] text-center p-[6px]">A</div>
              <div className="w-[70px] text-center p-[6px]">3rd</div>
              <div className="w-[120px] text-center p-[6px]">Excellent</div>
            </div>

            <div className="flex w-full font-['Inter'] font-normal text-[13.24px] leading-[100%] tracking-[0%] text-black border-t border-[#A3A3A3] border-b border-[#A3A3A3]">
              <div className="w-[30px] text-center p-[6px]">4.</div>
              <div className="w-[180px] text-center p-[6px]">Chemistry</div>
              <div className="w-[50px] text-center p-[6px]">32</div>
              <div className="w-[50px] text-center p-[6px]">40</div>
              <div className="w-[60px] text-center p-[6px]">72</div>
              <div className="w-[60px] text-center p-[6px]">54.5</div>
              <div className="w-[60px] text-center p-[6px]">A</div>
              <div className="w-[70px] text-center p-[6px]">3rd</div>
              <div className="w-[120px] text-center p-[6px]">Very Good</div>
            </div>

            <div className="flex w-full font-['Inter'] font-normal text-[13.24px] leading-[100%] tracking-[0%] text-black border-t border-[#A3A3A3] border-b border-[#A3A3A3]">
              <div className="w-[30px] text-center p-[6px]">5.</div>
              <div className="w-[180px] text-center p-[6px]">Physics</div>
              <div className="w-[50px] text-center p-[6px]">32</div>
              <div className="w-[50px] text-center p-[6px]">40</div>
              <div className="w-[60px] text-center p-[6px]">72</div>
              <div className="w-[60px] text-center p-[6px]">54.5</div>
              <div className="w-[60px] text-center p-[6px]">A</div>
              <div className="w-[70px] text-center p-[6px]">3rd</div>
              <div className="w-[120px] text-center p-[6px]">Very Good</div>
            </div>

            <div className="flex w-full font-['Inter'] font-normal text-[13.24px] leading-[100%] tracking-[0%] text-black border-t border-[#A3A3A3] border-b border-[#A3A3A3]">
              <div className="w-[30px] text-center p-[6px]">6.</div>
              <div className="w-[180px] text-center p-[6px]">Further Mathematics</div>
              <div className="w-[50px] text-center p-[6px]">32</div>
              <div className="w-[50px] text-center p-[6px]">40</div>
              <div className="w-[60px] text-center p-[6px]">72</div>
              <div className="w-[60px] text-center p-[6px]">54.5</div>
              <div className="w-[60px] text-center p-[6px]">A</div>
              <div className="w-[70px] text-center p-[6px]">3rd</div>
              <div className="w-[120px] text-center p-[6px]">Excellent</div>
            </div>

            <div className="flex w-full font-['Inter'] font-normal text-[13.24px] leading-[100%] tracking-[0%] text-black border-t border-[#A3A3A3] border-b border-[#A3A3A3]">
              <div className="w-[30px] text-center p-[6px]">7.</div>
              <div className="w-[180px] text-center p-[6px]">Geography</div>
              <div className="w-[50px] text-center p-[6px]">32</div>
              <div className="w-[50px] text-center p-[6px]">40</div>
              <div className="w-[60px] text-center p-[6px]">72</div>
              <div className="w-[60px] text-center p-[6px]">54.5</div>
              <div className="w-[60px] text-center p-[6px]">A</div>
              <div className="w-[70px] text-center p-[6px]">3rd</div>
              <div className="w-[120px] text-center p-[6px]">Very Good</div>
            </div>
            <div className="flex w-full font-['Inter'] font-normal text-[13.24px] leading-[100%] tracking-[0%] text-black border-t border-[#A3A3A3] border-b border-[#A3A3A3]">
              <div className="w-[30px] text-center p-[6px]">8.</div>
              <div className="w-[180px] text-center p-[6px]">CCA</div>
              <div className="w-[50px] text-center p-[6px]">32</div>
              <div className="w-[50px] text-center p-[6px]">40</div>
              <div className="w-[60px] text-center p-[6px]">72</div>
              <div className="w-[60px] text-center p-[6px]">54.5</div>
              <div className="w-[60px] text-center p-[6px]">A</div>
              <div className="w-[70px] text-center p-[6px]">3rd</div>
              <div className="w-[120px] text-center p-[6px]">Very Good</div>
            </div>
            <div className="flex w-full font-['Inter'] font-normal text-[13.24px] leading-[100%] tracking-[0%] text-black border-t border-[#A3A3A3] border-b border-[#A3A3A3] ">
              <div className="w-[30px] text-center p-[6px]">9.</div>
              <div className="w-[180px] text-center p-[6px]">Civic Education</div>
              <div className="w-[50px] text-center p-[6px]">32</div>
              <div className="w-[50px] text-center p-[6px]">40</div>
              <div className="w-[60px] text-center p-[6px]">72</div>
              <div className="w-[60px] text-center p-[6px]">54.5</div>
              <div className="w-[60px] text-center p-[6px]">A</div>
              <div className="w-[70px] text-center p-[6px]">3rd</div>
              <div className="w-[120px] text-center p-[6px]">Excellent</div>
            </div>

            
          </div>
          <div className="flex flex-col gap-4 w-full max-w-[230px] md:max-w-[250px]">

{/* ATTENDANCE */}
<div className="border border-[#101010] bg-white w-full">
  <div className="flex items-center justify-center bg-[#0D5D93] py-2">
    <span className="font-['Inter'] font-semibold text-[16px] text-white">
      ATTENDANCE
    </span>
  </div>

  <div className="text-[13px] font-['Inter'] leading-[100%]">
    <div className="flex border-t border-[#A3A3A3]">
      <div className="flex-1 bg-[#1965981A] font-semibold px-2 py-2 text-[#101010]">
        SCHOOL OPENED
      </div>
      <div className="w-[60px] text-center px-2 py-2">120</div>
    </div>

    <div className="flex border-t border-[#A3A3A3]">
      <div className="flex-1 bg-[#1965981A] font-semibold px-2 py-2 text-[#101010]">TIME PRESENT</div>
      <div className="w-[60px] text-center px-2 py-2">120</div>
    </div>

    <div className="flex border-t border-b border-[#A3A3A3]">
      <div className="flex-1 bg-[#1965981A] font-semibold px-2 py-2 text-[#101010]">TIME ABSENT</div>
      <div className="w-[60px] text-center px-2 py-2">0</div>
    </div>
  </div>
</div>

{/* DURATION */}
<div className="border border-[#101010] bg-white w-full">
  {/* Header */}
  <div className="flex items-center justify-center bg-[#0D5D93] py-2">
    <span className="font-['Inter'] font-semibold text-[16px] text-white">
      DURATION
    </span>
  </div>

  {/* Rows */}
  <div className="text-[13px] font-['Inter'] leading-[100%]">
    <div className="flex border-t border-[#A3A3A3]">
      <div className="flex-1 bg-[#1965981A] font-semibold px-3 py-2 text-[#101010]">
        TERM BEGINS
      </div>

      {/* Wider on mobile, fixed on large screens */}
      <div className="flex-1 sm:w-[150px] text-center px-3 py-2">
        08-JAN-2025
      </div>
    </div>

    <div className="flex border-t border-[#A3A3A3]">
      <div className="flex-1 bg-[#1965981A] font-semibold px-3 py-2 text-[#101010]">
        TERM ENDS
      </div>

      <div className="flex-1 sm:w-[150px] text-center px-3 py-2">
        11-APR-2025
      </div>
    </div>

    <div className="flex border-t border-b border-[#A3A3A3]">
      <div className="flex-1 bg-[#1965981A] font-semibold px-3 py-2 text-[#101010]">
        NEXT TERM
      </div>

      <div className="flex-1 sm:w-[150px] text-center px-3 py-2">
        28-APR-2025
      </div>
    </div>
  </div>
</div>

{/* PSYCHOMOTOR RATING */}
<div className="border border-[#101010] bg-white w-full text-[13.24px] font-['Inter'] leading-[100%]">

  {/* Header */}
  <div className="flex items-center justify-center bg-[#0D5D93] h-[40px]">
    <span className="font-semibold text-white">
      PSYCHOMOTOR RATING
    </span>
  </div>

  {/* First Row (KEEP #1965981A) */}
  <div className="flex border-t border-[#A3A3A3] bg-[#1965981A] font-semibold text-[15px]">
  <div className="flex-1 px-3 py-2 text-left">
    FEATURES
  </div>

  <div className="w-[90px] text-center px-1 py-2 pr-26">
    RATING
  </div>
</div>


  {/* OTHER ROWS (WHITE + TIGHTER SPACING) */}
  <div className="flex border-t border-[#A3A3A3]">
    <div className="flex-1 px-3 py-2">Excellent</div>
    <div className="w-[60px] text-center px-3 py-2 pr-24 ">5</div>
  </div>

  <div className="flex border-t border-[#A3A3A3]">
    <div className="flex-1 px-3 py-2">High Level</div>
    <div className="w-[60px] text-center px-3 py-2 pr-24">4</div>
  </div>

  <div className="flex border-t border-[#A3A3A3]">
    <div className="flex-1 px-3 py-2">Acceptable</div>
    <div className="w-[60px] text-center px-3 py-2 pr-24">3</div>
  </div>

  <div className="flex border-t border-b border-[#A3A3A3]">
    <div className="flex-1 px-3 py-2">Minimal</div>
    <div className="w-[90px] text-center px-3 py-2 pr-24">2</div>
  </div>
  <div className="flex border-t border-b border-[#A3A3A3]">
    <div className="flex-1 px-3 py-2">No Regard</div>
    <div className="w-[60px] text-center px-3 py-2 pr-24">1</div>
  </div>

</div>


</div>

        </div>
    
        <div className="overflow-hidden bg-white mt-[15px] mx-auto w-full max-w-[904px]">
  {/* Blue Header */}
  <div className="text-center font-['Inter'] font-semibold text-white bg-[#0D5D93] py-[6.62px] text-[16.55px]">
    PSYCHOMOTOR SKILLS AND AFFECTIVE TRAITS
  </div>

  {/* Column Headers */}
  <div
    className="grid grid-cols-4 bg-[#1965981A] border border-[#101010] border-t-0 text-center"
  >
    <div className="col-span-2 flex justify-center items-center border-r border-[#101010] py-[6.62px] font-semibold">
      SKILLS
    </div>

    <div className="col-span-2 flex justify-center items-center py-[6.62px] font-semibold">
      BEHAVIOUR
    </div>
  </div>

  {/* TABLE BLOCKS */}
  <div
    className="
      grid grid-cols-4 
      max-sm:grid-cols-1
      w-full
      border border-[#101010]
      border-t-0  
      gap-0        
    "
  >
    {[1, 2, 3, 4].map((item) => (
      <div
        key={item}
        className="border-r border-[#101010] last:border-r-0"
      >
        {/* Row 1 */}
        <div className="flex justify-between items-center px-3 py-[10px] border-b border-[#A3A3A3]">
          <span>Handwriting</span>
          <span className="w-[70px] text-center">2</span>
        </div>
        <div className="flex justify-between items-center px-3 py-[10px] border-b border-[#A3A3A3]">
          <span>Games & sport</span>
          <span className="w-[70px] text-center">4</span>
        </div>

        {/* Row 2 */}
        <div className="flex justify-between items-center px-3 py-[10px] border-b border-[#A3A3A3]">
          <span>Labour & Workshop</span>
          <span className="w-[70px] text-center">4</span>
        </div>

        {/* Row 3 */}
        <div className="flex justify-between items-center px-3 py-[10px]">
          <span>Crafts</span>
          <span className="w-[70px] text-center">1</span>
        </div>
      </div>
    ))}
  </div>
</div>

{/* REMARKS AND CONCLUSION */}
<div
  className="overflow-hidden bg-white mt-5 mx-auto w-full max-w-[904px] border border-[#101010]"
>
  {/* HEADER */}
  <div
    className="
      text-center font-['Inter'] font-semibold text-white
      bg-[#0D5D93]
      py-[6.62px]
      text-[16.55px]
    "
  >
    REMARKS AND CONCLUSION
  </div>

  {/* TABLE */}
  <table className="w-full text-[14px] font-['Inter'] border-collapse">
    {/* CLASS TEACHER REMARK */}
    <tr className="border-b border-[#A3A3A3]">
      <td
        className="
          bg-[#1965981A]
          px-2 py-2
          font-semibold text-[13px] text-[#101010]
          whitespace-nowrap
          w-1/3
        "
      >
        CLASS TEACHER'S REMARK
      </td>

      <td
        className="
          font-normal text-[13px] text-[#101010]
          px-3
          whitespace-nowrap
          w-1/3
        "
      >
        You are great
      </td>

      <td className="px-3 py-2 whitespace-nowrap text-right w-1/3">
        <img
          src={signature}
          alt="signature"
          className="h-6 inline-block mr-2"
        />
        <span className="font-normal text-[13px] text-[#101010]">
          MR Samuel E.O
        </span>
      </td>
    </tr>

    {/* PRINCIPAL REMARK */}
    <tr className="border-b border-[#A3A3A3]">
      <td
        className="
          bg-[#1965981A]
          px-2 py-2
          font-semibold text-[13px] text-[#101010]
          whitespace-nowrap
          w-1/3
        "
      >
        PRINCIPAL'S REMARK
      </td>

      <td
        className="
          font-normal text-[13px] text-[#101010]
          px-3
          whitespace-nowrap
          w-1/3
        "
      >
        Good
      </td>

      <td className="px-3 py-2 whitespace-nowrap text-right w-1/3">
        <img
          src={signature}
          alt="signature"
          className="h-6 inline-block mr-2"
        />
        <span className="font-normal text-[13px] text-[#101010]">
          PROF. Gold F.T
        </span>
      </td>
    </tr>
  </table>
</div>
{/* QR + FOOTER */}
<div
  className="
    w-full max-w-[904px]
    flex justify-between items-center
    border border-[#A3A3A3]
    px-4 py-3
    text-[#101010] 
    mt-6 mx-auto
    flex-wrap
  "
>
  <div className="font-['Inter'] text-[13px] leading-tight flex-1 min-w-[200px]">
    To ensure the authenticity of this result, kindly scan the QR code.
  </div>

  <img
    src={Qr}
    className="h-[70px] w-[70px] mt-3 md:mt-0"
  />
</div>



          {/* Generated by */}
          <div
  className="
    font-['Inter'] font-semibold text-[13.24px] leading-tight
    text-[#101010] text-center py-[6px] mt-[25px]
    w-full max-w-[904px] mx-auto px-4
  "
>
  Generated by SEAMTRACK on Saturday 28th of June 2025 07:13:30 PM
</div>

      </div>
      <div className="w-full max-w-[985px] flex justify-center md:justify-end mt-[60px] px-4">
  <button
    onClick={handlePrint}
    className="
      relative flex items-center justify-center gap-4
      w-[321px] h-[56px]          /* Mobile size */
      md:w-[132px] md:h-[48px]    /* Desktop size */
      rounded-[8px]
      px-4 py-2
      border-none
    "
    style={{ backgroundColor: "#82C220", opacity: 1 }}
  >
    <img
      src={printIcon}
      alt="Print"
      className="absolute left-[20px] md:left-[12px]"
      style={{
        width: "22px",
        height: "20px",
        filter: "invert(1)",
        opacity: 1,
      }}
    />

    <span className="text-[#FFFFFF] font-['Inter'] text-[14px] font-normal leading-[100%] ml-[20px] md:ml-[20px]">
      Print Result
    </span>
  </button>
</div>

    </div>
  );
};

export default RecordCard;
