import { PRACTICE_AREAS, OFFICE_INFO } from "@/lib/data";
import { ArrowUpRight, Check } from "lucide-react";

export function PracticeAreas() {
  return (
    <section id="areas" className="py-24 sm:py-32 bg-[var(--bg-secondary)]/40 editorial-border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho de Seção Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="bullet-indicator text-[var(--accent)] dark:text-emerald-400" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--border-subtle)]">
                03 / Especialidades Jurídicas
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[var(--text-main)]">
              Áreas de Atuação
            </h2>
          </div>
          <p className="font-body text-base text-[var(--text-muted)] max-w-md">
            Atuação técnica de alta densidade doutrinária e jurisprudencial em frentes consultivas, preventivas e contenciosas.
          </p>
        </div>

        {/* Grid Editorial com Bordas Finas Sálvia */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border-subtle)]/30 border border-[var(--border-subtle)]/30 rounded-2xl overflow-hidden">
          {PRACTICE_AREAS.map((area) => (
            <div
              key={area.id}
              className="bg-[var(--bg-card)] p-8 sm:p-10 flex flex-col justify-between group hover:bg-[var(--bg-primary)] transition-colors duration-300"
            >
              <div>
                {/* Topo do Card com Código Numérico */}
                <div className="flex items-center justify-between pb-6 border-b border-[var(--border-subtle)]/20 mb-6">
                  <span className="font-heading text-2xl sm:text-3xl text-[var(--border-subtle)] font-bold group-hover:text-[var(--accent)] dark:group-hover:text-emerald-400 transition-colors">
                    {area.code}
                  </span>
                  <span className="bullet-indicator text-[var(--border-subtle)] group-hover:scale-125 transition-transform" />
                </div>

                {/* Título e Subtítulo */}
                <h3 className="font-heading text-xl sm:text-2xl uppercase tracking-wide text-[var(--text-main)] mb-3 leading-snug">
                  {area.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-[var(--border-subtle)] font-medium mb-4 italic">
                  {area.subtitle}
                </p>
                <p className="font-body text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                  {area.description}
                </p>

                {/* Tópicos em Destaque */}
                <ul className="space-y-2.5 mb-8">
                  {area.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-[var(--text-main)]/85">
                      <Check className="w-3.5 h-3.5 text-[var(--border-subtle)] flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ação rápida para WhatsApp */}
              <div className="pt-6 border-t border-[var(--border-subtle)]/20">
                <a
                  href={`${OFFICE_INFO.whatsappUrl}&text=Ol%C3%A1%2C%20gostaria%20de%20orienta%C3%A7%C3%B5es%20sobre%20${encodeURIComponent(area.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-heading uppercase tracking-wider text-[var(--text-main)] group-hover:text-[var(--accent)] dark:group-hover:text-emerald-400 transition-colors"
                >
                  <span>Consultar sobre esta área</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
