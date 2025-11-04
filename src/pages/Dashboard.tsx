import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import girl from "../assets/girl.png";

const Dashboard = () => {
  const location = useLocation();
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const showAnnouncements = location.pathname === "/dashboard";

  return (
    <div className="flex h-screen bg-[#F9F9F9]">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header title="Alagbara International College" showSchoolLogo />

        {showAnnouncements && showAnnouncement && (
          <div className="bg-[#FFB140] flex items-center justify-between w-[1130px] h-[48px] ml-[24px]pl-[20px] pl-[20px]">
            <div className="flex items-center gap-[10px] ml-[8px]">
              <img
                src="/src/assets/announce.png"
                alt="Announcement Icon"
                className="w-[24px] h-[24px]"
              />
              <span className="text-[#101010] font-['Inter'] font-medium text-[16px] leading-[120%]">
                Announcement
              </span>
              <div className="w-[1px] h-[24px] bg-[#101010]" />
              <p className="text-[#101010] text-[16px] font-normal font-['Inter']">
                Mid-Term Exams start next Monday, August 18th. Ensure all
                assessment scores are updated.
              </p>
            </div>

            <button
              onClick={() => setShowAnnouncement(false)} // hides the line
              className="mr-[12px] text-[#101010] font-bold text-[20px] cursor-pointer hover:text-red-600"
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
              }}
            >
              ×
            </button>
          </div>
        )}
        {/* Session and Term Selectors */}
        <div className="flex items-center gap-[16px] mt-[12px] ml-auto mr-[20px] translate-y-[13px]">
          {/* Session Dropdown */}
          <div className="flex items-center gap-[8px]">
            <label
              htmlFor="session"
              className="text-[#10101080] font-['Inter'] text-[16px] font-medium leading-[120%]"
            >
              Session:
            </label>

            <div className="relative">
              <select
                id="session"
                defaultValue="2023/2024"
                className="appearance-none w-[141px] h-[44px] rounded-[8px] border border-[#10101059] 
                   px-[12px] pr-[30px] py-[4px] text-[16px] font-['Inter'] font-normal 
                   text-[#101010BF] bg-white focus:outline-none"
              >
                <option value="2023/2024">2023/2024</option>
                <option value="2022/2023">2022/2023</option>
                <option value="2021/2022">2021/2022</option>
                <option value="2020/2021">2020/2021</option>
              </select>

              {/* Custom vector arrow */}
              <svg
                className="absolute left-[110px]  top-1/2 transform -translate-y-1/2 pointer-events-none"
                width="10"
                height="5"
                viewBox="0 0 10 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 4L9 1"
                  stroke="#101010"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Term */}
          <div className="flex items-center gap-[8px]">
            <label
              htmlFor="term"
              className="text-[#10101080] font-['Inter'] text-[16px] font-medium leading-[120%]"
            >
              Term:
            </label>

            <div className="relative">
              <select
                id="term"
                defaultValue="First Term"
                className="appearance-none w-[114px] h-[44px] rounded-[8px] border border-[#10101059] 
                   px-[12px] pr-[30px] py-[4px] text-[16px] font-['Inter'] font-normal 
                   text-[#101010BF] bg-white focus:outline-none"
              >
                <option value="First Term">First</option>
                <option value="Second Term">Second</option>
                <option value="Third Term">Third</option>
              </select>

              {/* Custom vector arrow */}
              <svg
                className="absolute left-[80px] top-1/2 transform -translate-y-1/2 pointer-events-none"
                width="10"
                height="5"
                viewBox="0 0 10 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 4L9 1"
                  stroke="#101010"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Student Card */}

          <div className="w-[526px] h-[346px] bg-[#F3F9E9] rounded-[8px] p-[8px] flex gap-[24px] mt-[35px] ml-[40px] ">
            {/* Left Section - Image and Admission No */}
            <div className="flex flex-col items-center ml-[0px]">
              <img
                src={girl}
                alt="Student"
                className="w-[237px] h-[257px] rounded-[9.1px] object-cover translate-y-[10px]"
              />

              <div className="flex items-center gap-[10px] mt-[40px]">
                <div className="bg-[#D8ECBA] rounded-[4px] px-[8px] py-[4px] inline-flex items-center">
                  <span className="text-[14px] font-normal text-[#101010] font-['Inter'] leading-[120%] whitespace-nowrap">
                    Admission No:
                  </span>
                </div>
                <span className="text-[16px] font-medium text-[#101010] font-['Inter'] leading-[120%]">
                  ADM123356474747
                </span>
              </div>
            </div>

            {/* Right Section - Student Details */}
            <div className="flex flex-col justify-start gap-[12px] text-[#101010] font-['Inter'] text-[16px] mt-[22px]">
              <div className="flex items-center gap-[10px] mt-[5px]">
                <span className="bg-[#D8ECBA] w-[59px] h-[33px] flex items-center justify-center rounded-[4px] text-[14px] font-normal text-[#101010] leading-[120%] opacity-100">
                  Name:
                </span>
                <span className="text-[16px] font-medium text-[#101010] leading-[120%]">
                  Leslie Alexander
                </span>
              </div>

              <div className="flex items-center gap-[10px] mt-[10px]">
                <span className="bg-[#D8ECBA] w-[59px] h-[33px] flex items-center justify-center rounded-[4px] text-[14px] font-normal text-[#101010] leading-[120%] opacity-100">
                  Class:
                </span>
                <span className="text-[16px] font-medium text-[#101010] leading-[120%]">
                  JSS 2A
                </span>
              </div>

              <div className="flex items-center gap-[10px] mt-[17px]">
                <span className="bg-[#D8ECBA] w-[78px] h-[33px] flex items-center justify-center rounded-[4px] text-[14px] font-normal text-[#101010] leading-[120%] opacity-100">
                  Category:
                </span>
                <span className="text-[16px] font-medium text-[#101010] leading-[120%]">
                  Junior Secondary
                </span>
              </div>

              <div className="flex items-center gap-[10px] mt-[25px]">
                <span className="bg-[#D8ECBA] w-[59px] h-[33px] flex items-center justify-center rounded-[4px] text-[14px] font-normal text-[#101010] leading-[120%] opacity-100">
                  Gender:
                </span>
                <span className="text-[16px] font-medium text-[#101010] leading-[120%]">
                  Female
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
