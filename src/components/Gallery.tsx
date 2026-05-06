"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import Lightbox from "./ui/Lightbox";
import { projects, Project } from "../data/projects";
import { categories } from "../data/projects";
import { MdArrowForward, MdZoomIn } from "react-icons/md";

interface LightboxState {
  project: Project;
  index: number;
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const filtered =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const openLightbox = (project: Project) => {
    setLightbox({ project, index: 0 });
  };

  const closeLightbox = () => setLightbox(null);

  const setLightboxIndex = (idx: number) => {
    setLightbox((prev) => (prev ? { ...prev, index: idx } : prev));
  };

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
              const cover = project.images[0];
              const photoCount = project.images.length;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => openLightbox(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openLightbox(project);
                    }
                  }}
                  aria-label={`Ver ${project.title}`}
                >
                  <div className="relative aspect-[4/3] bg-navy/5">
                    <Image
                      src={cover}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Zoom hint icon */}
                  <div className="absolute top-3 right-3 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <MdZoomIn size={20} />
                  </div>

                  {/* Photo count badge — only when multiple */}
                  {photoCount > 1 && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-semibold">
                      {photoCount} fotos
                    </div>
                  )}

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

      <Lightbox
        open={lightbox !== null}
        images={lightbox?.project.images ?? []}
        index={lightbox?.index ?? 0}
        onClose={closeLightbox}
        onIndexChange={setLightboxIndex}
        title={lightbox?.project.title}
        description={lightbox?.project.description}
      />
    </section>
  );
}
