import Link from "next/link";
import { HelpCircle, Home, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found | Al-Hussainia",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full bg-slate-50 flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      
      {/* ── BACKGROUND ARTWORK (Server-Side CSS Shapes) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[30rem] h-[30rem] rounded-full bg-blue-50/60 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-amber-50/60 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 3xl:max-w-6xl mx-auto text-center py-12 px-4 sm:py-16 md:py-20 lg:py-24">
        
        {/* Big 404 Watermark Identity */}
        <div className="relative flex justify-center items-center mb-4 sm:mb-6 md:mb-8">
          <span className="text-slate-200/70 font-sans font-black tracking-tighter select-none leading-none text-[8rem] sm:text-[12rem] md:text-[14rem] lg:text-[16rem] xl:text-[20rem] 3xl:text-[24rem]">
            404
          </span>
          <div className="absolute text-blue-950 animate-bounce duration-1000">
            <ShieldAlert className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 text-amber-500 drop-shadow-sm" />
          </div>
        </div>

        {/* Error Headers */}
        <h1 className="text-blue-950 font-sans font-black tracking-tight uppercase leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-7xl">
          Page Not Found
        </h1>
        
        <p className="mt-4 text-slate-600 font-medium mx-auto tracking-wide leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
          Apologies! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Decorative Divider */}
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-950 to-amber-500 rounded-full mx-auto my-6 sm:my-8" />

        {/* ── ACTION BUTTONS LINKS (No CSR States Needed) ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xs sm:max-w-none mx-auto mt-6 sm:mt-8">
          
          {/* Primary Button: Go to Homepage */}
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-950 hover:bg-blue-900 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm tracking-wide shadow-md hover:shadow-blue-950/10 active:scale-[0.98] transition-all group"
          >
            <Home size={16} />
            Back to Homepage
          </Link>

          {/* Secondary Button: Support/Contact */}
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm tracking-wide active:scale-[0.98] transition-all"
          >
            <HelpCircle size={16} className="text-slate-500" />
            Contact Support
          </Link>
          
        </div>

      </div>
    </main>
  );
}