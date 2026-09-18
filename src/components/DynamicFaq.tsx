"use client";

import { useState } from "react";
import { FAQ_CATEGORIES, FaqCategory } from "@/lib/data";
import { Building2, Briefcase, Scale, FileCheck, ChevronDown, HelpCircle } from "lucide-react";

export function DynamicFaq() {
  const [activeTab, setActiveTab] = useState<FaqCategory["id"]>("empresarial");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "emp-1": true, // Primeiro aberto por padrão
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const currentCategory = FAQ_CATEGORIES.find((cat) => cat.id === activeTab) || FAQ_CATEGORIES[0];

  const getIcon = (id: FaqCategory["id"]) => {
    switch (id) {
      case "empresarial":
        return <Building2 className="w-4 h-4" />;
      case "trabalhista":
        return <Briefcase className="w-4 h-4" />;
      case "civel":
        return <Scale className="w-4 h-4" />;
      case "execucao":
        return <FileCheck className="w-4 h-4" />;
    }
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[var(--bg-secondary)]/40 editorial-border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho de Seção Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="bullet-indicator text-[var(--accent)] dark:text-emerald-400" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--border-subtle)]">
                07 / Esclarecimentos Jurídicos
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[var(--text-main)]">
              Perguntas Frequentes (FAQ)
            </h2>
          </div>
          <p className="font-body text-base text-[var(--text-muted)] max-w-md">
            Selecione a área desejada para consultar 8 respostas aprofundadas sobre dúvidas comuns em nossos campos de atuação.
          </p>
        </div>

        {/* Abas Seletoras de Categorias */}
        <div className="flex flex-wrap gap-2 sm:gap-3 p-1.5 rounded-2xl border border-[var(--border-subtle)]/30 bg-[var(--bg-card)] mb-10 max-w-4xl">
          {FAQ_CATEGORIES.map((cat) => {
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`flex-1 min-w-[160px] sm:min-w-0 flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-heading uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-[var(--accent)] text-white shadow-xs font-semibold"
                    : "text-[var(--text-main)] hover:bg-[var(--bg-secondary)]"
                }`}
              >
                {getIcon(cat.id)}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Lista de 8 Perguntas da Categoria Ativa */}
        <div className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border-subtle)]/30 overflow-hidden divide-y divide-[var(--border-subtle)]/20 shadow-xs">
          {currentCategory.items.map((item, idx) => {
            const isOpen = !!openItems[item.id];
            return (
              <div key={item.id} className="transition-colors duration-200">
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full py-6 px-6 sm:px-8 text-left flex items-start justify-between gap-4 group"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-heading text-sm sm:text-base text-[var(--border-subtle)] font-bold pt-0.5">
                      {String(idx + 1).padStart(2, "0")}.
                    </span>
                    <h3 className="font-heading text-base sm:text-lg uppercase tracking-wide text-[var(--text-main)] group-hover:text-[var(--accent)] dark:group-hover:text-emerald-400 transition-colors">
                      {item.question}
                    </h3>
                  </div>
                  <div
                    className={`p-1.5 rounded-full border border-[var(--border-subtle)]/30 text-[var(--border-subtle)] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 bg-[var(--bg-secondary)]" : "group-hover:border-[var(--border-subtle)]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base font-body text-[var(--text-muted)] leading-relaxed border-t border-[var(--border-subtle)]/10 animate-in fade-in-50 duration-200">
                    <div className="pl-8 border-l-2 border-[var(--border-subtle)]/30">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dúvida não encontrada */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl border border-[var(--border-subtle)]/30 bg-[var(--bg-card)]/50">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-[var(--border-subtle)] flex-shrink-0" />
            <span className="font-body text-sm text-[var(--text-muted)]">
              Possui alguma dúvida específica que não foi abordada acima?
            </span>
          </div>
          <a
            href="https://wa.me/554132428710?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20espec%C3%ADfica%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20jur%C3%ADdicas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-heading uppercase tracking-wider text-[var(--accent)] dark:text-emerald-400 hover:underline flex-shrink-0"
          >
            Fazer uma pergunta direta aos advogados &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
