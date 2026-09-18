import { HOW_WE_WORK, OFFICE_INFO } from "@/lib/data";
import { ArrowRight, MessageSquare } from "lucide-react";
import { HowWeWorkGeometrics } from "./GeometricBackgrounds";

export function HowWeWork() {
  return (
    <section id="processo" className="py-24 sm:py-32 bg-[var(--bg-primary)] editorial-border-b relative overflow-hidden isolate">
      <HowWeWorkGeometrics />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho de Seção Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="bullet-indicator text-[var(--accent)] dark:text-emerald-400" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--border-subtle)]">
                06 / Método de Trabalho
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[var(--text-main)]">
              Como Atuamos
            </h2>
          </div>
          <p className="font-body text-base text-[var(--text-muted)] max-w-md">
            Fluxo linear, previsível e rigoroso que transforma complexidades jurídicas em decisões estratégicas assertivas.
          </p>
        </div>

        {/* 4 Passos Estilo Editorial Suíço davidlaxer.com */}
        <div className="space-y-0 divide-y divide-[var(--border-subtle)]/30 border-y border-[var(--border-subtle)]/30 mb-16">
          {HOW_WE_WORK.map((step) => (
            <div
              key={step.number}
              className="py-10 sm:py-12 grid md:grid-cols-12 gap-6 items-start group hover:bg-[var(--bg-secondary)]/30 px-4 sm:px-6 rounded-xl transition-colors duration-300"
            >
              {/* Coluna 1: Número e Bullet */}
              <div className="md:col-span-3 flex items-center justify-between md:justify-start gap-4">
                <span className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--accent)] dark:text-emerald-400 font-bold">
                  {step.number}
                </span>
                <span className="bullet-indicator text-[var(--border-subtle)] group-hover:scale-125 transition-transform" />
              </div>

              {/* Coluna 2: Título e Subtítulo */}
              <div className="md:col-span-4">
                <h3 className="font-heading text-2xl sm:text-3xl uppercase tracking-wide text-[var(--text-main)] mb-1">
                  {step.title}
                </h3>
                <span className="font-body text-xs sm:text-sm text-[var(--border-subtle)] uppercase tracking-wider font-semibold">
                  {step.subtitle}
                </span>
              </div>

              {/* Coluna 3: Descrição */}
              <div className="md:col-span-5">
                <p className="font-body text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de Chamada para Diagnóstico Inicial */}
        <div className="p-8 sm:p-12 rounded-2xl border border-[var(--border-subtle)]/30 bg-[var(--bg-card)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-heading uppercase text-xs tracking-widest text-[var(--border-subtle)] block mb-1">
              Primeiro Passo
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl uppercase tracking-wide text-[var(--text-main)]">
              Agende sua Análise Preliminar
            </h3>
            <p className="font-body text-sm text-[var(--text-muted)] max-w-xl mt-1">
              Converse diretamente com um de nossos advogados especialistas para mapear os riscos ou oportunidades da sua demanda.
            </p>
          </div>

          <a
            href={OFFICE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] gap-2 py-4 px-8 text-sm shadow-sm flex-shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar pelo WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
