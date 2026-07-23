"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Monitor,
  FileText,
  Network,
  Code,
  Globe,
  PenTool,
  Video,
  Bot,
  MessageCircle,
  GraduationCap,
  BookOpen,
  Award,
  CheckCircle2,
  CalendarDays,
  Gift,
  MapPin,
  PhoneCall,
  UserCheck,
} from "lucide-react";

// --- Animation Variants ---
const fadeUp : Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// --- Course Data Extracted from Flyers ---
const computerCourses = [
  {
    name: "MS Office",
    desc: "Word, Excel, PowerPoint",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    name: "InPage",
    desc: "Urdu Typing Professional",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    name: "Networking",
    desc: "Hardware & Networking",
    icon: <Network className="w-6 h-6" />,
  },
  {
    name: "Programming Languages",
    desc: "Modern Coding Skills",
    icon: <Code className="w-6 h-6" />,
  },
  {
    name: "Web Designing",
    desc: "Frontend & UI/UX",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    name: "Graphic Designing",
    desc: "Creative Arts & Branding",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    name: "Video Editing",
    desc: "Professional Media Editing",
    icon: <Video className="w-6 h-6" />,
  },
  {
    name: "Freelancing & AI Basics",
    desc: "Earn Online & Use AI",
    icon: <Bot className="w-6 h-6" />,
  },
];

const features = [
  "Quality Education",
  "Flexible Timings",
  "Modern Computer Lab",
  "Practical Learning",
  "Expert Trainers",
  "Certificate Available",
  "Friendly Environment",
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-20 font-sans">
      {/* Hero Section - Matching Flyer Header Theme */}
      <section className="relative bg-blue-950 text-white pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="relative z-10 max-w-5xl mx-auto text-center space-y-6"
        >
          <motion.div
            variants={fadeUp}
            className="inline-block border border-amber-400/30 bg-amber-400/10 text-amber-400 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase shadow-sm"
          >
            Al-Hussainia Computer Academy & Coaching Center
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight"
          >
            Enroll Today & Build Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              Bright Future
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-blue-200 text-lg sm:text-xl max-w-3xl mx-auto font-medium"
          >
            Under the Supervision of Madarsa Darul Uloom Al-Hussainia Shahdadpur
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-3 pt-6"
          >
            {features.slice(0, 4).map((feature, idx) => (
              <span
                key={idx}
                className="flex items-center gap-1.5 bg-blue-900/50 backdrop-blur-sm border border-blue-800 px-3 py-1.5 rounded-lg text-sm text-blue-100"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> {feature}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 space-y-16">
        {/* 1. Computer Courses Section */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 border border-slate-100"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6"
          >
            <div className="p-3 bg-blue-100 text-blue-700 rounded-2xl">
              <Monitor className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Professional Computer Courses
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Basic to advanced level IT skills for a digital future.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {computerCourses.map((course, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 mb-4 group-hover:text-amber-500 group-hover:scale-110 transition-all">
                  {course.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">
                  {course.name}
                </h3>
                <p className="text-slate-500 text-sm">{course.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 2. English Language Course */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-emerald-900 rounded-3xl shadow-xl p-8 sm:p-10 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4 mb-8 relative z-10"
            >
              <div className="p-3 bg-emerald-800 text-emerald-100 rounded-2xl">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black">
                English Language Course
              </h2>
            </motion.div>

            <motion.ul
              variants={staggerContainer}
              className="space-y-4 relative z-10 text-emerald-50 text-lg"
            >
              {[
                "Spoken English",
                "Grammar & Vocabulary",
                "Professional Communication",
                "Basic to Advanced Level",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-3 bg-emerald-800/50 p-3 rounded-xl border border-emerald-700/50"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>

          {/* 3. Competitive Exams & Tuitions */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-slate-100 flex flex-col justify-between"
          >
            <motion.div variants={fadeUp} className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-amber-100 text-amber-700 rounded-2xl">
                  <Award className="w-8 h-8" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Competitive Exams Prep
                </h2>
              </div>
              <p className="text-slate-600 font-medium leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                JST, PST, MDCAT, ECAT, LAT, STS, And Much More...
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="pt-8 border-t border-slate-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 text-blue-700 rounded-2xl">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Tuitions Available
                </h2>
              </div>
              <p className="text-slate-600 font-medium bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                Nursery to Inter —{" "}
                <span className="font-bold text-blue-700">All Subjects</span>
              </p>
            </motion.div>
          </motion.section>
        </div>

        {/* 4. Academy Features Breakdown */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:shadow-md transition-all cursor-default"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              {feature}
            </div>
          ))}
        </motion.section>

        {/* 5. CTA / Admissions Open Box */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-3xl shadow-2xl p-6 sm:p-12 text-white relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <GraduationCap className="w-48 h-48" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">


            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-md">
              ADMISSIONS OPEN NOW!
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-blue-100 font-medium bg-blue-950/50 p-4 rounded-2xl border border-blue-800">
              <div className="flex items-center gap-2">
              </div>
              <div className="hidden sm:block w-px h-6 bg-blue-800"></div>
              <div className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-amber-400" />
                <span>Trainer: MS. SYEDA HUMNAH AMIR</span>
              </div>
            </div>

            <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-6 text-left bg-white rounded-2xl p-6 shadow-xl border-4 border-amber-400 text-slate-800">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Address:</h4>
                  <p className="text-sm text-slate-600 leading-snug mt-1">
                    Al-Hussainia School, Madni Society
                    <br />
                    Near Salman Farsi Masjid Shahdadpur
                  </p>
                </div>
              </div>

              <div className="w-full md:w-auto text-center md:text-right">
                <p className="text-sm text-slate-500 font-medium mb-1">
                  Call/WhatsApp
                </p>
                <a
                  href="tel:03184947536"
                  className="flex items-center justify-center md:justify-end gap-2 text-xl font-black text-blue-700 hover:text-amber-500 transition-colors"
                >
                  <PhoneCall className="w-5 h-5" />
                  03184947536
                </a>
                <a
                  href="tel:03123030022"
                  className="flex items-center justify-center md:justify-end gap-2 text-xl font-black text-blue-700 hover:text-amber-500 transition-colors mt-1"
                >
                  <PhoneCall className="w-5 h-5" />
                  03123030022
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
