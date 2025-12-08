import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import trash from "../assets/trash.png";
import pencil from "../assets/pencil.png";
import upload from "../assets/upload.png";
const Dashboard = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("Active");
  const [open, setOpen] = useState<number | null>(null);

  const sessions = [
    { id: 1, name: "2024/2025", status: "Active" },
    { id: 2, name: "2023/2024", status: "Active" },
    { id: 3, name: "2022/2023", status: "Active" },
    { id: 4, name: "2021/2022", status: "Active" },
    { id: 5, name: "2020/2021", status: "Not Active" },
  ];

  // Filter sessions based on selected status
  const filteredSessions = sessions.filter(
    (s) => s.status === filter || filter === "All"
  );

  return (
    <div className="flex h-screen bg-[#F9F9F9] ">
      {/* Sidebar */}
      <Sidebar />

      {/* Content Area */}
      <div className="flex-1 px-4 py-6 md:px-[40px] md:py-[24px]">
        {/* Heading + Filter Wrapper */}
        <div className="mb-6">
          {/* Mobile Heading */}
          <h1 className="block md:hidden text-[20px] font-semibold text-[#82C220] mb-4">
            Admin - Scheme of Work
          </h1>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
            {/* LEFT SIDE — Upload Button */}
            <div className="mt-3 md:mt-0 md:order-1 order-2">
              <button
                className="
        flex items-center gap-2
        bg-[#82C220] text-white
        rounded-[8px]
        border border-[#B2B2B2]

        w-full h-[60px] px-3      /* MOBILE */
        md:w-[176px] md:h-[48px]  /* DESKTOP */
        font-inter font-normal text-[14px] leading-[120%]
      "
              >
                <img src={upload} alt="upload" className="w-[20px] h-[20px]" />
                <span className="whitespace-nowrap">Upload Document</span>
              </button>
            </div>

            {/* RIGHT SIDE — Status Label + Select */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-3 order-1 md:order-2">
              {/* Desktop Label */}
              <label className="hidden md:block text-[#101010] font-normal text-[16px] leading-[120%]">
                Status
              </label>

              {/* Select Container */}
              <div
                className="
        relative flex flex-col items-start justify-center
        bg-white border border-[#B2B2B2]
        rounded-[8px]

        /* MOBILE */
        w-full h-[60px] px-3 py-2 gap-[2px]

        /* DESKTOP */
        md:w-[110px] md:h-[44px]
        md:flex-row md:items-center md:justify-between 
        md:px-3 md:py-0
      "
              >
                {/* Mobile Label */}
                <span className="text-[#8C8C8C] text-[13px] font-medium leading-none md:hidden">
                  Status
                </span>

                {/* Select */}
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="
          bg-transparent outline-none cursor-pointer
          text-[#101010] 
          text-[15px] md:text-[14px]
          font-normal leading-none
          w-full
        "
                >
                  <option value="Active">Active</option>
                  <option value="Not Active">Not Active</option>
                  <option value="All">All</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* Table Section */}
        <div className="hidden md:block mt-[30px] bg-white rounded-[12px] shadow-sm border border-[#101010] overflow-x-auto">
          {/* Table Header */}
          <div
            className="
      grid grid-cols-[1fr_1fr_1fr_auto]
      px-[24px] py-[16px]
      border-b border-[#A3A3A3]
      text-[#8C8C8C] text-[16px] font-medium
    "
          >
            <div className="text-left">Name</div>
            <div className="text-center">Status</div>
            <div className="text-right pr-8">Action</div>
          </div>

          {/* Table Rows */}
          {filteredSessions.map((session, index) => (
            <div
              key={session.id}
              className={`
        grid grid-cols-[1fr_1fr_1fr_auto]
        px-[24px] py-[16px] text-[16px]
        border-b border-[#E5E5E5]
        ${index % 2 === 0 ? "bg-[#F4F4F4]" : ""}
      `}
            >
              {/* NAME */}
              <div className="text-[#101010] font-medium text-left">
                {session.name}
              </div>

              {/* PERIOD */}

              {/* STATUS */}
              <div className="flex items-center justify-center">
                <div
                  className="
            flex items-center gap-2
            border border-[#DBDBDB]
            rounded-[6px]
            px-3 py-[4px]
            w-[90px] h-[33px]
          "
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      session.status === "Active"
                        ? "bg-[#82C220]"
                        : "bg-[#B2B2B2]"
                    }`}
                  />
                  <span className="text-[14px] text-[#101010] leading-none">
                    {session.status}
                  </span>
                </div>
              </div>

              {/* ACTION */}
              <div className="relative flex justify-end pr-4">
                {/* VIEW BUTTON */}
                <button
                  onClick={() =>
                    setOpen(open === session.id ? null : session.id)
                  }
                  className="
      bg-[#82C220] text-white w-[81px] h-[32px]
      rounded-[6px] font-medium text-[14px]
      flex items-center justify-center gap-2
    "
                >
                  View
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="4"
                    viewBox="0 0 8 4"
                    fill="none"
                    className={`transition-transform duration-200 mt-[2px] ${
                      open === session.id ? "rotate-180" : ""
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

                {/* DROPDOWN */}
                {open === session.id && (
                  <div
                    className="
      absolute
      top-[32px] 
      right-[-25px]       
      w-[120px]
      bg-[#F3F9E9] 
      shadow-md z-20
      flex flex-col
    "
                  >
                    {["First Term", "Second Term", "Third Term"].map((term) => (
                      <button
                        key={term}
                        onClick={() => {
                          if (term === "First Term") navigate("/thirddash");
                          setOpen(null);
                        }}
                        className="
          text-[#101010] text-[14px]
          font-['Inter']
          py-[10px] px-[12px]
          text-left hover:bg-[#E2F0D5]
          border-b last:border-none border-[#DCE6C8]
        "
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE VIEW LIST */}
        <div className="block md:hidden mt-[20px] space-y-4 border border-[#B2B2B2] rounded-[16px] p-4">
          {filteredSessions.map((session, index) => (
            <div
              key={session.id}
              className="w-full bg-[#FFFFFF] rounded-[6px] p-4 space-y-3 border border-[#E5E5E5]"
            >
              {/* Session Header */}

              <div className="flex items-center justify-between w-full h-[50px] bg-white px-[12px] py-[8px] border-b border-[#E5E5E5]">
                <p className="text-[#101010] text-[18px] font-medium leading-[100%]">
                  2024/2025 Session
                </p>

                {index > 0 && (
                  <div className="flex items-center gap-2">
                    {/* EDIT BUTTON */}
                    <button
                      onClick={() => console.log(`Edit ${session.name}`)}
                      className="w-[32px] h-[32px] border border-[#DBDBDB] rounded-[8px] flex items-center justify-center"
                    >
                      <img src={pencil} alt="edit" />
                    </button>

                    {/* DELETE BUTTON */}
                    <button
                      onClick={() => console.log(`Delete ${session.name}`)}
                      className="w-[32px] h-[32px] border border-[#DBDBDB] rounded-[8px] flex items-center justify-center"
                    >
                      <img src={trash} alt="delete" />
                    </button>
                  </div>
                )}
              </div>

              {/* Name */}
              <div className="flex items-center gap-[24px] w-full h-[49px] bg-[#F4F4F4] px-[12px] py-[8px] border-b border-[#E5E5E5]">
                <span className="text-[#8C8C8C] text-[14px] font-medium">
                  Name
                </span>
                <span className="text-[#101010] text-[14px] font-medium">
                  {session.name}
                </span>
              </div>

              {/* Period */}

              {/* Status */}
              <div className="flex items-center gap-[24px] w-full h-[49px] bg-[#F4F4F4] px-[12px] py-[8px]">
                <span className="text-[#8C8C8C] text-[14px] font-medium">
                  Status
                </span>

                <div className="flex items-center gap-2 border border-[#DBDBDB] px-3 py-1 rounded-[6px]">
                  <span
                    className={`w-[8px] h-[8px] rounded-full ${
                      session.status === "Active"
                        ? "bg-[#82C220]"
                        : "bg-[#B2B2B2]"
                    }`}
                  />
                  <span className="text-[14px]">{session.status}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="relative w-full">
                {/* BUTTON */}
                <button
                  onClick={() =>
                    setOpen(open === session.id ? null : session.id)
                  }
                  className="bg-[#82C220] text-white w-full h-[48px] px-[16px] py-[6px] rounded-[6px] text-[14px] font-medium"
                >
                  View
                </button>

                {/* DROPDOWN */}
                {open === session.id && (
                  <div className="absolute left-0 top-full w-full bg-[#F3F9E9] rounded-b-[10px] shadow-md z-10 flex flex-col">
                    {["First Term", "Second Term", "Third Term"].map((term) => (
                      <button
                        key={term}
                        onClick={() => {
                          if (term === "First Term") {
                            navigate("");
                          } else {
                            console.log(`Clicked ${term} for ${session.name}`);
                          }
                          setOpen(null);
                        }}
                        className="text-[#101010] text-[14px] font-['Inter'] py-[10px] px-[16px] text-left hover:bg-[#E2F0D5]"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
