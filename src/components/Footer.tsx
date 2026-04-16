"use client";

import Image from "next/image";
import { company } from "../data/company";
import { services } from "../data/services";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.png"
                alt="MVR Logo"
                width={40}
                height={40}
                className="rounded-lg bg-white p-1"
              />
              <span className="font-bold text-lg">MVR</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Serviços profissionais de eletricidade e remodelação em Lisboa e
              arredores. Qualidade e confiança em cada projeto.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-orange">
              Serviços
            </h4>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <button
                    onClick={() =>
                      document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-white/60 hover:text-orange text-sm transition-colors cursor-pointer"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-orange">
              Contactos
            </h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${company.phone}`} className="flex items-center gap-3 text-white/60 hover:text-orange text-sm transition-colors">
                  <MdPhone size={18} className="text-orange flex-shrink-0" />
                  {company.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/60 hover:text-green-400 text-sm transition-colors">
                  <FaWhatsapp size={18} className="text-green-400 flex-shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-white/60 hover:text-orange text-sm transition-colors">
                  <MdEmail size={18} className="text-orange flex-shrink-0" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MdLocationOn size={18} className="text-orange flex-shrink-0 mt-0.5" />
                {company.address}
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-orange">
              Área de Atuação
            </h4>
            <div className="flex flex-wrap gap-2">
              {company.serviceArea.map((area) => (
                <span
                  key={area}
                  className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-white/60"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} {company.name}. Todos os direitos reservados.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-white/40 hover:text-orange text-xs transition-colors cursor-pointer"
          >
            Voltar ao topo
          </button>
        </div>
      </div>
    </footer>
  );
}
