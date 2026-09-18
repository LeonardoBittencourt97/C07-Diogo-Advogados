"use client";

import { useState } from "react";
import { EDUCATIONAL_ARTICLES, OFFICE_INFO } from "@/lib/data";
import { BookOpen, Clock, ShieldCheck, MessageSquare, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { ArticlesGeometrics } from "./GeometricBackgrounds";

export function EducationalArticles() {
  // Controle de expansão para a versão mobile
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="artigos" className="py-20 sm:py-28 bg-[var(--bg-primary)] editorial-border-b w-full relative overflow-hidden">
      <ArticlesGeometrics />
      <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-28 relative z-10">
        {/* Cabeçalho de Seção Editorial em Largura Ampla */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="bullet-indicator text-[var(--accent)] dark:text-emerald-400" />
              <span className="font-heading uppercase text-xs sm:text-sm tracking-widest text-[var(--border-subtle)] font-bold">
                04 / Informativo Jurídico • 100% OAB
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[var(--text-main)]">
              Direito Explicado
            </h2>
          </div>
          <div className="max-w-xl">
            <p className="font-body text-sm sm:text-base text-[var(--text-muted)] mb-3 leading-relaxed">
              Artigos analíticos de caráter puramente pedagógico e informativo, elaborados segundo os preceitos do Provimento 205/2021 do CFOAB.
            </p>
            <div className="flex items-center gap-2 text-xs text-[var(--border-subtle)] font-heading uppercase tracking-wider font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Sem finalidade mercantil ou captação de clientela</span>
            </div>
          </div>
        </div>

        {/* ===================== VERSÃO DESKTOP (3 Cards Completos + CTA WhatsApp Abaixo) ===================== */}
        <div className="hidden lg:block space-y-12">
          <div className="grid grid-cols-3 gap-8">
            {EDUCATIONAL_ARTICLES.map((art) => (
              <article
                key={art.id}
                className="bg-[var(--bg-card)] p-8 xl:p-10 rounded-3xl border border-[var(--border-subtle)]/35 flex flex-col justify-between hover:border-[var(--border-subtle)] transition-colors duration-300 shadow-sm"
              >
                <div>
                  {/* Meta de Leitura */}
                  <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]/20 mb-6">
                    <span className="font-heading text-xs uppercase tracking-widest text-[var(--accent)] dark:text-emerald-400 font-bold">
                      {art.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-body">
                      <Clock className="w-3.5 h-3.5 text-[var(--border-subtle)]" />
                      <span>{art.readTime}</span>
                    </div>
                  </div>

                  {/* Número e Título */}
                  <div className="flex items-start gap-3 mb-4">
                    <span className="font-heading text-xl text-[var(--border-subtle)] font-bold">
                      {art.number}.
                    </span>
                    <h3 className="font-heading text-xl xl:text-2xl uppercase tracking-wide text-[var(--text-main)] leading-snug">
                      {art.title}
                    </h3>
                  </div>

                  {/* Sumário */}
                  <p className="font-body text-sm text-[var(--text-main)]/90 italic font-medium mb-6 pb-4 border-b border-[var(--border-subtle)]/15 leading-relaxed">
                    "{art.summary}"
                  </p>

                  {/* Conteúdo Explicativo Completo */}
                  <div className="space-y-4 font-body text-sm text-[var(--text-muted)] leading-relaxed mb-8">
                    {art.content.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Disclaimer Ético CFOAB no Rodapé */}
                <div className="pt-6 border-t border-[var(--border-subtle)]/20">
                  <div className="flex items-start gap-2 text-[0.6875rem] text-[var(--border-subtle)] leading-relaxed font-body">
                    <BookOpen className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{art.oabDisclaimer}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA para o WhatsApp em baixo dos cards no modelo desktop */}
          <div className="w-full p-8 sm:p-12 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--border-subtle)] font-bold block">
                Atendimento Consultivo Personalizado
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wide text-[var(--text-main)]">
                Deseja analisar a viabilidade do seu caso concreto?
              </h3>
              <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-3xl leading-relaxed">
                Nossa equipe jurídica está à disposição para analisar suas dúvidas contratuais, trabalhistas ou de execução com sigilo e rigor técnico.
              </p>
            </div>

            <a
              href={OFFICE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] gap-3 py-4 px-8 text-sm shadow-md flex-shrink-0"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Falar com Advogado via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* ===================== VERSÃO MOBILE (3 Cards Menores com Saber Mais e Conversar com Advogado) ===================== */}
        <div className="lg:hidden space-y-4">
          {EDUCATIONAL_ARTICLES.map((art) => {
            const isExpanded = expandedId === art.id;

            return (
              <article
                key={art.id}
                className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border-subtle)]/35 p-5 shadow-xs transition-all duration-300"
              >
                {/* Meta Básica: Categoria e Tempo */}
                <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]/20 mb-3 text-xs">
                  <span className="font-heading uppercase tracking-wider text-[var(--accent)] dark:text-emerald-400 font-bold">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1 text-[var(--text-muted)] font-body">
                    <Clock className="w-3.5 h-3.5 text-[var(--border-subtle)]" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                {/* Título Básico */}
                <div className="flex items-start gap-2.5 mb-4">
                  <span className="font-heading text-base text-[var(--border-subtle)] font-bold">
                    {art.number}.
                  </span>
                  <h3 className="font-heading text-base uppercase tracking-wide text-[var(--text-main)] leading-snug">
                    {art.title}
                  </h3>
                </div>

                {/* Conteúdo Expandido (Quando aberto) */}
                {isExpanded && (
                  <div className="pt-3 border-t border-[var(--border-subtle)]/20 space-y-4 mb-4 animate-in fade-in duration-200">
                    <p className="font-body text-xs text-[var(--text-main)] italic font-medium leading-relaxed bg-[var(--bg-secondary)]/50 p-3 rounded-xl">
                      "{art.summary}"
                    </p>
                    <div className="space-y-3 font-body text-xs text-[var(--text-muted)] leading-relaxed">
                      {art.content.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="text-[0.625rem] text-[var(--border-subtle)] font-body flex items-start gap-1.5 pt-2 border-t border-[var(--border-subtle)]/15">
                      <BookOpen className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                      <span>{art.oabDisclaimer}</span>
                    </div>
                  </div>
                )}

                {/* Botões da Base do Card no Mobile */}
                {!isExpanded ? (
                  <div className="pt-3 border-t border-[var(--border-subtle)]/20">
                    {/* Apenas o Botão Saber Mais quando o card está recolhido */}
                    <button
                      type="button"
                      onClick={() => toggleExpand(art.id)}
                      className="w-full btn-pill py-2.5 px-4 text-xs border border-[var(--border-subtle)]/40 text-[var(--text-main)] hover:bg-[var(--bg-secondary)] gap-2 justify-center cursor-pointer font-heading uppercase font-semibold transition-colors"
                    >
                      <span>Saber Mais</span>
                      <ChevronDown className="w-4 h-4 text-[var(--border-subtle)]" />
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[var(--border-subtle)]/20">
                    {/* Botão Esquerdo: Voltar ao normal */}
                    <button
                      type="button"
                      onClick={() => toggleExpand(art.id)}
                      className="btn-pill py-2.5 px-3 text-xs border border-[var(--border-subtle)]/40 text-[var(--text-main)] hover:bg-[var(--bg-secondary)] gap-1.5 justify-center cursor-pointer font-heading uppercase font-semibold transition-colors"
                    >
                      <span>Voltar ao normal</span>
                      <ChevronUp className="w-3.5 h-3.5 text-[var(--border-subtle)]" />
                    </button>

                    {/* Botão Direito: Conversar com Advogado (apenas quando expandido) */}
                    <a
                      href={`${OFFICE_INFO.whatsappUrl}&text=Ol%C3%A1%2C%20li%20o%20artigo%20sobre%20${encodeURIComponent(art.title)}%20e%20gostaria%20de%20informa%C3%A7%C3%B5es`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill py-2.5 px-2 text-[0.6875rem] bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] gap-1.5 justify-center text-center font-heading uppercase font-semibold leading-tight shadow-xs"
                    >
                      <MessageSquare className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>Conversar com Advogado</span>
                    </a>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
