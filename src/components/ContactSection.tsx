import { OFFICE_INFO } from "@/lib/data";
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";
import { ContactGeometrics } from "./GeometricBackgrounds";

export function ContactSection() {
  return (
    <section id="contato" className="py-24 sm:py-32 bg-[var(--bg-primary)] editorial-border-b relative overflow-hidden">
      <ContactGeometrics />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho de Seção Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="bullet-indicator text-[var(--accent)] dark:text-emerald-400" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--border-subtle)]">
                08 / Canais Oficiais de Atendimento
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[var(--text-main)]">
              Contato & Localização
            </h2>
          </div>
          <p className="font-body text-base text-[var(--text-muted)] max-w-md">
            Sede estruturada em ponto nobre de Curitiba, com atendimento presencial agendado e consultoria jurídica online em todo o país.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Coluna de Cards de Informações (5 colunas) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Endereço */}
            <div className="bg-[var(--bg-card)] p-6 sm:p-8 rounded-2xl border border-[var(--border-subtle)]/30">
              <div className="flex items-center gap-3 text-xs uppercase font-heading tracking-wider text-[var(--border-subtle)] mb-3">
                <MapPin className="w-4 h-4 text-[var(--accent)] dark:text-emerald-400" />
                <span>Endereço da Sede</span>
              </div>
              <h3 className="font-heading text-xl uppercase text-[var(--text-main)] mb-2">
                Capão Raso, Curitiba - PR
              </h3>
              <p className="font-body text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                {OFFICE_INFO.address}
              </p>
              <a
                href="https://maps.google.com/?q=Av.+Winston+Churchill,+1824+-+Cap%C3%A3o+Raso,+Curitiba+-+PR,+81130-000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-heading uppercase tracking-wider text-[var(--accent)] dark:text-emerald-400 hover:underline"
              >
                <span>Traçar rota no Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Contato Direto */}
            <div className="bg-[var(--bg-card)] p-6 sm:p-8 rounded-2xl border border-[var(--border-subtle)]/30">
              <div className="flex items-center gap-3 text-xs uppercase font-heading tracking-wider text-[var(--border-subtle)] mb-4">
                <Phone className="w-4 h-4 text-[var(--accent)] dark:text-emerald-400" />
                <span>Atendimento Telefônico & Digital</span>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="font-body text-xs text-[var(--border-subtle)] block">WhatsApp / Telefone:</span>
                  <a
                    href={OFFICE_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading text-xl text-[var(--text-main)] hover:text-[var(--accent)] dark:hover:text-emerald-400 transition-colors flex items-center gap-2 mt-0.5"
                  >
                    <span>{OFFICE_INFO.phone}</span>
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                  </a>
                </div>

                <div className="pt-3 border-t border-[var(--border-subtle)]/20">
                  <span className="font-body text-xs text-[var(--border-subtle)] block">Correio Eletrônico:</span>
                  <a
                    href={`mailto:${OFFICE_INFO.email}`}
                    className="font-body text-sm text-[var(--text-main)] hover:text-[var(--accent)] dark:hover:text-emerald-400 transition-colors flex items-center gap-2 mt-0.5"
                  >
                    <Mail className="w-4 h-4 text-[var(--border-subtle)]" />
                    <span>{OFFICE_INFO.email}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Horários de Funcionamento */}
            <div className="bg-[var(--bg-card)] p-6 sm:p-8 rounded-2xl border border-[var(--border-subtle)]/30">
              <div className="flex items-center gap-3 text-xs uppercase font-heading tracking-wider text-[var(--border-subtle)] mb-3">
                <Clock className="w-4 h-4 text-[var(--accent)] dark:text-emerald-400" />
                <span>Horário de Expediente</span>
              </div>
              <ul className="space-y-2 font-body text-sm text-[var(--text-muted)]">
                <li className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]/15">
                  <span>Segunda a Sexta:</span>
                  <span className="font-heading text-[var(--text-main)] font-semibold">09:00 às 18:00</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Sábado e Domingo:</span>
                  <span className="text-[var(--border-subtle)] italic">Encerrado</span>
                </li>
              </ul>
            </div>

            {/* Redes Sociais Oficiais */}
            <div className="p-6 rounded-2xl border border-[var(--border-subtle)]/30 bg-[var(--bg-card)] flex items-center justify-between">
              <span className="font-heading text-xs uppercase tracking-wider text-[var(--text-main)]">
                Conecte-se conosco:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={OFFICE_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[var(--border-subtle)]/30 hover:border-[var(--accent)] flex items-center justify-center text-[var(--text-main)] hover:text-[var(--accent)] transition-colors"
                  aria-label="Instagram Diogo Advogados"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={OFFICE_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[var(--border-subtle)]/30 hover:border-[var(--accent)] flex items-center justify-center text-[var(--text-main)] hover:text-[var(--accent)] transition-colors"
                  aria-label="Facebook Diogo e Mazeiro Advogados"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Coluna do Mapa Interativo Embed (7 colunas) */}
          <div className="lg:col-span-7 bg-[var(--bg-card)] rounded-2xl border border-[var(--border-subtle)]/30 overflow-hidden shadow-sm flex flex-col h-[520px] lg:h-[620px]">
            <div className="px-6 py-4 border-b border-[var(--border-subtle)]/20 flex items-center justify-between bg-[var(--bg-secondary)]/30">
              <span className="font-heading uppercase text-xs tracking-wider text-[var(--text-main)]">
                Localização no Mapa • Edifício Comercial Capão Raso
              </span>
              <span className="text-xs text-[var(--border-subtle)] font-body">
                CEP 81130-000
              </span>
            </div>

            <div className="flex-1 w-full h-full relative">
              <iframe
                title="Localização do Escritório Diogo e Mazeiro Advogados em Curitiba"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.218567228833!2d-49.29969192460835!3d-25.500587777517176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce36592ffea0f%3A0x6b801a6b0c20ab0e!2sAv.%20Winston%20Churchill%2C%201824%20-%20Cap%C3%A3o%20Raso%2C%20Curitiba%20-%20PR%2C%2081130-000!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter grayscale-[30%] contrast-[1.05]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
