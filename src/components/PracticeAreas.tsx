"use client";

import { useEffect, useRef } from "react";
import { PRACTICE_AREAS, OFFICE_INFO } from "@/lib/data";
import { ArrowUpRight, Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PracticeAreasGeometrics } from "./GeometricBackgrounds";

export function PracticeAreas() {
  const topAreas = PRACTICE_AREAS.slice(0, 3); // 3 superiores: 01, 02, 03
  const bottomAreas = PRACTICE_AREAS.slice(3, 6); // 3 inferiores: 04, 05, 06

  const sectionRef = useRef<HTMLDivElement>(null);
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Efeito de sobreposição imersivo: ao rolar e a linha 2 subir, a linha 1 suavemente reduz e escurece
      if (topRowRef.current && bottomRowRef.current) {
        gsap.to(topRowRef.current, {
          scale: 0.94,
          opacity: 0.5,
          filter: "blur(2px)",
          ease: "none",
          scrollTrigger: {
            trigger: bottomRowRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderCard = (area: (typeof PRACTICE_AREAS)[0]) => (
    <div
      key={area.id}
      className="bg-[var(--bg-card)] rounded-3xl border border-[var(--border-subtle)]/40 flex flex-col justify-between overflow-hidden shadow-xl group hover:border-[var(--accent)] transition-all duration-300 h-full p-8 xl:p-10"
    >
      <div>
        {/* Topo do Card */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]/20 mb-6">
          <div className="flex items-center gap-2">
            <span className="font-heading text-4xl xl:text-5xl text-[var(--accent)] dark:text-emerald-400 font-bold">
              {area.code}
            </span>
            <span className="text-xs font-heading uppercase tracking-widest text-[var(--border-subtle)] font-bold">
              Área de Atuação
            </span>
          </div>
          <span className="bullet-indicator text-[var(--border-subtle)] group-hover:scale-125 transition-transform" />
        </div>

        {/* Título e Subtítulo */}
        <h3 className="font-heading text-2xl xl:text-3xl uppercase tracking-wide text-[var(--text-main)] mb-2 leading-snug">
          {area.title}
        </h3>
        <p className="font-body text-xs sm:text-sm text-[var(--border-subtle)] font-medium mb-4 italic">
          {area.subtitle}
        </p>
        <p className="font-body text-sm text-[var(--text-muted)] leading-relaxed mb-6">
          {area.description}
        </p>

        {/* Tópicos */}
        <ul className="space-y-2.5 mb-8">
          {area.highlights.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-[var(--text-main)]/90">
              <Check className="w-4 h-4 text-[var(--accent)] dark:text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Rodapé do Card: Fundo VERDE (#143525) e Texto BRANCO */}
      <div className="-mx-8 -mb-8 xl:-mx-10 xl:-mb-10 mt-6 bg-[#143525] hover:bg-[#0d2319] transition-colors">
        <a
          href={`${OFFICE_INFO.whatsappUrl}&text=Ol%C3%A1%2C%20gostaria%20de%20orienta%C3%A7%C3%B5es%20sobre%20${encodeURIComponent(area.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 px-8 flex items-center justify-between text-white text-xs sm:text-sm font-heading uppercase tracking-wider group/link"
        >
          <span className="font-semibold tracking-wider">Consultar sobre esta área</span>
          <ArrowUpRight className="w-4 h-4 text-white group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
        </a>
      </div>
    </div>
  );

  return (
    <section
      id="areas"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[var(--bg-secondary)]/40 editorial-border-b w-full relative overflow-hidden isolate"
    >
      <PracticeAreasGeometrics />
      {/* Cabeçalho de Seção em Largura Total */}
      <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-28 mb-14 sm:mb-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="bullet-indicator text-[var(--accent)] dark:text-emerald-400" />
              <span className="font-heading uppercase text-xs sm:text-sm tracking-widest text-[var(--border-subtle)] font-bold">
                03 / Especialidades Jurídicas
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[var(--text-main)]">
              Áreas de Atuação
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Assessoria de alto rigor técnico focada na prevenção de riscos, consultoria corporativa contínua e contencioso estratégico de alto impacto.
          </p>
        </div>
      </div>

      {/* ===================== VERSÃO DESKTOP (100% LARGURA TOTAL REAL + SOBREPOSIÇÃO NO SCROLL) ===================== */}
      <div className="hidden lg:block w-full px-6 sm:px-12 lg:px-20 xl:px-28 relative z-10">
        {/* Linha 1: 3 Cards Superiores (Sticky que trava em top-[12vh] enquanto a linha 2 sobe) */}
        <div
          ref={topRowRef}
          className="sticky top-[12vh] z-10 w-full mb-[16vh] sm:mb-[22vh] transition-all will-change-transform"
        >
          <div className="grid grid-cols-3 gap-6 xl:gap-8 w-full">
            {topAreas.map((area) => renderCard(area))}
          </div>
        </div>

        {/* Linha 2: 3 Cards Inferiores (Sobrepõem a Linha 1 no scroll com sombra e elevação) */}
        <div
          ref={bottomRowRef}
          className="relative z-20 w-full transition-all will-change-transform"
        >
          <div className="grid grid-cols-3 gap-6 xl:gap-8 w-full shadow-2xl">
            {bottomAreas.map((area) => renderCard(area))}
          </div>
        </div>
      </div>

      {/* ===================== VERSÃO MOBILE (Grid Vertical Limpo) ===================== */}
      <div className="lg:hidden w-full px-4 sm:px-6 space-y-6 relative z-10">
        {PRACTICE_AREAS.map((area) => (
          <div
            key={area.id}
            className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border-subtle)]/40 p-6 flex flex-col justify-between overflow-hidden shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]/20 mb-4">
                <span className="font-heading text-2xl text-[var(--accent)] dark:text-emerald-400 font-bold">
                  {area.code}.
                </span>
                <span className="text-[0.625rem] font-heading uppercase tracking-widest text-[var(--border-subtle)]">
                  Especialidade
                </span>
              </div>
              <h3 className="font-heading text-xl uppercase tracking-wide text-[var(--text-main)] mb-1">
                {area.title}
              </h3>
              <p className="font-body text-xs text-[var(--border-subtle)] italic mb-3">
                {area.subtitle}
              </p>
              <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                {area.description}
              </p>
              <ul className="space-y-1.5 mb-6">
                {area.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs font-body text-[var(--text-main)]/90">
                    <Check className="w-3.5 h-3.5 text-[var(--accent)] dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rodapé Verde com Escrita Branca */}
            <div className="-mx-6 -mb-6 mt-4 bg-[#143525]">
              <a
                href={`${OFFICE_INFO.whatsappUrl}&text=Ol%C3%A1%2C%20gostaria%20de%20orienta%C3%A7%C3%B5es%20sobre%20${encodeURIComponent(area.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 flex items-center justify-between text-white text-xs font-heading uppercase tracking-wider"
              >
                <span>Consultar sobre esta área</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
