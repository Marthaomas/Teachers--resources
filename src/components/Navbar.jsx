import { Link } from "react-router-dom";
import { useState } from "react";
import bg from "../assets/horizontal.png";

export default function Navbar({ customBg, children }) {
  const [open, setOpen] = useState(false);

  return (
    
<div className="h-[65vh] md:h-[75vh] relative overflow-hidden">
  
  {/* REAL IMAGE (SHARP) */}
  <img
    src={customBg || bg}
    alt=""
    className="absolute inset-0 w-full h-full object-cover"
  /> 
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-cream"></div>

      {/* NAVBAR */}
      <div className="relative z-10 flex justify-between items-center p-6">
        
        {/* Logo */}
        <h1 className="text-xl font-semibold text-[#4B3F36]">
          Whispers of Grace
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative group text-[#5A4A42] font-medium transition duration-300 hover:text-[#D6A77A] hover:drop-shadow-sm"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#D6A77A] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-[#5A4A42] text-2xl"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU (SIDE DRAWER) */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-white/95 backdrop-blur-md shadow-lg transform transition-transform duration-300 z-20 
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col p-6 gap-6">

          {/* CLOSE BUTTON */}
          <div className="flex justify-end">
            <button
              onClick={() => setOpen(false)}
              className="text-2xl text-[#5A4A42]"
            >
              ✕
            </button>
          </div>

          {/* LINKS */}
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className="text-[#5A4A42] text-lg w-full py-2 px-3 rounded-md transition hover:bg-[#F5EDE4] active:scale-95"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* HERO TEXT */}
      {/* HERO TEXT */}
<div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-30 md:mt-30">

{children ? (
  children
) : (
  <>
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-[#4B3F36] tracking-wide">
      Whispers of Grace
    </h1>

    <div className="w-16 md:w-20 h-[2px] bg-[#D6A77A] mx-auto my-4"></div>

    <p className="text-[#5A4A42] max-w-xl leading-relaxed text-sm sm:text-base">
      Poetry inspired by God’s love, peace, strength, and truth.
      A sacred space where words become prayers,
      and every verse draws the heart closer to Him.
    </p>
  </>
)}

</div>
    </div>
  );
}