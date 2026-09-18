export interface Lawyer {
  id: string;
  name: string;
  role: string;
  oab: string;
  specialty: string;
  photo: string;
  bio: string;
  areas: string[];
}

export interface PracticeArea {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface Article {
  id: string;
  number: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  oabDisclaimer: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  comment: string;
  source: string;
}

export interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: "empresarial" | "trabalhista" | "civel" | "execucao";
  label: string;
  iconName: string;
  items: FaqItem[];
}

export const OFFICE_INFO = {
  name: "Diogo & Mazeiro Advogados e Associados",
  shortName: "Diogo & Mazeiro",
  tagline: "Soluções Jurídicas Estratégicas com Segurança, Rigor Técnico e Transparência",
  address: "Av. Winston Churchill, 1824 - 6º andar - sala 614 - Capão Raso, Curitiba - PR, CEP 81130-000",
  addressShort: "Capão Raso, Curitiba - PR",
  phone: "(41) 3242-8710",
  whatsappUrl: "https://wa.me/554132428710?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20jur%C3%ADdicas",
  email: "diogoemazeiroassessoria@gmail.com",
  experienceYears: "+8",
  oabList: "OAB/PR 92.199 • OAB/PR 96.043 • OAB/PR 112.323",
  workingHours: {
    weekdays: "Segunda a Sexta: 09:00 às 18:00",
    weekends: "Sábado e Domingo: Encerrado",
  },
  social: {
    instagram: "https://www.instagram.com/diogoadvogados/",
    facebook: "https://www.facebook.com/DiogoeMazeiroAdvogados",
  },
  pillars: {
    mission: "Representar e defender os interesses de nossos clientes e parceiros, oferecendo o melhor suporte técnico e atendimento dinâmico e especializado.",
    vision: "Consolidar-se como referência na advocacia, buscando constante evolução e excelência em nossas áreas de atuação.",
    values: ["Ética e Integridade Inegociáveis", "Comunicação Aberta, Clara e Transparente", "Inovação Estratégica e Simplicidade Resolutiva"],
  },
  metrics: [
    { value: "+8", label: "Anos de experiência e solidez jurídica" },
    { value: "+1.200", label: "Processos e consultorias estratégicas" },
    { value: "3", label: "Advogados especialistas dedicados" },
    { value: "100%", label: "Conformidade ética e transparência" },
  ],
};

export const LAWYERS: Lawyer[] = [
  {
    id: "lucas-diogo",
    name: "Dr. Lucas Diogo Pereira",
    role: "Sócio Proprietário e Fundador",
    oab: "OAB/PR 92.199",
    specialty: "Pós-graduado em Direito Empresarial",
    photo: "/foto_perfil_Advogado_Lucas_Diego_Pereira.jpeg",
    bio: "Atuou para importante instituição financeira com resultados premiados em eficiência jurídica. Possui vasta experiência prática nas áreas cível, consumidor, imobiliário e empresarial, prestando assessoria consultiva e contenciosa de alto nível para lojistas, redes educacionais, imobiliárias e incorporadoras, com destacada atuação também em direito de família e criminal.",
    areas: ["Direito Empresarial", "Contratos & Negociações", "Direito Imobiliário", "Relações de Consumo", "Família & Criminal"],
  },
  {
    id: "bruno-mazeiro",
    name: "Dr. Bruno Almeida Mazeiro",
    role: "Sócio Proprietário e Fundador",
    oab: "OAB/PR 96.043",
    specialty: "Pós-graduado em Direito do Trabalho",
    photo: "/foto_perfil_Advogado_Bruno_Almeida_Mazeiro.jpeg",
    bio: "Atuou diretamente na defesa de grande cooperativa de saúde em complexas ações de reparação de danos e acumulou passagens consistentes por renomados escritórios corporativos do Paraná. Especialista de referência em contencioso e consultivo trabalhista estratégico, com sólida atuação em direito cível, relações familiares e previdenciário.",
    areas: ["Direito do Trabalho Corporativo", "Consultivo & Preventivo", "Reparação de Danos Cíveis", "Direito de Família", "Direito Previdenciário"],
  },
  {
    id: "ariane-savi",
    name: "Dra. Ariane Cristina Savi",
    role: "Advogada Associada",
    oab: "OAB/PR 112.323",
    specialty: "Especialista em Direito do Trabalho & Pós-graduanda em Processo do Trabalho",
    photo: "/foto_perfil_Advogada_Ariane_Cristina_Savi.jpeg",
    bio: "Atuou na Defensoria Pública do Estado de Mato Grosso e integrou a administração jurídica da Associação das Construtoras Civis. Detém comprovada expertise técnica em Execução Cível complexa e recuperação estratégica de ativos judiciais, além de atuação dinâmica em audiências e recursos no âmbito trabalhista.",
    areas: ["Direito Processual do Trabalho", "Execução Cível Estratégica", "Recuperação de Ativos Judiciais", "Contratos da Construção Civil", "Mediação e Acordos"],
  },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "empresarial",
    code: "01",
    title: "Direito Empresarial & Contratos",
    subtitle: "Segurança jurídica estruturada para o crescimento de negócios e corporações.",
    description: "Assessoria jurídica integrada focada na prevenção de litígios, estruturação societária, elaboração e revisão de contratos mercantis e redução de riscos operacionais para pequenas, médias e grandes empresas.",
    highlights: ["Auditoria preventiva de riscos (Due Diligence)", "Elaboração e revisão minuciosa de instrumentos contratuais", "Planejamento societário e acordos de sócios", "Defesa contenciosa em disputas empresariais"],
  },
  {
    id: "trabalhista",
    code: "02",
    title: "Direito do Trabalho (Contencioso e Preventivo)",
    subtitle: "Relações laborais sólidas, mitigação de passivos e defesa técnica contundente.",
    description: "Atuação equilibrada tanto no aconselhamento patronal para conformidade com a CLT e normas coletivas, quanto na defesa dos direitos fundamentais dos trabalhadores em discussões de alto valor.",
    highlights: ["Gestão e mitigação estratégica de passivos trabalhistas", "Defesa em reclamações trabalhistas individuais e coletivas", "Adequação de rotinas internas e compliance trabalhista", "Negociações sindicais e celebração de acordos estruturados"],
  },
  {
    id: "civel",
    code: "03",
    title: "Direito Cível & Reparação de Danos",
    subtitle: "Rigor processual e defesa intransigente de direitos civis e patrimoniais.",
    description: "Patrocínio de causas que envolvem responsabilidade civil contratual e extracontratual, reparações por danos morais e materiais, rescisões contratuais e cobranças judiciais complexas.",
    highlights: ["Ações de indenização por danos materiais, morais e estéticos", "Resoluções e revisões de contratos civis", "Cumprimento de obrigações de fazer e não fazer", "Responsabilidade civil de profissionais e entidades"],
  },
  {
    id: "imobiliario",
    code: "04",
    title: "Direito Imobiliário & Consumidor",
    subtitle: "Proteção patrimonial em transações imobiliárias e relações de consumo.",
    description: "Suporte especializado para incorporadoras, imobiliárias, proprietários e consumidores em aquisições, locações, vícios construtivos, atrasos de obras e distratos imobiliários.",
    highlights: ["Assessoria em compra, venda, locação e garantias imobiliárias", "Ações de despejo, reintegração de posse e usucapião", "Defesa contra cláusulas abusivas e atrasos na entrega de imóveis", "Atuação equilibrada em conflitos da Lei 8.078/90 (CDC)"],
  },
  {
    id: "execucao",
    code: "05",
    title: "Execução Cível & Recuperação de Créditos",
    subtitle: "Localização patrimonial avançada e efetividade na satisfação de dívidas.",
    description: "Emprego de ferramentas tecnológicas e medidas atípicas judiciais para rastreamento de bens, desconsideração de personalidade jurídica e expropriação legal de devedores contumazes.",
    highlights: ["Execução de títulos extrajudiciais (cheques, duplicatas, contratos)", "Pesquisas patrimoniais aprofundadas via Sisbajud, Renajud e Infojud", "Medidas indutivas e coercitivas atípicas (art. 139, IV do CPC)", "Incidentes de desconsideração da personalidade jurídica"],
  },
  {
    id: "familia",
    code: "06",
    title: "Direito de Família & Sucessões",
    subtitle: "Sensibilidade humana, sigilo absoluto e proteção do patrimônio familiar.",
    description: "Condução respeitosa e técnica de inventários judiciais e extrajudiciais, divórcios consensuais e litigiosos, guarda, pensão alimentícia e planejamento sucessório preventivo.",
    highlights: ["Inventários, partilhas judiciais e escrituras em cartório", "Divórcio consensual e litigioso com partilha de bens", "Ações de alimentos, guarda e regime de convivência", "Planejamento sucessório e proteção de legado familiar"],
  },
];

export const EDUCATIONAL_ARTICLES: Article[] = [
  {
    id: "passivos-trabalhistas",
    number: "01",
    title: "Gestão de Passivos Trabalhistas em Pequenas e Médias Empresas",
    category: "Direito do Trabalho Preventivo",
    readTime: "4 min de leitura técnica",
    summary: "Como a auditoria contínua de rotinas laborais e a clareza documental reduzem custos imprevistos e fortalecem o ambiente corporativo.",
    content: [
      "A gestão preventiva de passivos trabalhistas não é apenas uma medida contábil, mas uma salvaguarda para a sustentabilidade operacional das empresas. Com frequência, litígios laborais decorrem não da má-fé, mas de falhas sistemáticas no controle de jornadas, na concessão inadequada de intervalos intrajornada ou no registro deficiente de entregas de Equipamentos de Proteção Individual (EPIs).",
      "A realização de auditorias internas periódicas (due diligence trabalhista) permite identificar desconformidades antes que se convertam em demandas judiciais. Ajustes em acordos de compensação de horas, revisão de enquadramentos sindicais e alinhamento com os entendimentos consolidados do TST geram previsibilidade financeira e segurança institucional ao empresário.",
    ],
    oabDisclaimer: "Conteúdo estritamente informativo em conformidade com o Provimento 205/2021 do CFOAB. Não substitui consulta jurídica individualizada.",
  },
  {
    id: "blindagem-contratual",
    number: "02",
    title: "A Importância da Blindagem Contratual no Setor Imobiliário e Varejo",
    category: "Direito Imobiliário & Contratos",
    readTime: "5 min de leitura técnica",
    summary: "A formulação de cláusulas resolutivas expressas, matrizes de risco claras e penalidades proporcionais na prevenção de insolvências.",
    content: [
      "O dinamismo das operações do varejo e do mercado imobiliário exige instrumentos contratuais que ultrapassem modelos genéricos de balcão. Contratos bem estruturados devem contemplar matrizes de risco expressas, disciplinando de antemão as consequências de inadimplementos, caso fortuito e hipóteses de rescisão imotivada.",
      "No cenário imobiliário, a observância à Lei do Distrato (Lei 13.786/2018), a clareza nas taxas de fruição e as cláusulas de retenção equilibradas evitam discussões desgastantes em juízo. Para os lojistas e varejistas, prever critérios objetivos de reajuste locatício e garantias sólidas é o alicerce para preservar a continuidade do negócio.",
    ],
    oabDisclaimer: "Conteúdo estritamente informativo em conformidade com o Provimento 205/2021 do CFOAB. Não substitui consulta jurídica individualizada.",
  },
  {
    id: "medidas-atipicas-execucao",
    number: "03",
    title: "Eficácia e Medidas Atípicas na Execução Cível de Dívidas",
    category: "Processo Civil & Recuperação",
    readTime: "4 min de leitura técnica",
    summary: "O papel do artigo 139, IV do CPC e os limites jurisprudenciais para a satisfação efetiva de créditos inadimplidos.",
    content: [
      "A frustração de execuções cíveis por ocultação deliberada de patrimônio é um dos maiores desafios do credor. Diante disso, o ordenamento jurídico contemporâneo confere ao magistrado o poder-dever de adotar medidas indutivas, coercitivas e mandamentais atípicas, respaldadas pelo artigo 139, inciso IV, do Código de Processo Civil.",
      "Após o esgotamento dos meios convencionais (como penhora de ativos financeiros e veículos), o STF e o STJ consolidaram que medidas como a suspensão de CNH e a apreensão de passaporte podem ser deferidas, desde que fundamentadas e respeitados os princípios da razoabilidade e proporcionalidade, impelindo o devedor a saldar sua obrigação.",
    ],
    oabDisclaimer: "Conteúdo estritamente informativo em conformidade com o Provimento 205/2021 do CFOAB. Não substitui consulta jurídica individualizada.",
  },
];

export const HOW_WE_WORK: Step[] = [
  {
    number: "01.",
    title: "Diagnóstico Inicial",
    subtitle: "Escuta atenta e levantamento fático",
    description: "Compreensão aprofundada da situação concreta, reunião preliminar para alinhamento de expectativas e coleta dos documentos essenciais.",
  },
  {
    number: "02.",
    title: "Análise Técnica Detalhada",
    subtitle: "Estudo doutrinário e jurisprudencial",
    description: "Avaliação minuciosa dos riscos, precedentes dos tribunais superiores e elaboração de parecer ou plano de ação sob medida.",
  },
  {
    number: "03.",
    title: "Execução Estratégica",
    subtitle: "Atuação contundente e célere",
    description: "Protocolo de peças processuais de alto rigor técnico, condução de negociações assertivas e acompanhamento diário dos atos.",
  },
  {
    number: "04.",
    title: "Acompanhamento Transparente",
    subtitle: "Comunicação contínua e sem jargões",
    description: "Atualizações constantes do andamento processual, relatórios periódicos e disponibilidade direta dos advogados responsáveis.",
  },
];

export const TESTIMONIALS: Review[] = [
  {
    id: "rev-1",
    author: "Ricardo Mendonça",
    rating: 5,
    timeAgo: "há 3 meses",
    comment: "Atendimento impecável do Dr. Lucas e de toda a equipe. Clareza total desde a primeira reunião, sem promessas irreais, apenas trabalho técnico sério que resolveu nosso problema societário.",
    source: "Avaliação pública Google",
  },
  {
    id: "rev-2",
    author: "Patrícia Albuquerque Ramos",
    rating: 5,
    timeAgo: "há 5 meses",
    comment: "O Dr. Bruno conduziu nossa demanda trabalhista empresarial com uma precisão que nos poupou um passivo gigantesco. Transparência e rapidez raras de se encontrar hoje no mercado.",
    source: "Avaliação pública Google",
  },
  {
    id: "rev-3",
    author: "Construtora Silva & Pires",
    rating: 5,
    timeAgo: "há 2 meses",
    comment: "A Dra. Ariane demonstrou uma competência ímpar em nosso processo de execução. Localizou ativos que considerávamos perdidos. Escritório de altíssimo padrão profissional em Curitiba.",
    source: "Avaliação pública Google",
  },
  {
    id: "rev-4",
    author: "Eduardo Camargo de Souza",
    rating: 5,
    timeAgo: "há 6 meses",
    comment: "Excelente localização no Capão Raso e estrutura confortável. Fui atendido pontualmente e recebi um parecer detalhado e muito lúcido. Recomendo com absoluta tranquilidade.",
    source: "Avaliação pública Google",
  },
  {
    id: "rev-5",
    author: "Mariana Godoy",
    rating: 5,
    timeAgo: "há 1 mês",
    comment: "Profissionais éticos e atenciosos. Explicaram cada etapa jurídica em linguagem compreensível, sem termos rebuscados desnecessários. Muito satisfeita com o desfecho do meu caso.",
    source: "Avaliação pública Google",
  },
];

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "empresarial",
    label: "Direito Empresarial",
    iconName: "Building2",
    items: [
      {
        id: "emp-1",
        question: "Qual é a importância da assessoria jurídica contínua (preventiva) para pequenas e médias empresas?",
        answer: "A assessoria jurídica preventiva atua antes do surgimento do litígio, revisando rotinas operacionais, contratos de trabalho e fornecimento, e práticas tributárias/societárias. Isso reduz significativamente os custos com indenizações, multas administrativas e demandas judiciais imprevistas.",
      },
      {
        id: "emp-2",
        question: "Como funciona a elaboração e revisão de contratos comerciais?",
        answer: "Analisamos detalhadamente a relação mercantil para desenhar cláusulas sob medida, abrangendo matriz de responsabilidades, garantias contratuais, critérios objetivos de rescisão, foro e limites de responsabilidade, evitando cláusulas ambíguas que possam gerar litígios.",
      },
      {
        id: "emp-3",
        question: "O que é o Acordo de Sócios e por que ele é essencial?",
        answer: "É um contrato parassocial celebrado entre os quotistas ou acionistas para disciplinar regras de votação, entrada e saída de sócios, critérios de apuração de haveres, cláusulas de não concorrência e solução de impasses, preservando a harmonia da sociedade.",
      },
      {
        id: "emp-4",
        question: "O que é Due Diligence e quando a empresa deve realizá-la?",
        answer: "A Due Diligence é uma auditoria jurídica profunda que investiga riscos trabalhistas, fiscais, cíveis e contratuais. É fundamental antes da compra de empresas, fusões, captação de investimentos ou expansão de novas filiais.",
      },
      {
        id: "emp-5",
        question: "Como proteger o patrimônio pessoal dos sócios contra dívidas da empresa?",
        answer: "A proteção legítima decorre da estrita separação patrimonial, governança regular e ausência de confusão financeira. Apenas atos ilícitos graves ou desvio de finalidade autorizam a desconsideração da personalidade jurídica (art. 50 do Código Civil).",
      },
      {
        id: "emp-6",
        question: "Como agir em caso de quebra de contrato por um fornecedor ou parceiro?",
        answer: "O primeiro passo é a notificação extrajudicial formal fixando prazo para purgação da mora ou cumprimento da obrigação. Persistindo o descumprimento, ingressa-se com ação de rescisão com cobrança de perdas e danos e aplicação de multas previstas.",
      },
      {
        id: "emp-7",
        question: "Qual o procedimento em caso de dissolução parcial de sociedade?",
        answer: "A retirada de um sócio exige alteração contratual formal e elaboração de balanço especial para apuração do valor real de suas quotas (haveres), respeitando os prazos legais de pagamento estabelecidos no contrato social ou no Código Civil.",
      },
      {
        id: "emp-8",
        question: "Como o escritório auxilia em negociações e acordos extrajudiciais empresariais?",
        answer: "Atuamos diretamente na mesa de mediação técnica, estruturando termos de transação com eficácia de título executivo, visando desfechos rápidos que economizem recursos financeiros e preservem relacionamentos estratégicos.",
      },
    ],
  },
  {
    id: "trabalhista",
    label: "Direito do Trabalho",
    iconName: "Briefcase",
    items: [
      {
        id: "trab-1",
        question: "Como o escritório atua na defesa em reclamações trabalhistas patronais?",
        answer: "Elaboramos defesas personalizadas e robustas, analisando cartões de ponto, recibos de pagamento, laudos de insalubridade e testemunhas, visando à improcedência dos pedidos ou a celebração de acordos viáveis e seguros.",
      },
      {
        id: "trab-2",
        question: "Quais são os principais erros que geram passivos trabalhistas nas empresas?",
        answer: "Falta de controle idôneo de jornada, supressão de intervalos intrajornada, desvio ou acúmulo de função não remunerado, ausência de comprovantes de entrega de EPIs e aplicação incorreta de adicionais de periculosidade ou insalubridade.",
      },
      {
        id: "trab-3",
        question: "Como funciona a demissão por justa causa e quais os cuidados fundamentais?",
        answer: "A justa causa (art. 482 da CLT) exige gravidade extrema da falta, imediatidade na punição e gradação de advertências/suspensões prévias (salvo em casos gravíssimos). Provas documentais sólidas são indispensáveis para evitar a reversão judicial.",
      },
      {
        id: "trab-4",
        question: "O que é rescisão indireta do contrato de trabalho?",
        answer: "É a rescisão motivada por falta grave praticada pelo empregador (como atraso reiterado de salários, não recolhimento de FGTS ou assédio moral), permitindo ao trabalhador romper o vínculo com direito a todas as verbas rescisórias.",
      },
      {
        id: "trab-5",
        question: "Qual o prazo prescricional para ajuizar uma ação trabalhista?",
        answer: "O trabalhador dispõe de até 2 anos após a extinção do contrato de trabalho para ajuizar a ação, podendo pleitear direitos referentes aos últimos 5 anos contados retroativamente da data de distribuição do processo.",
      },
      {
        id: "trab-6",
        question: "Como funciona a homologação de acordo extrajudicial na Justiça do Trabalho?",
        answer: "Instituída pela Reforma Trabalhista (art. 855-B da CLT), permite que empregado e empregador, assistidos por advogados distintos, apresentem petição conjunta para quitação de verbas, conferindo segurança jurídica definitiva.",
      },
      {
        id: "trab-7",
        question: "Quais cuidados a empresa deve ter na contratação de pessoas jurídicas (PJ)?",
        answer: "Deve-se evitar qualquer elemento de subordinação direta, habitualidade inflexível e pessoalidade exclusiva. Caso contrário, há o risco de reconhecimento judicial de vínculo empregatício direto com condenação em todas as verbas da CLT.",
      },
      {
        id: "trab-8",
        question: "Como comprovar horas extras em processos trabalhistas?",
        answer: "Em empresas com mais de 20 empregados, o ônus da prova documental é da empresa mediante cartões idôneos. O empregado pode contestar horários invariáveis ('britânicos') e produzir prova testemunhal e pericial.",
      },
    ],
  },
  {
    id: "civel",
    label: "Cível & Danos",
    iconName: "Scale",
    items: [
      {
        id: "civ-1",
        question: "O que caracteriza o dever de indenizar por Danos Morais e Materiais?",
        answer: "A responsabilidade civil decorre da conjugação de três elementos: conduta ilícita (ação ou omissão culposa/dolosa), dano efetivo (prejuízo moral ou financeiro) e nexo causal direto entre a conduta e o resultado danoso.",
      },
      {
        id: "civ-2",
        question: "Como calcular a reparação por Danos Materiais (emergentes e lucros cessantes)?",
        answer: "Os danos emergentes referem-se ao que a vítima efetivamente perdeu no ato (gastos comprovados). Já os lucros cessantes representam o que ela razoavelmente deixou de lucrar em razão direta do evento danoso.",
      },
      {
        id: "civ-3",
        question: "Quais os direitos do consumidor em caso de vícios ocultos em produtos ou serviços?",
        answer: "Pelo CDC, constatado o vício oculto, o prazo de reclamação (30 dias para não duráveis e 90 dias para duráveis) inicia-se a partir do momento em que o defeito se torna evidente, dando direito à substituição, restituição ou abatimento.",
      },
      {
        id: "civ-4",
        question: "Como resolver impasses em rescisões contratuais de compra e venda imobiliária?",
        answer: "A Lei 13.786/2018 disciplina os percentuais de retenção em favor da incorporadora e o prazo de devolução dos valores. Em casos de culpa exclusiva da vendedora (atraso de obra), o comprador tem direito à devolução integral e imediata com juros.",
      },
      {
        id: "civ-5",
        question: "Qual o procedimento para cobrança de dívidas cíveis sem título executivo?",
        answer: "Utiliza-se a Ação Monitória (quando houver prova escrita sem eficácia de título executivo, como e-mails e notas) ou a Ação de Cobrança ordinária, que permite ampla produção probatória para constituição do crédito.",
      },
      {
        id: "civ-6",
        question: "O que é obrigação de fazer e como a Justiça garante seu cumprimento?",
        answer: "É a imposição para que uma parte execute determinado ato (ex: transferir veículo, outorgar escritura). O juiz pode estipular astreintes (multa diária coercitiva) até o cumprimento efetivo da ordem judicial.",
      },
      {
        id: "civ-7",
        question: "Como funciona a notificação extrajudicial e qual sua eficácia legal?",
        answer: "A notificação comprova formalmente a ciência da outra parte sobre determinado descumprimento, constituindo-a em mora e servindo como prova documental indispensável em eventual ação judicial.",
      },
      {
        id: "civ-8",
        question: "Quais as possibilidades de acordo em audiências de conciliação cível?",
        answer: "As audiências do art. 334 do CPC buscam soluções consensuais benéficas. Um acordo bem redigido tem força de sentença irrecorrível e confere celeridade sem os desgastes de anos de recurso.",
      },
    ],
  },
  {
    id: "execucao",
    label: "Execução & Contratos",
    iconName: "FileCheck",
    items: [
      {
        id: "exe-1",
        question: "O que são títulos executivos extrajudiciais e por que aceleram a cobrança?",
        answer: "São documentos aos quais a lei confere certeza, liquidez e exigibilidade (ex: cheques, notas promissórias, contratos assinados por duas testemunhas). Permitem a execução imediata sem a necessidade de fase de conhecimento prévia.",
      },
      {
        id: "exe-2",
        question: "Quais ferramentas judiciais modernas são utilizadas para localizar bens de devedores?",
        answer: "Utilizamos convênios avançados como Sisbajud (bloqueio de contas e investimentos, inclusive com a ferramenta de 'teimosinha'), Renajud (veículos), Infojud (declarações fiscais), Censec e SNIPER.",
      },
      {
        id: "exe-3",
        question: "Quando é possível pedir a Desconsideração da Personalidade Jurídica do devedor?",
        answer: "Nos termos do art. 50 do Código Civil, mediante comprovação de abuso da personalidade jurídica caracterizado por desvio de finalidade ou confusão patrimonial entre a empresa e seus sócios administradores.",
      },
      {
        id: "exe-4",
        question: "Quais são as medidas atípicas na execução cível (art. 139, IV do CPC)?",
        answer: "São medidas coercitivas e indutivas aplicadas pelo juiz quando esgotados os meios normais, tais como suspensão de CNH, retenção temporária de passaporte e proibição de participação em licitações públicas.",
      },
      {
        id: "exe-5",
        question: "O devedor pode ter seu salário ou imóvel de família penhorado?",
        answer: "A regra geral protege o bem de família (Lei 8.009/90) e salários. Contudo, a jurisprudência recente do STJ admite mitigação para penhora de percentuais de remuneração que não comprometam a subsistência digna, e exceções no bem de família (dívidas de IPTU e condomínio).",
      },
      {
        id: "exe-6",
        question: "O que fazer quando o devedor não é encontrado para citação?",
        answer: "Requer-se pesquisas de endereços atualizados nos bancos de dados oficiais (Bacenjud, Receita Federal, operadoras de telefonia). Esgotadas as diligências, procede-se à citação por edital com nomeação de curador especial.",
      },
      {
        id: "exe-7",
        question: "Como funciona a penhora sobre faturamento de pessoa jurídica?",
        answer: "Quando a empresa devedora não possui bens livres e desembaraçados para garantir a dívida, o juiz pode fixar a constrição de um percentual mensal do faturamento bruto que não inviabilize o funcionamento da sociedade.",
      },
      {
        id: "exe-8",
        question: "Como blindar novos contratos para que se tornem títulos executivos válidos?",
        answer: "É imperativo que o contrato defina claramente o objeto, valor certo, data de vencimento e contenha a assinatura das partes e de duas testemunhas qualificadas (ou certificado digital ICP-Brasil válido).",
      },
    ],
  },
];
