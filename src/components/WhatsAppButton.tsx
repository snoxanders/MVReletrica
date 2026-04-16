"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { company } from "../data/company";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
        "Olá! Gostaria de pedir um orçamento."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 transition-colors"
      aria-label="Contactar via WhatsApp"
    >
      <FaWhatsapp size={28} className="text-white md:text-[32px]" />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
    </motion.a>
  );
}
