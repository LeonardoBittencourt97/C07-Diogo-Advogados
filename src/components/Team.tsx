import Image from "next/image";
import { LAWYERS } from "@/lib/data";
import { ShieldCheck, Award } from "lucide-react";

export function Team() {
  return (
    <section id="equipe" className="py-24 sm:py-32 bg-[var(--bg-primary)] editorial-border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho de Seção Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="bullet-indicator text-[var(--accent)] dark:text-emerald-400" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--border-subtle)]">
                02 / Liderança Técnica
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[var(--text-main)]">
              Corpo Jurídico
            </h2>
          </div>
          <p className="font-body text-base text-[var(--text-muted)] max-w-md">
            Sócios fundadores e associados especializados, unindo bagagem corporativa e atuação prática intransigente na defesa de seus direitos.
          </p>
        </div>

        {/* Grid de Advogados */}
        <div className="grid lg:grid-cols-3 gap-8">
          {LAWYERS.map((lawyer) => (
            <article
              key={lawyer.id}
              className="bg-[var(--bg-card)] rounded-2xl overflow-hidden border border-[var(--border-subtle)]/30 flex flex-col group hover:border-[var(--border-subtle)] transition-all duration-300 hover:shadow-lg"
            >
              {/* Foto com proporção editorial e tratamento de luz */}
              <div className="relative w-full aspect-[4/5] bg-stone-900 overflow-hidden">
                <Image
                  src={lawyer.photo}
                  alt={lawyer.name}
                  fill
                  className="object-cover object-top filter grayscale-[20%] contrast-[1.05] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                {/* Badge OAB sobre a imagem */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-heading uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{lawyer.oab}</span>
                </div>

                {/* Cargo e Nome na base da foto */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase tracking-widest font-heading text-emerald-400 block mb-1">
                    {lawyer.role}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl uppercase tracking-wide leading-snug">
                    {lawyer.name}
                  </h3>
                </div>
              </div>

              {/* Corpo de Informações do Card */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Especialidade acadêmica */}
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-heading text-[var(--accent)] dark:text-emerald-400 mb-4 pb-3 border-b border-[var(--border-subtle)]/20">
                    <Award className="w-4 h-4 flex-shrink-0" />
                    <span>{lawyer.specialty}</span>
                  </div>

                  {/* Biografia Completa */}
                  <p className="font-body text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                    {lawyer.bio}
                  </p>
                </div>

                {/* Tags de Atuação Prática */}
                <div className="pt-4 border-t border-[var(--border-subtle)]/20">
                  <span className="text-[0.6875rem] uppercase tracking-wider font-heading text-[var(--border-subtle)] block mb-2.5">
                    Áreas de Foco Principal
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {lawyer.areas.map((area, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-body bg-[var(--bg-secondary)] text-[var(--text-main)] border border-[var(--border-subtle)]/20"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
