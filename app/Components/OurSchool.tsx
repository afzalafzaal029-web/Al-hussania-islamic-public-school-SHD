"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  ImageIcon,
  Search,
  ShieldCheck,
  BookOpen,
  GraduationCap,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const photos = [
  {
    src: "/school.png",
    title: "State-of-the-art Campus",
    desc: "Modern infrastructure with secure boarding facilities.",
  },
  {
    src: "/sunnahDress.png",
    title: "Assemblies & Tarbiyah",
    desc: "Morning assemblies focusing on Islamic values & character.",
  },
  {
    src: "/classsystem.png",
    title: "Interactive Classrooms",
    desc: "Advanced learning environments for modern education.",
  },
];

function SchoolImage({
  src,
  title,
  desc,
}: {
  src: string;
  title: string;
  desc: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative overflow-hidden group rounded-2xl md:rounded-3xl aspect-[4/3] bg-gray-100 border border-gray-200/50 shadow-sm">
      {!failed ? (
        <img
          src={src}
          alt={title}
          onError={() => setFailed(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-gray-400">
          <ImageIcon size={32} strokeWidth={1.5} />
          <span className="text-xs tracking-wider uppercase font-medium">
            {src.split("/").pop()}
          </span>
        </div>
      )}

      <div
        className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/20 to-transparent
                   translate-y-full group-hover:translate-y-0 transition-transform duration-500
                   flex flex-col justify-end p-5 md:p-6"
      >
        <p className="text-white font-bold text-base md:text-lg mb-1">
          {title}
        </p>
        <p className="text-white/80 text-xs md:text-sm leading-relaxed">
          {desc}
        </p>
      </div>

      <div
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md
                   flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-75
                   transition-all duration-300 shadow-lg"
      >
        <Search size={16} className="text-blue-900" />
      </div>
    </div>
  );
}

export default function OurSchool() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 md:py-28">
      {/* Background Pattern */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="star8-school"
            width="72"
            height="72"
            patternUnits="userSpaceOnUse"
          >
            <g transform="translate(36,36)">
              <rect
                x="-13"
                y="-13"
                width="26"
                height="26"
                fill="none"
                stroke="#0f172a"
                strokeWidth="1.5"
              />
              <rect
                x="-13"
                y="-13"
                width="26"
                height="26"
                fill="none"
                stroke="#0f172a"
                strokeWidth="1.5"
                transform="rotate(45)"
              />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#star8-school)" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-3xl mb-14 md:mb-20 text-center mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-black text-blue-950 leading-tight mb-5 tracking-tight">
            Where Education & Tarbiyah Go Hand in Hand
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            A glimpse into the robust infrastructure, modern facilities, and
            vibrant life of Al-Hussainia Islamic Public School. We provide an
            environment that nurtures leadership and faith.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24"
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
          className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t-2 border-gray-100 pt-16"
        >
          {[
            {
              icon: <BookOpen className="w-6 h-6 text-amber-500" />,
              title: "Islamic Foundation",
              desc: "Hifz, Nazra Quran, and daily prayers form the core of our students' moral compass.",
            },
            {
              icon: <GraduationCap className="w-6 h-6 text-amber-500" />,
              title: "Expert Faculty",
              desc: "Highly qualified and dedicated teachers committed to personalized student success.",
            },
            {
              icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
              title: "Secure Environment",
              desc: "24/7 monitored premises with separate, fully secure boarding facilities available.",
            },
          ].map((v) => (
            <div
              key={v.title}
              className="flex flex-col items-center md:items-start text-center md:text-left gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-2">
                {v.icon}
              </div>
              <h3 className="text-blue-900 font-bold text-lg md:text-xl">
                {v.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
