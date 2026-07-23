"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  BookOpen,
  ShieldCheck,
  HeartHandshake,
  GraduationCap,
  ArrowRight,
  MoonStar,
  Activity,
} from "lucide-react";
import Link from "next/link";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp : Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section with Image */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/school.png"
          alt="Al-Hussainia Campus"
          fill
          priority
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-950/60 to-gray-50" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto mt-16"
        >
          <p className="text-amber-400 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 drop-shadow-md">
            Bismillah-ir-Rahman-ir-Raheem
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 drop-shadow-lg">
            Jahan Taleem, <span className="text-amber-400">Tarbiyat</span> Se
            Milti Hai
          </h1>
          <p className="text-blue-50 text-sm md:text-lg leading-relaxed font-medium max-w-2xl mx-auto drop-shadow-md">
            Humara school sirf kitabi taleem nahi deta — yahan har bachay ko
            Deen aur Duniya dono ki roshni mein tayyar kiya jaata hai. Achay
            akhlaq, mazboot bunyaad aur roshan mustaqbil humara maqsad hai.
          </p>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 space-y-20 md:space-y-28">
        {/* Islamic Values / Deeni Tarbiyat Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 border border-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                  <MoonStar className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-blue-950">
                  Deeni Tarbiyat & Hifz
                </h2>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {[
                  "Rozana Quran-e-Pak ki Tilawat aur Hifz",
                  "Namaz ki Pabandi aur Ba-Jamaat Adaigi",
                  "Modern Education ke sath Islamic Studies",
                  "Akhlaq, Adab aur Sunnat per khaas tawajjo",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4 transition-colors hover:border-amber-200 hover:bg-amber-50/50"
                  >
                    <BookOpen className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 font-medium leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              className="relative h-[250px] sm:h-[300px] rounded-2xl overflow-hidden shadow-md"
            >
              <Image
                src="/classsystem.png"
                alt="Islamic Studies and Interactive Classrooms"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-blue-950 mb-4">
              Hum Kyun Behtar Hain?
            </h2>
            <div className="w-20 h-1.5 bg-amber-400 mx-auto rounded-full mb-4" />
            <p className="text-gray-500 text-sm md:text-base">
              A complete boarding and modern educational ecosystem designed for
              your child's holistic development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <GraduationCap className="w-7 h-7 text-blue-700" />,
                title: "Qabil Ustaad",
                desc: "Tajurbakaar aur mukhlis teachers jo har bachay ko apna samajhtay hain.",
              },
              {
                icon: <ShieldCheck className="w-7 h-7 text-blue-700" />,
                title: "Safe & Secure Hostel",
                desc: "24/7 nigrani aur hifazat ke sath behtareen boarding facilities.",
              },
              {
                icon: <Activity className="w-7 h-7 text-blue-700" />,
                title: "Sports & Activities",
                desc: "Sirf kitaab nahi, ground per bhi humaray bachay chamaktay hain.",
              },
              {
                icon: <HeartHandshake className="w-7 h-7 text-blue-700" />,
                title: "Modern + Deeni Nazam",
                desc: "Science, Math, aur Technology ke sath deen ka mukammal ilm.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Curiosity Line / CTA Section */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/sunnahdress.png"
            alt="Students graduating and achieving records"
            fill
            className="absolute inset-0 object-cover"
          />
          <div className="absolute inset-0 bg-blue-300/5 backdrop-blur-[2px]" />

          <div className="relative z-10 p-8 md:p-16 text-center">
            <p className="text-xl md:text-3xl font-serif italic font-medium text-white mb-4">
              "Humaray students har saal apni mehnat se naye records banatay
              hain..."
            </p>
            <p className="text-sm md:text-base text-blue-100 mb-8 max-w-xl mx-auto">
              Kya aap bhi apne bachay ko is roshan mustaqbil ka hissa banana
              chahtay hain? Hum School visit per aapka intezar kar rahe hain.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-blue-950 px-6 py-3.5 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Admission ke liye Rabta Karein
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
