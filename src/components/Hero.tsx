"use client";

import Image from "next/image";
import { OFFICE_INFO } from "@/lib/data";
import { MessageSquare, ShieldCheck, ChevronRight, Scale, Award } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full flex flex-col justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden editorial-border-b"
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
        {/* Cabeçalho de seção editorial no estilo suíço */}
        <div className="flex items-center justify-between py-2 border-b border-white/20 mb-8 sm:mb-12 text-white/90">
          <div className="flex items-center gap-3">
            <span className="bullet-indicator text-emerald-400" />
            <span className="font-heading uppercase text-xs tracking-widest text-white/80 font-bold">
              Curitiba / Paraná • Advocacia de Prestígio
            </span>
          </div>
          <span className="font-heading text-xs uppercase tracking-widest text-white/70">
            Fundado há mais de 8 anos
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Coluna Principal de Texto */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Badge de OAB e Solidez */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/25 bg-black/40 backdrop-blur-md text-xs font-heading uppercase tracking-wider text-white w-fit mb-6 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{OFFICE_INFO.oabList}</span>
            </div>

            {/* Título Principal Imponente em Oswald */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.02] tracking-tight text-white mb-6 drop-shadow-md">
              Soluções Jurídicas{" "}
              <span className="text-emerald-400">Estratégicas</span>{" "}
              com Segurança, Rigor Técnico e Transparência.
            </h1>

            {/* Subtítulo Editorial Serifado */}
            <p className="font-body text-lg sm:text-xl text-gray-200 max-w-2xl leading-relaxed mb-10 font-normal drop-shadow-sm">
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
                className="btn-pill bg-[#143525] hover:bg-[#0d2319] text-white border border-emerald-600/40 gap-3 py-4 px-8 text-base shadow-xl group transition-all"
              >
                <MessageSquare className="w-5 h-5 text-white/90 group-hover:scale-110 transition-transform" />
                <span>Falar com Advogado via WhatsApp</span>
              </a>

              <a
                href="#sobre"
                className="btn-pill border border-white/35 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white gap-2 py-4 px-6 text-sm group transition-all"
              >
                <span>Conhecer o Escritório</span>
                <ChevronRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Coluna Lateral Editorial com Métricas de Solidez */}
          <div className="lg:col-span-4 flex flex-col lg:border-l border-white/20 lg:pl-8">
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

