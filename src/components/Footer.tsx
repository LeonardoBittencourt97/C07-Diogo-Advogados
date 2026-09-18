"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { OFFICE_INFO } from "@/lib/data";
import { ShieldCheck } from "lucide-react";

export function Footer() {
  const { theme } = useTheme();
  const logoSrc = theme === "dark" ? "/logo_semfundo_branca.png" : "/logo_semfundo_preta.png";

  return (
    <footer className="bg-[var(--bg-card)] border-t border-[var(--border-subtle)]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 pb-12 border-b border-[var(--border-subtle)]/20">
          {/* Logo e Resumo Institucional (5 colunas) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="relative h-14 w-56 mb-6">
                <Image
                  src={logoSrc}
                  alt="Diogo & Mazeiro Advogados e Associados"
                  fill
                  className="object-contain object-left"
                  sizes="224px"
                />
              </div>
              <p className="font-body text-sm text-[var(--text-muted)] leading-relaxed max-w-sm mb-6">
                Soluções Jurídicas Estratégicas com Segurança, Rigor Técnico e Transparência. Atuação consultiva e contenciosa corporativa.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-heading uppercase tracking-wider text-[var(--border-subtle)]">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{OFFICE_INFO.oabList}</span>
            </div>
          </div>

          {/* Links Rápidos de Navegação (3 colunas) */}
          <div className="lg:col-span-3">
            <span className="font-heading uppercase text-xs tracking-widest text-[var(--border-subtle)] block mb-4">
              Navegação
            </span>
            <ul className="space-y-2.5 font-heading text-xs uppercase tracking-wider">
              <li>
                <a href="#inicio" className="text-[var(--text-main)] hover:text-[var(--accent)] dark:hover:text-emerald-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-[var(--text-main)] hover:text-[var(--accent)] dark:hover:text-emerald-400 transition-colors">
                  O Escritório
                </a>
              </li>
              <li>
                <a href="#equipe" className="text-[var(--text-main)] hover:text-[var(--accent)] dark:hover:text-emerald-400 transition-colors">
                  Corpo Jurídico
                </a>
              </li>
              <li>
                <a href="#areas" className="text-[var(--text-main)] hover:text-[var(--accent)] dark:hover:text-emerald-400 transition-colors">
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#artigos" className="text-[var(--text-main)] hover:text-[var(--accent)] dark:hover:text-emerald-400 transition-colors">
                  Artigos Educativos
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="text-[var(--text-main)] hover:text-[var(--accent)] dark:hover:text-emerald-400 transition-colors">
                  Avaliações
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[var(--text-main)] hover:text-[var(--accent)] dark:hover:text-emerald-400 transition-colors">
                  FAQ Dinâmico
                </a>
              </li>
              <li>
                <Link href="/links" className="text-[var(--accent)] dark:text-emerald-400 font-bold hover:underline">
                  Página Link-in-Bio
                </Link>
              </li>
            </ul>
          </div>

          {/* Informações da Sede (4 colunas) */}
          <div className="lg:col-span-4">
            <span className="font-heading uppercase text-xs tracking-widest text-[var(--border-subtle)] block mb-4">
              Sede e Atendimento
            </span>
            <address className="not-italic font-body text-sm text-[var(--text-muted)] space-y-2 leading-relaxed">
              <p>{OFFICE_INFO.address}</p>
              <p className="font-heading uppercase text-xs tracking-wider text-[var(--text-main)] pt-2">
                Telefone: {OFFICE_INFO.phone}
              </p>
              <p className="font-body text-xs text-[var(--border-subtle)]">
                {OFFICE_INFO.email}
              </p>
              <p className="font-body text-xs text-[var(--text-muted)] pt-2">
                {OFFICE_INFO.workingHours.weekdays}
              </p>
            </address>
          </div>
        </div>

        {/* Disclaimer Ético OAB / Provimento 205/2021 e LGPD */}
        <div className="pt-8 space-y-4">
          <div className="bg-[var(--bg-secondary)]/50 p-4 rounded-xl border border-[var(--border-subtle)]/20">
            <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed">
              <strong>Aviso Legal & Ético OAB:</strong> Este website possui finalidade exclusivamente informativa e educacional, em estrito cumprimento ao Código de Ética e Disciplina da Ordem dos Advogados do Brasil (Resolução CFOAB 02/2015) e ao Provimento nº 205/2021 do Conselho Federal da OAB. As informações veiculadas não constituem orientação jurídica vinculante nem caracterizam publicidade mercantil ou promessa de resultados. O exercício da advocacia subordina-se à análise técnica caso a caso.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-[var(--text-muted)] pt-2">
            <div>
              © {new Date().getFullYear()} Diogo & Mazeiro Advogados e Associados. Todos os direitos reservados.
            </div>

            <div className="flex items-center gap-4 text-[var(--border-subtle)]">
              <span>Tratamento de Dados e Privacidade (LGPD Lei 13.709/18)</span>
              <span>•</span>
              <span>Curitiba - PR</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
