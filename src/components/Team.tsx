"use client";

import Image from "next/image";
import { LAWYERS, OFFICE_INFO } from "@/lib/data";
import { ShieldCheck, Award, MessageSquare, ArrowRight } from "lucide-react";

export function Team() {
  const [lucas, bruno, ariane] = LAWYERS;

  return (
    <section id="equipe" className="py-20 sm:py-28 bg-[var(--bg-primary)] editorial-border-b overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho de Seção Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="bullet-indicator text-[var(--accent)] dark:text-emerald-400" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--border-subtle)]">
                02 / Corpo Jurídico
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[var(--text-main)]">
              Sócios e Associados
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-md leading-relaxed">
            Advogados experientes com atuação contenciosa e consultiva de excelência, dedicados à proteção patrimonial e institucional de nossos clientes.
          </p>
        </div>

        {/* ===================== APRESENTAÇÃO DESKTOP (Horizontal & Diferenciada) ===================== */}
        <div className="hidden lg:flex flex-col space-y-20">
          {/* 1. DR. LUCAS DIOGO: Foto na lateral ESQUERDA, conteúdo no lado DIREITO */}
          <article className="bg-[var(--bg-card)] rounded-3xl border border-[var(--border-subtle)]/40 p-10 xl:p-12 shadow-md hover:border-[var(--border-subtle)] transition-all duration-300">
            <div className="grid grid-cols-12 gap-10 items-center">
              {/* Foto na Esquerda (5 colunas) */}
              <div className="col-span-5">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--border-subtle)]/30 shadow-lg group">
                  <Image
                    src={lucas.photo}
                    alt={lucas.name}
                    fill
                    className="object-cover object-top filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1280px) 400px, 460px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white text-xs font-heading uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lucas.oab}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs uppercase font-heading tracking-widest text-emerald-400 block mb-1">
                      {lucas.role}
                    </span>
                    <span className="font-heading text-xl uppercase tracking-wide">
                      {lucas.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Conteúdo na Direita (7 colunas) */}
              <div className="col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]/25 mb-4">
                    <span className="font-heading uppercase text-xs tracking-widest text-[var(--border-subtle)]">
                      Perfil Profissional • Sócio Fundador
                    </span>
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-heading text-[var(--accent)] dark:text-emerald-400">
                      <Award className="w-4 h-4" />
                      <span>{lucas.specialty}</span>
                    </div>
                  </div>

                  <h3 className="font-heading text-3xl xl:text-4xl uppercase tracking-wide text-[var(--text-main)] mb-4">
                    {lucas.name}
                  </h3>

                  <p className="font-body text-base xl:text-lg text-[var(--text-muted)] leading-relaxed mb-6">
                    {lucas.bio}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)]/20">
                  <span className="font-heading uppercase text-xs tracking-wider text-[var(--border-subtle)] block mb-3">
                    Áreas de Atuação Primordial
                  </span>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {lucas.areas.map((area, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg text-xs font-body bg-[var(--bg-card)] text-[var(--text-main)] border border-[var(--border-subtle)]/25"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`${OFFICE_INFO.whatsappUrl}&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20Dr.%20Lucas%20Diogo`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-heading uppercase tracking-wider text-[var(--accent)] dark:text-emerald-400 font-bold hover:underline"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Solicitar Consulta Direta com Dr. Lucas Diogo</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* 2. DR. BRUNO ALMEIDA: Foto no MEIO da tela, conteúdo distribuído à ESQUERDA e à DIREITA */}
          <article className="bg-[var(--bg-card)] rounded-3xl border border-[var(--border-subtle)]/40 p-10 xl:p-12 shadow-md hover:border-[var(--border-subtle)] transition-all duration-300">
            <div className="text-center pb-8 mb-8 border-b border-[var(--border-subtle)]/25">
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--border-subtle)] block mb-1">
                Perfil Profissional • Sócio Fundador
              </span>
              <h3 className="font-heading text-3xl xl:text-4xl uppercase tracking-wide text-[var(--text-main)]">
                {bruno.name}
              </h3>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-heading text-[var(--accent)] dark:text-emerald-400 mt-2">
                <Award className="w-4 h-4" />
                <span>{bruno.specialty}</span>
                <span>•</span>
                <span>{bruno.oab}</span>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-8 items-center">
              {/* Lado Esquerdo (4 colunas): Biografia e Histórico */}
              <div className="col-span-4 space-y-4">
                <span className="font-heading uppercase text-xs tracking-wider text-[var(--border-subtle)] block">
                  Experiência Corporativa
                </span>
                <p className="font-body text-sm xl:text-base text-[var(--text-muted)] leading-relaxed">
                  {bruno.bio}
                </p>
                <div className="pt-4 border-t border-[var(--border-subtle)]/20 text-xs font-body text-[var(--border-subtle)] italic">
                  Especialista de referência em contencioso trabalhista patronal de grande vulto e reparações civis.
                </div>
              </div>

              {/* Centro: Foto Vertical no MEIO (4 colunas) */}
              <div className="col-span-4">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--border-subtle)]/30 shadow-xl group mx-auto">
                  <Image
                    src={bruno.photo}
                    alt={bruno.name}
                    fill
                    className="object-cover object-top filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1280px) 350px, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 inset-x-4 text-center text-white">
                    <span className="text-xs uppercase font-heading tracking-widest text-emerald-400 block mb-0.5">
                      {bruno.role}
                    </span>
                    <span className="font-heading text-lg uppercase tracking-wide">
                      {bruno.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Lado Direito (4 colunas): Áreas de Especialidade e CTA */}
              <div className="col-span-4 space-y-6">
                <div className="p-6 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)]/20">
                  <span className="font-heading uppercase text-xs tracking-wider text-[var(--border-subtle)] block mb-3">
                    Áreas de Atuação Prática
                  </span>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {bruno.areas.map((area, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg text-xs font-body bg-[var(--bg-card)] text-[var(--text-main)] border border-[var(--border-subtle)]/25"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`${OFFICE_INFO.whatsappUrl}&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20Dr.%20Bruno%20Mazeiro`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-heading uppercase tracking-wider text-[var(--accent)] dark:text-emerald-400 font-bold hover:underline"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Falar com Dr. Bruno Mazeiro</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* 3. DRA. ARIANE CRISTINA: Conteúdo no lado ESQUERDO, Foto na lateral DIREITA */}
          <article className="bg-[var(--bg-card)] rounded-3xl border border-[var(--border-subtle)]/40 p-10 xl:p-12 shadow-md hover:border-[var(--border-subtle)] transition-all duration-300">
            <div className="grid grid-cols-12 gap-10 items-center">
              {/* Conteúdo na Esquerda (7 colunas) */}
              <div className="col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]/25 mb-4">
                    <span className="font-heading uppercase text-xs tracking-widest text-[var(--border-subtle)]">
                      Perfil Profissional • Advogada Associada
                    </span>
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-heading text-[var(--accent)] dark:text-emerald-400">
                      <Award className="w-4 h-4" />
                      <span>{ariane.specialty}</span>
                    </div>
                  </div>

                  <h3 className="font-heading text-3xl xl:text-4xl uppercase tracking-wide text-[var(--text-main)] mb-4">
                    {ariane.name}
                  </h3>

                  <p className="font-body text-base xl:text-lg text-[var(--text-muted)] leading-relaxed mb-6">
                    {ariane.bio}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)]/20">
                  <span className="font-heading uppercase text-xs tracking-wider text-[var(--border-subtle)] block mb-3">
                    Expertise em Execuções e Ativos
                  </span>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {ariane.areas.map((area, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg text-xs font-body bg-[var(--bg-card)] text-[var(--text-main)] border border-[var(--border-subtle)]/25"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`${OFFICE_INFO.whatsappUrl}&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Dra.%20Ariane%20Savi`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-heading uppercase tracking-wider text-[var(--accent)] dark:text-emerald-400 font-bold hover:underline"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Solicitar Consulta com Dra. Ariane Savi</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Foto na Direita (5 colunas) */}
              <div className="col-span-5">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--border-subtle)]/30 shadow-lg group">
                  <Image
                    src={ariane.photo}
                    alt={ariane.name}
                    fill
                    className="object-cover object-top filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1280px) 400px, 460px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 right-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white text-xs font-heading uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{ariane.oab}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs uppercase font-heading tracking-widest text-emerald-400 block mb-1">
                      {ariane.role}
                    </span>
                    <span className="font-heading text-xl uppercase tracking-wide">
                      {ariane.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* ===================== APRESENTAÇÃO MOBILE (Vertical Limpa) ===================== */}
        <div className="lg:hidden space-y-8">
          {LAWYERS.map((lawyer) => (
            <article
              key={lawyer.id}
              className="bg-[var(--bg-card)] rounded-2xl overflow-hidden border border-[var(--border-subtle)]/30 flex flex-col shadow-sm"
            >
              <div className="relative w-full aspect-[4/5] bg-stone-900 overflow-hidden">
                <Image
                  src={lawyer.photo}
                  alt={lawyer.name}
                  fill
                  className="object-cover object-top filter contrast-[1.05]"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-heading uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{lawyer.oab}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase tracking-widest font-heading text-emerald-400 block mb-1">
                    {lawyer.role}
                  </span>
                  <h3 className="font-heading text-xl uppercase tracking-wide leading-snug">
                    {lawyer.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-heading text-[var(--accent)] dark:text-emerald-400 mb-4 pb-3 border-b border-[var(--border-subtle)]/20">
                    <Award className="w-4 h-4 flex-shrink-0" />
                    <span>{lawyer.specialty}</span>
                  </div>

                  <p className="font-body text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                    {lawyer.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)]/20">
                  <span className="text-[0.6875rem] uppercase tracking-wider font-heading text-[var(--border-subtle)] block mb-2.5">
                    Áreas de Foco Principal
                  </span>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {lawyer.areas.map((area, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-body bg-[var(--bg-secondary)] text-[var(--text-main)] border border-[var(--border-subtle)]/20"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`${OFFICE_INFO.whatsappUrl}&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20${encodeURIComponent(lawyer.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill w-full bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] gap-2 py-2.5 text-xs text-center justify-center"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Falar com {lawyer.name.split(" ")[1]}</span>
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
