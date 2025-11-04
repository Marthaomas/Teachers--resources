import ellipse from "../assets/ellipse.png";
import schoolIcon from "../assets/school.png";

const Header = ({
  title,
  showSchoolLogo,
  isDashboard,
}: {
  title: string;
  showSchoolLogo?: boolean;
  isDashboard?: boolean;
}) => {
  return (
    <header className="flex justify-between items-center bg-white border-b border-[#E5E5E5] px-[30px] pt-[7px] pb-[20px]  ">
      {/* Left section */}

      <div
        className={`flex items-center gap-[10px]${
          isDashboard ? "mr-[120px]" : ""
        }`}
      >
        {/* show the Dashboard */}
        {showSchoolLogo && (
          <div className="w-[48px] h-[48px] rounded-full  border-[#82C220] flex items-center justify-center">
            <img
              src={schoolIcon}
              alt="School Logo"
              className="w-[48px] h-[48px] object-contain"
            />
          </div>
        )}
        <h2 className="text-[#82C220] font-semibold text-[32px] leading-[100%] font-['Inter']">
          {title}
        </h2>
      </div>

      {/* Right section */}
      <div className="relative w-[40px] h-[40px]">
        <img
          src={ellipse}
          alt="User Profile"
          className="w-full h-full rounded-full object-cover"
        />
        {/* Status Dot */}
        <span className="absolute w-[8px] h-[8px] bg-[#31CC19] rounded-full bottom-[2px] right-[2px]" />
      </div>
    </header>
  );
};

export default Header;
