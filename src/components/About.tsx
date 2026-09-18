"use client";

import { useEffect, useRef } from "react";
import { OFFICE_INFO } from "@/lib/data";
import { Compass, Eye, ShieldCheck, CheckCircle2, ArrowUpRight, Scale } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Efeito Sticky Stacking com ScrollTrigger:
      // Conforme o card 2 sobe, o card 1 encolhe sutilmente, diminui opacidade e aplica leve desfoque
      if (card1Ref.current && card2Ref.current) {
        gsap.to(card1Ref.current, {
          scale: 0.93,
          opacity: 0.45,
          filter: "blur(2px)",
          ease: "power1.out",
          scrollTrigger: {
            trigger: card2Ref.current,
            start: "top 85%",
            end: "top 25%",
            scrub: 0.5,
          },
        });
      }

      // Conforme o card 3 sobe, o card 2 encolhe sutilmente, diminui opacidade e aplica leve desfoque
      if (card2Ref.current && card3Ref.current) {
        gsap.to(card2Ref.current, {
          scale: 0.93,
          opacity: 0.45,
          filter: "blur(2px)",
          ease: "power1.out",
          scrollTrigger: {
            trigger: card3Ref.current,
            start: "top 85%",
            end: "top 25%",
            scrub: 0.5,
          },
        });
      }

      // 2. Scroll Reveal para as Métricas Numéricas Monumentais
      if (metricsRef.current) {
        const metricItems = metricsRef.current.querySelectorAll(".metric-box");
        gsap.fromTo(
          metricItems,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: metricsRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const cardRefs = [card1Ref, card2Ref, card3Ref];

  const cards = [
    {
      id: "missao",
      number: "01",
      tag: "Nossa Missão",
      title: "Defesa Técnica e Atendimento Dinâmico",
      description: OFFICE_INFO.pillars.mission,
      icon: Compass,
      commit: "Compromisso Técnico Incondicional",
      accentBg: "bg-[var(--bg-card)]",
      topOffset: "top-[10vh] sm:top-[12vh]",
      zIndex: "z-10",
      details: [
        "Atuação consultiva preventiva para mitigar passivos antes da judicialização",
        "Atendimento dinâmico com contato direto com os sócios responsáveis",
        "Elaboração de teses artesanais e personalizadas para cada cliente",
      ],
    },
    {
      id: "visao",
      number: "02",
      tag: "Nossa Visão",
      title: "Consolidação como Referência em Advocacia",
      description: OFFICE_INFO.pillars.vision,
      icon: Eye,
      commit: "Evolução & Excelência Constante",
      accentBg: "bg-[var(--bg-card)]",
      topOffset: "top-[13vh] sm:top-[16vh]",
      zIndex: "z-20",
      details: [
        "Adoção de ferramentas tecnológicas avançadas de busca patrimonial e jurimetria",
        "Expansão sustentável no Paraná e atendimento digital em todo o território nacional",
        "Aprimoramento acadêmico e pós-graduações permanentes do corpo técnico",
      ],
    },
    {
      id: "valores",
      number: "03",
      tag: "Nossos Valores",
      title: "Ética, Comunicação Transparente e Simplicidade",
      description:
        "Princípios que norteiam cada petição, negociação e reunião com nossos parceiros, pautados no estrito respeito ao Código de Ética e Disciplina da OAB.",
      icon: ShieldCheck,
      commit: "Conduta Ética Inegociável",
      accentBg: "bg-[var(--bg-card)]",
      topOffset: "top-[16vh] sm:top-[20vh]",
      zIndex: "z-30",
      details: OFFICE_INFO.pillars.values,
    },
  ];

  return (
    <section
      id="sobre"
      ref={containerRef}
      className="py-14 sm:py-20 bg-[var(--bg-secondary)]/40 editorial-border-b w-full"
    >
      {/* Cabeçalho da Seção em Largura Total (Edge to Edge) */}
      <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-28 mb-10 sm:mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[var(--border-subtle)]/30 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bullet-indicator text-[var(--accent)] dark:text-emerald-400" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--border-subtle)] font-bold">
                01 / Tradição & Solidez
              </span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[var(--text-main)]">
              Sobre o Escritório
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Mais de 8 anos combinando rigor dogmático, visão de negócios e agilidade processual na defesa dos interesses de empresas e indivíduos.
          </p>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* A- STICKY STACKING CARDS COMPACTOS (Ocupando no máximo 60% da tela)        */}
      {/* ========================================================================= */}
      <div className="w-full relative pb-8 sm:pb-12">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          const ref = cardRefs[idx];
          const isLast = idx === cards.length - 1;

          return (
            <div
              key={card.id}
              className={`w-full ${!isLast ? "mb-[8vh] sm:mb-[10vh]" : "mb-0"}`}
            >
              <div
                ref={ref}
                className={`sticky ${card.topOffset} ${card.zIndex} w-full transition-shadow will-change-transform`}
              >
                {/* O Card ocupa 100% da largura com altura contida (máx 60% viewport no desktop) */}
                <div
                  className={`w-full ${card.accentBg} px-6 sm:px-12 lg:px-20 xl:px-28 py-6 sm:py-8 lg:py-10 border-y border-[var(--border-subtle)]/45 shadow-[0_-10px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_-15px_40px_rgba(0,0,0,0.5)]`}
                >
                  <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start w-full">
                    {/* Coluna 1: Número, Tag e Ícone Compactos */}
                    <div className="lg:col-span-4 flex flex-col justify-between h-full border-b lg:border-b-0 lg:border-r border-[var(--border-subtle)]/30 pb-4 lg:pb-0 lg:pr-8">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--accent)] dark:text-emerald-400 font-bold">
                            {card.number}.
                          </span>
                          <div className="w-12 h-12 rounded-xl border border-[var(--border-subtle)]/35 bg-[var(--bg-primary)] flex items-center justify-center text-[var(--accent)] dark:text-emerald-400 shadow-2xs">
                            <Icon className="w-6 h-6" />
                          </div>
                        </div>
                        <span className="font-heading uppercase text-xs tracking-wider text-[var(--border-subtle)] block mb-1 font-bold">
                          {card.tag}
                        </span>
                        <h3 className="font-heading text-lg sm:text-xl lg:text-2xl normal-case font-semibold tracking-normal text-[var(--text-main)] leading-snug">
                          {card.title}
                        </h3>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[var(--border-subtle)]/20 hidden lg:block">
                        <span className="font-heading uppercase text-[0.6875rem] tracking-wider text-[var(--border-subtle)] font-medium">
                          {card.commit}
                        </span>
                      </div>
                    </div>

                    {/* Coluna 2: Descrição e Detalhes Enxutos */}
                    <div className="lg:col-span-8 flex flex-col justify-between h-full">
                      <p className="font-body text-sm sm:text-base text-[var(--text-main)] leading-relaxed mb-4 font-normal">
                        {card.description}
                      </p>

                      <div className="bg-[var(--bg-secondary)]/70 p-4 sm:p-6 rounded-xl border border-[var(--border-subtle)]/30 mb-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Scale className="w-3.5 h-3.5 text-[var(--accent)] dark:text-emerald-400" />
                          <span className="font-heading uppercase text-xs tracking-wider text-[var(--border-subtle)] font-bold">
                            Pilares Estruturantes de Atuação
                          </span>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-2.5 sm:gap-4 font-body text-xs sm:text-sm text-[var(--text-muted)]">
                          {card.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-[var(--accent)] dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span className="leading-snug">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between text-xs font-heading uppercase tracking-wider text-[var(--border-subtle)] pt-3 border-t border-[var(--border-subtle)]/20">
                        <span>Diogo & Mazeiro Advogados e Associados</span>
                        <span className="inline-flex items-center gap-1.5 text-[var(--accent)] dark:text-emerald-400 font-bold">
                          <span>Pilar {card.number} de 03</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* B- INDICADORES NUMÉRICOS READEQUADOS (Sem caixa alta, equilibrados)       */}
      {/* ========================================================================= */}
      <div
        ref={metricsRef}
        className="w-full mt-10 sm:mt-14 border-y border-[var(--border-subtle)]/40 bg-[var(--bg-primary)] shadow-xs"
      >
        <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-28 py-10 sm:py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-subtle)]/30 w-full">
            {OFFICE_INFO.metrics.map((m, idx) => (
              <div
                key={idx}
                className="metric-box flex flex-col items-center text-center px-4 pt-6 sm:pt-0 group"
              >
                <span className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--accent)] dark:text-emerald-400 font-bold mb-1.5 tracking-tight group-hover:scale-105 transition-transform duration-300">
                  {m.value}
                </span>
                <span className="font-body text-xs sm:text-sm text-[var(--text-muted)] normal-case font-normal max-w-xs leading-snug">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

