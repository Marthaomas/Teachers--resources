import Navbar from "../components/Navbar";
import bg from "../assets/vertical.png";
import { Mail, Instagram, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-[#FAF7F2] to-[#F5EDE4] text-[#5A4A42] min-h-screen">

      {/* NAVBAR WITH HERO TEXT */}
      <Navbar customBg={bg}>
        <div className="text-center px-4">

          <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-[#7A6A5F] mb-3">
            Contact
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold text-[#4B3F36] leading-snug">
            Reach Out in Peace, <br className="hidden md:block" />
            Let Your Heart Be Heard
          </h1>

          <div className="w-16 h-[2px] bg-[#D6A77A] mx-auto my-4"></div>

          <p className="max-w-xl mx-auto text-sm md:text-base text-[#5A4A42] leading-relaxed">
            Whether you seek comfort, want to share your thoughts,
            or simply need a space to express your heart,
            you are always welcome here.
          </p>

        </div>
      </Navbar>

      {/* CONTACT CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        {/* LEFT - MESSAGE */}
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#4B3F36]">
            Send a Message ✨
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-[#E5D5C5] focus:outline-none focus:ring-2 focus:ring-[#D6A77A]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-[#E5D5C5] focus:outline-none focus:ring-2 focus:ring-[#D6A77A]"
            />

            <textarea
              placeholder="Your Message..."
              rows={5}
              className="w-full p-3 rounded-lg border border-[#E5D5C5] focus:outline-none focus:ring-2 focus:ring-[#D6A77A]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#D6A77A] text-white py-3 rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT - CONTACT INFO */}
        <div className="flex flex-col justify-center space-y-6">

          <div className="flex items-center gap-4">
            <Mail className="text-[#D6A77A]" />
            <p>Lumi141996@gmail.com</p>
          </div>

          <div className="flex items-center gap-4">
            <Instagram className="text-[#D6A77A]" />
            <p>@whispersofgrace</p>
          </div>

          <div className="flex items-center gap-4">
            <MessageCircle className="text-[#D6A77A]" />
            <p>Always open for kind words and reflections</p>
          </div>

          {/* QUOTE CARD */}
          <div className="mt-6 bg-[#F5EDE4] p-6 rounded-xl shadow-inner">
            <p className="italic text-[#7A6A5F]">
              "Come to me, all you who are weary and burdened,
              and I will give you rest." — Matthew 11:28
            </p>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <footer className="text-center py-10 bg-white mt-10">

        <h2 className="text-xl font-semibold text-[#4B3F36] mb-4">
          Whispers of Grace
        </h2>

        <div className="flex justify-center gap-6 mb-4 text-[#5A4A42] text-lg">
          <span className="hover:text-[#D6A77A] cursor-pointer">📞</span>
          <span className="hover:text-[#D6A77A] cursor-pointer">📷</span>
          <span className="hover:text-[#D6A77A] cursor-pointer">💬</span>
        </div>

        <p className="text-sm text-[#5A4A42]">
          © 2026 Whispers of Grace
        </p>

      </footer>

    </div>
  );
}