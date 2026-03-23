import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import bg from "../assets/horizontal.png"
const poems = [
  {
    id: 1,
    title: "What About Those?",
    preview: `What about the forgotten?
    The ones swallowed by sorrow’s sea,
    Whose minds are battlegrounds each dawn,
    Whose hearts whisper, "Will anyone see me?"`,
    image: bg,
  },
  {
    id: 2,
    title: "Finding Rest",
    preview: `Digging and digging...
    Digging through the sands,
    hoping that maybe—just maybe—
    I'll find rest.
    
    Digging through the streets,
    hoping love will notice me this time.
    
    Running through the waters,
    praying the waves will wash my soul clean. `,
    image: bg,
  },
  {
    id: 3,
    title: "It's So Easy",
    preview: `It's so easy...
    So easy to serve God when life feels smooth.
    When the sun is shining,
    and every prayer seems to come with a "yes."
    
    It's easy to lift your hands high
    when joy fills your lungs,
    when peace tucks you in at night,
    and your world feels like a Sunday morning.`,
    image: bg,
  },
  {
    id: 4,
    title: "The Secret Room",
    preview:  `As I sat down, the Lord began to open my eyes.

    I saw a room filled with illuminating light beaming down on me—light not of this world. Around the room were treasures on tables and boards.
    
    A mighty hand stretched toward me and gave me a golden pen to write my name. Then He said to me, "Welcome to the secret room, My daughter. This is where I teach My children hidden things—but they must be prepared to receive them." `,
    image: bg,
  },
];

export default function Home() {
  return (
    <div className="bg-[#FAF7F2] text-[#5A4A42]">

      <Navbar />

      {/* FEATURED POEMS */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10 text-[#4B3F36]">
          Featured Poems
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {poems.map((poem) => (
            <div
              key={poem.id}
              className="relative h-[300px] rounded-xl overflow-hidden shadow-md group"
              style={{
                backgroundImage: `url(${poem.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-white/70 group-hover:bg-white/60 transition"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-4 text-left">
                <h3 className="font-semibold text-lg text-[#4B3F36]">
                  {poem.title}
                </h3>

                <p className="text-sm mt-2 text-[#5A4A42]">
                  {poem.preview}
                </p>

                <Link
                  to={`/poems/${poem.id}`}
                  className="mt-3 text-[#D6A77A] font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
  className="relative py-24 px-6 bg-cover bg-center"
  style={{ backgroundImage: `url(${bg})` }}
>

  {/* Overlay */}
  <div className="absolute inset-0 bg-white/85"></div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl mx-auto text-center">

    <p className="uppercase tracking-[0.3em] text-xs text-[#A08F84] mb-3">
      About Me
    </p>

    <h2 className="text-2xl md:text-4xl font-semibold text-[#4B3F36] mb-5">
      Hi, I’m Lumi
    </h2>

    <p className="text-[#5A4A42] leading-relaxed mb-5">
      I write from a place of stillness, where faith meets reflection
      and words become quiet prayers. What began as personal thoughts
      slowly became something deeper—a space to encounter God
      in the quiet moments of life.
    </p>

    <p className="text-[#5A4A42] leading-relaxed mb-8">
      Through every poem, I hope to create a sense of peace,
      a pause from the noise, and a reminder that you are seen,
      loved, and never alone.
    </p>

    <Link
      to="/about"
      className="inline-block text-[#D6A77A] font-medium hover:underline"
    >
      Read My Story →
    </Link>

  </div>

</section>

      {/* FOOTER */}
      <footer className="text-center py-10 bg-[#FAF7F2]">

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