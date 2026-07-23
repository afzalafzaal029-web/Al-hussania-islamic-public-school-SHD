import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Campus Gallery | Al-Hussainia Islamic Public School",
  description: "Explore the modern facilities, interactive classrooms, and vibrant campus life at Al-Hussainia Islamic Public School.",
};

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

export default function GalleryPage() {
  const SCHOOL_SHORT = "Al-Hussainia";

  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      {/* Page Hero */}
      <header className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80"
          alt="Al-Hussainia school campus gallery"
          fill
          priority
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/80" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-lg tracking-tight mb-3">
            Campus Gallery
          </h1>
          <p className="text-blue-100 text-sm md:text-lg font-medium tracking-wide">
            Life, Facilities & Boarding at {SCHOOL_SHORT}
          </p>
        </div>
      </header>

      {/* Gallery Grid */}
      <section
        aria-labelledby="gallery-heading"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
      >
        <h2 id="gallery-heading" className="sr-only">
          Photo Gallery
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((img, i) => (
            <figure
              key={i}
              className="relative overflow-hidden group rounded-3xl shadow-sm hover:shadow-xl bg-gray-200 aspect-[4/3] m-0 transition-all duration-300"
            >
              <Link href={img.src} aria-label={`View larger image of ${img.alt}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </Link>
              
              <figcaption className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/40 to-transparent translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex items-end justify-center pb-6 md:pb-8">
                <span className="text-white font-bold text-sm md:text-base text-center px-6 leading-tight drop-shadow-md">
                  {img.alt}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}