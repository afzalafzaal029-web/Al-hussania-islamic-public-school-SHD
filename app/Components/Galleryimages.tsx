"use client"

import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  Activity,
} from "lucide-react";
import Link from "next/link";
export default function GalleryPage() {
  const SCHOOL_SHORT = "Al-Hussainia";

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
      alt: "Al-Hussainia School Campus Overview",
    },
    {
      src: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
      alt: "School Library Reading Room",
    },
    {
      src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
      alt: "Science Laboratory at Al-Hussainia",
    },
    {
      src: "/classsystem.png",
      alt: "Students in Classroom",
    },
    {
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
      alt: "Computer Lab with Modern Facilities",
    },
    {
      src: "https://images.unsplash.com/photo-1546410531-bea5acadb6a0?w=800&q=80",
      alt: "School Playground and Sports Area",
    },
  ];

  return (
    <main>
      {/* Page Hero */}
      <div className="relative h-52 md:h-72 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80"
          alt="Al-Hussainia school campus gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/70" />
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow">
            Campus Gallery
          </h1>
          <p className="text-blue-200 mt-2 text-base md:text-lg">
            Life & facilities at {SCHOOL_SHORT}
          </p>
        </div>
      </div>

      {/* Grid */}
      <section
        aria-labelledby="gallery-heading"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <h2 id="gallery-heading" className="sr-only">
          Photo Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative overflow-hidden group rounded-2xl shadow-md bg-gray-100 aspect-[4/3] m-0"
            >
              <Link href={img.src}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                </Link>
              <figcaption className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-end justify-center pb-6">
                <span className="text-white font-bold text-lg text-center px-4">
                  {img.alt}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>
    </main>
  );
}
