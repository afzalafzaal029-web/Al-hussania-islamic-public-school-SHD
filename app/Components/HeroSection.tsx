"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    src: "/school.png",
    alt: "Al-Hussainia Islamic Public School main campus building, Shahdadpur Sindh",
    tagline: "Where Knowledge",
    tagline2: "Meets Faith",
    sub: "Nurturing hearts and minds with modern education rooted in Islamic values.",
    cta: { label: "Explore School", href: "/explore" },
    ctaSecondary: { label: "Admissions Open", href: "/contact" },
  },
  {
    id: 2,
    src: "/sunnahDress.png",
    alt: "Al-Hussainia school playground and sports facilities",
    tagline: "The Prophet's",
    tagline2: "Favourite Dress",
    sub: "Nurturing characters with Sunnah values, simplicity, and Islamic identity in our young generation.",
    cta: { label: "Explore Activities", href: "/activities" },
    ctaSecondary: { label: "Learn More", href: "/contact" },
  },
  {
    id: 3,
    src: "/classsystem.png",
    alt: "Al-Hussainia school library and learning resources",
    tagline: "Excellence in Every",
    tagline2: "Classroom",
    sub: "Qualified teachers, modern facilities, and a curriculum that inspires curiosity.",
    cta: { label: "Our Activities", href: "/activities" },
    ctaSecondary: { label: "Contact Us", href: "/contact" },
  },
  {
    id: 4,
    src: "/computerAcademy.png",
    alt: "Al-Hussainia Computer Academy & Coaching Center, students learning computer skills",
    tagline: "Skills for the",
    tagline2: "Digital Future",
    sub: "Al-Hussainia Computer Academy & Coaching Center — MS Office, Web & Graphic Designing, English Language aur Competitive Exam Preparation, ek hi chhat ke neeche.",
    cta: { label: "Computer Academy", href: "/computer-academy" },
    ctaSecondary: { label: "Admissions Open", href: "/contact" },
  },
];

const AUTOPLAY_INTERVAL = 5500;

// ── Subtle Islamic geometric SVG pattern ─────────────────
function GeometricOverlay() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="islamic-geo"
          x="0"
          y="0"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <polygon
            points="40,4 46,28 70,22 52,40 70,58 46,52 40,76 34,52 10,58 28,40 10,22 34,28"
            fill="none"
            stroke="white"
            strokeWidth="0.8"
          />
          <rect
            x="20"
            y="20"
            width="40"
            height="40"
            fill="none"
            stroke="white"
            strokeWidth="0.4"
            transform="rotate(45 40 40)"
          />
          <circle
            cx="40"
            cy="40"
            r="6"
            fill="none"
            stroke="white"
            strokeWidth="0.4"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#islamic-geo)" />
    </svg>
  );
}

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const total = SLIDES.length;

  const goTo = useCallback(
    (index: number) => {
      if (transitioning || index === current) return;
      setTransitioning(true);
      setPrevious(current);
      setCurrent(index);
      setTimeout(() => {
        setPrevious(null);
        setTransitioning(false);
      }, 800);
    },
    [current, transitioning],
  );

  const prev = useCallback(
    () => goTo((current - 1 + total) % total),
    [goTo, current, total],
  );
  const next = useCallback(
    () => goTo((current + 1) % total),
    [goTo, current, total],
  );

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, AUTOPLAY_INTERVAL);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, paused, next]);

  const slide = SLIDES[current];
  const prevSlide = previous !== null ? SLIDES[previous] : null;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: 480 }} // mobile ke liye kam height
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="School welcome slideshow"
    >
      {/* Previous slide fade OUT */}
      {prevSlide && (
        <div
          key={`prev-${previous}`}
          className="absolute inset-0 z-0"
          style={{ animation: "heroFadeOut 0.85s ease forwards" }}
        >
          <Image
            src={prevSlide.src}
            alt={prevSlide.alt}
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover"
            style={{ transform: "scale(1.04)" }}
          />
        </div>
      )}

      {/* Current slide fade IN + ken-burns */}
      <div
        key={`curr-${current}`}
        className="absolute inset-0 z-10"
        style={{ animation: "heroFadeIn 0.85s ease forwards" }}
      >
        <Image
          src={slide.src}
          alt={slide.alt}
          fill
          priority={current === 0}
          sizes="100vw"
          quality={90}
          className="object-cover"
          style={{ animation: "kenBurns 7s ease forwards" }}
        />
      </div>

      {/* Overlays */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,22,50,0.55) 0%, rgba(10,22,50,0.35) 40%, rgba(10,22,50,0.75) 100%)",
        }}
      />
      <div className="absolute inset-0 z-20 pointer-events-none">
        <GeometricOverlay />
      </div>
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(5,10,30,0.55) 100%)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center px-4 sm:px-6 text-center"> {/* mobile px kam */}
        {/* Bismillah */}
        <div
          key={`bismillah-${current}`}
          className="mb-4 sm:mb-6 opacity-0" // mobile par margin kam
          style={{ animation: "slideUp 0.7s ease 0.2s forwards" }}
        >
          <span
            className="text-amber-300 tracking-[0.35em] text-[10px] sm:text-xs font-semibold uppercase"
            style={{
              fontFamily: "var(--font-lato, sans-serif)",
              letterSpacing: "0.3em",
            }}
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </span>
        </div>

        {/* School name */}
        <div
          key={`school-${current}`}
          className="mb-1 opacity-0"
          style={{ animation: "slideUp 0.7s ease 0.35s forwards" }}
        >
          <p
            className="text-amber-400 text-[11px] sm:text-sm md:text-base font-semibold tracking-[0.25em] uppercase"
            style={{ fontFamily: "var(--font-lato, sans-serif)" }}
          >
            Al-Hussainia Islamic Public School
          </p>
        </div>

        {/* Gold divider */}
        <div
          key={`div-${current}`}
          className="opacity-0 mb-4 sm:mb-5"
          style={{ animation: "slideUp 0.7s ease 0.45s forwards" }}
        >
          <div className="flex items-center gap-3 justify-center">
            <div className="h-px w-8 sm:w-12 bg-amber-400/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <div className="h-px w-8 sm:w-12 bg-amber-400/60" />
          </div>
        </div>

        {/* Tagline – responsive sizes */}
        <div
          key={`tag-${current}`}
          className="opacity-0"
          style={{ animation: "slideUp 0.8s ease 0.5s forwards" }}
        >
          <h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-1 sm:mb-2"
            style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              textShadow: "0 4px 30px rgba(0,0,0,0.5)",
            }}
          >
            {slide.tagline}
          </h1>
          <h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
            style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              color: "#f5c842",
              textShadow: "0 4px 30px rgba(0,0,0,0.4)",
            }}
          >
            {slide.tagline2}
          </h1>
        </div>

        {/* Sub text */}
        <div
          key={`sub-${current}`}
          className="opacity-0 mt-3 sm:mt-5"
          style={{ animation: "slideUp 0.8s ease 0.65s forwards" }}
        >
          <p
            className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed font-light px-2"
            style={{ fontFamily: "var(--font-lato, sans-serif)" }}
          >
            {slide.sub}
          </p>
        </div>

        {/* CTA buttons */}
        <div
          key={`cta-${current}`}
          className="opacity-0 mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center"
          style={{ animation: "slideUp 0.8s ease 0.8s forwards" }}
        >
          <Link
            href={slide.cta.href}
            className="group relative overflow-hidden px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #c9a227 0%, #f0c94d 100%)",
              color: "#0a1632",
              fontFamily: "var(--font-lato, sans-serif)",
              boxShadow: "0 4px 20px rgba(201,162,39,0.4)",
            }}
          >
            <span className="relative z-10">{slide.cta.label}</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </Link>

          <Link
            href={slide.ctaSecondary.href}
            className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm tracking-wide text-white border border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300"
            style={{ fontFamily: "var(--font-lato, sans-serif)" }}
          >
            {slide.ctaSecondary.label}
          </Link>
        </div>
      </div>

      {/* Arrow buttons – chhote mobile par */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-40
                   w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center
                   border border-white/30 bg-white/10 text-white
                   hover:bg-white/25 hover:border-white/60 hover:scale-110
                   active:scale-95 transition-all duration-200 backdrop-blur-sm
                   focus:outline-none focus:ring-2 focus:ring-amber-400"
      >
        <ChevronLeft size={18} strokeWidth={1.8} className="md:w-[22px] md:h-[22px]" />
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-40
                   w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center
                   border border-white/30 bg-white/10 text-white
                   hover:bg-white/25 hover:border-white/60 hover:scale-110
                   active:scale-95 transition-all duration-200 backdrop-blur-sm
                   focus:outline-none focus:ring-2 focus:ring-amber-400"
      >
        <ChevronRight size={18} strokeWidth={1.8} className="md:w-[22px] md:h-[22px]" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 sm:gap-2.5">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative h-[2px] sm:h-[3px] rounded-full overflow-hidden transition-all duration-300 focus:outline-none"
            style={{ width: i === current ? 28 : 14 }} // mobile par kam
          >
            <span className="absolute inset-0 bg-white/30 rounded-full" />
            {i === current && !paused && (
              <span
                className="absolute inset-y-0 left-0 bg-amber-400 rounded-full"
                style={{
                  animation: `progressFill ${AUTOPLAY_INTERVAL}ms linear forwards`,
                }}
              />
            )}
            {i === current && (
              <span className="absolute inset-0 bg-amber-400/60 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Slide count */}
      <div
        className="absolute bottom-6 right-4 md:right-10 z-40 text-white/50 text-[10px] sm:text-xs font-semibold tracking-widest select-none"
        style={{ fontFamily: "var(--font-lato, sans-serif)" }}
      >
        {String(current + 1).padStart(2, "0")}
        <span className="mx-1 text-amber-400/60">/</span>
        {String(total).padStart(2, "0")}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes heroFadeOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes kenBurns {
          from { transform: scale(1.08); }
          to   { transform: scale(1.00); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes progressFill {
          from { width: 0%;    }
          to   { width: 100%;  }
        }
      `}</style>
    </section>
  );
}