"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { ThemeToggle } from "./ThemeToggle";
import { OFFICE_INFO } from "@/lib/data";
import { Menu, X, MessageSquare, ChevronDown, ArrowUpRight, ShieldCheck } from "lucide-react";

export function Navbar() {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Estados dos submenus dropdown no desktop
  const [officeDropdownOpen, setOfficeDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);

  // Estados dos submenus no mobile (Accordions)
  const [mobileOfficeOpen, setMobileOfficeOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  const officeRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);

  // Fecha dropdowns ao clicar fora no desktop
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (officeRef.current && !officeRef.current.contains(event.target as Node)) {
        setOfficeDropdownOpen(false);
      }
      if (areasRef.current && !areasRef.current.contains(event.target as Node)) {
        setAreasDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Background ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trava scroll do body com menu mobile aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const currentLogo = !isScrolled
    ? "/logo_nova_escrita_branca.png"
    : theme === "dark"
    ? "/logo_nova_escrita_branca.png"
    : "/logo_nova_para_menu.png";

  const drawerLogo = theme === "dark" ? "/logo_nova_escrita_branca.png" : "/logo_nova_para_menu.png";

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileOfficeOpen(false);
    setMobileAreasOpen(false);
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. LOGO MOBILE INDEPENDENTE                                               */}
      {/* ========================================================================= */}
      <div className="lg:hidden fixed top-2.5 left-2.5 sm:left-6 z-50 pointer-events-none">
        <Link href="#inicio" className="flex items-center group focus:outline-none pointer-events-auto">
          <div className="relative h-10 sm:h-13 w-36 sm:w-44 transition-transform duration-300 group-hover:scale-105">
            <Image
              src={currentLogo}
              alt="Diogo & Mazeiro Advogados e Associados"
              fill
              priority
              className="object-contain object-left drop-shadow-md"
              sizes="144px"
            />
          </div>
        </Link>
      </div>

      {/* ========================================================================= */}
      {/* 2. MENU DE NAVEGAÇÃO                                                      */}
      {/* ========================================================================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--bg-primary)]/95 backdrop-blur-md shadow-xs editorial-border-b py-2 sm:py-2.5"
            : "bg-transparent py-2.5 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
          <div className="relative min-h-[2.75rem] sm:min-h-[3.75rem] flex items-center justify-between gap-1.5 sm:gap-4">
            {/* Espaçador no mobile para manter botões à direita com folga garantida */}
            <div className="lg:hidden w-28 sm:w-36 flex-shrink-0 pointer-events-none" />

            {/* Logo no Desktop: Centralizada exatamente no meio entre a lateral esquerda e o começo do menu */}
            <div className="hidden lg:flex items-center justify-center relative flex-shrink-0 w-80 xl:w-96 2xl:w-[26rem] h-10 pointer-events-none">
              <Link
                href="#inicio"
                className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center group focus:outline-none pointer-events-auto"
              >
                <div className="relative h-20 lg:h-24 w-72 lg:w-84 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={currentLogo}
                    alt="Diogo & Mazeiro Advogados e Associados"
                    fill
                    priority
                    className="object-contain object-center drop-shadow-md"
                    sizes="336px"
                  />
                </div>
              </Link>
            </div>

            {/* Menu Desktop Enxuto com Submenus (Texto Branco sobre a Hero escura, volta ao normal no scroll) */}
            <nav
              className={`hidden lg:flex items-center gap-6 xl:gap-8 text-[0.8125rem] font-heading uppercase tracking-wider transition-colors duration-300 ${
                isScrolled ? "text-[var(--text-main)]/85" : "text-white/90"
              }`}
            >
              <a
                href="#inicio"
                className={`transition-colors editorial-link ${
                  isScrolled ? "hover:text-[var(--text-main)]" : "hover:text-white"
                }`}
              >
                Início
              </a>

              {/* Submenu: O Escritório */}
              <div
                ref={officeRef}
                className="relative"
                onMouseEnter={() => setOfficeDropdownOpen(true)}
                onMouseLeave={() => setOfficeDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setOfficeDropdownOpen(!officeDropdownOpen)}
                  className={`inline-flex items-center gap-1 transition-colors py-2 focus:outline-none cursor-pointer ${
                    isScrolled ? "hover:text-[var(--text-main)]" : "hover:text-white"
                  }`}
                  aria-expanded={officeDropdownOpen}
                >
                  <span className="editorial-link">O Escritório</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      officeDropdownOpen
                        ? isScrolled
                          ? "rotate-180 text-[var(--text-main)]"
                          : "rotate-180 text-white"
                        : isScrolled
                        ? "text-[var(--border-subtle)]"
                        : "text-white/70"
                    }`}
                  />
                </button>

                {officeDropdownOpen && (
                  <div className="absolute top-full left-0 w-52 bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 rounded-xl shadow-xl py-2 animate-in fade-in-50 slide-in-from-top-2 duration-150 z-50">
                    <a
                      href="#sobre"
                      onClick={() => setOfficeDropdownOpen(false)}
                      className="flex items-center justify-between px-4 py-2.5 text-xs text-[var(--text-main)] hover:bg-[var(--bg-secondary)] transition-colors"
                    >
                      <span>Sobre Nós & Pilares</span>
                      <span className="bullet-indicator text-[var(--border-subtle)]" />
                    </a>
                    <a
                      href="#equipe"
                      onClick={() => setOfficeDropdownOpen(false)}
                      className="flex items-center justify-between px-4 py-2.5 text-xs text-[var(--text-main)] hover:bg-[var(--bg-secondary)] transition-colors"
                    >
                      <span>Corpo Jurídico</span>
                      <span className="bullet-indicator text-[var(--border-subtle)]" />
                    </a>
                    <a
                      href="#processo"
                      onClick={() => setOfficeDropdownOpen(false)}
                      className="flex items-center justify-between px-4 py-2.5 text-xs text-[var(--text-main)] hover:bg-[var(--bg-secondary)] transition-colors"
                    >
                      <span>Como Atuamos</span>
                      <span className="bullet-indicator text-[var(--border-subtle)]" />
                    </a>
                  </div>
                )}
              </div>

              {/* Submenu: Atuação & Artigos */}
              <div
                ref={areasRef}
                className="relative"
                onMouseEnter={() => setAreasDropdownOpen(true)}
                onMouseLeave={() => setAreasDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setAreasDropdownOpen(!areasDropdownOpen)}
                  className={`inline-flex items-center gap-1 transition-colors py-2 focus:outline-none cursor-pointer ${
                    isScrolled ? "hover:text-[var(--text-main)]" : "hover:text-white"
                  }`}
                  aria-expanded={areasDropdownOpen}
                >
                  <span className="editorial-link">Atuação & Artigos</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      areasDropdownOpen
                        ? isScrolled
                          ? "rotate-180 text-[var(--text-main)]"
                          : "rotate-180 text-white"
                        : isScrolled
                        ? "text-[var(--border-subtle)]"
                        : "text-white/70"
                    }`}
                  />
                </button>

                {areasDropdownOpen && (
                  <div className="absolute top-full left-0 w-56 bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 rounded-xl shadow-xl py-2 animate-in fade-in-50 slide-in-from-top-2 duration-150 z-50">
                    <a
                      href="#areas"
                      onClick={() => setAreasDropdownOpen(false)}
                      className="flex items-center justify-between px-4 py-2.5 text-xs text-[var(--text-main)] hover:bg-[var(--bg-secondary)] transition-colors"
                    >
                      <span>Áreas de Atuação</span>
                      <span className="bullet-indicator text-[var(--border-subtle)]" />
                    </a>
                    <a
                      href="#artigos"
                      onClick={() => setAreasDropdownOpen(false)}
                      className="flex items-center justify-between px-4 py-2.5 text-xs text-[var(--text-main)] hover:bg-[var(--bg-secondary)] transition-colors"
                    >
                      <span>Artigos Educativos (OAB)</span>
                      <span className="bullet-indicator text-[var(--border-subtle)]" />
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#avaliacoes"
                className={`transition-colors editorial-link ${
                  isScrolled ? "hover:text-[var(--text-main)]" : "hover:text-white"
                }`}
              >
                Avaliações
              </a>

              <a
                href="#faq"
                className={`transition-colors editorial-link ${
                  isScrolled ? "hover:text-[var(--text-main)]" : "hover:text-white"
                }`}
              >
                FAQ
              </a>

              <a
                href="#contato"
                className={`transition-colors editorial-link ${
                  isScrolled ? "hover:text-[var(--text-main)]" : "hover:text-white"
                }`}
              >
                Contato
              </a>
            </nav>

            {/* Ações à Direita: Toggle, WhatsApp e Botão Hambúrguer Mobile GARANTIDO */}
            <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
              <ThemeToggle />

              {/* Botão de WhatsApp: Adaptável para caber no mobile sem esconder o menu */}
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill normal-case sm:uppercase bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all duration-300 gap-1 sm:gap-1.5 shadow-xs text-[0.6875rem] sm:text-xs px-2 sm:px-4 py-1.5 sm:py-2.5 flex-shrink-0"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">WhatsApp</span>
                <span className="sm:hidden text-[0.6875rem]">Whats</span>
              </a>

              {/* Botão Menu Mobile PROEMINENTE - Sempre visível com margem de segurança garantida */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className={`lg:hidden flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl border transition-colors flex-shrink-0 cursor-pointer shadow-xs ${
                  isScrolled
                    ? "border-[var(--border-subtle)]/50 bg-[var(--bg-card)] text-[var(--text-main)] hover:border-[var(--accent)]"
                    : "border-white/30 bg-black/40 backdrop-blur-md text-white hover:bg-black/60"
                }`}
                aria-label="Abrir menu de navegação"
                id="btn-mobile-menu"
              >
                <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ======================= MENU MOBILE FULLSCREEN REFINADO ======================= */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-[var(--bg-primary)] text-[var(--text-main)] flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200"
        >
          {/* Topo do Drawer Mobile com Botão Fechar bem nítido */}
          <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]/30">
            <div className="relative h-14 sm:h-16 w-52 sm:w-64 max-w-[65vw]">
              <Image
                src={drawerLogo}
                alt="Diogo & Mazeiro Advogados e Associados"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 208px, 256px"
              />
            </div>

            <button
              type="button"
              onClick={closeMobileMenu}
              className="p-2.5 rounded-full border border-[var(--border-subtle)]/40 hover:bg-[var(--bg-card)] transition-colors cursor-pointer bg-[var(--bg-card)] text-[var(--text-main)] shadow-sm"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6 text-[var(--text-main)]" />
            </button>
          </div>

          {/* Links do Menu Mobile com Estilo Editorial Suíço e Submenus Retráteis */}
          <div className="my-auto py-4 space-y-1">
            <span className="font-heading uppercase text-[0.6875rem] tracking-widest text-[var(--border-subtle)] block mb-3 font-bold">
              Navegação Principal
            </span>

            {/* 01. Início */}
            <a
              href="#inicio"
              onClick={closeMobileMenu}
              className="flex items-center justify-between py-2.5 border-b border-[var(--border-subtle)]/15 font-heading text-base uppercase tracking-wide text-[var(--text-main)] hover:text-[var(--accent)] transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-xs text-[var(--border-subtle)] font-bold">01.</span>
                <span>Início</span>
              </div>
              <span className="bullet-indicator text-[var(--border-subtle)]" />
            </a>

            {/* 02. O Escritório (Submenu Retrátil) */}
            <div className="border-b border-[var(--border-subtle)]/15 py-1">
              <button
                type="button"
                onClick={() => setMobileOfficeOpen(!mobileOfficeOpen)}
                className="w-full flex items-center justify-between py-2 font-heading text-base uppercase tracking-wide text-[var(--text-main)] hover:text-[var(--accent)] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-xs text-[var(--border-subtle)] font-bold">02.</span>
                  <span>O Escritório</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-[var(--border-subtle)] transition-transform duration-200 ${
                    mobileOfficeOpen ? "rotate-180 text-[var(--accent)]" : ""
                  }`}
                />
              </button>

              {mobileOfficeOpen && (
                <div className="pl-6 pb-2 pt-1 space-y-2 animate-in fade-in duration-150">
                  <a
                    href="#sobre"
                    onClick={closeMobileMenu}
                    className="flex items-center justify-between py-1.5 text-xs font-heading uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--text-main)]"
                  >
                    <span>Sobre Nós & Pilares</span>
                    <span className="bullet-indicator text-[var(--border-subtle)]/60" />
                  </a>
                  <a
                    href="#equipe"
                    onClick={closeMobileMenu}
                    className="flex items-center justify-between py-1.5 text-xs font-heading uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--text-main)]"
                  >
                    <span>Corpo Jurídico</span>
                    <span className="bullet-indicator text-[var(--border-subtle)]/60" />
                  </a>
                  <a
                    href="#processo"
                    onClick={closeMobileMenu}
                    className="flex items-center justify-between py-1.5 text-xs font-heading uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--text-main)]"
                  >
                    <span>Como Atuamos</span>
                    <span className="bullet-indicator text-[var(--border-subtle)]/60" />
                  </a>
                </div>
              )}
            </div>

            {/* 03. Atuação & Conteúdo (Submenu Retrátil) */}
            <div className="border-b border-[var(--border-subtle)]/15 py-1">
              <button
                type="button"
                onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                className="w-full flex items-center justify-between py-2 font-heading text-base uppercase tracking-wide text-[var(--text-main)] hover:text-[var(--accent)] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-xs text-[var(--border-subtle)] font-bold">03.</span>
                  <span>Atuação & Conteúdo</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-[var(--border-subtle)] transition-transform duration-200 ${
                    mobileAreasOpen ? "rotate-180 text-[var(--accent)]" : ""
                  }`}
                />
              </button>

              {mobileAreasOpen && (
                <div className="pl-6 pb-2 pt-1 space-y-2 animate-in fade-in duration-150">
                  <a
                    href="#areas"
                    onClick={closeMobileMenu}
                    className="flex items-center justify-between py-1.5 text-xs font-heading uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--text-main)]"
                  >
                    <span>Áreas de Atuação</span>
                    <span className="bullet-indicator text-[var(--border-subtle)]/60" />
                  </a>
                  <a
                    href="#artigos"
                    onClick={closeMobileMenu}
                    className="flex items-center justify-between py-1.5 text-xs font-heading uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--text-main)]"
                  >
                    <span>Artigos Educativos (OAB)</span>
                    <span className="bullet-indicator text-[var(--border-subtle)]/60" />
                  </a>
                </div>
              )}
            </div>

            {/* 04. Avaliações */}
            <a
              href="#avaliacoes"
              onClick={closeMobileMenu}
              className="flex items-center justify-between py-2.5 border-b border-[var(--border-subtle)]/15 font-heading text-base uppercase tracking-wide text-[var(--text-main)] hover:text-[var(--accent)] transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-xs text-[var(--border-subtle)] font-bold">04.</span>
                <span>Avaliações</span>
              </div>
              <span className="bullet-indicator text-[var(--border-subtle)]" />
            </a>

            {/* 05. Perguntas Frequentes (FAQ) */}
            <a
              href="#faq"
              onClick={closeMobileMenu}
              className="flex items-center justify-between py-2.5 border-b border-[var(--border-subtle)]/15 font-heading text-base uppercase tracking-wide text-[var(--text-main)] hover:text-[var(--accent)] transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-xs text-[var(--border-subtle)] font-bold">05.</span>
                <span>Perguntas Frequentes</span>
              </div>
              <span className="bullet-indicator text-[var(--border-subtle)]" />
            </a>

            {/* 06. Contato & Localização */}
            <a
              href="#contato"
              onClick={closeMobileMenu}
              className="flex items-center justify-between py-2.5 border-b border-[var(--border-subtle)]/15 font-heading text-base uppercase tracking-wide text-[var(--text-main)] hover:text-[var(--accent)] transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-xs text-[var(--border-subtle)] font-bold">06.</span>
                <span>Contato & Localização</span>
              </div>
              <span className="bullet-indicator text-[var(--border-subtle)]" />
            </a>
          </div>

          {/* Rodapé do Menu Mobile */}
          <div className="pt-4 border-t border-[var(--border-subtle)]/30 space-y-3">
            <div className="flex items-center gap-2 text-[0.6875rem] font-heading uppercase tracking-wider text-[var(--border-subtle)]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{OFFICE_INFO.oabList}</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="btn-pill w-full bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] gap-2 py-3 text-xs text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <Link
                href="/links"
                onClick={closeMobileMenu}
                className="btn-pill w-full border border-[var(--border-subtle)]/40 text-[var(--text-main)] hover:bg-[var(--bg-card)] gap-1.5 py-3 text-xs text-center"
              >
                <span>Link na Bio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
