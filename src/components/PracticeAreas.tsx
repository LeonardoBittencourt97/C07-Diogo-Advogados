"use client";

import { PRACTICE_AREAS, OFFICE_INFO } from "@/lib/data";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

export function PracticeAreas() {
  const topAreas = PRACTICE_AREAS.slice(0, 3); // 3 superiores: 01, 02, 03
  const bottomAreas = PRACTICE_AREAS.slice(3, 6); // 3 inferiores: 04, 05, 06

  const renderCard = (area: (typeof PRACTICE_AREAS)[0], isDesktop = false) => (
    <div
      key={area.id}
      className={`bg-[var(--bg-card)] rounded-3xl border border-[var(--border-subtle)]/40 flex flex-col justify-between overflow-hidden shadow-lg group hover:border-[var(--accent)] transition-all duration-300 ${
        isDesktop ? "h-full p-8 xl:p-10" : "p-6 sm:p-8"
      }`}
    >
      <div>
        {/* Topo do Card */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]/20 mb-6">
          <div className="flex items-center gap-2">
            <span className="font-heading text-3xl xl:text-4xl text-[var(--accent)] dark:text-emerald-400 font-bold">
              {area.code}
            </span>
            <span className="text-[0.6875rem] font-heading uppercase tracking-widest text-[var(--border-subtle)]">
              Área Especializada
            </span>
          </div>
          <span className="bullet-indicator text-[var(--border-subtle)] group-hover:scale-125 transition-transform" />
        </div>

        {/* Título e Subtítulo */}
        <h3 className="font-heading text-2xl uppercase tracking-wide text-[var(--text-main)] mb-2 leading-snug">
          {area.title}
        </h3>
        <p className="font-body text-xs sm:text-sm text-[var(--border-subtle)] font-medium mb-4 italic">
          {area.subtitle}
        </p>
        <p className="font-body text-sm text-[var(--text-muted)] leading-relaxed mb-6">
          {area.description}
        </p>

        {/* Tópicos */}
        <ul className="space-y-2 mb-8">
          {area.highlights.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-[var(--text-main)]/85">
              <Check className="w-3.5 h-3.5 text-[var(--accent)] dark:text-emerald-400 flex-shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Ação rápida: Fundo VERDE (#143525) e texto BRANCO no Desktop */}
      <div className="-mx-6 -mb-6 sm:-mx-8 sm:-mb-8 xl:-mx-10 xl:-mb-10 mt-6 bg-[#143525] hover:bg-[#0d2319] transition-colors">
        <a
          href={`${OFFICE_INFO.whatsappUrl}&text=Ol%C3%A1%2C%20gostaria%20de%20orienta%C3%A7%C3%B5es%20sobre%20${encodeURIComponent(area.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 px-6 sm:px-8 flex items-center justify-between text-white text-xs sm:text-sm font-heading uppercase tracking-wider group/link"
        >
          <span className="font-semibold tracking-wider">Consultar sobre esta área</span>
          <ArrowUpRight className="w-4 h-4 text-white group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
        </a>
      </div>
    </div>
  );

  return (
    <section id="areas" className="py-20 sm:py-28 bg-[var(--bg-secondary)]/40 editorial-border-b overflow-hidden">
      {/* Cabeçalho de Seção */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="bullet-indicator text-[var(--accent)] dark:text-emerald-400" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--border-subtle)]">
                03 / Especialidades Jurídicas
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[var(--text-main)]">
              Áreas de Atuação
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-md leading-relaxed">
            Assessoria de alto rigor técnico focada na prevenção de riscos, consultoria corporativa contínua e contencioso estratégico.
          </p>
        </div>
      </div>

      {/* ===================== VERSÃO DESKTOP (Largura Total + Sobreposição no Scroll) ===================== */}
      <div className="hidden lg:block w-full px-4 sm:px-8 max-w-[1680px] mx-auto">
        {/* Linha 1: 3 Cards Superiores (Sticky no topo durante o scroll) */}
        <div className="sticky top-28 sm:top-32 z-10 w-full mb-10 transition-all duration-300">
          <div className="grid grid-cols-3 gap-6 xl:gap-8 w-full">
            {topAreas.map((area) => renderCard(area, true))}
          </div>
        </div>

        {/* Linha 2: 3 Cards Inferiores (Relativos, deslizam sobrepondo a Linha 1 no scroll) */}
        <div className="relative z-20 w-full pt-10 sm:pt-16 transition-all duration-300">
          <div className="grid grid-cols-3 gap-6 xl:gap-8 w-full">
            {bottomAreas.map((area) => renderCard(area, true))}
          </div>
        </div>
      </div>

      {/* ===================== VERSÃO MOBILE (Grid Vertical Limpo) ===================== */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 gap-6">
          {PRACTICE_AREAS.map((area) => renderCard(area, false))}
        </div>
      </div>
    </section>
  );
}
