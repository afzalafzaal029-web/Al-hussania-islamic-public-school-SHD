"use client";

import { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import Video from 'next-video';
import {
  Laptop,
  Users,
  ShieldCheck,
  CheckCircle2,
  Clock,
  GraduationCap,
  Sparkles,
  Play,
  Pause,
  Phone,
  ArrowRight,
  BookOpenCheck,
  MonitorCheck,
} from "lucide-react";
import Link from "next/link";
const fadeUp : Variants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

export default function AdmissionsPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30 text-slate-800 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="max-w-3xl mx-auto space-y-6"
        >

          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight"
          >
            Naye Daur Ke Modern Computer Skills —{" "}
            <span className="text-blue-600 underline decoration-amber-400 decoration-4 underline-offset-8">
              Aapke Bachon Ka Roshan Mustaqbil
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Humari academy mein Girls aur Boys dono ke liye mukammal safe,
            disciplined, aur practical computer training ka intazam hai. Har student
            ko personal workstation aur proper teacher guidance di jaati hai.
          </motion.p>

          {/* Key Badges */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs sm:text-sm font-medium text-slate-700"
          >
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Separate Girls & Boys Batches
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-sm">
              <Laptop className="w-4 h-4 text-blue-600" /> 100% Practical Computer Lab
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-sm">
              <GraduationCap className="w-4 h-4 text-amber-600" /> Tajurbakaar Faculty
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* Video Showcase Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
        >
          {/* Header Banner on Video */}
          <div className="absolute top-0 inset-x-0 z-20 p-4 sm:p-6 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between">
            <div className="flex items-center gap-2 text-white">
              <MonitorCheck className="w-5 h-5 text-amber-400" />
              <span className="font-bold text-sm sm:text-base">Hamari Computer Lab Ki Jhalak</span>
            </div>
            <span className="bg-emerald-500/90 text-white text-xs px-3 py-1 rounded-full font-medium backdrop-blur-md">
              Live Practical Class
            </span>
          </div>

          {/* HTML5 Video Element with High Optimization */}
          <div className="relative aspect-video w-full flex items-center justify-center bg-black">
            <Video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/lab-thumbnail.jpg" // Optional: lab snapshot
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/videos/academy-lab-tour.mp4" type="video/mp4" />
              Aapka browser video element support nahi karta.
            </Video>

            {/* Custom Overlay Play Button (Hides when video plays) */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                aria-label="Play video"
                className="absolute z-10 w-16 h-16 sm:w-20 sm:h-20 bg-amber-500 hover:bg-amber-600 text-slate-900 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 group"
              >
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1 transition-transform group-hover:scale-110" />
              </button>
            )}
          </div>

          <div className="p-4 sm:p-6 bg-slate-900 text-slate-300 text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800">
            <p className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
              Har student ke paas apna PC/Laptop set available hota hai.
            </p>
            <p className="text-slate-400">Practical & Concept Based Learning</p>
          </div>
        </motion.div>
      </section>

      {/* Why Ideal For Girls & Boys Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
            Girls & Boys Ke Liye Sab Se Behtar Intezam
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Parents ki tasalli aur bacho ki hifazat humari pehli tarjeeh hai.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {/* Card 1: For Girls */}
          <motion.div
            variants={fadeUp}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-pink-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl" />
            <div className="w-12 h-12 bg-pink-100 text-pink-700 rounded-xl flex items-center justify-center mb-6 font-bold">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Girls Ke Liye Separate & Safe Batches
            </h3>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                <span>Alag timing aur pur-sukoon mahol taake taaleem mein koi rukawat na ho.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                <span>Respectful aur safe environment parent-approved environment ke sath.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                <span>Digital skills & freelancing seekingh kar ghar baithay earning ki oppurtunity.</span>
              </li>
            </ul>
          </motion.div>

          {/* Card 2: For Boys */}
          <motion.div
            variants={fadeUp}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-blue-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
            <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-6 font-bold">
              <Laptop className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Boys Ke Liye Career-Oriented Training
            </h3>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Hands-on practical environment modern computer workstations ke sath.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Hardware, Software, aur Computer Fundamentals ka mukammal course.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Strict discipline aur teacher-guided practical assignments.</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* Facilities Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center mx-auto md:mx-0">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold">Flexible Timings</h4>
              <p className="text-slate-400 text-sm">
                Morning aur Evening shifts available hain, taake school/college ke sath manage karna asan ho.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mx-auto md:mx-0">
                <BookOpenCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold">Concept + Practical</h4>
              <p className="text-slate-400 text-sm">
                Whiteboard explanation aur screen practice dono ka behtareen combination.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center mx-auto md:mx-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold">Safe Environment</h4>
              <p className="text-slate-400 text-sm">
                Har student par mukammal tawajjo aur akhlaqi tarbiyat ka dhyan rakha jata hai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action (Admission Box) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl relative overflow-hidden"
        >
          <h2 className="text-2xl sm:text-4xl font-black mb-4">
            Aaj Hi Admission Confirm Karein!
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Limited seats available hain. Apne bacho ko computer aur development ki duniya mein aage badhne ka moqa dein.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Admission Ke Liye Rabta Karein
            </Link>
            <Link
              href="/courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-4 rounded-full border border-white/20 transition-all duration-300"
            >
              Courses Detail Dekhein
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}