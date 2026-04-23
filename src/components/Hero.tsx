"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MdArrowForward, MdPlayArrow } from "react-icons/md";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero/corredor-led.jpg"
        alt=""
        fill
        sizes="100vw"
        preload
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/85 to-navy-light/75" />

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-navy-light/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8"
        >
          <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
          <span className="text-white/90 text-sm font-medium">
            Serviços profissionais em Lisboa e arredores
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Remodelação e Eletricidade
          <br />
          <span className="text-orange">com Qualidade e Confiança</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-10"
        >
          Transformamos espaços com soluções elétricas e remodelações
          profissionais. Qualidade garantida ao melhor preço.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("#contacto")}
            className="group bg-orange hover:bg-orange-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-orange/30 flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
          >
            Pedir Orçamento
            <MdArrowForward className="group-hover:translate-x-1 transition-transform" size={22} />
          </button>
          <button
            onClick={() => scrollTo("#trabalhos")}
            className="group text-white border-2 border-white/30 hover:border-white/60 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-white/5 flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
          >
            <MdPlayArrow size={22} />
            Ver Trabalhos
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { number: "500+", label: "Projetos" },
            { number: "100%", label: "Satisfação" },
            { number: "10+", label: "Anos Exp." },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-orange">
                {stat.number}
              </div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
