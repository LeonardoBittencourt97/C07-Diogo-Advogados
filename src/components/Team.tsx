"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { LAWYERS, OFFICE_INFO } from "@/lib/data";
import { ShieldCheck, Award, MessageSquare, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TeamGeometrics } from "./GeometricBackgrounds";

export function Team() {
  const [lucas, bruno, ariane] = LAWYERS;
  const sectionRef = useRef<HTMLDivElement>(null);
  const lucasRef = useRef<HTMLElement>(null);
  const brunoRef = useRef<HTMLElement>(null);
  const arianeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animação de Scroll Reveal para o Dr. Lucas (Entrada Lateral)
      if (lucasRef.current) {
        const photo = lucasRef.current.querySelector(".team-photo-lucas");
        const content = lucasRef.current.querySelector(".team-content-lucas");

        if (photo && content) {
          gsap.fromTo(
            photo,
            { x: -50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.85,
              ease: "power2.out",
              scrollTrigger: {
                trigger: lucasRef.current,
                start: "top 78%",
              },
            }
          );
          gsap.fromTo(
            content,
            { x: 50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.85,
              ease: "power2.out",
              scrollTrigger: {
                trigger: lucasRef.current,
                start: "top 78%",
              },
            }
          );
        }
      }

      // Animação de Scroll Reveal para o Dr. Bruno (Centro com Expansão Lateral)
      if (brunoRef.current) {
        const photo = brunoRef.current.querySelector(".team-photo-bruno");
        const left = brunoRef.current.querySelector(".team-left-bruno");
        const right = brunoRef.current.querySelector(".team-right-bruno");

        if (photo && left && right) {
          gsap.fromTo(
            photo,
            { scale: 0.92, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.85,
              ease: "power2.out",
              scrollTrigger: {
                trigger: brunoRef.current,
                start: "top 78%",
              },
            }
          );
          gsap.fromTo(
            left,
            { x: -40, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.85,
              ease: "power2.out",
              scrollTrigger: {
                trigger: brunoRef.current,
                start: "top 78%",
              },
            }
          );
          gsap.fromTo(
            right,
            { x: 40, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.85,
              ease: "power2.out",
              scrollTrigger: {
                trigger: brunoRef.current,
                start: "top 78%",
              },
            }
          );
        }
      }

      // Animação de Scroll Reveal para a Dra. Ariane (Entrada Invertida)
      if (arianeRef.current) {
        const photo = arianeRef.current.querySelector(".team-photo-ariane");
        const content = arianeRef.current.querySelector(".team-content-ariane");

        if (photo && content) {
          gsap.fromTo(
            content,
            { x: -50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.85,
              ease: "power2.out",
              scrollTrigger: {
                trigger: arianeRef.current,
                start: "top 78%",
              },
            }
          );
          gsap.fromTo(
            photo,
            { x: 50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.85,
              ease: "power2.out",
              scrollTrigger: {
                trigger: arianeRef.current,
                start: "top 78%",
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
      className="py-14 sm:py-20 bg-[var(--bg-primary)] editorial-border-b overflow-hidden w-full relative isolate"
    >
      <TeamGeometrics />
      <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-24 relative z-10">
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

        {/* ===================== APRESENTAÇÃO DESKTOP (Horizontal & Diferenciada, em Tamanho Contido) ===================== */}
        <div className="hidden lg:flex flex-col space-y-10 xl:space-y-12">
          {/* 1. DR. LUCAS DIOGO: Foto na lateral ESQUERDA, conteúdo no lado DIREITO */}
          <article
            ref={lucasRef}
            className="w-full bg-[var(--bg-card)] rounded-2xl border border-[var(--border-subtle)]/40 p-6 xl:p-8 shadow-sm hover:border-[var(--border-subtle)] transition-colors duration-300"
          >
            <div className="grid grid-cols-12 gap-8 xl:gap-10 items-center w-full">
              {/* Foto na Esquerda (4 colunas) */}
              <div className="col-span-4 team-photo-lucas">
                <div className="relative w-full aspect-[4/5] max-w-[340px] rounded-xl overflow-hidden border border-[var(--border-subtle)]/30 shadow-lg group mx-auto">
                  <Image
                    src={lucas.photo}
                    alt={lucas.name}
                    fill
                    className="object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                    sizes="340px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-[0.6875rem] font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lucas.oab}</span>
                  </div>
                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <span className="text-[0.6875rem] uppercase font-heading tracking-wider text-emerald-400 block mb-0.5">
                      {lucas.role}
                    </span>
                    <span className="font-heading text-xl normal-case font-semibold">
                      {lucas.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Conteúdo na Direita (8 colunas) */}
              <div className="col-span-8 flex flex-col justify-between space-y-4 team-content-lucas">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]/25 mb-4">
                    <span className="font-heading normal-case text-xs tracking-wide text-[var(--border-subtle)] font-bold">
                      Sócio Fundador • Advocacia Estratégica
                    </span>
                    <div className="inline-flex items-center gap-1.5 text-xs font-heading normal-case text-[var(--accent)] dark:text-emerald-400 font-bold">
                      <Award className="w-3.5 h-3.5" />
                      <span>{lucas.specialty}</span>
                    </div>
                  </div>

                  <h3 className="font-heading text-2xl xl:text-3xl normal-case font-semibold tracking-normal text-[var(--text-main)] mb-2.5">
                    {lucas.name}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                    {lucas.bio}
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-secondary)]/60 border border-[var(--border-subtle)]/20">
                  <span className="font-heading normal-case text-[0.6875rem] text-[var(--border-subtle)] block mb-2 font-bold">
                    Áreas de Atuação Primordial
                  </span>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {lucas.areas.map((area, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[0.6875rem] font-body bg-[var(--bg-card)] text-[var(--text-main)] border border-[var(--border-subtle)]/25"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`${OFFICE_INFO.whatsappUrl}&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20Dr.%20Lucas%20Diogo`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-heading normal-case text-[var(--accent)] dark:text-emerald-400 font-bold hover:underline"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Solicitar Consulta Direta com Dr. Lucas Diogo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* 2. DR. BRUNO ALMEIDA: Foto no MEIO, conteúdo distribuído à ESQUERDA e DIREITA */}
          <article
            ref={brunoRef}
            className="w-full bg-[var(--bg-card)] rounded-2xl border border-[var(--border-subtle)]/40 p-6 xl:p-8 shadow-sm hover:border-[var(--border-subtle)] transition-colors duration-300"
          >
            <div className="text-center pb-4 mb-5 border-b border-[var(--border-subtle)]/20">
              <span className="font-heading normal-case text-xs tracking-wide text-[var(--border-subtle)] block mb-1 font-bold">
                Sócio Fundador • Direito do Trabalho Corporativo
              </span>
              <h3 className="font-heading text-2xl xl:text-3xl normal-case font-semibold text-[var(--text-main)]">
                {bruno.name}
              </h3>
              <div className="inline-flex items-center gap-2 text-xs normal-case font-heading text-[var(--accent)] dark:text-emerald-400 mt-1 font-bold">
                <Award className="w-3.5 h-3.5" />
                <span>{bruno.specialty}</span>
                <span>•</span>
                <span>{bruno.oab}</span>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6 xl:gap-8 items-center w-full">
              {/* Lado Esquerdo (4 colunas): Biografia */}
              <div className="col-span-4 space-y-3 team-left-bruno">
                <span className="font-heading normal-case text-[0.6875rem] text-[var(--border-subtle)] block font-bold">
                  Experiência Corporativa & Contenciosa
                </span>
                <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {bruno.bio}
                </p>
                <div className="pt-2.5 border-t border-[var(--border-subtle)]/20 text-[0.6875rem] font-body text-[var(--border-subtle)] italic">
                  Especialista em contencioso trabalhista patronal e reparações civis.
                </div>
              </div>

              {/* Centro: Foto no MEIO (4 colunas) */}
              <div className="col-span-4 team-photo-bruno">
                <div className="relative w-full aspect-[4/5] max-w-[280px] rounded-xl overflow-hidden border border-[var(--border-subtle)]/30 shadow-lg group mx-auto">
                  <Image
                    src={bruno.photo}
                    alt={bruno.name}
                    fill
                    className="object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                    sizes="280px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 inset-x-3 text-center text-white">
                    <span className="text-[0.6875rem] uppercase font-heading tracking-wider text-emerald-400 block mb-0.5">
                      {bruno.role}
                    </span>
                    <span className="font-heading text-lg normal-case font-semibold">
                      {bruno.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Lado Direito (4 colunas): Áreas e CTA */}
              <div className="col-span-4 space-y-4 team-right-bruno">
                <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-secondary)]/60 border border-[var(--border-subtle)]/20">
                  <span className="font-heading normal-case text-[0.6875rem] text-[var(--border-subtle)] block mb-2 font-bold">
                    Áreas de Atuação Prática
                  </span>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {bruno.areas.map((area, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[0.6875rem] font-body bg-[var(--bg-card)] text-[var(--text-main)] border border-[var(--border-subtle)]/25"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`${OFFICE_INFO.whatsappUrl}&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20Dr.%20Bruno%20Mazeiro`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-heading normal-case text-[var(--accent)] dark:text-emerald-400 font-bold hover:underline"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Falar com Dr. Bruno Mazeiro</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* 3. DRA. ARIANE CRISTINA: Conteúdo na lateral ESQUERDA, Foto na lateral DIREITA */}
          <article
            ref={arianeRef}
            className="w-full bg-[var(--bg-card)] rounded-2xl border border-[var(--border-subtle)]/40 p-6 xl:p-8 shadow-sm hover:border-[var(--border-subtle)] transition-colors duration-300"
          >
            <div className="grid grid-cols-12 gap-8 xl:gap-10 items-center w-full">
              {/* Conteúdo na Esquerda (8 colunas) */}
              <div className="col-span-8 flex flex-col justify-between space-y-4 team-content-ariane">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]/25 mb-4">
                    <span className="font-heading normal-case text-xs tracking-wide text-[var(--border-subtle)] font-bold">
                      Advogada Associada • Recuperação Estratégica
                    </span>
                    <div className="inline-flex items-center gap-1.5 text-xs font-heading normal-case text-[var(--accent)] dark:text-emerald-400 font-bold">
                      <Award className="w-3.5 h-3.5" />
                      <span>{ariane.specialty}</span>
                    </div>
                  </div>

                  <h3 className="font-heading text-2xl xl:text-3xl normal-case font-semibold tracking-normal text-[var(--text-main)] mb-2.5">
                    {ariane.name}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                    {ariane.bio}
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-[var(--bg-secondary)]/60 border border-[var(--border-subtle)]/20">
                  <span className="font-heading normal-case text-[0.6875rem] text-[var(--border-subtle)] block mb-2 font-bold">
                    Expertise em Execuções e Ativos
                  </span>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {ariane.areas.map((area, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[0.6875rem] font-body bg-[var(--bg-card)] text-[var(--text-main)] border border-[var(--border-subtle)]/25"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`${OFFICE_INFO.whatsappUrl}&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Dra.%20Ariane%20Savi`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-heading normal-case text-[var(--accent)] dark:text-emerald-400 font-bold hover:underline"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Solicitar Consulta com Dra. Ariane Savi</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Foto na Direita (4 colunas) */}
              <div className="col-span-4 team-photo-ariane">
                <div className="relative w-full aspect-[4/5] max-w-[340px] rounded-xl overflow-hidden border border-[var(--border-subtle)]/30 shadow-lg group mx-auto">
                  <Image
                    src={ariane.photo}
                    alt={ariane.name}
                    fill
                    className="object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                    sizes="340px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3.5 right-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-[0.6875rem] font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{ariane.oab}</span>
                  </div>
                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <span className="text-[0.6875rem] uppercase font-heading tracking-wider text-emerald-400 block mb-0.5">
                      {ariane.role}
                    </span>
                    <span className="font-heading text-xl normal-case font-semibold">
                      {ariane.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* ===================== APRESENTAÇÃO MOBILE (Vertical Limpa) ===================== */}
        <div className="lg:hidden space-y-6">
          {LAWYERS.map((lawyer) => (
            <article
              key={lawyer.id}
              className="bg-[var(--bg-card)] rounded-2xl overflow-hidden border border-[var(--border-subtle)]/30 flex flex-col shadow-xs"
            >
              <div className="relative w-full aspect-[4/5] bg-stone-900 overflow-hidden">
                <Image
                  src={lawyer.photo}
                  alt={lawyer.name}
                  fill
                  className="object-cover object-top filter contrast-[1.03]"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[0.6875rem] font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{lawyer.oab}</span>
                </div>

                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <span className="text-[0.6875rem] uppercase tracking-wider font-heading text-emerald-400 block mb-0.5">
                    {lawyer.role}
                  </span>
                  <h3 className="font-heading text-xl normal-case font-semibold leading-snug">
                    {lawyer.name}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
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
                    Áreas de Foco Principal
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
                    className="btn-pill normal-case w-full bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] gap-2 py-2 px-3 text-xs text-center justify-center shadow-xs flex items-center"
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
