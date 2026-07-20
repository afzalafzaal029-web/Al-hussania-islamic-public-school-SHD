import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: {
    default: "Al-Hussainia Islamic Public School | Shahdadpur, Sindh",
    template: "%s | Al-Hussainia Islamic School",
  },
  description:
    "Al-Hussainia Islamic Public School provides quality modern education rooted in Islamic values in Shahdadpur, Sindh, Pakistan. Admissions open.",
  keywords: [
    "Islamic school Sindh",
    "Al-Hussainia school",
    "Al-hussainia islamic school Shahdadpur",
    "Islamic education Pakistan",
    "best school in Shahdadpur",
  ],
  openGraph: {
    title: "Al-Hussainia Islamic Public School",
    images: [
      {
        url: "https://alhussainia.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Al-Hussainia Islamic Public School",
      },
    ],
    description:
      "Quality education with Islamic values in Shahdadpur, Sindh, Pakistan.",
    type: "website",
    locale: "en_PK",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lato.variable} min-h-screen flex flex-col bg-white text-gray-900 antialiased`}
      >
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}