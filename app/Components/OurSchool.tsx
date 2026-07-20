"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion"; // Variants import kiya
import { ImageIcon, Search } from "lucide-react";

// Explicit type – build error khatam
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const photos = [
  { src: "/school.png", title: "School Building", desc: "Humari building" },
  { src: "/sunnahDress.png", title: "School Assembly", desc: "Taqreebaat aur milap" },
  { src: "/classsystem.png", title: "Classroom", desc: "Parhai ka mahol" },
];

function SchoolImage({ src, title, desc }: { src: string; title: string; desc: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative overflow-hidden group rounded-2xl aspect-[4/3] bg-[#F4F1EA] border border-[#0C3960]/10">
      {!failed ? (
        <img
          src={src}
          alt={title}
          onError={() => setFailed(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-[#0C3960]/30">
          <ImageIcon size={28} strokeWidth={1.5} />
          <span className="text-[10px] tracking-wide">{src.split("/").pop()}</span>
        </div>
      )}

      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0C3960]/85 via-[#0C3960]/10 to-transparent
                   translate-y-full group-hover:translate-y-0 transition-transform duration-300
                   flex flex-col justify-end p-4"
      >
        <p className="text-white font-semibold text-sm">{title}</p>
        <p className="text-white/70 text-xs">{desc}</p>
      </div>

      <div
        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm
                   flex items-center justify-center opacity-0 group-hover:opacity-100
                   transition-opacity duration-300"
      >
        <Search size={14} className="text-[#0C3960]" />
      </div>
    </div>
  );
}

export default function OurSchool() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fffffd] py-16 sm:py-24">
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]" aria-hidden="true">
        <defs>
          <pattern id="star8-school" width="72" height="72" patternUnits="userSpaceOnUse">
            <g transform="translate(36,36)">
              <rect x="-13" y="-13" width="26" height="26" fill="none" stroke="#0C3960" strokeWidth="1" />
              <rect x="-13" y="-13" width="26" height="26" fill="none" stroke="#0C3960" strokeWidth="1" transform="rotate(45)" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#star8-school)" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={fadeUp} // ab sahi hai
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-2xl mb-12 sm:mb-16"
        >
          <p className="flex items-center gap-2 text-[#C9A227] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            <span>✦</span> Our School
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C3960] leading-tight mb-4">
            Where Education and Upbringing Go Hand in Hand
          </h2>
          <p className="text-[#4A6076] text-sm sm:text-base leading-relaxed">
            A glimpse into the building, activities, and vibrant life of Al-Hussainia Islamic Public School—bringing the true spirit of our school right to your home.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16 sm:mb-20"
        >
          {photos.map((p) => (
            <SchoolImage key={p.src} {...p} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-[#0C3960]/10 pt-10"
        >
          {[
            { title: "Deeni Tarbiyat", desc: "Quran, Namaz aur Islamic akhlaq har bachay ki bunyaad hai." },
            { title: "Qabil Ustaad", desc: "Mukhlis aur tajurbakaar teachers jo bachay ko apna samajhtay hain." },
            { title: "Safe Mahol", desc: "Har bachay ki nigrani aur hifazat humari zimmedari hai." },
          ].map((v) => (
            <div key={v.title} className="flex flex-col gap-1.5">
              <h3 className="text-[#2F7D5C] font-bold text-sm">{v.title}</h3>
              <p className="text-[#4A6076] text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}