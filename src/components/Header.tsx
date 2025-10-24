import ellipse from "../assets/ellipse.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white border-b border-[#E5E5E5] px-[30px] pt-[7px] pb-[20px]  ">
      {/* Left section */}
      <div>
        <h2 className="text-[#82C220] font-semibold text-[32px] leading-[100%] font-['Inter']">
          Session Record - JSS1
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