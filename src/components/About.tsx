import { OFFICE_INFO } from "@/lib/data";
import { Compass, Eye, ShieldCheck, CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="py-24 sm:py-32 bg-[var(--bg-secondary)]/50 editorial-border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho de Seção Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="bullet-indicator text-[var(--accent)] dark:text-emerald-400" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--border-subtle)]">
                01 / Tradição & Propósito
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[var(--text-main)]">
              Sobre o Escritório
            </h2>
          </div>
          <p className="font-body text-base text-[var(--text-muted)] max-w-md">
            Fundado para prestar assessoria jurídica com compromisso irrevogável com a técnica, ética e proteção integral do patrimônio de nossos parceiros.
          </p>
        </div>

        {/* Grid de Missão, Visão e Valores */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Missão */}
          <div className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border-subtle)]/30 flex flex-col justify-between hover:border-[var(--border-subtle)] transition-colors duration-300">
            <div>
              <div className="w-12 h-12 rounded-full border border-[var(--border-subtle)]/40 flex items-center justify-center text-[var(--accent)] dark:text-emerald-400 mb-6 bg-[var(--bg-primary)]">
                <Compass className="w-6 h-6" />
              </div>
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--border-subtle)] block mb-2">
                Nossa Missão
              </span>
              <h3 className="font-heading text-xl uppercase text-[var(--text-main)] mb-4">
                Defesa Técnica e Atendimento Dinâmico
              </h3>
              <p className="font-body text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                {OFFICE_INFO.pillars.mission}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[var(--border-subtle)]/20 text-xs font-heading uppercase text-[var(--border-subtle)] tracking-wider">
              Compromisso Contínuo
            </div>
          </div>

          {/* Visão */}
          <div className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border-subtle)]/30 flex flex-col justify-between hover:border-[var(--border-subtle)] transition-colors duration-300">
            <div>
              <div className="w-12 h-12 rounded-full border border-[var(--border-subtle)]/40 flex items-center justify-center text-[var(--accent)] dark:text-emerald-400 mb-6 bg-[var(--bg-primary)]">
                <Eye className="w-6 h-6" />
              </div>
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--border-subtle)] block mb-2">
                Nossa Visão
              </span>
              <h3 className="font-heading text-xl uppercase text-[var(--text-main)] mb-4">
                Referência em Soluções Jurídicas
              </h3>
              <p className="font-body text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                {OFFICE_INFO.pillars.vision}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[var(--border-subtle)]/20 text-xs font-heading uppercase text-[var(--border-subtle)] tracking-wider">
              Evolução e Excelência
            </div>
          </div>

          {/* Valores */}
          <div className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border-subtle)]/30 flex flex-col justify-between hover:border-[var(--border-subtle)] transition-colors duration-300">
            <div>
              <div className="w-12 h-12 rounded-full border border-[var(--border-subtle)]/40 flex items-center justify-center text-[var(--accent)] dark:text-emerald-400 mb-6 bg-[var(--bg-primary)]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--border-subtle)] block mb-2">
                Nossos Valores
              </span>
              <h3 className="font-heading text-xl uppercase text-[var(--text-main)] mb-4">
                Ética, Clareza e Simplicidade
              </h3>
              <ul className="space-y-3 font-body text-sm sm:text-base text-[var(--text-muted)]">
                {OFFICE_INFO.pillars.values.map((val, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--border-subtle)] flex-shrink-0 mt-1" />
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-[var(--border-subtle)]/20 text-xs font-heading uppercase text-[var(--border-subtle)] tracking-wider">
              Conduta Inegociável
            </div>
          </div>
        </div>

        {/* Barra de Indicadores Numéricos */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-2xl border border-[var(--border-subtle)]/30 bg-[var(--bg-card)]/50">
          {OFFICE_INFO.metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-3">
              <span className="font-heading text-3xl sm:text-4xl text-[var(--accent)] dark:text-emerald-400 font-bold mb-1">
                {m.value}
              </span>
              <span className="font-body text-xs sm:text-sm text-[var(--text-muted)] max-w-[200px]">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
