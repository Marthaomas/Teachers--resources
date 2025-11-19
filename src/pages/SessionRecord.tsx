import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";


const SessionRecord  = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("Active");
  const [open, setOpen] = useState<number | null>(null);


  const sessions = [
    { id: 1, name: "2024/2025", period: "2024-2025", status: "Active" },
    { id: 2, name: "2023/2024", period: "2023-2024", status: "Active" },
    { id: 3, name: "2022/2023", period: "2022-2023", status: "Active" },
    { id: 4, name: "2021/2022", period: "2021-2022", status: "Active" },
    { id: 5, name: "2020/2021", period: "2020-2021", status: "Not Active" },
  ];
  
    
  
  // Filter sessions based on selected status
  const filteredSessions = sessions.filter(
    (s) => s.status === filter || filter === "All"
  );

  return (
    <div className="flex h-screen bg-[#F9F9F9]">
      {/* Sidebar */}
      <Sidebar />
   
      {/* Main Content */}
      {/* <div className="flex flex-col flex-1">
        
        <Header title="Session Record" /> */}
        
        {/* Content Area */}
        <div className="flex-1 px-4 py-6 md:px-[40px] md:py-[24px]">
       
        {/* Heading + Filter Wrapper */}
  <div className="mb-6">

{/* Mobile Heading */}
<h1 className="block md:hidden text-[20px] font-semibold text-[#82C220] mb-4">
  Student - Session Record
</h1>
{/* Filter Section */}
<div className="flex flex-col md:flex-row md:items-center md:justify-end mb-4 gap-3">

  {/* Desktop label (hidden on mobile) */}
  <label className="hidden md:block text-[#8C8C8C] text-[16px] font-medium leading-[120%]">
    Status
  </label>

  {/* Select container */}
  <div
    className="relative
      flex items-center justify-between
      bg-white border border-[#B2B2B2] rounded-[8px]
      px-3
      w-full max-w-[345px] h-[59px]        /* MOBILE SIZE */
      md:w-[130px] md:h-[44px]
      mt-2 lg:mt-0  /* DESKTOP SIZE */
    "
  >

    {/* Status label INSIDE box ONLY on mobile */}
    <span className="text-[#8C8C8C] text-[14px] font-medium md:hidden">
      Status
    </span>

    {/* Dropdown */}
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="
        bg-transparent outline-none cursor-pointer
        text-[#101010] text-[16px] font-normal
        w-auto text-right md:text-left
      "
    >
      <option value="Active">Active</option>
      <option value="Not Active">Not Active</option>
      <option value="All">All</option>
    </select>
   {/* Dropdown icon */}
   {/* <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="5"
      viewBox="0 0 10 5"
      fill="none"
      className={`absolute ${
        filter === "Not Active" ? "right-[6px]" : "right-[16px]"
      } top-1/2 -translate-y-1/2 pointer-events-none`}
    >
      <path
        d="M1 1L5 4L9 1"
        stroke="#4D4D4D"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg> */}
  </div>
</div>

</div>
         

         {/* Table Section */}
         <div className="hidden md:block mt-[30px] bg-white rounded-[12px] shadow-sm border border-[#101010]">
            {/* Table Header */}
            <div className="border-b border-[#A3A3A3] flex justify-between items-center px-[24px] py-[16px] border-b border-[#E5E5E5] text-[#101010] font-semibold text-[18px]">
              <div className="w-1/4 text-[#8C8C8C] text-[16px] font-medium font-['Inter'] leading-[120%]">
                Name
              </div>
              <div className="w-1/4 text-[#8C8C8C] text-[16px] font-medium font-['Inter'] leading-[120%]">
                Period
              </div>
              <div className="w-1/10 text-[#8C8C8C] text-[16px] font-medium font-['Inter'] leading-[120%]">
                Status
              </div>
              <div className="w-1/4 text-right pr-[80px] text-[#8C8C8C] text-[16px] font-medium font-['Inter'] leading-[120%]">
                Action
              </div>
            </div>

            {/* Table Rows */}
            {filteredSessions.map((session, index) => (
              <div
                key={session.id}
                className={`flex justify-between items-center px-[24px] py-[16px] text-[#4D4D4D] text-[16px] ${
                    (index === 0 || index === 2) 
                    ? "bg-[#F4F4F4] mx-[1px] " 
                    : ""
                  } ${index !== filteredSessions.length - 1 ? "border-b border-[#E5E5E5]" : ""}`}
              >
                <div className="text-[#101010] text-[16px] font-medium font-['Inter'] leading-[120%] w-860px] h-[19px] mt-[26px] ml-[2px]">
                  {session.name}
                </div>
                <div className="text-[#101010] text-[16px] font-medium font-['Inter'] leading-[120%] w-[87px] h-[19px] mt-[26px] ml-[120px]">
                  {session.period}
                </div>
                <div className="flex items-center gap-[12px] w-[90px] h-[33px] mt-[21px] ml-[150px] mr-[30px] px-[6px] py-[4px] border border-[#DBDBDB] rounded-[6px]">
                  <span
                    className={`w-[8px] h-[8px] rounded-full ${
                      session.status === "Active"
                        ? "bg-[#82C220]"
                        : "bg-[#B2B2B2]"
                    }`}
                  ></span>
                  <span className="text-[#4D4D4D] text-[14px] font-normal font-['Inter'] leading-[120%]">
                    {session.status}
                  </span>
                </div>
                <div className="relative w-1/4 text-right pr-[40px]">
                <div className="relative inline-block">
                  <button
                  onClick={() => setOpen(open === session.id ? null : session.id)}
                   className="bg-[#82C220] text-[#FFFFFF] w-[81px] h-[32px] rounded-[6px] font-medium font-['Inter'] text-[14px] border-none outline-none">
                  <span className="mr-[8px]">View</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="4"
                      viewBox="0 0 8 4"
                      fill="none"
                      className={`ml-[6px] relative top-[-2px] transition-transform duration-200 ${
                        open ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M0.666687 0.666687L4.00002 3.33335L7.33335 0.666687"
                        stroke="white"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {/* Dropdown menu */}
                  {open === session.id && (
      <div className="absolute left-0 mt-[-2px] w-[150px] bg-[#F3F9E9] rounded-b-[10px] shadow-md z-10 flex flex-col">
        {["First Term", "Second Term", "Third Term"].map((term) => (
          <button
            key={term}
            onClick={() => {
              if (term === "First Term") {
                navigate("/Announcements"); // 👈 navigate to Announcement page
              } else {
                console.log(`Clicked ${term} for ${session.name}`);
              }
              setOpen(null); // close dropdown after clicking
            }}
            className="text-[#101010] text-[14px] font-['Inter'] py-[10px] px-[16px] text-left bg-[#F3F9E9] hover:bg-[#E2F0D5] cursor-pointer border-none outline-none"
          >
            {term}
          </button>
        ))}
      </div>
              )}
                </div>
              </div>
              </div>
            ))}
         </div>

            {/* MOBILE VIEW LIST */}
<div className="block md:hidden mt-[20px] w-[345px] mx-auto border border-[#101010] rounded-[8px] p-[6px] space-y-[16px]">
  {filteredSessions.map((session, index) => (
    <div key={session.id} className="w-[329px] h-[283px] bg-[#FFFFFF] border border-[#E5E5E5] p-[12px] flex flex-col justify-start">

      {/* Session Header */}
      <div className="-mx-3">
  <div className="flex items-center justify-between w-full h-[50px] bg-white px-[16px] py-[8px]">
    <p className="text-[#101010] text-[18px] font-medium leading-[100%]">
      2024/2025 Session
    </p>
  </div>
</div>


      {/* Name */}
      <div className="-mx-3">
       <div className="flex items-center gap-[24px] w-full h-[49px] bg-[#F4F4F4] px-[12px] py-[8px]">
        <span className="text-[#8C8C8C] text-[14px] font-medium leading-[120%]">Name</span>
         <span className="text-[#101010] text-[14px] font-medium leading-[120%]">{session.name}</span>
           </div>
          </div>

 {/* Period */}
      <div className="-mx-3">
  <div className="flex items-center gap-[24px] w-full h-[49px] bg-[#FFFF] px-[12px] py-[8px]">
    <span className="text-[#8C8C8C] text-[14px] font-medium leading-[120%]">
      Period
    </span>
    <span className="text-[#101010] text-[14px] font-medium leading-[120%]">
      {session.period}
    </span>
  </div>
</div>

      {/* Status */}
      <div className="-mx-3 ">
  <div className="flex items-center gap-[24px] w-full h-[49px] bg-[#F4F4F4] px-[12px] py-[8px]">
    <span className="text-[#8C8C8C] text-[14px] font-medium leading-[120%]">
      Status
    </span>

    <div className="flex items-center gap-2 border border-[#DBDBDB] px-3 py-1 rounded-[6px]">
      <span
        className={`w-[8px] h-[8px] rounded-full ${
          session.status === "Active" ? "bg-[#82C220]" : "bg-[#B2B2B2]"
        }`}
      />
      <span className="text-[14px]">{session.status}</span>
    </div>
  </div>
</div>

      {/* Action Button */}
      <button
  onClick={() => setOpen(open === session.id ? null : session.id)}
  className="bg-[#82C220] text-white w-full h-[48px] mt-[16px] px-[16px] py-[6px] rounded-[6px] text-[14px] font-medium"
>
  View
</button>

    </div>
  ))}
</div>
        </div>
        </div>
      
    
  );
};

export default SessionRecord ;