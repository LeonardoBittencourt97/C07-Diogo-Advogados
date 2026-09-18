import React from "react";

/**
 * Padrões de Linhas Geométricas Arquiteturais:
 * - 100% lineares (apenas traços/strokes, sem nenhum preenchimento sólido ou forma fechada pesada)
 * - Traçado fino e elegante em tom verde escuro nobre (#143525 / dark:emerald-500)
 * - Cada seção possui um formato linear exclusivo e distinto
 * - Nível de camada: estritamente no fundo (-z-10) com pointer-events-none
 */

// 1. Sobre o Escritório: Arcos e Linhas Radiais Arquiteturais (Compasso de Desenho Técnico)
export function AboutGeometrics() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10"
    >
      {/* Canto superior direito: Arcos concêntricos finos e linhas de projeção radial */}
      <svg
        className="absolute -right-24 -top-24 w-[520px] h-[520px] sm:w-[650px] sm:h-[650px] text-[#143525] opacity-[0.11] dark:opacity-[0.18] dark:text-[#2d6a4a]"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="600" cy="0" r="140" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="600" cy="0" r="260" stroke="currentColor" strokeWidth="1" />
        <circle cx="600" cy="0" r="390" stroke="currentColor" strokeWidth="1" strokeDasharray="8 6" />
        <circle cx="600" cy="0" r="510" stroke="currentColor" strokeWidth="1" />
        <line x1="600" y1="0" x2="150" y2="450" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
        <line x1="600" y1="0" x2="280" y2="540" stroke="currentColor" strokeWidth="1" />
        <line x1="600" y1="0" x2="440" y2="580" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      </svg>

      {/* Canto inferior esquerdo: Linhas ortogonais com arcos abertos */}
      <svg
        className="absolute -left-16 bottom-6 w-[340px] h-[340px] text-[#143525] opacity-[0.09] dark:opacity-[0.16] dark:text-[#2d6a4a]"
        viewBox="0 0 350 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 30 320 A 240 240 0 0 1 270 80" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" />
        <path d="M 60 320 A 180 180 0 0 1 240 140" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="320" x2="320" y2="320" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="30" y1="40" x2="30" y2="350" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </div>
  );
}

// 2. Sócios e Associados: Linhas Isométricas Axonométricas (Malha Linear a 30°)
export function TeamGeometrics() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10"
    >
      {/* Fundo superior direito: Feixe de linhas isométricas diagonais paralelas */}
      <svg
        className="absolute right-0 top-12 w-[520px] h-[520px] text-[#143525] opacity-[0.10] dark:opacity-[0.18] dark:text-[#2d6a4a]"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="100" y1="0" x2="500" y2="231" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" />
        <line x1="50" y1="0" x2="500" y2="260" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="0" x2="500" y2="289" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="50" x2="500" y2="339" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="0" y1="100" x2="500" y2="389" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="150" x2="500" y2="439" stroke="currentColor" strokeWidth="1" strokeDasharray="8 6" />
        
        {/* Linhas cruzadas axonométricas */}
        <line x1="500" y1="50" x2="100" y2="281" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="500" y1="120" x2="150" y2="322" stroke="currentColor" strokeWidth="1" />
        <line x1="500" y1="190" x2="200" y2="363" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" />
      </svg>

      {/* Fundo inferior esquerdo: Linhas angulares em perspectiva */}
      <svg
        className="absolute -left-12 bottom-10 w-[380px] h-[380px] text-[#143525] opacity-[0.09] dark:opacity-[0.15] dark:text-[#2d6a4a]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="200" x2="350" y2="0" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
        <line x1="0" y1="250" x2="350" y2="50" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="300" x2="350" y2="100" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="350" x2="350" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" />
      </svg>
    </div>
  );
}

// 3. Áreas de Atuação: Grade Linear Ortogonal & Linhas Milimetradas (Technical Blueprint Matrix)
export function PracticeAreasGeometrics() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10"
    >
      {/* Padrão de linhas ortogonais finas com tiques de precisão */}
      <svg
        className="absolute inset-0 w-full h-full text-[#143525] opacity-[0.08] dark:opacity-[0.15] dark:text-[#2d6a4a]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="matrix-lines-areas" width="100" height="100" patternUnits="userSpaceOnUse">
            {/* Linha horizontal com pequenos traços de régua */}
            <line x1="0" y1="0" x2="100" y2="0" stroke="currentColor" strokeWidth="1" strokeDasharray="2 8" />
            <line x1="50" y1="-4" x2="50" y2="4" stroke="currentColor" strokeWidth="1" />
            {/* Linha vertical */}
            <line x1="0" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="2 8" />
            <line x1="-4" y1="50" x2="4" y2="50" stroke="currentColor" strokeWidth="1" />
            {/* Cruzamento central discreto */}
            <line x1="46" y1="50" x2="54" y2="50" stroke="currentColor" strokeWidth="1" />
            <line x1="50" y1="46" x2="50" y2="54" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#matrix-lines-areas)" />
      </svg>

      {/* Traços lineares angulares de enquadramento nos cantos */}
      <svg
        className="absolute right-4 top-16 w-[360px] h-[360px] text-[#143525] opacity-[0.11] dark:opacity-[0.18] dark:text-[#2d6a4a]"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="20" y1="20" x2="280" y2="20" stroke="currentColor" strokeWidth="1" />
        <line x1="280" y1="20" x2="280" y2="280" stroke="currentColor" strokeWidth="1" />
        <line x1="60" y1="60" x2="240" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" />
        <line x1="240" y1="60" x2="240" y2="240" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" />
      </svg>
    </div>
  );
}

// 4. Informativo Jurídico: Linhas Diagonais Paralelas Fluidas (Diagonal Linear Flow)
export function ArticlesGeometrics() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10"
    >
      <svg
        className="absolute left-0 top-12 w-[520px] h-[520px] text-[#143525] opacity-[0.10] dark:opacity-[0.18] dark:text-[#2d6a4a]"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="40" x2="380" y2="420" stroke="currentColor" strokeWidth="1" strokeDasharray="8 6" />
        <line x1="0" y1="90" x2="350" y2="440" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="140" x2="320" y2="460" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="0" y1="190" x2="290" y2="480" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="240" x2="260" y2="500" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" />
        <line x1="60" y1="0" x2="440" y2="380" stroke="currentColor" strokeWidth="1" />
        <line x1="120" y1="0" x2="480" y2="360" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
      </svg>

      <svg
        className="absolute -right-12 bottom-6 w-[380px] h-[380px] text-[#143525] opacity-[0.09] dark:opacity-[0.16] dark:text-[#2d6a4a]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="400" y1="100" x2="100" y2="400" stroke="currentColor" strokeWidth="1" />
        <line x1="400" y1="150" x2="150" y2="400" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" />
        <line x1="400" y1="200" x2="200" y2="400" stroke="currentColor" strokeWidth="1" />
        <line x1="400" y1="250" x2="250" y2="400" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </div>
  );
}

// 5. Avaliações (Testimonials): Linhas de Ondas Topográficas Suaves (Contour Flow Lines)
export function TestimonialsGeometrics() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10"
    >
      <svg
        className="absolute -left-20 top-0 w-[650px] h-[450px] text-[#143525] opacity-[0.10] dark:opacity-[0.18] dark:text-[#2d6a4a]"
        viewBox="0 0 650 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,120 C180,40 380,220 650,140" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="6 4" />
        <path d="M0,170 C180,90 380,270 650,190" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M0,220 C180,140 380,320 650,240" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 4" />
        <path d="M0,270 C180,190 380,370 650,290" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>

      <svg
        className="absolute right-0 bottom-0 w-[550px] h-[350px] text-[#143525] opacity-[0.09] dark:opacity-[0.16] dark:text-[#2d6a4a]"
        viewBox="0 0 550 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,180 C200,80 350,280 550,180" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="8 6" />
        <path d="M0,230 C200,130 350,330 550,230" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M0,280 C200,180 350,380 550,280" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="3 3" />
      </svg>
    </div>
  );
}

// 6. Como Atuamos (HowWeWork): Linhas Escalonadas em Degraus & Vetores de Processo (Stepped Progression Lines)
export function HowWeWorkGeometrics() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10"
    >
      <svg
        className="absolute right-4 top-10 w-[450px] h-[450px] text-[#143525] opacity-[0.10] dark:opacity-[0.18] dark:text-[#2d6a4a]"
        viewBox="0 0 450 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Linhas ortogonais em escada (progresso por fases) */}
        <path d="M 50 400 L 150 400 L 150 280 L 270 280 L 270 160 L 400 160" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M 80 430 L 180 430 L 180 310 L 300 310 L 300 190 L 430 190" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="6 4" />
        <path d="M 20 370 L 120 370 L 120 250 L 240 250 L 240 130 L 370 130" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="3 3" />
        {/* Linhas guias verticais pontilhadas */}
        <line x1="150" y1="50" x2="150" y2="430" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
        <line x1="270" y1="50" x2="270" y2="430" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
      </svg>

      <svg
        className="absolute -left-8 bottom-8 w-[320px] h-[320px] text-[#143525] opacity-[0.08] dark:opacity-[0.15] dark:text-[#2d6a4a]"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 30 250 L 110 250 L 110 170 L 200 170 L 200 90 L 280 90" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="5 5" />
      </svg>
    </div>
  );
}

// 7. FAQ: Linhas de Cantoneira e Marcas de Prancheta (Drafting Corner Brackets)
export function FaqGeometrics() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10"
    >
      <svg
        className="absolute right-6 top-16 w-[420px] h-[420px] text-[#143525] opacity-[0.11] dark:opacity-[0.18] dark:text-[#2d6a4a]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cantoneiras lineares finas */}
        <path d="M 80 40 L 40 40 L 40 80" stroke="currentColor" strokeWidth="1.2" />
        <path d="M 320 40 L 360 40 L 360 80" stroke="currentColor" strokeWidth="1.2" />
        <path d="M 80 360 L 40 360 L 40 320" stroke="currentColor" strokeWidth="1.2" />
        <path d="M 320 360 L 360 360 L 360 320" stroke="currentColor" strokeWidth="1.2" />
        {/* Linhas de demarcação linear pontilhadas */}
        <line x1="40" y1="200" x2="360" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
        <line x1="200" y1="40" x2="200" y2="360" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
        <rect x="120" y="120" width="160" height="160" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" fill="none" />
      </svg>

      <svg
        className="absolute -left-10 bottom-8 w-[320px] h-[320px] text-[#143525] opacity-[0.09] dark:opacity-[0.15] dark:text-[#2d6a4a]"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 50 20 L 20 20 L 20 50" stroke="currentColor" strokeWidth="1" />
        <path d="M 50 260 L 20 260 L 20 230" stroke="currentColor" strokeWidth="1" />
        <line x1="20" y1="140" x2="280" y2="140" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </div>
  );
}

// 8. Contato & Localização: Linhas de Coordenadas Geográficas e Retículo Linear (Cartographic Crosshairs)
export function ContactGeometrics() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10"
    >
      <svg
        className="absolute right-0 top-10 w-[520px] h-[520px] text-[#143525] opacity-[0.10] dark:opacity-[0.18] dark:text-[#2d6a4a]"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Retículo linear de coordenadas (Eixos principais) */}
        <line x1="30" y1="250" x2="470" y2="250" stroke="currentColor" strokeWidth="1" />
        <line x1="250" y1="30" x2="250" y2="470" stroke="currentColor" strokeWidth="1" />
        {/* Diagonais lineares */}
        <line x1="90" y1="90" x2="410" y2="410" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="410" y1="90" x2="90" y2="410" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        {/* Círculos de raio lineares sem preenchimento */}
        <circle cx="250" cy="250" r="220" stroke="currentColor" strokeWidth="1" strokeDasharray="8 6" />
        <circle cx="250" cy="250" r="150" stroke="currentColor" strokeWidth="1" />
        <circle cx="250" cy="250" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      </svg>

      <svg
        className="absolute -left-16 bottom-6 w-[360px] h-[360px] text-[#143525] opacity-[0.09] dark:opacity-[0.15] dark:text-[#2d6a4a]"
        viewBox="0 0 350 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="20" y1="180" x2="330" y2="180" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
        <line x1="180" y1="20" x2="180" y2="330" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
        <circle cx="180" cy="180" r="100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </div>
  );
}

// 9. Rodapé Institucional: Linhas de Fundação Horizontal com Chanfros Lineares a 45° (Horizon Baseline)
export function FooterGeometrics() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10"
    >
      <svg
        className="absolute right-0 bottom-0 w-[580px] h-[280px] text-[#143525] opacity-[0.10] dark:opacity-[0.18] dark:text-[#2d6a4a]"
        viewBox="0 0 580 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 80 260 L 220 150 L 440 150 L 580 40" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" />
        <path d="M 140 260 L 260 170 L 480 170 L 580 90" stroke="currentColor" strokeWidth="1" />
        <path d="M 200 260 L 300 190 L 520 190 L 580 140" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="0" y1="260" x2="580" y2="260" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" />
      </svg>

      <svg
        className="absolute -left-10 top-2 w-[380px] h-[200px] text-[#143525] opacity-[0.08] dark:opacity-[0.15] dark:text-[#2d6a4a]"
        viewBox="0 0 380 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 0 40 L 110 140 L 260 140 L 350 60" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
        <path d="M 0 90 L 80 160 L 230 160 L 300 100" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}
