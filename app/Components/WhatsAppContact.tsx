"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  Sparkles,
  ChevronDown,
  Zap,
} from "lucide-react";

const WHATSAPP_NUMBER = "923103104364";

type FormFieldEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

export default function WhatsAppContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e: FormFieldEvent) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendToWhatsApp = () => {
    const { name, email, phone, subject, message } = formData;
    const text = `Assalam-o-Alaikum,\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Subject:* ${subject}\n\n*Message:*\n${message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 20 },
    },
  };

  const isFormValid = formData.name && formData.message;

  return (
    // Normal in-flow section — works inside contact page, home page, footer, anywhere.
    // w-full + max-w + mx-auto keeps it centered and responsive at every breakpoint.
    <div className="w-full max-w-xl mx-auto px-4 sm:px-0 mt-7">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white/90 backdrop-blur-xl border border-white/30 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] rounded-2xl sm:rounded-3xl p-5 sm:p-7 relative overflow-hidden"
      >
        {/* Background Glowing Blob */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-100/40 rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100/30 rounded-full blur-[60px] pointer-events-none" />

        {/* Header */}
        <motion.div
          variants={childVariants}
          className="flex items-center justify-between mb-5 sm:mb-6 relative z-10"
        >
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-2 sm:p-2.5 rounded-full shadow-lg shrink-0">
              <Zap className="text-white w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight">
                Rabta Karein
              </h2>
              <p className="text-xs text-green-600 font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                WhatsApp Par Online
              </p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="shrink-0"
          >
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
          </motion.div>
        </motion.div>

        <p className="text-sm text-gray-500 mb-5 sm:mb-6 relative z-10 border-b border-gray-100 pb-4">
          Apni details bharain aur hum seedha aap se rabta karenge.
        </p>

        {/* Form Fields */}
        <div className="space-y-4 relative z-10">
          <motion.div variants={childVariants} className="group">
            <div className="flex items-center border border-gray-200/80 rounded-xl bg-gray-50/50 px-4 focus-within:ring-2 focus-within:ring-green-400 transition-all">
              <User className="w-4 h-4 text-gray-400 mr-3 shrink-0 group-focus-within:text-green-500 transition-colors" />
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Aapka Naam"
                className="w-full py-3 sm:py-3.5 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400 min-w-0"
              />
            </div>
          </motion.div>

          <motion.div
            variants={childVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="flex-1 min-w-0 group">
              <div className="flex items-center border border-gray-200/80 rounded-xl bg-gray-50/50 px-4 focus-within:ring-2 focus-within:ring-green-400 transition-all">
                <Mail className="w-4 h-4 text-gray-400 mr-3 shrink-0 group-focus-within:text-green-500 transition-colors" />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full py-3 sm:py-3.5 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400 min-w-0"
                />
              </div>
            </div>
            <div className="flex-1 min-w-0 group">
              <div className="flex items-center border border-gray-200/80 rounded-xl bg-gray-50/50 px-4 focus-within:ring-2 focus-within:ring-green-400 transition-all">
                <Phone className="w-4 h-4 text-gray-400 mr-3 shrink-0 group-focus-within:text-green-500 transition-colors" />
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full py-3 sm:py-3.5 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400 min-w-0"
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={childVariants} className="group">
            <div className="flex items-center border border-gray-200/80 rounded-xl bg-gray-50/50 px-4 focus-within:ring-2 focus-within:ring-green-400 transition-all">
              <ChevronDown className="w-4 h-4 text-gray-400 mr-3 shrink-0 group-focus-within:text-green-500 transition-colors" />
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full py-3 sm:py-3.5 bg-transparent outline-none text-sm text-gray-700 appearance-none cursor-pointer min-w-0"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Admissions">Admissions</option>
                <option value="Live visit">Live visit</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </motion.div>

          <motion.div variants={childVariants} className="group">
            <div className="flex items-start border border-gray-200/80 rounded-xl bg-gray-50/50 px-4 py-3 focus-within:ring-2 focus-within:ring-green-400 transition-all">
              <MessageSquare className="w-4 h-4 text-gray-400 mr-3 mt-1 shrink-0 group-focus-within:text-green-500 transition-colors" />
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Apna sawal ya request yahan likhein..."
                className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400 resize-none min-w-0"
              />
            </div>
          </motion.div>
        </div>

        {/* Action Button with Shimmer Anim */}
        <motion.button
          variants={childVariants}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 10px 30px -5px rgba(34, 197, 94, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={sendToWhatsApp}
          disabled={!isFormValid}
          className="relative w-full mt-6 sm:mt-7 py-3.5 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none overflow-hidden group text-sm sm:text-base"
        >
          {/* Shimmer Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
          <Send className="w-5 h-5 shrink-0" /> WhatsApp Par Bhejein
        </motion.button>
      </motion.div>
    </div>
  );
}
