"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { ThemeToggle } from "./ThemeToggle";
import { OFFICE_INFO } from "@/lib/data";
import { Menu, X, MessageSquare, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "O Escritório", href: "#sobre" },
  { label: "Corpo Jurídico", href: "#equipe" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Artigos Educativos", href: "#artigos" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Como Atuamos", href: "#processo" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoSrc = theme === "dark" ? "/logo_semfundo_branca.png" : "/logo_semfundo_preta.png";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--bg-primary)]/90 backdrop-blur-md shadow-xs editorial-border-b py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logotipo */}
          <Link href="#inicio" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative h-12 w-48 sm:w-56 transition-transform duration-300 group-hover:opacity-90">
              <Image
                src={logoSrc}
                alt="Diogo & Mazeiro Advogados e Associados"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 190px, 224px"
              />
            </div>
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden xl:flex items-center gap-6 text-[0.8125rem] font-heading uppercase tracking-wider">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--text-main)]/80 hover:text-[var(--text-main)] transition-colors editorial-link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Ações: Toggle, CTA e Menu Mobile */}
          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle />

            {/* CTA WhatsApp Desktop */}
            <a
              href={OFFICE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-pill bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all duration-300 gap-2 shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Atendimento WhatsApp</span>
            </a>

            {/* Botão Menu Mobile */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-full border border-[var(--border-subtle)]/40 text-[var(--text-main)] hover:bg-[var(--bg-card)] transition-colors"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-full bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]/30 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            <div className="text-xs uppercase tracking-widest text-[var(--border-subtle)] font-heading pb-2 border-b border-[var(--border-subtle)]/20">
              Navegação
            </div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-heading uppercase tracking-wide text-[var(--text-main)] hover:text-[var(--accent)] transition-colors py-1.5"
              >
                <span>{link.label}</span>
                <span className="bullet-indicator text-[var(--border-subtle)]" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-[var(--border-subtle)]/20 flex flex-col gap-3">
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill w-full bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] gap-2 py-3"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Falar com Advogado</span>
              </a>
              <Link
                href="/links"
                className="btn-pill w-full border border-[var(--border-subtle)]/40 text-[var(--text-main)] hover:bg-[var(--bg-card)] gap-2 py-3 text-center"
              >
                <span>Acessar Link na Bio</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
