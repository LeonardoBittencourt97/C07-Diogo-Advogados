import { EDUCATIONAL_ARTICLES } from "@/lib/data";
import { BookOpen, Clock, ShieldCheck } from "lucide-react";

export function EducationalArticles() {
  return (
    <section id="artigos" className="py-24 sm:py-32 bg-[var(--bg-primary)] editorial-border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho de Seção Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="bullet-indicator text-[var(--accent)] dark:text-emerald-400" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--border-subtle)]">
                04 / Informativo Jurídico • 100% OAB
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[var(--text-main)]">
              Direito Explicado
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-body text-base text-[var(--text-muted)] mb-2">
              Artigos analíticos de caráter puramente pedagógico e informativo, elaborados segundo os preceitos do Provimento 205/2021 do CFOAB.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[var(--border-subtle)] font-heading uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Sem finalidade mercantil ou captação de clientela</span>
            </div>
          </div>
        </div>

        {/* Lista Editorial de 3 Artigos */}
        <div className="grid lg:grid-cols-3 gap-8">
          {EDUCATIONAL_ARTICLES.map((art) => (
            <article
              key={art.id}
              className="bg-[var(--bg-card)] p-8 sm:p-10 rounded-2xl border border-[var(--border-subtle)]/30 flex flex-col justify-between hover:border-[var(--border-subtle)] transition-colors duration-300"
            >
              <div>
                {/* Meta de Leitura */}
                <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]/20 mb-6">
                  <span className="font-heading text-xs uppercase tracking-widest text-[var(--accent)] dark:text-emerald-400 font-semibold">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] font-body">
                    <Clock className="w-3.5 h-3.5 text-[var(--border-subtle)]" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                {/* Número e Título */}
                <div className="flex items-start gap-3 mb-4">
                  <span className="font-heading text-xl text-[var(--border-subtle)] font-bold">
                    {art.number}.
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl uppercase tracking-wide text-[var(--text-main)] leading-snug">
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

              {/* Disclaimer Ético CFOAB no Rodapé do Card */}
              <div className="pt-6 border-t border-[var(--border-subtle)]/20">
                <div className="flex items-start gap-2 text-[0.6875rem] text-[var(--border-subtle)] leading-relaxed font-body">
                  <BookOpen className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{art.oabDisclaimer}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
