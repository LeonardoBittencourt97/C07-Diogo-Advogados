export function getLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://diogomazeiro.adv.br/#legalservice",
    "name": "Diogo & Mazeiro Advogados e Associados",
    "alternateName": "Diogo & Mazeiro Advogados",
    "description": "Escritório de advocacia em Curitiba/PR especializado em Direito Empresarial, Contratos, Direito do Trabalho, Cível e Execução Estratégica. Mais de 8 anos de experiência e rigor técnico.",
    "url": "https://diogomazeiro.adv.br",
    "telephone": "+554132428710",
    "email": "diogoemazeiroassessoria@gmail.com",
    "priceRange": "$$",
    "image": "https://diogomazeiro.adv.br/logo_semfundo_preta.png",
    "logo": "https://diogomazeiro.adv.br/logo_semfundo_preta.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Winston Churchill, 1824 - 6º andar - sala 614 - Capão Raso",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "postalCode": "81130-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.5034,
      "longitude": -49.2971
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/diogoadvogados/",
      "https://www.facebook.com/DiogoeMazeiroAdvogados"
    ],
    "employee": [
      {
        "@type": "Person",
        "name": "Lucas Diogo Pereira",
        "jobTitle": "Sócio Proprietário e Fundador",
        "description": "Advogado OAB/PR 92.199, Pós-graduado em Direito Empresarial."
      },
      {
        "@type": "Person",
        "name": "Bruno Almeida Mazeiro",
        "jobTitle": "Sócio Proprietário e Fundador",
        "description": "Advogado OAB/PR 96.043, Pós-graduado em Direito do Trabalho."
      },
      {
        "@type": "Person",
        "name": "Ariane Cristina Savi",
        "jobTitle": "Advogada Associada",
        "description": "Advogada OAB/PR 112.323, Especialista em Direito do Trabalho e Execução Cível."
      }
    ]
  };
}
