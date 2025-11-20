import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import girl from "../assets/girl.png";

const Dashboard = () => {
  const location = useLocation();
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const showAnnouncements = location.pathname === "/";

  return (
    <div className="flex h-screen bg-[#F9F9F9]">
  {/* Sidebar - hides on mobile */}
  <Sidebar />

  {/* MAIN CONTENT */}
  <div className="flex flex-col flex-1">
    <Header title="Alagbara International College" showSchoolLogo />

    {/* ANNOUNCEMENT BAR */}
    {showAnnouncements && showAnnouncement && (
      <div className="bg-[#FFB140] flex items-center justify-between 
        w-full max-lg:w-[95%] ml-auto mr-auto
        px-4 py-2 mt-2 rounded-md text-sm sm:text-base"
      >
        <div className="flex items-center gap-[10px]">
          <img
            src="/src/assets/announce.png"
            className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]"
          />
          <span className="font-semibold">Announcement</span>
          <div className="w-[1px] h-[24px] bg-[#101010] hidden sm:block" />

          <p className="text-[#101010] text-sm sm:text-[16px] leading-[120%]">
            Mid-Term Exams start next Monday, August 18th.
          </p>
        </div>

        <button
          onClick={() => setShowAnnouncement(false)}
          className="text-[20px] font-bold pr-3"
        >
          ×
        </button>
      </div>
    )}

    {/* SESSION SELECT — RESPONSIVE */}
    <div className="flex flex-wrap items-center gap-4 mt-4 px-4 justify-end">
      {/* Session */}
      <div className="flex items-center gap-2">
        <label className="text-sm sm:text-base text-[#10101080]">Session:</label>
        <select className="border px-3 py-2 rounded-md text-sm sm:text-base">
          <option>2023/2024</option>
        </select>
      </div>

      {/* Term */}
      <div className="flex items-center gap-2">
        <label className="text-sm sm:text-base text-[#10101080]">Term:</label>
        <select className="border px-3 py-2 rounded-md text-sm sm:text-base">
          <option>First</option>
        </select>
      </div>
    </div>

    {/* STUDENT CARD — RESPONSIVE */}
    <div className="
      bg-[#F3F9E9] rounded-[8px] p-[12px] flex flex-col sm:flex-row gap-[24px]
      mt-[35px] mx-auto
      w-full sm:w-[526px] sm:h-[346px]
    ">
      {/* Image Section */}
      <div className="flex flex-col items-center">
        <img
          src={girl}
          alt="Student"
          className="
            rounded-[9.1px] object-cover
            w-[200px] h-[220px] sm:w-[237px] sm:h-[257px]
          "
        />

        <div className="flex items-center gap-2 mt-4">
          <span className="bg-[#D8ECBA] px-2 py-1 rounded text-sm">Admission No:</span>
          <span className="text-sm sm:text-base font-medium">ADM123356474747</span>
        </div>
      </div>

      {/* DETAILS */}
      <div className="flex flex-col gap-4 text-sm sm:text-[16px]">
        <div className="flex gap-3 items-center">
          <span className="bg-[#D8ECBA] px-2 py-1 rounded text-sm">Name:</span>
          <span className="font-medium">Leslie Alexander</span>
        </div>

        <div className="flex gap-3 items-center">
          <span className="bg-[#D8ECBA] px-2 py-1 rounded text-sm">Class:</span>
          <span className="font-medium">JSS 2A</span>
        </div>

        <div className="flex gap-3 items-center">
          <span className="bg-[#D8ECBA] px-2 py-1 rounded text-sm">Category:</span>
          <span className="font-medium">Junior Secondary</span>
        </div>

        <div className="flex gap-3 items-center">
          <span className="bg-[#D8ECBA] px-2 py-1 rounded text-sm">Gender:</span>
          <span className="font-medium">Female</span>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};
export default Dashboard;
