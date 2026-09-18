import React from "react";

/**
 * Paleta Institucional Verde Escuro:
 * Hex: #143525 (Verde Nobre Corporativo Diogo & Mazeiro)
 * Variações com opacidade e contraste balanceado para temas claros e escuros.
 */

// 1. Pilares Institucionais: Losangos Isométricos e Rombos de Precisão (Diamond Rhombus Lattice)
export function PillarsGeometrics() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
    >
      <svg
        className="absolute -right-16 -top-20 w-[420px] h-[420px] sm:w-[540px] sm:h-[540px] text-[#143525] opacity-[0.14] dark:opacity-[0.22] dark:text-[#2d6a4a]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="200,20 380,200 200,380 20,200" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" />
        <polygon points="200,60 340,200 200,340 60,200" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="200,100 300,200 200,300 100,200" stroke="currentColor" strokeWidth="2" />
        <polygon points="200,140 260,200 200,260 140,200" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" />
        <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="200" y1="20" x2="200" y2="380" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      </svg>

      <svg
        className="absolute -left-12 -bottom-16 w-[320px] h-[320px] text-[#143525] opacity-[0.10] dark:opacity-[0.18] dark:text-[#2d6a4a]"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="150,20 280,150 150,280 20,150" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="150,70 230,150 150,230 70,150" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="150" cy="150" r="16" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}

// 2. Sobre o Escritório: Círculos Concêntricos & Arcos de Compasso Arquitetural
export function AboutGeometrics() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
    >
      {/* Canto superior direito: Grandes Arcos Arquiteturais concêntricos */}
      <svg
        className="absolute -right-32 -top-32 w-[600px] h-[600px] sm:w-[750px] sm:h-[750px] text-[#143525] opacity-[0.15] dark:opacity-[0.24] dark:text-[#2d6a4a]"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="600" cy="0" r="150" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
        <circle cx="600" cy="0" r="280" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="600" cy="0" r="420" stroke="currentColor" strokeWidth="2" strokeDasharray="10 6" />
        <circle cx="600" cy="0" r="560" stroke="currentColor" strokeWidth="1" />
        <path d="M600 0 L200 400" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M600 0 L350 550" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      </svg>

      {/* Canto inferior esquerdo: Anéis focais de precisão */}
      <svg
        className="absolute -left-20 bottom-10 w-[380px] h-[380px] text-[#143525] opacity-[0.12] dark:opacity-[0.20] dark:text-[#2d6a4a]"
        viewBox="0 0 350 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="250" r="60" stroke="currentColor" strokeWidth="2" />
        <circle cx="100" cy="250" r="120" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" />
        <circle cx="100" cy="250" r="180" stroke="currentColor" strokeWidth="1" />
        <line x1="10" y1="250" x2="280" y2="250" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="100" y1="70" x2="100" y2="340" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </div>
  );
}

// 3. Sócios e Associados: Hexágonos Entrelaçados & Malha Isométrica de Firmeza (Honeycomb Grid)
export function TeamGeometrics() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
    >
      {/* Fundo superior direito */}
      <svg
        className="absolute right-0 top-1/4 w-[480px] h-[480px] text-[#143525] opacity-[0.14] dark:opacity-[0.22] dark:text-[#2d6a4a]"
        viewBox="0 0 450 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hexágono 1 */}
        <polygon points="225,50 350,122 350,266 225,338 100,266 100,122" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" />
        {/* Hexágono 2 menor concêntrico */}
        <polygon points="225,95 310,144 310,242 225,291 140,242 140,144" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.05" />
        {/* Hexágono adjacente */}
        <polygon points="350,122 475,194 475,338 350,410 225,338 225,194" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="225" cy="194" r="6" fill="currentColor" />
        <line x1="225" y1="50" x2="225" y2="338" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      </svg>

      {/* Fundo inferior esquerdo */}
      <svg
        className="absolute -left-16 bottom-20 w-[400px] h-[400px] text-[#143525] opacity-[0.12] dark:opacity-[0.18] dark:text-[#2d6a4a]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="200,40 310,105 310,235 200,300 90,235 90,105" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="90,105 200,170 200,300 90,235 -20,170 -20,105" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" />
        <polygon points="200,170 260,205 260,275 200,310 140,275 140,205" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.07" />
      </svg>
    </div>
  );
}

// 4. Áreas de Atuação: Grid Ortogonal Técnico com Cruzetas & Coordenadas (Blueprint / Crosshair Grid)
export function PracticeAreasGeometrics() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
    >
      <svg
        className="absolute inset-0 w-full h-full text-[#143525] opacity-[0.10] dark:opacity-[0.18] dark:text-[#2d6a4a]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid-pattern-areas" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 6" />
            <path d="M 36 40 L 44 40 M 40 36 L 40 44" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="80" cy="80" r="2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern-areas)" />
      </svg>

      {/* Formas Geométricas Angulares Específicas nos Cantos */}
      <svg
        className="absolute right-4 top-20 w-[420px] h-[420px] text-[#143525] opacity-[0.16] dark:opacity-[0.24] dark:text-[#2d6a4a]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="50" y="50" width="300" height="300" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 6" />
        <rect x="90" y="90" width="220" height="220" stroke="currentColor" strokeWidth="2" />
        <rect x="130" y="130" width="140" height="140" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" />
        <line x1="50" y1="50" x2="350" y2="350" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="350" y1="50" x2="50" y2="350" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </div>
  );
}

// 5. Informativo Jurídico (Artigos): Linhas Diagonais e Paralelogramos (Chevron & Angled Vectors)
export function ArticlesGeometrics() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
    >
      <svg
        className="absolute left-0 top-1/4 w-[500px] h-[500px] text-[#143525] opacity-[0.14] dark:opacity-[0.22] dark:text-[#2d6a4a]"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="0,50 350,50 450,220 100,220" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" />
        <polygon points="0,120 300,120 380,260 80,260" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.06" />
        <polygon points="0,190 250,190 310,300 60,300" stroke="currentColor" strokeWidth="1.5" />
        <line x1="80" y1="0" x2="380" y2="500" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="160" y1="0" x2="460" y2="500" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      </svg>

      <svg
        className="absolute -right-20 bottom-10 w-[420px] h-[420px] text-[#143525] opacity-[0.12] dark:opacity-[0.20] dark:text-[#2d6a4a]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 350 L200 150 L350 350" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M90 350 L200 200 L310 350" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" fill="none" />
        <path d="M130 350 L200 250 L270 350" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
      </svg>
    </div>
  );
}

// 6. Avaliações (Testimonials): Ondas Curvas Geométricas & Elipses Orbitais Suaves
export function TestimonialsGeometrics() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
    >
      <svg
        className="absolute -left-28 -top-28 w-[600px] h-[600px] text-[#143525] opacity-[0.14] dark:opacity-[0.22] dark:text-[#2d6a4a]"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="250" cy="250" rx="240" ry="140" transform="rotate(-25 250 250)" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 6" />
        <ellipse cx="250" cy="250" rx="190" ry="100" transform="rotate(-25 250 250)" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="250" cy="250" rx="130" ry="60" transform="rotate(-25 250 250)" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.07" />
      </svg>

      <svg
        className="absolute -right-24 -bottom-24 w-[550px] h-[550px] text-[#143525] opacity-[0.12] dark:opacity-[0.20] dark:text-[#2d6a4a]"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,250 C150,120 350,380 500,250" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="6 4" />
        <path d="M0,290 C150,160 350,420 500,290" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M0,330 C150,200 350,460 500,330" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="3 3" />
      </svg>
    </div>
  );
}

// 7. Como Atuamos (HowWeWork): Triângulos Escalonados e Pirâmides Isométricas de Progresso
export function HowWeWorkGeometrics() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
    >
      <svg
        className="absolute right-0 top-16 w-[480px] h-[480px] text-[#143525] opacity-[0.14] dark:opacity-[0.22] dark:text-[#2d6a4a]"
        viewBox="0 0 450 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Triângulo Isósceles Externo */}
        <polygon points="225,30 410,390 40,390" stroke="currentColor" strokeWidth="1.5" strokeDasharray="7 5" />
        {/* Triângulo Médio */}
        <polygon points="225,110 350,360 100,360" stroke="currentColor" strokeWidth="2" />
        {/* Triângulo Interno */}
        <polygon points="225,190 290,330 160,330" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
        {/* Linha de ascensão linear */}
        <line x1="225" y1="30" x2="225" y2="390" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      </svg>

      <svg
        className="absolute -left-16 bottom-12 w-[360px] h-[360px] text-[#143525] opacity-[0.12] dark:opacity-[0.18] dark:text-[#2d6a4a]"
        viewBox="0 0 350 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="50,300 175,80 300,300" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="175,80 300,300 220,300" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.06" />
      </svg>
    </div>
  );
}

// 8. FAQ: Cubos Isométricos e Retângulos Facetados (Modular Solution Blocks)
export function FaqGeometrics() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
    >
      <svg
        className="absolute right-4 top-1/4 w-[460px] h-[460px] text-[#143525] opacity-[0.15] dark:opacity-[0.24] dark:text-[#2d6a4a]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cubo Isométrico 1 */}
        <path d="M200 60 L310 125 L310 255 L200 320 L90 255 L90 125 Z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" />
        <path d="M200 60 L200 190 L90 125" stroke="currentColor" strokeWidth="1.5" />
        <path d="M200 190 L310 125" stroke="currentColor" strokeWidth="1.5" />
        <path d="M200 190 L200 320" stroke="currentColor" strokeWidth="2" />
        <polygon points="200,60 310,125 200,190 90,125" fill="currentColor" fillOpacity="0.07" />

        {/* Bloco flutuante menor */}
        <path d="M120 280 L180 315 L180 385 L120 420 L60 385 L60 315 Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <svg
        className="absolute -left-12 bottom-10 w-[380px] h-[380px] text-[#143525] opacity-[0.12] dark:opacity-[0.20] dark:text-[#2d6a4a]"
        viewBox="0 0 350 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="40" y="40" width="180" height="180" rx="12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" />
        <rect x="80" y="80" width="180" height="180" rx="12" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.06" />
      </svg>
    </div>
  );
}

// 9. Contato & Localização: Rosácea / Radar Geométrico de Coordenadas (Coordinate Compass Rose)
export function ContactGeometrics() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
    >
      <svg
        className="absolute right-0 top-12 w-[550px] h-[550px] text-[#143525] opacity-[0.15] dark:opacity-[0.24] dark:text-[#2d6a4a]"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Radar concêntrico */}
        <circle cx="250" cy="250" r="230" stroke="currentColor" strokeWidth="1" strokeDasharray="8 6" />
        <circle cx="250" cy="250" r="170" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="250" cy="250" r="110" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
        <circle cx="250" cy="250" r="50" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
        {/* Eixos cardeais */}
        <line x1="20" y1="250" x2="480" y2="250" stroke="currentColor" strokeWidth="1.5" />
        <line x1="250" y1="20" x2="250" y2="480" stroke="currentColor" strokeWidth="1.5" />
        {/* Diagonais */}
        <line x1="87" y1="87" x2="413" y2="413" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="413" y1="87" x2="87" y2="413" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      </svg>

      <svg
        className="absolute -left-20 bottom-10 w-[420px] h-[420px] text-[#143525] opacity-[0.12] dark:opacity-[0.18] dark:text-[#2d6a4a]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="200,20 250,150 380,200 250,250 200,380 150,250 20,200 150,150" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="200,80 230,170 320,200 230,230 200,320 170,230 80,200 170,170" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.06" />
      </svg>
    </div>
  );
}

// 10. Rodapé Institucional (Footer): Traçado Geométrico de Linhas Arquiteturais Contínuas
export function FooterGeometrics() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
    >
      <svg
        className="absolute right-0 bottom-0 w-[600px] h-[350px] text-[#143525] opacity-[0.15] dark:opacity-[0.24] dark:text-[#2d6a4a]"
        viewBox="0 0 600 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M100 350 L250 200 L450 200 L600 50" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" />
        <path d="M180 350 L300 230 L500 230 L600 130" stroke="currentColor" strokeWidth="2" />
        <path d="M260 350 L350 260 L550 260 L600 210" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.06" />
        <circle cx="450" cy="200" r="5" fill="currentColor" />
        <circle cx="500" cy="230" r="5" fill="currentColor" />
      </svg>

      <svg
        className="absolute -left-12 top-0 w-[400px] h-[250px] text-[#143525] opacity-[0.10] dark:opacity-[0.18] dark:text-[#2d6a4a]"
        viewBox="0 0 400 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 50 L120 170 L280 170 L380 70" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" />
        <path d="M0 110 L90 200 L240 200 L320 120" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}
