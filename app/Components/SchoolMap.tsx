import React from 'react';
import { MapPin, Clock, Phone, Globe, ExternalLink } from 'lucide-react';

export default function SchoolMap() {
  // Embed URL built using coordinates and search parameters matching image details
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.1853629408665!2d68.12563387611847!3d25.961917734181816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c4d846dc2b125%3A0x77d1240756015260!2sAl-Hussania%20Islamic%20Public%20school!5e0!3m2!1sen!2spk!4v1716745000000!5m2!1sen!2spk";

  return (
    <section className="bg-white text-gray-800 py-12 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-2xl text-center sm:text-3xl font-sans font-bold text-gray-950 tracking-tight uppercase mb-2">
          Our Location
        </h2>
        <p className="text-sm text-center sm:text-base text-gray-500 w-full">
          Find us on the map or visit our School in Shahdadpur.
        </p>
      </div>

      {/* Main Responsive Layout Wrapper */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col lg:flex-row w-full min-h-[500px] lg:h-[600px]">
        
        {/* Left Side: Premium Details Panel (Laptop pe side me, Mobile/Tablet pe top/bottom) */}
        <div className="w-full lg:w-[400px] p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-200 bg-white z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">
              School Guide
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-950 mb-2 leading-tight">
              Al-Hussania Islamic Public School
            </h3>
            <p className="text-sm text-gray-500 mb-6 font-medium">Religious school • Shahdadpur</p>

            {/* Information List */}
            <div className="space-y-5">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-600 leading-relaxed">
                  <p className="font-semibold text-gray-900">Address:</p>
                  <p>WJ9F+3PP, Madarsa Rd, Society Town,</p>
                  <p>Shāhdādpur, 68030, Sindh, Pakistan</p>
                  <p className="text-xs text-gray-400 mt-1 italic">Located in: Jamai Dar-ul-uloom Hussainia</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-600">
                  <p className="font-semibold text-gray-900">Timing:</p>
                  <p>Mon - Thu & Sat: 7:00 AM - 3:00 PM</p>
                  <p>Friday: 7:45 AM - 11:45 PM (Sunday Closed)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-8 lg:mt-0">
            <a 
              href="https://maps.google.com/?cid=8633721574572249696"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-gray-950 text-white rounded-xl font-medium text-sm transition-all duration-200 hover:bg-gray-800 shadow-sm"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Side: Google Map Container */}
        <div className="w-full h-[350px] sm:h-[450px] lg:h-full relative bg-gray-50">
          <iframe
            src={mapEmbedUrl}
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Al-Hussania Islamic Public School Location Map"
          ></iframe>
        </div>

      </div>
    </section>
  );
}