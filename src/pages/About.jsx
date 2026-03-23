import Navbar from "../components/Navbar";
import bg from "../assets/vertical.png";

export default function About() {
  return (
    <div className="bg-[#FAF7F2] text-[#5A4A42] min-h-screen">

<Navbar customBg={bg}>
  <div className="text-center px-4">

    <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-[#7A6A5F] mb-3">
      About
    </p>

    <h1 className="text-3xl md:text-5xl font-semibold text-[#4B3F36] leading-snug">
      A Journey of Faith, <br className="hidden md:block" />
      Grace, and Quiet Reflection
    </h1>

    <div className="w-16 h-[2px] bg-[#D6A77A] mx-auto my-4"></div>

    <p className="max-w-xl mx-auto text-sm md:text-base text-[#5A4A42] leading-relaxed">
      A gentle space where words meet God’s presence,
      and hearts are drawn closer to Him through stillness,
      truth, and love.
    </p>

  </div>
</Navbar>
<p className="mb-6 italic text-[#7A6A5F]">
  “Come to me, all you who are weary…” — Matthew 11:28
</p>
    {/* CONTENT */}
<div className="max-w-3xl mx-auto px-6 py-16 text-center leading-relaxed">

<p className="mb-6 text-lg">
  If you’ve made your way here, then maybe something in these words
  spoke to your heart…
</p>

<p className="mb-6">
  Hi, I’m Lumi.
</p>

<p className="mb-6">
  This space was not created from perfection,
  but from quiet moments — moments where I felt God close,
  even when I didn’t have the right words to say.
</p>

<p className="mb-6">
  There were times I felt overwhelmed, uncertain,
  and searching for peace in places that could not hold me.
  But in the stillness, I began to hear Him…
  softly, gently, calling me back to Him.
</p>

<p className="mb-6">
  And so I started writing.
</p>

<p className="mb-6">
  Not because I had everything figured out,
  but because writing became my way of praying,
  my way of listening,
  my way of holding on to His truth.
</p>

<p className="mb-6">
  Every poem you read here carries a piece of that journey —
  the questions, the healing, the growth,
  and the quiet reassurance that God never leaves.
</p>

<p className="mb-6">
  This is more than poetry.
  It is a place for hearts that are searching,
  for souls that are tired,
  and for anyone who simply wants to feel close to God again.
</p>

<p className="mb-6">
  If you are here, you are not here by accident.
</p>

<p className="mb-10 font-medium text-[#4B3F36] text-lg">
  My prayer is that as you read,
  you don’t just see words…
  you feel His presence. ✨
</p>

</div>  

      {/* FOOTER */}
       {/* FOOTER */}
      <footer className="text-center py-10 bg-[#FFFF]">

{/* Brand */}
<h2 className="text-xl font-semibold text-[#4B3F36] mb-4">
  Whispers of Grace
</h2>

{/* Icons */}
<div className="flex justify-center gap-6 mb-4 text-[#5A4A42] text-lg">
  <span className="hover:text-[#D6A77A] cursor-pointer">📞</span>
  <span className="hover:text-[#D6A77A] cursor-pointer">📷</span>
  <span className="hover:text-[#D6A77A] cursor-pointer">💬</span>
</div>

{/* Copyright */}
<p className="text-sm text-[#5A4A42]">
  © 2026 Whispers of Grace
</p>

</footer>
    </div>
  );
}