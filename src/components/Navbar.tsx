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

  const officeRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);

  // Fecha dropdowns se clicar fora no desktop
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

  // Controla o background no scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trava a rolagem do body quando o menu mobile está aberto
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

  const logoSrc = theme === "dark" ? "/logo_semfundo_branca.png" : "/logo_semfundo_preta.png";

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--bg-primary)]/92 backdrop-blur-md shadow-xs editorial-border-b py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logotipo */}
            <Link href="#inicio" className="flex items-center gap-3 group focus:outline-none flex-shrink-0">
              <div className="relative h-11 w-44 sm:w-52 transition-transform duration-300 group-hover:opacity-90">
                <Image
                  src={logoSrc}
                  alt="Diogo & Mazeiro Advogados e Associados"
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 176px, 208px"
                />
              </div>
            </Link>

            {/* Menu Desktop Enxuto com Submenus */}
            <nav className="hidden lg:flex items-center gap-7 text-[0.8125rem] font-heading uppercase tracking-wider">
              <a
                href="#inicio"
                className="text-[var(--text-main)]/85 hover:text-[var(--text-main)] transition-colors editorial-link"
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
                  className="inline-flex items-center gap-1 text-[var(--text-main)]/85 hover:text-[var(--text-main)] transition-colors py-2 focus:outline-none cursor-pointer"
                  aria-expanded={officeDropdownOpen}
                >
                  <span className="editorial-link">O Escritório</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[var(--border-subtle)] transition-transform duration-200 ${
                      officeDropdownOpen ? "rotate-180 text-[var(--text-main)]" : ""
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
                  className="inline-flex items-center gap-1 text-[var(--text-main)]/85 hover:text-[var(--text-main)] transition-colors py-2 focus:outline-none cursor-pointer"
                  aria-expanded={areasDropdownOpen}
                >
                  <span className="editorial-link">Atuação & Artigos</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[var(--border-subtle)] transition-transform duration-200 ${
                      areasDropdownOpen ? "rotate-180 text-[var(--text-main)]" : ""
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
                className="text-[var(--text-main)]/85 hover:text-[var(--text-main)] transition-colors editorial-link"
              >
                Avaliações
              </a>

              <a
                href="#faq"
                className="text-[var(--text-main)]/85 hover:text-[var(--text-main)] transition-colors editorial-link"
              >
                FAQ
              </a>

              <a
                href="#contato"
                className="text-[var(--text-main)]/85 hover:text-[var(--text-main)] transition-colors editorial-link"
              >
                Contato
              </a>
            </nav>

            {/* Ações: Toggle, Botão WhatsApp e Botão Mobile */}
            <div className="flex items-center gap-3">
              <ThemeToggle />

              {/* Botão de WhatsApp (apenas "WhatsApp" conforme solicitação) */}
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all duration-300 gap-2 shadow-xs text-xs sm:text-sm px-4 sm:px-6 py-2.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              {/* Botão Menu Mobile */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2.5 rounded-full border border-[var(--border-subtle)]/40 text-[var(--text-main)] hover:bg-[var(--bg-card)] transition-colors cursor-pointer"
                aria-label="Abrir menu de navegação"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ======================= MENU MOBILE REFINADO (Off-Canvas Fullscreen) ======================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[var(--bg-primary)] text-[var(--text-main)] flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
          {/* Topo do Drawer Mobile */}
          <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]/30">
            <div className="relative h-10 w-44">
              <Image
                src={logoSrc}
                alt="Diogo & Mazeiro Advogados e Associados"
                fill
                priority
                className="object-contain object-left"
                sizes="176px"
              />
            </div>

            <button
              type="button"
              onClick={closeMobileMenu}
              className="p-2.5 rounded-full border border-[var(--border-subtle)]/40 hover:bg-[var(--bg-card)] transition-colors cursor-pointer"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6 text-[var(--text-main)]" />
            </button>
          </div>

          {/* Links do Menu Mobile com Estilo Editorial Suíço davidlaxer.com */}
          <div className="my-auto py-6 space-y-2">
            <span className="font-heading uppercase text-[0.6875rem] tracking-widest text-[var(--border-subtle)] block mb-3">
              Navegação Principal
            </span>

            {[
              { num: "01", label: "Início", href: "#inicio" },
              { num: "02", label: "Sobre o Escritório", href: "#sobre" },
              { num: "03", label: "Corpo Jurídico", href: "#equipe" },
              { num: "04", label: "Áreas de Atuação", href: "#areas" },
              { num: "05", label: "Artigos Educativos", href: "#artigos" },
              { num: "06", label: "Avaliações Públicas", href: "#avaliacoes" },
              { num: "07", label: "Como Atuamos", href: "#processo" },
              { num: "08", label: "Perguntas Frequentes (FAQ)", href: "#faq" },
              { num: "09", label: "Contato & Localização", href: "#contato" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="flex items-center justify-between py-2 border-b border-[var(--border-subtle)]/15 font-heading text-lg uppercase tracking-wide text-[var(--text-main)] hover:text-[var(--accent)] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[var(--border-subtle)] font-bold">{item.num}.</span>
                  <span>{item.label}</span>
                </div>
                <span className="bullet-indicator text-[var(--border-subtle)]" />
              </a>
            ))}
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
