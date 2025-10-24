import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const PerformanceRecord = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-col flex-1 bg-[#F9FAFB] min-h-screen">
        <Header />

        {/* Page content */}
        <div className="px-[24px] py-[24px]">
          <h1 className="text-[24px] font-semibold text-[#66A81F] mb-[16px]">
            Performance Record - JSS1
          </h1>

          {/* Placeholder for now — where your graph will go */}
          <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-[24px] shadow-sm">
            <p className="text-[#555] font-['Inter']">
              This is the Performance Record page.  
              You can add your graph and stats here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceRecord;
