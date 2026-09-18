import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { OFFICE_INFO } from "@/lib/data";
import { MessageSquare, Globe, MapPin, ShieldCheck, ArrowUpRight, Scale } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Canais Oficiais & Links | Diogo & Mazeiro Advogados",
  description: "Acesse rapidamente o WhatsApp oficial, Instagram, endereço e website institucional do Diogo & Mazeiro Advogados e Associados em Curitiba/PR.",
  alternates: {
    canonical: "https://diogomazeiro.adv.br/links",
  },
};

export default function LinksPage() {
  const quickLinks = [
    {
      id: "whatsapp",
      title: "Atendimento WhatsApp Direto",
      subtitle: "(41) 3242-8710 • Fale com nossos advogados",
      href: OFFICE_INFO.whatsappUrl,
      icon: MessageSquare,
      highlight: true,
    },
    {
      id: "website",
      title: "Website Oficial Institucional",
      subtitle: "Conheça nossas áreas, artigos e corpo jurídico",
      href: "/",
      icon: Globe,
      highlight: false,
    },
    {
      id: "instagram",
      title: "Siga-nos no Instagram",
      subtitle: "@diogoadvogados • Conteúdo informativo",
      href: OFFICE_INFO.social.instagram,
      icon: InstagramIcon,
      highlight: false,
    },
    {
      id: "maps",
      title: "Localização da Sede (Google Maps)",
      subtitle: "Av. Winston Churchill, 1824 - Capão Raso",
      href: "https://maps.google.com/?q=Av.+Winston+Churchill,+1824+-+Cap%C3%A3o+Raso,+Curitiba+-+PR,+81130-000",
      icon: MapPin,
      highlight: false,
    },
  ];

  const specialties = [
    "Direito Empresarial & Contratos",
    "Direito do Trabalho Corporativo",
    "Direito Cível & Danos",
    "Execução Cível & Recuperação de Ativos",
    "Direito Imobiliário & Consumidor",
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] flex flex-col justify-between">
      {/* ===================== VERSÃO DESKTOP (Split Screen 50/50) ===================== */}
      <div className="hidden lg:grid lg:grid-cols-2 min-h-screen w-full">
        {/* LADO ESQUERDO: Fundo Escuro #0B0F14 com Logo Branca e Grafismos Geométricos */}
        <div className="relative bg-[#0B0F14] text-white flex flex-col justify-between p-12 xl:p-16 overflow-hidden border-r border-[#7A9283]/30">
          {/* Padrão geométrico de linhas finas interconectadas em verde sálvia */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-desktop" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#7A9283" strokeWidth="0.75" />
                  <circle cx="0" cy="0" r="2" fill="#7A9283" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-desktop)" />
            </svg>
          </div>

          {/* Topo Esquerdo: Badge OAB */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#7A9283]/40 bg-white/5 backdrop-blur-md text-xs font-heading uppercase tracking-wider text-[#7A9283]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{OFFICE_INFO.oabList}</span>
            </div>
          </div>

          {/* Centro Esquerdo: Logo Branca Imponente e Frase Institucional */}
          <div className="relative z-10 my-auto py-12 flex flex-col items-center text-center">
            <div className="relative h-24 w-80 max-w-full mb-8">
              <Image
                src="/logo_semfundo_branca.png"
                alt="Diogo & Mazeiro Advogados e Associados"
                fill
                priority
                className="object-contain"
                sizes="320px"
              />
            </div>

            <div className="h-0.5 w-16 bg-[#7A9283]/40 mb-6" />

            <h1 className="font-heading text-2xl xl:text-3xl uppercase tracking-wide max-w-md leading-snug">
              Soluções Jurídicas Estratégicas com Segurança e Rigor Técnico
            </h1>

            <p className="font-body text-sm text-[#7A9283] max-w-sm mt-3 leading-relaxed">
              Mais de 8 anos de experiência em assessoria corporativa e contenciosa em Curitiba/PR.
            </p>
          </div>

          {/* Rodapé Esquerdo */}
          <div className="relative z-10 text-xs font-body text-[#7A9283]/80 flex items-center justify-between">
            <span>Curitiba - Paraná</span>
            <span>© 2025 Diogo & Mazeiro</span>
          </div>
        </div>

        {/* LADO DIREITO: Fundo Claro #F9FAFB com Cards, Especialidades e Ações Rápidas */}
        <div className="bg-[#F9FAFB] flex flex-col justify-between p-12 xl:p-16 overflow-y-auto">
          <div className="max-w-md mx-auto w-full">
            {/* Cabeçalho do Lado Direito */}
            <div className="mb-8">
              <span className="font-heading uppercase text-xs tracking-widest text-[#7A9283] block mb-2">
                Acesso Rápido
              </span>
              <h2 className="font-heading text-3xl uppercase tracking-tight text-[#111827]">
                Canais de Atendimento
              </h2>
              <p className="font-body text-sm text-gray-600 mt-1">
                Escolha abaixo o canal desejado para se comunicar com nossa equipe jurídica.
              </p>
            </div>

            {/* Lista de Botões de Ação */}
            <div className="space-y-4 mb-10">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                const isInternal = item.href.startsWith("/");
                const buttonClasses = `w-full p-4 sm:p-5 rounded-2xl flex items-center justify-between group transition-all duration-300 border ${
                  item.highlight
                    ? "bg-[#143525] text-white border-[#143525] hover:bg-[#0d2319] shadow-md hover:shadow-lg"
                    : "bg-white text-[#111827] border-[#7A9283]/30 hover:border-[#7A9283] shadow-2xs hover:shadow-sm"
                }`;

                const content = (
                  <>
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          item.highlight ? "bg-white/10 text-white" : "bg-[#F3F4F6] text-[#143525]"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <span className="font-heading text-base uppercase tracking-wide block font-semibold leading-snug">
                          {item.title}
                        </span>
                        <span
                          className={`font-body text-xs block ${
                            item.highlight ? "text-white/80" : "text-gray-500"
                          }`}
                        >
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={`w-5 h-5 flex-shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${
                        item.highlight ? "text-white/80" : "text-[#7A9283]"
                      }`}
                    />
                  </>
                );

                return isInternal ? (
                  <Link key={item.id} href={item.href} className={buttonClasses}>
                    {content}
                  </Link>
                ) : (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses}
                  >
                    {content}
                  </a>
                );
              })}
            </div>

            {/* Card de Especialidades */}
            <div className="p-6 rounded-2xl border border-[#7A9283]/30 bg-white">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-heading text-[#7A9283] mb-3">
                <Scale className="w-4 h-4" />
                <span>Especialidades Jurídicas</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {specialties.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-md text-xs font-body bg-[#F3F4F6] text-gray-700 border border-[#7A9283]/20"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Rodapé Direito */}
          <div className="text-center pt-8 border-t border-[#7A9283]/20 text-xs font-body text-gray-500">
            {OFFICE_INFO.address}
          </div>
        </div>
      </div>

      {/* ===================== VERSÃO MOBILE ===================== */}
      <div className="lg:hidden relative flex flex-col justify-between min-h-screen px-6 py-10 bg-[#F9FAFB]">
        {/* Padrão geométrico de linhas finas interconectadas em verde sálvia */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-mobile" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#7A9283" strokeWidth="0.5" />
                <circle cx="0" cy="0" r="1.5" fill="#7A9283" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-mobile)" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Logo preta no topo (aproximadamente 35% de largura) */}
          <div className="relative w-[45%] max-w-[170px] h-14 mb-4">
            <Image
              src="/logo_semfundo_preta.png"
              alt="Diogo & Mazeiro Advogados e Associados"
              fill
              priority
              className="object-contain"
              sizes="170px"
            />
          </div>

          {/* Nome do Escritório */}
          <h1 className="font-heading text-lg sm:text-xl uppercase tracking-wide text-[#111827] font-semibold mb-2">
            Diogo & Mazeiro Advogados
          </h1>

          {/* Badge das OABs */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#7A9283]/40 bg-white/90 text-[0.6875rem] font-heading uppercase tracking-wider text-[#143525] mb-6 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>{OFFICE_INFO.oabList}</span>
          </div>

          {/* Subtítulo */}
          <p className="font-body text-xs text-gray-600 max-w-xs mb-8">
            Soluções Jurídicas Estratégicas em Curitiba/PR com mais de 8 anos de experiência corporativa.
          </p>

          {/* Botões Destacados Mobile */}
          <div className="w-full space-y-3.5 max-w-sm mb-8">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              const isInternal = item.href.startsWith("/");
              const buttonClasses = `w-full p-4 rounded-2xl flex items-center justify-between group transition-all duration-300 border ${
                item.highlight
                  ? "bg-[#143525] text-white border-[#143525] shadow-md"
                  : "bg-white text-[#111827] border-[#7A9283]/35 shadow-2xs hover:border-[#7A9283]"
              }`;

              const content = (
                <>
                  <div className="flex items-center gap-3.5 text-left">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        item.highlight ? "bg-white/10 text-white" : "bg-[#F3F4F6] text-[#143525]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-heading text-sm uppercase tracking-wide block font-semibold">
                        {item.title}
                      </span>
                      <span
                        className={`font-body text-[0.6875rem] block ${
                          item.highlight ? "text-white/80" : "text-gray-500"
                        }`}
                      >
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight
                    className={`w-4 h-4 flex-shrink-0 ${
                      item.highlight ? "text-white/80" : "text-[#7A9283]"
                    }`}
                  />
                </>
              );

              return isInternal ? (
                <Link key={item.id} href={item.href} className={buttonClasses}>
                  {content}
                </Link>
              ) : (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClasses}
                >
                  {content}
                </a>
              );
            })}
          </div>

          {/* Especialidades no Mobile */}
          <div className="w-full max-w-sm p-4 rounded-2xl bg-white border border-[#7A9283]/30 text-left mb-6">
            <span className="font-heading uppercase text-[0.6875rem] tracking-wider text-[#7A9283] block mb-2">
              Áreas de Atuação
            </span>
            <p className="font-body text-xs text-gray-600 leading-relaxed">
              Empresarial • Trabalhista • Cível • Execuções de Dívidas • Imobiliário
            </p>
          </div>
        </div>

        {/* Rodapé Mobile */}
        <div className="relative z-10 text-center pt-6 border-t border-[#7A9283]/20 font-body text-[0.6875rem] text-gray-500">
          <p>© 2025 Diogo & Mazeiro Advogados e Associados</p>
          <p className="text-[0.625rem] text-[#7A9283] mt-0.5">{OFFICE_INFO.addressShort}</p>
        </div>
      </div>
    </div>
  );
}
