"use client";

import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};


const quickLinks = [
  { label: "Explore School", href: "/explore" },
  { label: "Admissions", href: "/contact" },
  { label: "Our Gallery", href: "/Gallery" },
  { label: "Contact Us", href: "/contact" },
];

const academics = [
  "Montessori to Middle (Class Nursery–VIII)",
  "Islamic Studies",
  "Nazra-ul-Quran",
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden cursor-default bg-[#fffffd] pt-14 pb-6 sm:pt-20 sm:pb-8">
      {/* ── Gold hairline — thin "light" accent separating footer from page ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/70 to-transparent" />

      {/* ── Subtle Islamic 8-point star watermark, tiled across the footer ── */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="star8" width="72" height="72" patternUnits="userSpaceOnUse">
            <g transform="translate(36,36)">
              <rect x="-13" y="-13" width="26" height="26" fill="none" stroke="#0C3960" strokeWidth="1" />
              <rect x="-13" y="-13" width="26" height="26" fill="none" stroke="#0C3960" strokeWidth="1" transform="rotate(45)" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#star8)" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-7 sm:px-6 lg:px-8 xl:max-w-[85rem] 3xl:max-w-[100rem]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 sm:gap-x-8 text-left mb-12">

          {/* ── Brand Section ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="col-span-2 lg:col-span-1 flex flex-col space-y-4"
          >
            <div className="flex items-center gap-3">
              {/* Logo with a slow-rotating gold star halo — echoes the crest's sun/star motif */}
              <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center">
                <motion.svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full text-[#C9A227]/35"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
                >
                  <g transform="translate(50,50)">
                    <rect x="-30" y="-30" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="-30" y="-30" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(45)" />
                  </g>
                </motion.svg>
                <div className="relative w-10 h-10">
                  <Image
                    src="/favicon.png"
                    alt="Al-Hussainia Islamic Public School logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <span className="leading-snug">
                <span className="block font-extrabold text-sm sm:text-base text-[#0C3960] tracking-wide uppercase">
                  Al-Hussainia
                </span>
                <span className="block text-[#2F7D5C] font-bold text-xs tracking-wider uppercase">
                  Islamic Public School
                </span>
              </span>
            </div>

            <p className="text-[#4A6076] text-xs sm:text-sm leading-relaxed max-w-sm font-medium">
              Empowering the next generation through quality modern education
              and deep-rooted Islamic values in Shahdadpur, Sindh.
            </p>
          </motion.div>

          {/* ── Quick Links ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.05 }}
            className="col-span-1 flex flex-col"
          >
            <h3 className="flex items-center gap-1.5 text-[#2F7D5C] font-black text-xs uppercase tracking-[0.15em] mb-4 sm:mb-5">
              <span className="text-[#C9A227]">✦</span> Quick Links
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[#3E5266] font-medium">
              {quickLinks.map(({ label, href }) => (
                <li key={href + label}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 hover:text-[#2F7D5C] hover:translate-x-1 transition-all duration-200 group"
                  >
                    <ChevronRight
                      size={14}
                      className="text-[#C9A227]/70 group-hover:text-[#C9A227] transition-colors flex-shrink-0"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Academics ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.1 }}
            className="col-span-1 flex flex-col"
          >
            <h3 className="flex items-center gap-1.5 text-[#2F7D5C] font-black text-xs uppercase tracking-[0.15em] mb-4 sm:mb-5">
              <span className="text-[#C9A227]">✦</span> Academics
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[#3E5266] font-medium">
              {academics.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ChevronRight
                    size={14}
                    className="text-[#C9A227]/70 flex-shrink-0 mt-0.5"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Contact Info ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.15 }}
            className="col-span-2 lg:col-span-1 flex flex-col"
          >
            <h3 className="flex items-center gap-1.5 text-[#2F7D5C] font-black text-xs uppercase tracking-[0.15em] mb-4 sm:mb-5">
              <span className="text-[#C9A227]">✦</span> Contact Info
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-[#3E5266] font-medium w-full flex flex-col">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#C9A227] flex-shrink-0 mt-0.5" />
                <span className="leading-tight">Shahdadpur, Sindh, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#C9A227] flex-shrink-0" />
                <a href="tel:03163758205" className="hover:text-[#2F7D5C] transition-colors">
                  03163758205
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#C9A227] flex-shrink-0" />
                <a
                  href="mailto:info@alhussainia.edu.pk"
                  className="hover:text-[#2F7D5C] transition-colors break-all"
                >
                  info@alhussainia.edu.pk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-[#C9A227] flex-shrink-0 mt-0.5" />
                <Link href="/timings" className="hover:text-[#2F7D5C] transition-all">
                  School Timings
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-[#0C3960]/10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-[11px] sm:text-xs font-semibold text-[#4A6076] tracking-wide text-left">
          <p className="leading-relaxed">
            &copy; {new Date().getFullYear()} Al-Hussainia Islamic Public School.{" "}
            <br className="sm:hidden" /> All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-[#0C3960]/20">|</span>
            <p className="text-[#2F7D5C]">Shahdadpur, Sindh</p>
          </div>
        </div>
      </div>
    </footer>
  );
}