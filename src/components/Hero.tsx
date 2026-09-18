"use client";

import { OFFICE_INFO } from "@/lib/data";
import { MessageSquare, ShieldCheck, ChevronRight, Scale, Award } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden editorial-border-b bg-[var(--bg-primary)]"
    >
      {/* Detalhe de fundo com linhas milimétricas sutis */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10">
        <div className="max-w-7xl mx-auto h-full border-x border-[var(--border-subtle)] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho de seção editorial no estilo suíço */}
        <div className="flex items-center justify-between py-2 border-b border-[var(--border-subtle)]/30 mb-8 sm:mb-12">
          <div className="flex items-center gap-3">
            <span className="bullet-indicator text-[var(--border-subtle)]" />
            <span className="font-heading uppercase text-xs tracking-widest text-[var(--border-subtle)]">
              Curitiba / Paraná • Advocacia de Prestígio
            </span>
          </div>
          <span className="font-heading text-xs uppercase tracking-widest text-[var(--border-subtle)]">
            Fundado há mais de 8 anos
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Coluna Principal de Texto */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Badge de OAB e Solidez */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)]/35 bg-[var(--bg-card)]/80 text-xs font-heading uppercase tracking-wider text-[var(--text-main)] w-fit mb-6 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--border-subtle)]" />
              <span>{OFFICE_INFO.oabList}</span>
            </div>

            {/* Título Principal Imponente em Oswald */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.02] tracking-tight text-[var(--text-main)] mb-6">
              Soluções Jurídicas{" "}
              <span className="text-[var(--border-subtle)] dark:text-[var(--border-subtle)]">Estratégicas</span>{" "}
              com Segurança, Rigor Técnico e Transparência.
            </h1>

            {/* Subtítulo Editorial Serifado */}
            <p className="font-body text-lg sm:text-xl text-[var(--text-muted)] max-w-2xl leading-relaxed mb-10 font-normal">
              Com mais de 8 anos de solidez em Curitiba e abrangência nacional, atuamos
              no contencioso e consultivo empresarial, trabalhista, cível e em execuções de alto impacto,
              assegurando defesa intransigente e previsibilidade aos nossos clientes.
            </p>

            {/* Ações de Conversão */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-2">
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] gap-3 py-4 px-8 text-base shadow-md group"
              >
                <MessageSquare className="w-5 h-5 text-white/90 group-hover:scale-110 transition-transform" />
                <span>Falar com Advogado via WhatsApp</span>
              </a>

              <a
                href="#sobre"
                className="btn-pill border border-[var(--border-subtle)]/40 text-[var(--text-main)] hover:bg-[var(--bg-card)] gap-2 py-4 px-6 text-sm group"
              >
                <span>Conhecer o Escritório</span>
                <ChevronRight className="w-4 h-4 text-[var(--border-subtle)] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Coluna Lateral Editorial com Métricas de Solidez */}
          <div className="lg:col-span-4 flex flex-col lg:border-l border-[var(--border-subtle)]/30 lg:pl-8">
            <div className="bg-[var(--bg-card)]/60 p-6 sm:p-8 rounded-2xl border border-[var(--border-subtle)]/30 backdrop-blur-xs">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]/20 mb-6">
                <span className="font-heading uppercase text-xs tracking-widest text-[var(--border-subtle)]">
                  Pilares de Atuação
                </span>
                <Scale className="w-5 h-5 text-[var(--border-subtle)]" />
              </div>

              <div className="space-y-6">
                <div>
                  <div className="font-heading text-4xl sm:text-5xl text-[var(--accent)] dark:text-emerald-400 font-bold mb-1">
                    +8 Anos
                  </div>
                  <p className="font-body text-sm text-[var(--text-muted)]">
                    De experiência contínua orientando empresas, instituições financeiras e famílias em todo o Paraná.
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)]/20">
                  <div className="font-heading text-3xl sm:text-4xl text-[var(--text-main)] font-semibold mb-1">
                    100% Técnico
                  </div>
                  <p className="font-body text-sm text-[var(--text-muted)]">
                    Atendimento dinâmico com sócios dedicados, peças individualizadas e respeito rigoroso às normas do CFOAB.
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)]/20">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-heading text-[var(--border-subtle)] mb-2">
                    <Award className="w-4 h-4" />
                    <span>Sede Própria em Curitiba</span>
                  </div>
                  <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed">
                    Edifício Empresarial no Capão Raso com estrutura completa para audiências híbridas e reuniões presenciais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
