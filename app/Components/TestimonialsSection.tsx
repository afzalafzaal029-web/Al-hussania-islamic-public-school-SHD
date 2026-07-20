"use client";
// components/TestimonialsSection.tsx
// ─────────────────────────────────────────────────────────
// SEO: Uses semantic <blockquote>, <cite>, schema.org
//      Review JSON-LD injected via <script> tag.
// Responsive: 1 col mobile → 2 col tablet → 3 col desktop
// Carousel: Auto-scrolls on mobile, static grid on desktop.
// ─────────────────────────────────────────────────────────
import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

// ── Testimonial data ──────────────────────────────────────
const TESTIMONIALS = [
  {
    id: 1,
    name: "Haji Muhammad Saleem Memon",
    role: "Parent — Class 5th",
    avatar: "SM",
    color: "bg-blue-700",
    rating: 5,
    quote:
      "Al-Hussainia ne meray baitay ko sirf parhaai nahi, balke akhlaaq aur deen bhi sikhaya. Teachers bohot mehnat karte hain aur har bacchay ko personally samajhte hain. Main dil se shukriya ada karta hoon.",
  },
  {
    id: 2,
    name: "Muhammad Rizwan Idrees salongi",
    role: "Parent — Class 3rd & KG",
    avatar: "RI",
    color: "bg-emerald-700",
    rating: 5,
    quote:
      "Mere dono bachay is school mein parh rahe hain. School ka mahol bohot saaf aur Islami hay. Principal sahab khud har parent se milte hain. Yahan admission lena hamara bahut acha faisla tha.",
  },
  {
    id: 3,
    name: "Abdul Rehman Rajput",
    role: "Parent — Class 7th & 5th",
    avatar: "AR",
    color: "bg-amber-700",
    rating: 5,
    quote:
      "Mera beta pehle parhaai mein kamzor tha. Al-Hussainia ke teachers ki mehnat se aaj woh class mein top kar raha hay. Science aur Mathematics mein uski confidence aasmaon ko chhu rahi hay.",
  },
  {
    id: 4,
    name: "haris Talpur",
    role: "Parent — Class 2nd & 1st",
    avatar: "HT",
    color: "bg-purple-700",
    rating: 5,
    quote:
      "Beti school se khush aati hay — yeh sab se bari baat hay. Yahan khel bhi hay, parhaai bhi hay, aur Quran Nazra bhi. Ek complete school hay jo har taraf se bachay ki tarbiyat karta hay.",
  },
  {
    id: 5,
    name: "Zain-ul-Abideen",
    role: "Student — Computer Academy",
    avatar: "ZA",
    color: "bg-rose-700",
    rating: 5,
    quote:
      "Al-Hussainia Computer Academy join karne ke baad MS Office aur Web Designing ka bohot acha basic mil gaya hay. Trainer bohot mehnat se aur practical tareeqe se sikhati hain. Alhamdulillah ab mera confidence pehlay se bohot zyada hay.",
  },
  {
    id: 6,
    name: "Naseem Brohi",
    role: "Parent — Nursery",
    avatar: "NB",
    color: "bg-teal-700",
    rating: 5,
    quote:
      "Nursery mein admission diya tha darr k saath — chota bacha tha. Lekin teachers ne itne pyaar se rakha kay ab beta khud school jaane ko kehta hay. Aisa mahol bahut kam jagah milta hay.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < count ? "text-amber-400 fill-amber-400" : "text-gray-300"
          }
        />
      ))}
    </div>
  );
}

// ── Single testimonial card ───────────────────────────────
function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[0] }) {
  return (
    <blockquote
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100
                 flex flex-col gap-4 h-full
                 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
      itemScope
      itemType="https://schema.org/Review"
    >
      {/* Quote icon */}
      <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
        <Quote size={16} className="text-blue-700 fill-blue-100" />
      </div>

      {/* Stars */}
      <div
        itemProp="reviewRating"
        itemScope
        itemType="https://schema.org/Rating"
      >
        <meta itemProp="ratingValue" content={String(t.rating)} />
        <meta itemProp="bestRating" content="5" />
        <Stars count={t.rating} />
      </div>

      {/* Quote text */}
      <p
        className="text-gray-600 text-sm leading-relaxed flex-1 italic"
        itemProp="reviewBody"
      >
        "{t.quote}"
      </p>

      {/* Divider */}
      <div className="h-px bg-white" />

      {/* Person */}
      <footer className="flex items-center gap-3">
        {/* Avatar with initials */}
        <div
          className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center
                      text-white text-xs font-bold flex-shrink-0 select-none`}
          aria-hidden="true"
        >
          {t.avatar}
        </div>
        <div>
          <cite
            className="not-italic font-bold text-sm text-gray-900 block"
            itemProp="author"
            itemScope
            itemType="https://schema.org/Person"
          >
            <span itemProp="name">{t.name}</span>
          </cite>
          <span className="text-xs text-blue-600 font-medium">{t.role}</span>
        </div>
      </footer>
    </blockquote>
  );
}

// ── Main section ──────────────────────────────────────────
export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Detect mobile/tablet vs desktop
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Auto-advance carousel (mobile/tablet only)
  useEffect(() => {
    if (!isMobile) return;
    timerRef.current = setTimeout(
      () => setCurrent((c) => (c + 1) % TESTIMONIALS.length),
      4000,
    );
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, isMobile]);

  const prev = () =>
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  // ── JSON-LD schema for SEO ──────────────────────────────
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Al-Hussainia Islamic Public School",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Shahdadpur",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
    review: TESTIMONIALS.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
      reviewBody: t.quote,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: TESTIMONIALS.length,
      bestRating: "5",
    },
  };

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-20 bg-gray-50"
      itemScope
      itemType="https://schema.org/EducationalOrganization"
    >
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section heading ── */}
        <div className="text-center mb-14">
          {/* SEO: breadcrumb-style label */}
          <p className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-3">
            What Parents Say
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-3"
          >
            <i>Trusted by Families Across Shahdadpur</i>
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto rounded-full mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            <i>
              {" "}
              Real words from the parents who trust Al-Hussainia Islamic Public
              School with their children's future.
            </i>
          </p>

          {/* Aggregate rating display */}
          <div
            className="inline-flex items-center gap-2 mt-5 bg-white border border-gray-100
                          shadow-sm px-5 py-2.5 rounded-full"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="text-amber-400 fill-amber-400"
                />
              ))}
            </div>
            <span className="text-sm font-bold text-gray-800">5.0</span>
            <span className="text-xs text-gray-400">
              — {TESTIMONIALS.length} parent reviews
            </span>
          </div>
        </div>

        {/* ── Desktop grid (lg+): show all 6 cards ── */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>

        {/* ── Tablet (md): show 2 cards ── */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
          {TESTIMONIALS.slice(0, 4).map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>

        {/* ── Mobile carousel: 1 card at a time ── */}
        <div className="md:hidden">
          <div className="relative">
            {/* Card */}
            <div key={current} style={{ animation: "fadeIn 0.4s ease" }}>
              <TestimonialCard t={TESTIMONIALS[current]} />
            </div>

            {/* Arrow buttons */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center
                           justify-center text-gray-600 hover:bg-blue-900 hover:text-white
                           hover:border-blue-900 transition-all shadow-sm"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Dot indicators */}
              <div className="flex gap-1.5">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-5 h-2 bg-blue-900"
                        : "w-2 h-2 bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center
                           justify-center text-gray-600 hover:bg-blue-900 hover:text-white
                           hover:border-blue-900 transition-all shadow-sm"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>
    </section>
  );
}