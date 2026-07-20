import React from 'react';
import { Check } from 'lucide-react';

interface FeatureItem {
  text: string;
}

const features: FeatureItem[] = [
  { text: "Purely Islamic environment" },
  { text: "Well-equipped school building" },
  { text: "Calm and peaceful environment" },
  { text: "Regular teachers' trainings" },
  { text: "Prophet's teaching methods" },
  { text: "Special classes for slow learners" },
  { text: "Activity-based curriculum" },
  { text: "Interactive classrooms" },
  { text: "Nazrah Quran Classes" },
  { text: "Dua-tul-Khair Department" },
  { text: "Imparting patriotic leadership" },
  { text: "Sports / Islamic games" },
  { text: "Extra & Co-curricular activities" },
  { text: "Computer Academy & Coaching Center" },
  { text: "MS Office, Web & Graphic Designing Courses" },
  { text: "Spoken English Language Course" },
  { text: "Competitive Exam Preparation (MDCAT, ECAT, STS)" },
  { text: "Parenting workshops" },
];

export default function UniqueFeatures() {
  return (
    <section className="bg-white text-gray-800 min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      
      {/* Welcome Section */}
      <div className="w-full max-w-4xl cursor-default text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-950 tracking-wide uppercase mb-3">
          Welcome
        </h2>
        <p className="text-sm sm:text-base text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
          Welcome to an international standard college with students from all over Pakistan and abroad!
        </p>
        <div className="w-16 h-[2px] bg-gray-400 mx-auto mt-6"></div>
      </div>

      {/* Features Section */}
      <div className="w-full max-w-4xl px-2 sm:px-6">
        <h3 className="text-2xl sm:text-3xl font-sans font-bold text-gray-950 tracking-tight mb-8 text-left uppercase">
          What Makes Us Unique?
        </h3>
        
        {/* Responsive Grid/List layout */}
        <ul className="space-y-4 max-w-2xl">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className="flex items-start gap-3 text-sm sm:text-base text-gray-700 font-medium transition-colors duration-200 hover:text-gray-950"
            >
              <span className="flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 stroke-[3]" />
              </span>
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <hr className="w-full h-[2px] bg-gray-400 mx-auto my-6 border-0" />
    </section>
  );
}