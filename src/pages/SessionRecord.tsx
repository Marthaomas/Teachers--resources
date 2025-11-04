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
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header title="Session Record" />

        {/* Content Area */}
        <div className="flex-1 px-[40px] py-[24px]">
          {/* Status Filter Section */}
          <div className="flex justify-end items-center mb-[16px]">
            <label className="text-[#8C8C8C] text-[16px] font-medium font-['Inter'] leading-[120%] mr-[8px]">
              Status
            </label>

            <div className="relative">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className={`w-[104px] h-[44px] border-[0.4px] border-[#B2B2B2] rounded-[8px] ${
                  filter === "Not Active"
                    ? "pl-[8px] pr-[16px]"
                    : "pl-[8px] pr-[4px]"
                } py-[4px] text-[16px] text-[#101010] font-[400] leading-[120%] font-['Inter'] bg-white outline-none cursor-pointer appearance-none`}
                style={{
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  appearance: "none",
                }}
              >
                <option value="Active">Active</option>
                <option value="Not Active">Not Active</option>
                <option value="All">All</option>
              </select>

              {/* Custom dropdown arrow */}
              <svg
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
              </svg>
            </div>
          </div>

          {/* Table Section */}
          <div className="mt-[30px] bg-white rounded-[12px] shadow-sm border border-[#101010]  border-b border-[#A3A3A3]">
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
        </div>
      </div>
    </div>
  );
};

export default SessionRecord ;

