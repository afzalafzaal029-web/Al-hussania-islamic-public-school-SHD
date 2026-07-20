import OurSchool from "@/app/Components/OurSchool";
import HeroSection from "./Components/HeroSection";
import UniqueFeatures from "./Components/UniqueFeatures";
import TestimonialsSection from "./Components/TestimonialsSection";
export default function page() {
  return (
    <div>
      <HeroSection/>
      <UniqueFeatures/>
      <OurSchool />
      <TestimonialsSection/>
    </div>
  );
}