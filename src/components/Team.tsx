"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { LAWYERS, OFFICE_INFO } from "@/lib/data";
import { ShieldCheck, Award, MessageSquare } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Team() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        const cards = sectionRef.current.querySelectorAll(".lawyer-card");
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { y: 35, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
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
      id="equipe"
      ref={sectionRef}
      className="py-14 sm:py-20 bg-[var(--bg-primary)] editorial-border-b overflow-hidden w-full"
    >
      <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-24">
        {/* Cabeçalho de Seção Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[var(--border-subtle)]/30 mb-10 sm:mb-14 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bullet-indicator text-[var(--accent)] dark:text-emerald-400" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--border-subtle)] font-bold">
                02 / Corpo Jurídico
              </span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[var(--text-main)]">
              Sócios e Associados
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-md leading-relaxed">
            Advogados especialistas com atuação contenciosa e consultiva dedicada à segurança institucional de nossos clientes.
          </p>
        </div>

        {/* Grade Harmônica de Advogados (3 Colunas no Desktop, sem caixa alta excessiva e com altura otimizada) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {LAWYERS.map((lawyer) => (
            <article
              key={lawyer.id}
              className="lawyer-card bg-[var(--bg-card)] rounded-2xl overflow-hidden border border-[var(--border-subtle)]/30 flex flex-col shadow-xs hover:border-[var(--border-subtle)]/80 hover:shadow-md transition-all duration-300"
            >
              {/* Foto com Aspect Ratio Equilibrado */}
              <div className="relative w-full aspect-[4/5] bg-stone-900 overflow-hidden group">
                <Image
                  src={lawyer.photo}
                  alt={lawyer.name}
                  fill
                  className="object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Badge OAB Discreto no Topo da Foto */}
                <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[0.6875rem] font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{lawyer.oab}</span>
                </div>

                {/* Identificação no Rodapé da Foto (Sem caixa alta forçada no nome) */}
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <span className="text-[0.6875rem] uppercase tracking-wider font-heading text-emerald-400 block mb-0.5 font-semibold">
                    {lawyer.role}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl normal-case font-semibold tracking-normal leading-snug">
                    {lawyer.name}
                  </h3>
                </div>
              </div>

              {/* Informações Profissionais e Contato */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs normal-case font-medium text-[var(--accent)] dark:text-emerald-400 mb-3 pb-2.5 border-b border-[var(--border-subtle)]/20">
                    <Award className="w-4 h-4 flex-shrink-0" />
                    <span>{lawyer.specialty}</span>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                    {lawyer.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--border-subtle)]/20">
                  <span className="text-[0.6875rem] normal-case font-heading text-[var(--border-subtle)] block mb-2 font-bold">
                    Áreas de Atuação Primordial
                  </span>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {lawyer.areas.map((area, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[0.6875rem] font-body bg-[var(--bg-secondary)] text-[var(--text-main)] border border-[var(--border-subtle)]/20"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`${OFFICE_INFO.whatsappUrl}&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20${encodeURIComponent(lawyer.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill normal-case w-full bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] gap-2 py-2.5 px-3 text-xs text-center justify-center shadow-xs transition-all flex items-center"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Falar com {lawyer.name}</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
