"use client";

import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const quickLinks = [
  { label: "Explore Campus", href: "/explore" },
  { label: "Admissions", href: "/contact" },
  { label: "Our Gallery", href: "/Gallery" },
  { label: "Student Portal", href: "/portal" },
  { label: "Contact Us", href: "/contact" },
];

const academics = [
  "Montessori to Middle (Class Nursery–VIII)",
  "Hifz & Nazra-ul-Quran Department",
  "Boarding & Hostel Facility",
  "Computer & Tech Academy",
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#fafafa] pt-16 pb-8 md:pt-24 md:pb-10 border-t border-gray-200">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60" />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="star8-footer" width="72" height="72" patternUnits="userSpaceOnUse">
            <g transform="translate(36,36)">
              <rect x="-13" y="-13" width="26" height="26" fill="none" stroke="#0f172a" strokeWidth="1" />
              <rect x="-13" y="-13" width="26" height="26" fill="none" stroke="#0f172a" strokeWidth="1" transform="rotate(45)" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#star8-footer)" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left mb-16">
          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col space-y-5"
          >
            <div className="flex items-center gap-3.5">
              <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100 p-2">
                <div className="relative w-full h-full">
                  <Image
                    src="/favicon.png"
                    alt="Al-Hussainia Islamic Public School logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <div className="leading-tight">
                <span className="block font-black text-lg text-blue-950 tracking-tight uppercase">
                  Al-Hussainia
                </span>
                <span className="block text-amber-600 font-bold text-[10px] tracking-widest uppercase mt-0.5">
                  Islamic Public School
                </span>
              </div>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed font-medium pr-4">
              Empowering the next generation through quality modern education, secure boarding facilities, and deep-rooted Islamic values in Shahdadpur.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.05 }}
            className="flex flex-col"
          >
            <h3 className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-widest mb-6">
              <span className="text-amber-500">✦</span> Quick Links
            </h3>
            <ul className="space-y-4 text-sm text-gray-600 font-semibold">
              {quickLinks.map(({ label, href }) => (
                <li key={href + label}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 hover:text-amber-600 hover:translate-x-1.5 transition-all duration-300 group"
                  >
                    <ChevronRight size={14} className="text-gray-300 group-hover:text-amber-500 transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col"
          >
            <h3 className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-widest mb-6">
              <span className="text-amber-500">✦</span> Academics
            </h3>
            <ul className="space-y-4 text-sm text-gray-600 font-semibold">
              {academics.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.15 }}
            className="flex flex-col"
          >
            <h3 className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-widest mb-6">
              <span className="text-amber-500">✦</span> Contact Info
            </h3>
            <address className="not-italic space-y-4 text-sm text-gray-600 font-semibold w-full flex flex-col">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">Madarsa Rd, Society Town, Shahdadpur, Sindh</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-amber-500 flex-shrink-0" />
                <a href="wa.me:+923163758205" aria-label="Call Us" className="hover:text-amber-600 transition-colors">
                  +92 316 3758205
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-amber-500 flex-shrink-0" />
                <a href="mailto:info@alhussainia.edu.pk" aria-label="Email Us" className="hover:text-amber-600 transition-colors break-all">
                  info@alhussainia.edu.pk
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <Link href="/timings" className="hover:text-amber-600 transition-all">
                  Timings
                </Link>
              </div>
            </address>
          </motion.div>
        </div>

        <div className="border-t-2 border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm font-bold text-gray-400 tracking-wide">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Al-Hussainia Islamic Public School. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gray-500">Shahdadpur, Sindh, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}