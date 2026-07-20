"use client" 

import { Sun, Snowflake, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Timings() {
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-slate-50 dark:bg-[#0a192f]">
      
      {/* Header Section */}
      <div className="text-center mb-14">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center gap-3 mb-4"
        >
          <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2149] dark:text-white tracking-tight">
            Our Timings
          </h2>
        </motion.div>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Official school hours for Al-Hussainia Islamic Public School. Please ensure students arrive 10 minutes before the bell rings.
        </p>
      </div>

      {/* Cards Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-4xl mx-auto">
        
        {/* Summer Timing Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.4 }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 sm:p-10 border-t-4 border-orange-400 relative overflow-hidden"
        >
          {/* Subtle background decoration */}
          <div className="absolute -top-10 -right-10 opacity-5 dark:opacity-10 pointer-events-none">
            <Sun className="w-40 h-40 text-orange-500" />
          </div>
          
          <div className="flex flex-col items-center text-center relative z-10">
            <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-full mb-6 shadow-sm">
              <Sun className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">
              Summer Timing
            </h3>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-[#0B2149] dark:text-blue-300">
                7:30
              </span>
              <span className="text-lg font-medium text-slate-400">to</span>
              <span className="text-3xl sm:text-4xl font-black text-[#0B2149] dark:text-blue-300">
                12:30
              </span>
            </div>
          </div>
        </motion.div>

        {/* Winter Timing Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 sm:p-10 border-t-4 border-blue-400 relative overflow-hidden"
        >
          {/* Subtle background decoration */}
          <div className="absolute -top-10 -right-10 opacity-5 dark:opacity-10 pointer-events-none">
            <Snowflake className="w-40 h-40 text-blue-500" />
          </div>

          <div className="flex flex-col items-center text-center relative z-10">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-full mb-6 shadow-sm">
              <Snowflake className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">
              Winter Timing
            </h3>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-[#0B2149] dark:text-blue-300">
                8:15
              </span>
              <span className="text-lg font-medium text-slate-400">to</span>
              <span className="text-3xl sm:text-4xl font-black text-[#0B2149] dark:text-blue-300">
                12:45
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}