"use client";

import { OFFICE_INFO } from "@/lib/data";
import { Compass, Eye, ShieldCheck, CheckCircle2, Award, ArrowUpRight } from "lucide-react";

export function About() {
  const cards = [
    {
      id: "missao",
      number: "01",
      tag: "Nossa Missão",
      title: "Defesa Técnica e Atendimento Dinâmico",
      description: OFFICE_INFO.pillars.mission,
      icon: Compass,
      commit: "Compromisso Técnico Contínuo",
      accentBg: "bg-[var(--bg-card)]",
      borderColor: "border-[var(--border-subtle)]/40",
      topOffset: "top-24 sm:top-28",
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
      borderColor: "border-[var(--border-subtle)]/50",
      topOffset: "top-28 sm:top-32",
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
      borderColor: "border-[var(--border-subtle)]/60",
      topOffset: "top-32 sm:top-36",
      zIndex: "z-30",
      details: OFFICE_INFO.pillars.values,
    },
  ];

  return (
    <section id="sobre" className="py-20 sm:py-28 bg-[var(--bg-secondary)]/40 editorial-border-b overflow-hidden">
      {/* Cabeçalho da Seção */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="bullet-indicator text-[var(--accent)] dark:text-emerald-400" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--border-subtle)]">
                01 / Tradição & Solidez
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[var(--text-main)]">
              Sobre o Escritório
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-md leading-relaxed">
            Mais de 8 anos combinando rigor dogmático, visão de negócios e agilidade processual na defesa dos interesses de empresas e indivíduos.
          </p>
        </div>
      </div>

      {/* A- CARDS COM SOBREPOSIÇÃO (STACKING CARDS) EM LARGURA TOTAL */}
      <div className="w-full px-3 sm:px-6 lg:px-8 max-w-[1440px] mx-auto space-y-8 sm:space-y-12">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              className={`sticky ${card.topOffset} ${card.zIndex} w-full transition-all duration-300`}
            >
              <div
                className={`w-full ${card.accentBg} p-6 sm:p-10 lg:p-14 rounded-3xl border ${card.borderColor} shadow-xl backdrop-blur-md transition-transform duration-300`}
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Coluna 1: Número, Tag e Ícone */}
                  <div className="lg:col-span-4 flex flex-col justify-between h-full border-b lg:border-b-0 lg:border-r border-[var(--border-subtle)]/25 pb-6 lg:pb-0 lg:pr-8">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--border-subtle)] font-bold">
                          {card.number}.
                        </span>
                        <div className="w-12 h-12 rounded-2xl border border-[var(--border-subtle)]/35 bg-[var(--bg-primary)] flex items-center justify-center text-[var(--accent)] dark:text-emerald-400 shadow-2xs">
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>
                      <span className="font-heading uppercase text-xs tracking-widest text-[var(--border-subtle)] block mb-2">
                        {card.tag}
                      </span>
                      <h3 className="font-heading text-2xl sm:text-3xl uppercase tracking-wide text-[var(--text-main)] leading-snug">
                        {card.title}
                      </h3>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[var(--border-subtle)]/20 hidden lg:block">
                      <span className="font-heading uppercase text-[0.6875rem] tracking-wider text-[var(--border-subtle)]">
                        {card.commit}
                      </span>
                    </div>
                  </div>

                  {/* Coluna 2: Descrição e Destaques Imersivos */}
                  <div className="lg:col-span-8 flex flex-col justify-between">
                    <p className="font-body text-base sm:text-lg lg:text-xl text-[var(--text-main)] leading-relaxed mb-8">
                      {card.description}
                    </p>

                    <div className="bg-[var(--bg-secondary)]/50 p-6 sm:p-8 rounded-2xl border border-[var(--border-subtle)]/20">
                      <span className="font-heading uppercase text-xs tracking-wider text-[var(--border-subtle)] block mb-4">
                        Pilares Estruturantes
                      </span>
                      <ul className="grid sm:grid-cols-2 gap-4 font-body text-sm text-[var(--text-muted)]">
                        {card.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-[var(--accent)] dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex items-center justify-between text-xs font-heading uppercase tracking-wider text-[var(--border-subtle)] pt-4 border-t border-[var(--border-subtle)]/20">
                      <span>Diogo & Mazeiro Advogados e Associados</span>
                      <span className="inline-flex items-center gap-1 text-[var(--accent)] dark:text-emerald-400 font-bold">
                        <span>Pilar {card.number} de 03</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* B- INDICADORES NUMÉRICOS EM LARGURA TOTAL (FULL WIDTH) */}
      <div className="w-full mt-24 sm:mt-32 border-y border-[var(--border-subtle)]/30 bg-[var(--bg-card)] shadow-xs">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-subtle)]/20">
            {OFFICE_INFO.metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0">
                <span className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--accent)] dark:text-emerald-400 font-bold mb-2 tracking-tight">
                  {m.value}
                </span>
                <span className="font-body text-xs sm:text-sm lg:text-base text-[var(--text-main)] max-w-[240px] leading-snug">
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
