"use client";

import { motion, Variants } from "framer-motion";
import { Lock, Clock, Sparkles } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function PortalComingSoon() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center p-4 bg-gray-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100/30 rounded-full blur-[60px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-lg bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 md:p-12 text-center shadow-2xl"
      >
        <div className="relative inline-flex items-center justify-center mb-6">
          <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl animate-pulse" />
          <div className="relative w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg rotate-3">
            <Lock className="text-white w-8 h-8" strokeWidth={2.5} />
            <motion.div 
              className="absolute -top-2 -right-2 bg-amber-400 p-1.5 rounded-full"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Sparkles className="w-3 h-3 text-amber-900" />
            </motion.div>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-black text-blue-950 mb-3 tracking-tight">
          Student Portal
        </h1>
        
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-widest rounded-full flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" /> Coming Soon
          </span>
        </div>

        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
          We are upgrading our digital infrastructure. The new Student & Parent portal for academics, fee management, and hostel updates is currently under construction.
        </p>

        <button className="w-full py-4 bg-gray-900 hover:bg-gray-800 text-white text-sm font-bold rounded-xl transition-all duration-300 shadow-md">
          Return to Homepage
        </button>
      </motion.div>
    </section>
  );
}