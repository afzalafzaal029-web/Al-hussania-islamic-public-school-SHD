// app/explore/page.tsx
"use client";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function ExplorePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-20">
      {/* Intro */}
      <motion.section {...fadeUp}>
        <p className="text-sm text-blue-600 font-medium mb-2">
          Bismillah-ir-Rahman-ir-Raheem
        </p>
        <h1 className="text-4xl font-black mb-4">
          Jahan Taleem, Tarbiyat se Milti Hai
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Humara school sirf kitabi taleem nahi deta — yahan har bachay ko Deen
          aur Duniya dono ki roshni mein tayyar kiya jaata hai. Achay akhlaq,
          mazboot bunyaad aur roshan mustaqbil — yahi humara maqsad hai.
        </p>
      </motion.section>

      {/* Islamic Values */}
      <motion.section {...fadeUp}>
        <h2 className="text-2xl font-bold mb-4">🕌 Deeni Tarbiyat</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            "Rozana Quran-e-Pak ki Tilawat",
            "Namaz ki Pabandi aur Tarbiyat",
            "Islamic Studies har class mein",
            "Akhlaq aur Adab per khaas tawajjo",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-green-50 border border-green-100 rounded-xl p-4 text-sm text-green-800"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section {...fadeUp}>
        <h2 className="text-2xl font-bold mb-4">Hum Kyun Behtar Hain?</h2>
        <div className="space-y-4">
          {[
            {
              title: "Qabil Ustaad",
              desc: "Tajurbakaar aur mukhlis teachers jo bachay ko apna samajhtay hain",
            },
            {
              title: "Safe Mahol",
              desc: "Har bachay ki nigrani aur hifazat humari zimmedari hai",
            },
            {
              title: "Sports & Activities",
              desc: "Sirf kitaab nahi, ground per bhi bachay chamaktay hain",
            },
            {
              title: "Modern + Deeni Nazam",
              desc: "Science, Math, aur saath saath Deen ka ilm",
            },
          ].map((item, i) => (
            <div key={i} className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Curiosity Line — bina data diye */}
      <motion.section
        {...fadeUp}
        className="bg-gray-50 rounded-2xl p-8 text-center"
      >
        <p className="text-lg font-medium mb-2">
          "Humaray students har saal apni mehnat se naye records banatay
          hain..."
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Aana chahtay hain dekhne? Hum aapka school visit ke wait mein hain.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium"
        >
          Admission ke liye Rabta Karein →
        </a>
      </motion.section>
    </main>
  );
}
