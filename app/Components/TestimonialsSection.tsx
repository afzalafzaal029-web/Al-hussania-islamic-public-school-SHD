"use client";

import { Star, Quote } from "lucide-react";

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
    name: "Muhammad Rizwan Idrees Salongi",
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
    name: "Haris Talpur",
    role: "Parent — Class 2nd & 1st",
    avatar: "HT",
    color: "bg-purple-700",
    rating: 5,
    quote:
      "Beti school se khush aati hay — yeh sab se bari baat hay. Yahan khel bhi hay, parhaai bhi hay, aur Quran Nazra bhi. Ek complete school hay jo har taraf se bachay ki tarbiyat karta hay.",
  },
  {
    id: 5,
    name: "Rana Ishfaq Rajput",
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

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[0] }) {
  return (
    <blockquote
      className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col gap-5 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      itemScope
      itemType="https://schema.org/Review"
    >
      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
        <Quote size={18} className="text-blue-800 fill-blue-100" />
      </div>

      <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
        <meta itemProp="ratingValue" content={String(t.rating)} />
        <meta itemProp="bestRating" content="5" />
        <Stars count={t.rating} />
      </div>

      <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-1 italic" itemProp="reviewBody">
        "{t.quote}"
      </p>

      <div className="h-px bg-gray-50 w-full" />

      <footer className="flex items-center gap-3.5">
        <div
          className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-extrabold flex-shrink-0 select-none shadow-inner`}
          aria-hidden="true"
        >
          {t.avatar}
        </div>
        <div className="flex flex-col">
          <cite
            className="not-italic font-bold text-sm md:text-base text-gray-900 block leading-tight"
            itemProp="author"
            itemScope
            itemType="https://schema.org/Person"
          >
            <span itemProp="name">{t.name}</span>
          </cite>
          <span className="text-xs md:text-sm text-blue-700 font-semibold mt-0.5">{t.role}</span>
        </div>
      </footer>
    </blockquote>
  );
}

export default function TestimonialsSection() {
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
      className="py-20 md:py-28 bg-[#F8FAFC] overflow-hidden"
      itemScope
      itemType="https://schema.org/EducationalOrganization"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-amber-600 text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] mb-3">
            What Parents Say
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-5xl font-black text-blue-950 mb-4 tracking-tight"
          >
            Trusted by Families Across Sindh
          </h2>
          <div className="w-24 h-1.5 bg-amber-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base font-medium">
            Real words from the parents who trust Al-Hussainia Islamic Public School with their children's bright future and character building.
          </p>

          <div className="inline-flex items-center gap-3 mt-6 bg-white border border-gray-200 shadow-sm px-6 py-3 rounded-full">
            <Stars count={5} />
            <span className="text-sm md:text-base font-black text-gray-900">5.0</span>
            <span className="text-xs md:text-sm text-gray-500 font-medium">
              — Based on {TESTIMONIALS.length}+ reviews
            </span>
          </div>
        </div>

        {/* DOM Duplication Bug Fixed: Single container that becomes snap-scroll on mobile and grid on desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id} 
              className="min-w-[85vw] sm:min-w-[350px] snap-center md:min-w-0 md:w-auto h-full"
            >
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
        
        {/* Mobile Swipe Hint */}
        <div className="md:hidden text-center mt-2 flex items-center justify-center gap-2 text-gray-400 text-xs font-medium">
          <span className="animate-pulse">←</span> Swipe to read more <span className="animate-pulse">→</span>
        </div>
      </div>
      
      {/* Utility class for hiding scrollbar in mobile view */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}