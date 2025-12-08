import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import uploadIcon from "../assets/upload.png";
import rain from "../assets/rain.png";

interface CustomSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
}

/* ============================
   FIXED VALUE BOX (STATIC FIELD)
   ============================ */
const FixedValueBox = ({ label, value }: { label: string; value: string }) => {
  return (
    <div
      className="
        w-full max-w-none md:max-w-[311px]
        h-[64px]
        border border-[#CACACA]
        rounded-md
        px-3 pt-2 pb-1
        flex flex-col gap-1
      "
    >
      <span className="text-[14px] text-[#8C8C8C] font-inter font-[400]">
        {label}
      </span>

      <span className="text-[16px] text-[#101010] font-inter font-[500]">
        {value}
      </span>
    </div>
  );
};

/* ============================
   CUSTOM SELECT DROPDOWN
   ============================ */
const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder,
}) => {
  return (
    <div
      className="
        w-full max-w-none md:max-w-[311px]
        h-[64px]
        border border-[#CACACA]
        rounded-md
        px-3 pt-2 pb-1
        flex flex-col gap-1
        relative
      "
    >
      <span className="text-[14px] text-[#8C8C8C] font-inter font-[400]">
        {label}
      </span>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          bg-transparent
          text-[16px] text-[#101010]
          font-inter font-[500]
          focus:outline-none
          w-full
          appearance-none
          p-0
        "
      >
        <option value="" className="text-[#8C8C8C]">
          {placeholder || `Select ${label}`}
        </option>

        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {/* Custom Arrow */}
      <div
        className="
          pointer-events-none
          absolute
          right-3
          top-5
          flex items-center justify-center
        "
      >
        {/* SVG ARROW – you can scale it */}
        <svg
          width="40"      /* Increase width here */
          height="25"     /* Increase height here */
          viewBox="0 0 24 24"
          fill="none"
          stroke="#101010"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  );
};

/* ============================
          MAIN PAGE
   ============================ */
const UploadSchemetwo = () => {
  const navigate = useNavigate();
  const [subject] = useState("Mathematics"); // fixed
  const [classLevel, setClassLevel] = useState("");
  const [session, setSession] = useState("");
  const [term, setTerm] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    if (selectedFile.type !== "application/pdf") {
      alert("Only PDF files are allowed.");
      return;
    }

    if (selectedFile.size > 10 * 1024 * 1024) {
      alert("File must be less than 10MB");
      return;
    }

    setFile(selectedFile);
  };

  const handleSubmit = () => {
    if (!subject || !classLevel || !session || !term || !file) {
      alert("Please fill in all fields and upload a file.");
      return;
    }

    alert("Uploaded Successfully!");
  };

  return (
    <div className="w-full flex justify-center items-center py-12 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[24px] font-medium text-[#101010]">
            Upload Syllabus
          </h2>

          <button
            onClick={() => navigate("/modaltwo")}
            className="w-[12px] h-[12px] text-[#101010]"
          >
            ×
          </button>
        </div>

        {/* Form */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

{/* SUBJECT – now full width on desktop */}
<div
  className="
    w-full md:col-span-2      /* span both columns on desktop */
    h-[64px]
    border border-[#CACACA]
    rounded-[8px]
    px-4 py-2
    flex flex-col gap-1
  "
  style={{ maxWidth: "646px" }}
>
  <span className="text-[14px] text-[#8C8C8C] font-inter font-[400]">
    Subject
  </span>

  <span className="text-[16px] text-[#101010] font-inter font-[500]">
    Mathematics
  </span>
</div>



{/* SESSION stays the same */}
<CustomSelect
  label="Session"
  placeholder="2025/2026"
  value={session}
  onChange={setSession}
  options={[
    "2024/2025",
    "2023/2024",
    "2022/2023",
    "2021/2022",
  ]}
/>

{/* CLASS moved to last position */}
<CustomSelect
  label="Class"
  placeholder="JSS1"
  value={classLevel}
  onChange={setClassLevel}
  options={["JSS2", "JSS3", "SSS1", "SSS2"]}
/>

</div>


        <label
  className="
    mt-6 block cursor-pointer 
    w-full max-w-[646px]
    min-h-[84px]
    px-4 py-5
    rounded-[10px]
    border border-dashed 
  "
  style={{ borderColor: "#A3A3A3" }}
>
  <div className="flex items-center gap-4">
    {/* Icon Circle */}
    <div
      className="
        flex items-center justify-center rounded-full 
        w-10 h-10
      "
      style={{ backgroundColor: "#F4F4F4" }}
    >
      <img src={rain} alt="Upload" className="w-4 h-4" />
    </div>

    {/* Texts */}
    <div className="flex flex-col gap-2">
      <span className="text-[16px] text-[#101010] leading-[120%] font-inter">
        Tap to Upload
      </span>

      <span className="text-[14px] text-[#B2B2B2] leading-[120%] font-inter">
        PDF | 10MB max.
      </span>
    </div>
  </div>

  <input
    type="file"
    className="hidden"
    accept="application/pdf"
    onChange={handleFileUpload}
  />
</label>




        {file && <p className="text-sm text-green-600 mt-2">Uploaded: {file.name}</p>}
        <button
  onClick={handleSubmit}
  className="
    bg-[#82C220] text-white hover:bg-green-700 
    rounded-md opacity-100 mt-6

    font-inter font-medium text-[16px] leading-[120%]

    /* Desktop exact size */
    md:w-[103px]
    md:h-[51px]
    md:text-center         /* Desktop: left align */

    /* Mobile & Tablet */
    w-full
    py-3
    text-center           /* Mobile: center align */
  "
>
  Upload
</button>

       

      </div>
    </div>
  );
};

export default UploadSchemetwo;
