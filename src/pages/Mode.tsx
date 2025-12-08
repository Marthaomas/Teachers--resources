import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import upload from "../assets/upload.png";
import Sidebar from "../components/Sidebar";
import doc from "../assets/doc.png";
interface Topic {
  title: string;
  dateUploaded: string;
}

interface Week {
  week: string;
  modified: string;
  topics: Topic[];
}

const AdminModules = () => {
  const navigate = useNavigate();
  const [openWeek, setOpenWeek] = useState<string | null>("Week 1");

  const weeks: Week[] = [
    {
      week: "Week 1",
      modified: "12-Apr-2026",
      topics: [
        { title: "Algebraic Operations", dateUploaded: "12-Apr-2026" },
        {
          title: "Addition and Subtraction Involving Algebraic Expression",
          dateUploaded: "12-Apr-2026",
        },
        {
          title: "Algebraic Equation: Simultaneous/ Quadratic Equation",
          dateUploaded: "12-Apr-2026",
        },
      ],
    },
    { week: "Week 2", modified: "12-Apr-2026", topics: [] },
    { week: "Week 3", modified: "12-Apr-2026", topics: [] },
    { week: "Week 4", modified: "12-Apr-2026", topics: [] },
    { week: "Week 5", modified: "12-Apr-2026", topics: [] },
  ];

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

            <p className="text-[#4D4D4D] font-inter font-medium text-[16px] whitespace-nowrap">
              Mathematics
            </p>
          </div>

          {/* Upload Button */}
          <div className="mt-4 md:mt-0">
            <button
              className="
                flex items-center gap-2
                bg-[#82C220] text-white
                rounded-[8px]
                border border-[#B2B2B2]
                w-full h-[60px] px-3
                md:w-[176px] md:h-[48px] md:px-4
                font-inter text-[14px] leading-[120%]
              "
            >
              <img src={upload} alt="upload" className="w-[20px] h-[20px]" />
              <span className="whitespace-nowrap">Upload Document</span>
            </button>
          </div>
        </div>
        <div className="p-4 mt-8">
          {weeks.map((week) => {
            const isOpen = openWeek === week.week;

            return (
              <div
                key={week.week}
                className={`mb-3 overflow-hidden transition-all ${
                  isOpen ? "border border-[#101010] rounded-md" : "rounded-md"
                }`}
              >
                {/* Week Button */}
                <button
                  onClick={() => setOpenWeek(isOpen ? null : week.week)}
                  className={`
      w-full 
      flex flex-col gap-2
      md:flex-row md:items-center md:justify-between
      px-4 py-3 bg-[#F7F7F7]
      transition-all
      ${isOpen ? "rounded-t-md rounded-b-none" : "rounded-md"}
    `}
                  style={{ minHeight: "59px" }}
                >
                  {/* Left: Arrow + Week */}
                  <span
                    className="flex items-center gap-2"
                    style={{
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: "120%",
                    }}
                  >
                    {/* Arrow */}
                    <svg
                      width="6"
                      height="12"
                      viewBox="0 0 6 12"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        transform: isOpen ? "rotate(-90deg)" : "rotate(0deg)",
                        transformOrigin: "center",
                        transition: "transform 180ms ease-in-out",
                      }}
                    >
                      <path
                        d="M1 1 L5 6 L1 11"
                        fill="none"
                        stroke="#82C220"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {week.week}
                  </span>

                  {/* Right: Date Modified */}
                  <span className="flex items-center gap-1">
                    <span className="text-[#7A7A7A] font-inter font-normal text-[14px]">
                      Date Modified:
                    </span>

                    <span className="text-[#4D4D4D] font-inter font-medium text-[16px]">
                      {week.modified}
                    </span>
                  </span>
                </button>

                {isOpen && week.topics.length > 0 && (
                  <div className="bg-white px-4 py-4 space-y-4 rounded-b-md">
                    {week.topics.map((topic) => (
                      <div
                        key={topic.title}
                        className="
          flex flex-col 
          gap-4 
          md:flex-row md:items-center md:justify-between
        "
                      >
                        {/* LEFT — icon + title */}
                        <div className="flex items-start gap-3 w-full md:w-auto">
                          <img
                            src={doc}
                            alt="document"
                            className="w-[18px] h-[18px] flex-shrink-0 mt-1"
                          />

                          <span
                            className="
                            text-[#4B5563] 
                            text-[16px] leading-[120%] font-inter 
                            *:break-words "
                          >
                            {topic.title}
                          </span>
                        </div>

                        {/* RIGHT — date + view button */}
                        <div
                          className="
                        flex flex-col 
                         gap-3 
                         md:flex-row md:items-center md:gap-15 
                        w-full md:w-auto" >
                          {/* DATE UPLOADED */}
                          <span className="flex flex-row items-center gap-1 md:flex-row md:items-center whitespace-nowrap">
                            <span
                              className="text-[#7A7A7A]"
                              style={{
                                fontFamily: "Inter",
                                fontWeight: 400,
                                fontSize: "14px",
                                lineHeight: "120%",
                              }}
                            >
                              Date Uploaded:
                            </span>

                            <span
                              style={{
                                fontFamily: "Inter",
                                fontWeight: 500,
                                fontSize: "16px",
                                lineHeight: "120%",
                                color: "#4D4D4D",
                              }}
                            >
                              {topic.dateUploaded}
                            </span>
                          </span>

                          {/* VIEW BUTTON */}
                          <button
                            onClick={() => navigate("/modal")}
                            className="
              bg-[#82C220] text-white 
              flex items-center justify-center
              rounded-[6px]

              /* MOBILE FULL WIDTH */
              w-full h-[45px]

              /* TABLET + DESKTOP */
              md:w-[82px] md:h-[32px] md:rounded-[6px]

              font-inter text-[14px] leading-[120%]
            "
                          >
                            View
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminModules;
