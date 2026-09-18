"use client";

import { useEffect, useRef } from "react";
import { Scale, Award, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function InstitutionalPillars() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        const pillarItems = sectionRef.current.querySelectorAll(".pillar-item");
        if (pillarItems.length > 0) {
          gsap.fromTo(
            pillarItems,
            { x: 80, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.85,
              stagger: 0.18,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
              },
            }
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="pilares"
      ref={sectionRef}
      className="w-full border-b border-[var(--border-subtle)]/30 bg-[var(--bg-card)] py-10 sm:py-14 relative z-10 shadow-xs overflow-hidden"
    >
      <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-28">
        {/* Cabeçalho Editorial Sutil */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]/25 mb-8 text-[var(--border-subtle)]">
          <div className="flex items-center gap-2.5">
            <Scale className="w-4 h-4 text-[var(--accent)] dark:text-emerald-400" />
            <span className="font-heading uppercase text-xs tracking-widest font-bold">
              Pilares Institucionais de Atuação
            </span>
          </div>
          <span className="font-heading uppercase text-xs tracking-wider text-[var(--border-subtle)] hidden sm:inline">
            Curitiba / Paraná • Atuação Nacional
          </span>
        </div>

        {/* Grade com os 3 Pilares que realizam Fade-in da direita para a esquerda */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 divide-y md:divide-y-0 md:divide-x divide-[var(--border-subtle)]/30 w-full">
          {/* Pilar 1 */}
          <div className="pillar-item flex flex-col items-start px-0 md:px-6 pt-6 md:pt-0 will-change-transform">
            <div className="flex items-center gap-2 mb-2 text-[var(--accent)] dark:text-emerald-400">
              <Award className="w-4 h-4" />
              <span className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                +8 Anos
              </span>
            </div>
            <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
              Experiência e Solidez Jurídica
            </h3>
            <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Orientação contínua a empresas, instituições financeiras e famílias em todo o Paraná e no âmbito nacional.
            </p>
          </div>

          {/* Pilar 2 */}
          <div className="pillar-item flex flex-col items-start px-0 md:px-6 pt-6 md:pt-0 will-change-transform">
            <div className="flex items-center gap-2 mb-2 text-[var(--accent)] dark:text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                100% Técnico
              </span>
            </div>
            <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
              Atendimento Direto com os Sócios
            </h3>
            <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Condução dinâmica com teses individualizadas, comunicação transparente e respeito rigoroso ao CFOAB.
            </p>
          </div>

          {/* Pilar 3 */}
          <div className="pillar-item flex flex-col items-start px-0 md:px-6 pt-6 md:pt-0 will-change-transform">
            <div className="flex items-center gap-2 mb-2 text-[var(--accent)] dark:text-emerald-400">
              <Scale className="w-4 h-4" />
              <span className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                Sede Própria
              </span>
            </div>
            <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
              Estrutura em Curitiba / PR
            </h3>
            <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Edifício Empresarial no Capão Raso com estrutura completa para audiências híbridas e reuniões presenciais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
