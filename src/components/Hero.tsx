"use client";

import Image from "next/image";
import { OFFICE_INFO } from "@/lib/data";
import { MessageSquare, ShieldCheck, ChevronRight, Scale, Award } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] w-full flex flex-col justify-between pt-24 pb-8 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-12 overflow-hidden editorial-border-b"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between">
        {/* 1) PARTE SUPERIOR: Título posicionado logo abaixo do menu e ACIMA do martelo */}
        <div className="pt-2 sm:pt-4 lg:pt-2 max-w-3xl">
          <h1 className="font-heading normal-case text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-tight sm:leading-[1.12] tracking-tight text-white drop-shadow-md font-semibold max-w-2xl lg:max-w-3xl">
            Soluções Jurídicas{" "}
            <span className="text-emerald-400">Estratégicas</span>{" "}
            com Segurança, Rigor Técnico e Transparência.
          </h1>
        </div>

        {/* 2) PARTE INFERIOR: Subtítulo, Botões em uma linha só e Linha institucional abaixo */}
        <div className="pb-2 sm:pb-4 lg:pb-4 max-w-3xl mt-6 sm:mt-8 lg:mt-auto">
          {/* Subtítulo Editorial */}
          <p className="font-body text-xs sm:text-base lg:text-lg text-gray-200 max-w-2xl leading-relaxed mb-4 sm:mb-6 font-normal drop-shadow-sm">
            Mais de 8 anos de solidez em Curitiba e atuação nacional especializada no contencioso e consultivo empresarial, trabalhista e cível de alto impacto.
          </p>

          {/* Ações de Conversão: Dois botões em uma única linha no desktop, sem quebra interna */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 w-auto max-w-none">
            <a
              href={OFFICE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill normal-case bg-[#143525] hover:bg-[#0d2319] text-white border border-emerald-500/50 gap-2.5 py-2.5 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm font-semibold tracking-normal shadow-lg group transition-all text-center justify-center flex items-center whitespace-nowrap flex-shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-300 group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="whitespace-nowrap">Falar com Advogado via WhatsApp</span>
            </a>

            <a
              href="#sobre"
              className="btn-pill normal-case border border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white gap-2 py-2.5 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm font-semibold tracking-normal group transition-all text-center justify-center flex items-center whitespace-nowrap flex-shrink-0"
            >
              <span className="whitespace-nowrap">Conhecer o Escritório</span>
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* 3) LINHA EDITORIAL DEBAIXO DOS DOIS BOTÕES (Apenas no Desktop) */}
          <div className="hidden lg:flex items-center justify-between py-2.5 border-t border-white/20 mt-6 lg:mt-8 text-white/80 max-w-2xl">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="bullet-indicator text-emerald-400" />
              <span className="font-heading uppercase text-xs tracking-widest text-white/80 font-bold">
                Curitiba / Paraná • Advocacia de Prestígio
              </span>
            </div>
            <span className="font-heading text-xs uppercase tracking-widest text-white/70 font-medium">
              Fundado há +8 anos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

