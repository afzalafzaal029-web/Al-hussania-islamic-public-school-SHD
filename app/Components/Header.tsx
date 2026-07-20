"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Image as ImageIcon,
  Phone,
  Menu,
  X,
} from "lucide-react";

const NAV_LINKS = [
  { name: "Foundation", href: "/", icon: GraduationCap },
  { name: "Gallery", href: "/Gallery", icon: ImageIcon },
  { name: "Contact", href: "/contact", icon: Phone },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="w-full sticky top-0 z-50 bg-[#fffff9] border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 sm:py-3">
          
          {/* ── Logo & Stacked School Name Container ── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 focus:outline-none group"
            aria-label="Al-Hussainia Islamic Public School – Homepage"
          >
            {/* Logo Image */}
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
              <Image 
                alt="schoollogo" 
                src="/Schoolheader.png" 
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Stacked Text Structure (Footer Style Alignment) */}
            <div className="flex flex-col justify-center">
              <span className="text-blue-950 font-black tracking-tight text-sm sm:text-base md:text-lg uppercase leading-none">
                Al-Hussainia
              </span>
              <span className="text-amber-500 font-bold text-[10px] sm:text-xs tracking-wider uppercase mt-1 leading-none">
                Islamic Public School
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-1"
          >
            {NAV_LINKS.map(({ name, href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  isActive(href)
                    ? "bg-blue-900 text-white shadow"
                    : "text-gray-600 hover:bg-gray-100 hover:text-blue-900"
                }`}
              >
                <Icon size={15} />
                {name}
              </Link>
            ))}
          </nav>

          {/* ── Mobile hamburger ── */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#fffff9] border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {NAV_LINKS.map(({ name, href, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive(href)
                      ? "bg-blue-900 text-white"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon size={17} />
                  {name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}