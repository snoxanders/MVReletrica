"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { company } from "../data/company";
import {
  MdSend,
  MdCheckCircle,
  MdError,
  MdPhone,
  MdEmail,
  MdLocationOn,
} from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const serviceOptions = [
  "Instalação Elétrica",
  "Remodelação de Apartamento",
  "Remodelação de Cozinha",
  "Remodelação de Casa de Banho",
  "Iluminação",
  "Reparação",
  "Quadro Elétrico",
  "Outro",
];

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Using FormSubmit.co (free, no signup required)
      const res = await fetch(
        `https://formsubmit.co/ajax/${company.email}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            Nome: form.name,
            Telefone: form.phone,
            Email: form.email,
            Morada: form.address,
            "Tipo de Serviço": form.service,
            Mensagem: form.message,
            _subject: `Novo Pedido de Orçamento - ${form.service}`,
          }),
        }
      );

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", address: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Pedir Orçamento Grátis"
          subtitle="Resposta em menos de 24 horas. Sem compromisso."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy mb-1.5">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="O seu nome"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1.5">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="912 345 678"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-navy mb-1.5">
                    Morada
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Morada da obra"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-navy mb-1.5">
                  Tipo de Serviço *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-all"
                >
                  <option value="">Selecione o tipo de serviço</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1.5">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Descreva o que pretende fazer na sua obra ou instalação"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-orange hover:bg-orange-dark text-white py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] shadow-lg shadow-orange/30 flex items-center justify-center gap-2 disabled:opacity-60 disabled:hover:scale-100 cursor-pointer"
              >
                {status === "sending" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    A enviar...
                  </>
                ) : (
                  <>
                    <MdSend size={22} />
                    Pedir Orçamento em 2 Minutos
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-green-50 text-green-700 p-4 rounded-xl border border-green-200"
                >
                  <MdCheckCircle size={24} />
                  <span className="font-medium">
                    Orçamento enviado com sucesso! Entraremos em contacto brevemente.
                  </span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-red-50 text-red-700 p-4 rounded-xl border border-red-200"
                >
                  <MdError size={24} />
                  <span className="font-medium">
                    Erro ao enviar. Tente novamente ou contacte-nos diretamente.
                  </span>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-navy rounded-2xl p-6 md:p-8 text-white">
              <h3 className="font-bold text-xl mb-6">Contacte-nos Diretamente</h3>

              <div className="space-y-5">
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-center gap-4 hover:text-orange transition-colors group"
                >
                  <div className="w-12 h-12 bg-white/10 group-hover:bg-orange/20 rounded-xl flex items-center justify-center transition-colors">
                    <MdPhone size={22} className="text-orange" />
                  </div>
                  <div>
                    <div className="text-white/60 text-xs uppercase tracking-wider">Telefone</div>
                    <div className="font-semibold">{company.phoneDisplay}</div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-green-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-white/10 group-hover:bg-green-500/20 rounded-xl flex items-center justify-center transition-colors">
                    <FaWhatsapp size={22} className="text-green-400" />
                  </div>
                  <div>
                    <div className="text-white/60 text-xs uppercase tracking-wider">WhatsApp</div>
                    <div className="font-semibold">{company.phoneDisplay}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-4 hover:text-orange transition-colors group"
                >
                  <div className="w-12 h-12 bg-white/10 group-hover:bg-orange/20 rounded-xl flex items-center justify-center transition-colors">
                    <MdEmail size={22} className="text-orange" />
                  </div>
                  <div>
                    <div className="text-white/60 text-xs uppercase tracking-wider">Email</div>
                    <div className="font-semibold text-sm">{company.email}</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MdLocationOn size={22} className="text-orange" />
                  </div>
                  <div>
                    <div className="text-white/60 text-xs uppercase tracking-wider">Morada</div>
                    <div className="font-semibold">{company.address}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border h-56">
              <iframe
                src={company.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização MVR"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
