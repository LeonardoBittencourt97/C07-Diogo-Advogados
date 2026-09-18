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

        <div className="max-w-3xl flex flex-col">
          {/* Título Principal Readequado (Sem caixa alta, proporcional e cinematográfico) */}
          <h1 className="font-heading normal-case text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-[1.08] tracking-tight text-white mb-3 sm:mb-5 drop-shadow-md font-semibold">
            Soluções Jurídicas{" "}
            <span className="text-emerald-400">Estratégicas</span>{" "}
            com Segurança, Rigor Técnico e Transparência.
          </h1>

          {/* Subtítulo Editorial Readequado para leitura clara e sofisticada */}
          <p className="font-body text-xs sm:text-base lg:text-lg text-gray-200 max-w-2xl leading-relaxed mb-4 sm:mb-8 font-normal drop-shadow-sm">
            Mais de 8 anos de solidez em Curitiba e atuação nacional especializada no contencioso e consultivo empresarial, trabalhista e cível de alto impacto.
          </p>

          {/* Ações de Conversão: Botões com tamanho moderado, escrita reduzida e visual limpo e refinado */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-1 w-full max-w-lg">
            <a
              href={OFFICE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill normal-case bg-[#143525] hover:bg-[#0d2319] text-white border border-emerald-500/50 gap-2 py-2.5 sm:py-3 px-4 sm:px-5 text-xs font-medium tracking-normal shadow-lg group transition-all text-center justify-center flex items-center"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-300 group-hover:scale-110 transition-transform flex-shrink-0" />
              <span>Falar com Advogado via WhatsApp</span>
            </a>

            <a
              href="#sobre"
              className="btn-pill normal-case border border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white gap-1.5 py-2.5 sm:py-3 px-4 sm:px-5 text-xs font-medium tracking-normal group transition-all text-center justify-center flex items-center"
            >
              <span>Conhecer o Escritório</span>
              <ChevronRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

