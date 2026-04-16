"use client";

import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { MdAccessTime, MdSecurity, MdStar, MdDescription } from "react-icons/md";

const reasons = [
  {
    icon: MdAccessTime,
    title: "Pontualidade",
    description: "Cumprimos prazos rigorosamente. O seu tempo é valioso e respeitamos cada compromisso.",
    stat: "100%",
    statLabel: "no prazo",
  },
  {
    icon: MdSecurity,
    title: "Segurança",
    description: "Todo o trabalho é executado em conformidade com as normas e regulamentos em vigor.",
    stat: "Cert.",
    statLabel: "certificado",
  },
  {
    icon: MdStar,
    title: "Materiais de Qualidade",
    description: "Utilizamos apenas materiais certificados de marcas reconhecidas no mercado.",
    stat: "A+",
    statLabel: "qualidade",
  },
  {
    icon: MdDescription,
    title: "Orçamento Transparente",
    description: "Sem surpresas. Preços claros e detalhados desde o primeiro contacto.",
    stat: "0",
    statLabel: "surpresas",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-light/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Porquê Escolher a MVR"
          subtitle="Confiança, qualidade e transparência em cada projeto"
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-orange/10 group-hover:bg-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-colors">
                <reason.icon size={32} className="text-orange" />
              </div>
              <div className="text-3xl font-bold text-orange mb-1">
                {reason.stat}
              </div>
              <div className="text-white/50 text-xs uppercase tracking-wider mb-4">
                {reason.statLabel}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                {reason.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
