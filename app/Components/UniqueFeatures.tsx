import React from "react";
import { Check } from "lucide-react";

interface FeatureItem {
  text: string;
}

const features: FeatureItem[] = [
  { text: "Purely Islamic & safe environment" },
  { text: "State-of-the-art school building" },
  { text: "Secure on-campus Boarding & Hostel facility" },
  { text: "Comprehensive Hifz & Nazra Quran Integration" },
  { text: "Prophet's (PBUH) teaching methodologies" },
  { text: "Regular teachers' professional trainings" },
  { text: "Specialized classes for diverse learners" },
  { text: "Activity-based modern curriculum" },
  { text: "Smart & Interactive classrooms" },
  { text: "Dua-tul-Khair Department" },
  { text: "Imparting patriotic leadership & character building" },
  { text: "Sports & physical development activities" },
  { text: "Computer Academy & Tech Coaching Center" },
  { text: "MS Office, Web & Graphic Designing Courses" },
  { text: "Spoken English & Communication Skills Course" },
  { text: "Dedicated parenting and tarbiyah workshops" },
];

export default function UniqueFeatures() {
  return (
    <section className="bg-white text-gray-800 py-16 px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center overflow-hidden">
      {/* Welcome Section */}
      <div className="w-full max-w-4xl cursor-default text-center mb-14 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-950 tracking-wide uppercase mb-4">
          Welcome
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed px-2">
          Welcome to an international standard institution offering premium
          modern education, integrated Islamic values, and secure boarding
          facilities for students from all over Pakistan.
        </p>
        <div className="w-20 h-[3px] bg-amber-500 mx-auto mt-8 rounded-full"></div>
      </div>

      {/* Features Section */}
      <div className="w-full max-w-5xl px-2 sm:px-6 bg-gray-50/50 rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm">
        <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-blue-950 tracking-tight mb-8 text-center sm:text-left uppercase">
          What Makes Us Unique?
        </h3>

        {/* Responsive Grid Layout */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-3.5 text-sm sm:text-base text-gray-700 font-medium group transition-colors duration-200 hover:text-blue-900"
            >
              <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-amber-100 transition-colors duration-300">
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-700 group-hover:text-amber-600 stroke-[3]" />
              </span>
              <span className="leading-snug">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full max-w-5xl mx-auto mt-12 border-b-2 border-gray-100"></div>
    </section>
  );
}