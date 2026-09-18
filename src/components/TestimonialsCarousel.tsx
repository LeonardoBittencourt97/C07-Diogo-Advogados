"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { TESTIMONIALS } from "@/lib/data";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TestimonialsGeometrics } from "./GeometricBackgrounds";

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = TESTIMONIALS.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay contínuo a cada 5 segundos com pausa ao passar o mouse
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 4500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  return (
    <section id="avaliacoes" className="py-24 sm:py-32 bg-[var(--bg-secondary)]/50 editorial-border-b overflow-hidden relative isolate">
      <TestimonialsGeometrics />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho de Seção Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="bullet-indicator text-[var(--accent)] dark:text-emerald-400" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--border-subtle)]">
                05 / Opinião Pública • Google Reviews
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[var(--text-main)]">
              Depoimentos de Clientes
            </h2>
          </div>

          {/* Controles do Carrossel e Avaliação Média */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border-subtle)]/30 bg-[var(--bg-card)] text-xs font-heading">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-bold text-[var(--text-main)]">5.0</span>
              <span className="text-[var(--text-muted)] font-normal">no Google</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Depoimento anterior"
                className="w-10 h-10 rounded-full border border-[var(--border-subtle)]/40 hover:border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-main)] flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Próximo depoimento"
                className="w-10 h-10 rounded-full border border-[var(--border-subtle)]/40 hover:border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-main)] flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Container do Carrossel com Pause on Hover */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <div className="bg-[var(--bg-card)] p-8 sm:p-12 md:p-14 rounded-3xl border border-[var(--border-subtle)]/30 relative">
                    <Quote className="w-12 h-12 text-[var(--border-subtle)]/20 absolute top-6 right-6 sm:top-10 sm:right-10" />

                    {/* Estrelas */}
                    <div className="flex text-amber-500 mb-6">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    {/* Comentário */}
                    <p className="font-body text-base sm:text-xl md:text-2xl text-[var(--text-main)] leading-relaxed italic mb-8 max-w-4xl">
                      "{item.comment}"
                    </p>

                    {/* Autor e Meta */}
                    <div className="flex items-center justify-between pt-6 border-t border-[var(--border-subtle)]/20">
                      <div>
                        <h3 className="font-heading uppercase text-base sm:text-lg text-[var(--text-main)] font-semibold">
                          {item.author}
                        </h3>
                        <span className="font-body text-xs text-[var(--border-subtle)] block">
                          {item.timeAgo}
                        </span>
                      </div>
                      <span className="text-xs uppercase font-heading tracking-wider px-3 py-1 rounded-full bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border-subtle)]/20">
                        {item.source}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores de Paginação (Dots) */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Ir para depoimento ${dotIdx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  dotIdx === currentIndex
                    ? "w-8 bg-[var(--accent)] dark:bg-emerald-400"
                    : "w-2 bg-[var(--border-subtle)]/40 hover:bg-[var(--border-subtle)]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
