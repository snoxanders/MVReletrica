"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { projects, categories } from "../data/projects";
import {
  MdKitchen,
  MdApartment,
  MdElectricalServices,
  MdBathtub,
  MdHome,
  MdArrowForward,
} from "react-icons/md";

const categoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Cozinhas: MdKitchen,
  Apartamentos: MdApartment,
  Eletricidade: MdElectricalServices,
  "Casas de Banho": MdBathtub,
  Todos: MdHome,
};

const categoryColors = [
  "from-navy to-navy-light",
  "from-orange-dark to-orange",
  "from-navy-light to-navy",
  "from-orange to-orange-light",
  "from-navy-dark to-navy-light",
  "from-orange-dark to-orange-light",
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="trabalhos" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Os Nossos Trabalhos"
          subtitle="Veja a qualidade e transformação dos nossos projetos"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-orange text-white shadow-lg shadow-orange/30"
                  : "bg-white text-text-secondary hover:bg-navy/5 border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              const Icon = categoryIcons[project.category] || MdHome;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                  onClick={() =>
                    document
                      .querySelector("#contacto")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {/* Gradient placeholder for project image */}
                  <div
                    className={`aspect-[4/3] bg-gradient-to-br ${categoryColors[index % categoryColors.length]} flex items-center justify-center`}
                  >
                    <Icon
                      size={64}
                      className="text-white/20 group-hover:text-white/40 transition-colors duration-300"
                    />
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block bg-orange/90 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-white font-bold text-lg mb-1">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() =>
              document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white px-8 py-3.5 rounded-xl font-semibold transition-all hover:scale-105 cursor-pointer"
          >
            Pedir orçamento para o seu projeto
            <MdArrowForward size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
