"use client";

import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { company } from "../data/company";
import {
  MdVerified,
  MdHandyman,
  MdGroups,
  MdLocationOn,
} from "react-icons/md";

const badges = [
  { icon: MdHandyman, label: "10+ Anos de Experiência" },
  { icon: MdVerified, label: "Trabalho Certificado" },
  { icon: MdGroups, label: "Equipa Profissional" },
  { icon: MdLocationOn, label: "Lisboa e Arredores" },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Sobre a MVR"
          subtitle="Conheça quem está por trás de cada projeto"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image / Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-navy to-navy-light rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <MdHandyman size={80} className="text-white/20 mx-auto mb-4" />
                <p className="text-white/40 text-sm">Foto da equipa MVR</p>
              </div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-orange text-white rounded-2xl p-5 shadow-xl shadow-orange/30 hidden md:block">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm text-white/80">Anos de<br />Experiência</div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-navy mb-6">
              Experiência e dedicação em cada obra
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              Com mais de 10 anos de experiência em eletricidade e remodelação,
              a <strong className="text-navy">MVR - Remodelações e Eletricidade</strong>{" "}
              é uma referência de qualidade em Lisboa e arredores.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              Liderada por <strong className="text-navy">{company.owner}</strong>,
              a nossa equipa combina conhecimento técnico com atenção ao detalhe
              para transformar cada espaço. Desde pequenas reparações elétricas
              a remodelações completas de apartamentos.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              Trabalhamos com materiais de qualidade e garantimos transparência
              total em cada orçamento. O nosso compromisso é a sua satisfação.
            </p>

            {/* Badges */}
            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-3 bg-background rounded-xl p-4 border border-border"
                >
                  <badge.icon size={24} className="text-orange flex-shrink-0" />
                  <span className="text-sm font-medium text-navy">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Service Area */}
            <div className="mt-8 p-5 bg-navy/5 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <MdLocationOn size={20} className="text-orange" />
                <span className="font-semibold text-navy text-sm">
                  Área de Atuação
                </span>
              </div>
              <p className="text-text-secondary text-sm">
                {company.serviceArea.join(" · ")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
