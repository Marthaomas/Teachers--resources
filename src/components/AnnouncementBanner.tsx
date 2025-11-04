import announce from "../assets/announce.png";

const AnnouncementBanner = () => {
  return (
    <div className="flex items-center justify-between bg-[#FFB140] rounded-md w-full max-w-[1160px] h-[48px] px-[16px] py-[6px] mx-auto">
      {/* Left Side (icon + title) */}
      <div className="flex items-center gap-[10px]">
        <img
          src={announce}
          alt="Announcement Icon"
          className="w-[24px] h-[24px]"
        />
        <span className="text-[#101010] text-[16px] font-medium font-['Inter'] leading-[120%]">
          Announcement
        </span>
      </div>

      {/* Right Side (message) */}
      <p className="text-[#101010] text-[14px] font-medium font-['Inter'] leading-[120%] text-right">
        Mid-Term Exams start next Monday, August 18th. Ensure all assessment
        scores are updated.
      </p>
    </div>
  );
};

export default AnnouncementBanner;
