"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 3xl:p-24 selection:bg-transparent">
      
      {/* 1. TOP BAR / NAVBAR SKELETON */}
      <div className="w-full max-w-[1920px] 3xl:max-w-[2560px] mx-auto flex items-center justify-between border-b border-gray-200 pb-4 mb-8">
        {/* School Logo & Name Skeleton */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-200 animate-pulse border border-slate-300" />
          <div className="space-y-2">
            <div className="w-28 sm:w-36 h-4 bg-slate-200 animate-pulse rounded" />
            <div className="w-16 sm:w-20 h-3 bg-slate-200 animate-pulse rounded" />
          </div>
        </div>
        {/* Navigation Links Skeleton (Hidden on Mobile, Visible on Laptop/Desktop) */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 3xl:gap-12">
          <div className="w-16 lg:w-20 h-4 bg-slate-200 animate-pulse rounded" />
          <div className="w-16 lg:w-20 h-4 bg-slate-200 animate-pulse rounded" />
          <div className="w-16 lg:w-20 h-4 bg-slate-200 animate-pulse rounded" />
          <div className="w-24 lg:w-28 h-8 bg-amber-200/60 animate-pulse rounded-full" />
        </div>
      </div>

      {/* 2. MAIN HERO / CONTENT AREA SKELETON */}
      <main className="w-full max-w-[1920px] 3xl:max-w-[2560px] mx-auto flex-1 flex flex-col justify-center items-center my-auto">
        <div className="w-full text-center max-w-xl lg:max-w-2xl xl:max-w-3xl 3xl:max-w-5xl space-y-4 sm:space-y-6 mb-12">
          {/* Main Badge */}
          <div className="w-32 h-6 bg-blue-100/70 border border-blue-200/50 animate-pulse rounded-full mx-auto" />
          {/* Heading Skeleten */}
          <div className="w-3/4 sm:w-2/3 h-8 sm:h-10 md:h-12 xl:h-14 3xl:h-20 bg-slate-200 animate-pulse rounded-xl mx-auto" />
          <div className="w-1/2 h-6 sm:h-8 bg-slate-200 animate-pulse rounded-xl mx-auto" />
          {/* Paragraph Skeleton */}
          <div className="space-y-2 pt-2">
            <div className="w-full h-3 sm:h-4 bg-slate-200/80 animate-pulse rounded" />
            <div className="w-5/6 h-3 sm:h-4 bg-slate-200/80 animate-pulse rounded mx-auto" />
          </div>
        </div>

        {/* 3. DYNAMIC RESPONSIVE GRID SKELETON (Teachers/Students/Cards) */}
        <div className="w-full max-w-[1920px] 3xl:max-w-[2560px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 3xl:gap-16 px-2 sm:px-0">
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0.6 }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: item * 0.2 }}
              className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 3xl:p-10 flex flex-col items-center text-center shadow-sm"
            >
              {/* Profile Image Ring Skeleton */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 3xl:w-32 3xl:h-32 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 3xl:w-24 3xl:h-24 rounded-full bg-slate-200" />
              </div>
              {/* Card Meta */}
              <div className="w-24 h-4 bg-slate-200 rounded mb-2" />
              <div className="w-16 h-3 bg-slate-100 rounded mb-4" />
              {/* Card Description Lines */}
              <div className="w-full space-y-1.5 mb-4">
                <div className="w-full h-2.5 bg-slate-100 rounded" />
                <div className="w-11/12 h-2.5 bg-slate-100 rounded mx-auto" />
              </div>
              {/* Card CTA Link Skeleton */}
              <div className="w-20 h-3 bg-blue-100 rounded-full mt-auto" />
            </motion.div>
          ))}
        </div>
      </main>

      {/* 4. FOOTER SKELETON */}
      <footer className="w-full max-w-[1920px] 3xl:max-w-[2560px] mx-auto border-t border-gray-200 pt-4 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="w-40 h-3 bg-slate-200 animate-pulse rounded" />
        <div className="flex gap-4">
          <div className="w-16 h-3 bg-slate-200 animate-pulse rounded" />
          <div className="w-16 h-3 bg-slate-200 animate-pulse rounded" />
        </div>
      </footer>

      {/* FIXED FLOATING CENTRAL LOADER (Premium Touch) */}
      <div className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 bg-white shadow-xl border border-blue-100 rounded-full py-2.5 px-4 sm:px-5 flex items-center gap-3">
        <div className="relative w-5 h-5 sm:w-6 sm:h-6">
          <div className="absolute inset-0 border-2 border-blue-200 rounded-full" />
          <div className="absolute inset-0 border-2 border-t-blue-700 rounded-full animate-spin" />
        </div>
        <span className="text-xs sm:text-sm font-semibold text-blue-900 tracking-wide animate-pulse">
          Loading Academy Portal...
        </span>
      </div>

    </div>
  );
}