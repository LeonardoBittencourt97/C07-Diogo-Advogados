"use client";

import Image from "next/image";
import { OFFICE_INFO } from "@/lib/data";
import { MessageSquare, ShieldCheck, ChevronRight, Scale, Award } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] w-full flex flex-col justify-center pt-20 pb-8 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-24 overflow-hidden editorial-border-b"
    >
      {/* ========================================================================= */}
      {/* 1. IMAGEM DE FUNDO 100% DA TELA (MOBILE E DESKTOP DEDICADOS)               */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {/* Versão Mobile (1536x2752 vertical) */}
        <div className="relative w-full h-full block md:hidden">
          <Image
            src="/header_mobile.jpeg"
            alt="Diogo & Mazeiro Advogados e Associados"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Versão Desktop (2752x1536 horizontal) */}
        <div className="relative w-full h-full hidden md:block">
          <Image
            src="/header_desktop.jpeg"
            alt="Diogo & Mazeiro Advogados e Associados"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Sobreposição cinematográfica para garantir legibilidade editorial impecável */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/45 md:from-black/85 md:via-black/60 md:to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />
      </div>

      {/* ========================================================================= */}
      {/* 2. CONTEÚDO EDITORIAL DA HERO SOBREPOSTO À IMAGEM                          */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        {/* Cabeçalho de seção editorial (estilo suíço refinado no desktop e compacto no mobile) */}
        <div className="hidden sm:flex items-center justify-between py-1.5 border-b border-white/20 mb-6 lg:mb-10 text-white/90">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="bullet-indicator text-emerald-400" />
            <span className="font-heading uppercase text-xs tracking-widest text-white/80 font-bold">
              Curitiba / Paraná • Advocacia de Prestígio
            </span>
          </div>
          <span className="font-heading text-xs uppercase tracking-widest text-white/70">
            Fundado há +8 anos
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Coluna Principal de Conteúdo */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Badge de OAB e Solidez (Sem caixa alta agressiva no mobile) */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-white/25 bg-black/40 backdrop-blur-md text-[0.7rem] sm:text-xs font-heading normal-case sm:uppercase tracking-normal sm:tracking-wider text-white w-fit mb-2.5 sm:mb-5 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
              <span>{OFFICE_INFO.oabList}</span>
            </div>

            {/* Título Principal Readequado (Sem caixa alta, proporcional e perfeitamente ajustado no mobile) */}
            <h1 className="font-heading normal-case text-2xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight sm:leading-[1.04] tracking-tight text-white mb-2.5 sm:mb-5 drop-shadow-md font-semibold">
              Soluções Jurídicas{" "}
              <span className="text-emerald-400">Estratégicas</span>{" "}
              com Segurança, Rigor Técnico e Transparência.
            </h1>

            {/* Subtítulo Editorial Readequado para ocupar poucas linhas no mobile */}
            <p className="font-body text-xs sm:text-base lg:text-xl text-gray-200 max-w-2xl leading-relaxed mb-4 sm:mb-8 font-normal drop-shadow-sm">
              Mais de 8 anos de solidez em Curitiba e atuação nacional especializada no contencioso e consultivo empresarial, trabalhista e cível de alto impacto.
            </p>

            {/* Ações de Conversão: Ambos os botões com visibilidade imediata garantida no mobile */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-6 pt-1 w-full max-w-lg">
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill normal-case sm:uppercase bg-[#143525] hover:bg-[#0d2319] text-white border border-emerald-500/50 gap-2 py-3 sm:py-4 px-4 sm:px-8 text-xs sm:text-base font-medium tracking-normal sm:tracking-wider shadow-xl group transition-all text-center justify-center flex items-center"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span>Falar com Advogado via WhatsApp</span>
              </a>

              <a
                href="#sobre"
                className="btn-pill normal-case sm:uppercase border border-white/35 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white gap-2 py-2.5 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm font-medium tracking-normal sm:tracking-wider group transition-all text-center justify-center flex items-center"
              >
                <span>Conhecer o Escritório</span>
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Coluna Lateral Editorial com Métricas de Solidez (Exibida no desktop ao lado do texto; oculta no mobile para manter os botões 100% visíveis na primeira dobra) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col lg:border-l border-white/20 lg:pl-8">
            <div className="bg-black/55 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/20 mb-6 text-white">
                <span className="font-heading uppercase text-xs tracking-widest text-emerald-400 font-bold">
                  Pilares de Atuação
                </span>
                <Scale className="w-5 h-5 text-emerald-400" />
              </div>

              <div className="space-y-6 text-white">
                <div>
                  <div className="font-heading text-4xl sm:text-5xl text-emerald-400 font-bold mb-1 tracking-tight">
                    +8 Anos
                  </div>
                  <p className="font-body text-sm text-gray-300 leading-relaxed">
                    De experiência contínua orientando empresas, instituições financeiras e famílias em todo o Paraná.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/15">
                  <div className="font-heading text-3xl sm:text-4xl text-white font-semibold mb-1 tracking-tight">
                    100% Técnico
                  </div>
                  <p className="font-body text-sm text-gray-300 leading-relaxed">
                    Atendimento dinâmico com sócios dedicados, peças individualizadas e respeito rigoroso às normas do CFOAB.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/15">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-heading text-emerald-400 mb-2 font-bold">
                    <Award className="w-4 h-4" />
                    <span>Sede Própria em Curitiba</span>
                  </div>
                  <p className="font-body text-xs text-gray-300 leading-relaxed">
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

