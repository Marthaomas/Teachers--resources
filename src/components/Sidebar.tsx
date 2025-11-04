import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import dashboardIcon from "../assets/dashboard.png";
import chatIcon from "../assets/chat.png";
import filesIcon from "../assets/files.png";
import ellipse from "../assets/ellipse.png";
import settingsIcon from "../assets/setting.png";
import logoutIcon from "../assets/logout.png";


const Sidebar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: dashboardIcon ,path: "/dashboard"},
    { id: "session", label: "Session Record", icon: filesIcon, path:"/" },
    { id: "announcements", label: "Announcements", icon: chatIcon, },
  ];

  const bottomMenu = [
    { id: "files", label: "Files", icon: filesIcon },
    { id: "chat", label: "Chat", icon: chatIcon },
  ];

  return (
    <aside className="w-[280px] h-screen border-r border-[#B2B2B2]/40 flex flex-col justify-between bg-white">
      {/* Logo section */}
      <div className="border-b border-[#B2B2B2]/40 px-[36px] py-[36px]">
        <img
          src={logo}
          alt="SeamTrack Logo"
          className="w-[164px] h-[36px] object-contain ml-[8px]"
        />
      </div>

      {/* Menu items */}
      <nav className="flex-1 flex flex-col px-[28px] pt-[40px] gap-4">
        {menuItems.map((item) => {
          const isActive = active === item.id;

          return (
            <button
              key={item.id}
              onClick={() => {
                setActive(item.id);
                navigate(item.path);
              }}
              
              className={`flex items-center gap-[8px] w-[224px] h-[48px] px-[16px] py-[8px]
                text-[16px] font-normal rounded-[8px]
                border-none outline-none shadow-none transition-all duration-200
                ${
                  isActive
                    ? "bg-[#F3F9E9] text-[#82C220]"
                    : "bg-transparent text-[#4D4D4D]"
                }`}
            >
              <img
                src={item.icon}
                alt={`${item.label} Icon`}
                className={`w-[24px] h-[24px] object-contain ${
                  isActive ? "filter-green" : "filter-gray"
                }`}
              />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
     {/* Bottom Section (Profile + Settings + Logout) */}
<div className="px-[28px] py-[24px] flex flex-col  bg-transparent">
  {/* Profile Section */}
  <div className="flex items-center" style={{ gap: '8px', width: '100%' }}>
  <img
    src={ellipse}
    alt="User Profile"
    className="w-[40px] h-[40px] object-cover rounded-full"
    style={{ flexShrink: 0 }}
  />
  <div className="flex flex-col">
    <span
      className="text-[#101010] text-[16px] font-medium leading-[120%] font-['Inter']"
      style={{ opacity: 1 }}
    >
      Darrell Steward
    </span>
    <span
      className="text-[#8C8C8C] text-[14px] font-normal leading-[100%] font-['Inter']"
      style={{ opacity: 1 }}
    >
      Student - JS1
    </span>
  </div>
</div>


  

  {/* Settings Button */}
<div className="mt-[16px]"> {/* ← 16px space between profile and settings */}
  <button
    className="flex items-center gap-[8px] text-[#8C8C8C] text-[16px] font-normal leading-[120%] font-['Inter']outline-none focus:outline-none border-none bg-transparent"
    style={{ opacity: 1 }}
  >
    <img
      src={settingsIcon}
      alt="Settings"
      className="w-[24px] h-[24px] object-contain"
    />
    <span>Settings</span>
  </button>
</div>

  {/* Logout Button */}
  <div className="mt-[16px]"> {/* ← 16px space between profile and settings */}
  <button
    className="flex items-center gap-[8px] text-[#8C8C8C] text-[16px] font-normal leading-[120%] font-['Inter']outline-none focus:outline-none border-none bg-transparent"
    style={{ opacity: 1 }}
  >
    <img
      src={logoutIcon}
      alt="Settings"
      className="w-[24px] h-[24px] object-contain"
    />
    <span>Logout</span>
  </button>
</div>
</div>

      
    </aside>
  );
};

export default Sidebar;
