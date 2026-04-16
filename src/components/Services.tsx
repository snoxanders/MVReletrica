"use client";

import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { services } from "../data/services";

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Os Nossos Serviços"
          subtitle="Soluções completas em eletricidade e remodelação para a sua casa ou negócio"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group bg-background rounded-2xl p-6 md:p-8 border border-border hover:border-orange/30 hover:shadow-xl hover:shadow-orange/5 transition-all duration-300 cursor-pointer"
              onClick={() =>
                document
                  .querySelector("#contacto")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <div className="w-14 h-14 bg-navy/10 group-hover:bg-orange/10 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                <service.icon
                  size={28}
                  className="text-navy group-hover:text-orange transition-colors duration-300"
                />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-orange transition-colors">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
