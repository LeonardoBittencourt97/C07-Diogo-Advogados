import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { OFFICE_INFO } from "@/lib/data";
import { MessageSquare, Globe, MapPin, ShieldCheck, ArrowUpRight, Scale } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Canais Oficiais & Links | Diogo & Mazeiro Advogados",
  description:
    "Acesse rapidamente o WhatsApp oficial, Instagram, endereço e website institucional do Diogo & Mazeiro Advogados e Associados em Curitiba/PR.",
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
    "Empresarial & Contratos",
    "Trabalhista Corporativo",
    "Cível & Danos",
    "Execução Cível de Dívidas",
    "Imobiliário & Consumidor",
  ];

  return (
    <main className="h-screen h-[100dvh] max-h-screen max-h-[100dvh] w-screen max-w-full overflow-hidden bg-[#F9FAFB] text-[#111827]">
      {/* ===================== VERSÃO DESKTOP (Split Screen 50/50 - Sem Scroll) ===================== */}
      <div className="hidden lg:grid lg:grid-cols-2 h-full w-full overflow-hidden">
        {/* LADO ESQUERDO: Fundo Escuro #0B0F14 com Logo Branca ocupando 40% da área */}
        <div className="relative bg-[#0B0F14] text-white flex flex-col justify-between p-8 xl:p-12 h-full overflow-hidden border-r border-[#7A9283]/30">
          {/* Padrão geométrico sálvia */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-desktop-fixed" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#7A9283" strokeWidth="0.75" />
                  <circle cx="0" cy="0" r="1.5" fill="#7A9283" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-desktop-fixed)" />
            </svg>
          </div>

          {/* Topo Esquerdo */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7A9283]/40 bg-white/5 backdrop-blur-md text-xs font-heading uppercase tracking-wider text-[#7A9283]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{OFFICE_INFO.oabList}</span>
            </div>
            <span className="text-[0.6875rem] font-heading uppercase tracking-widest text-[#7A9283]">
              Curitiba - PR
            </span>
          </div>

          {/* Centro Esquerdo com Logo Antiga ocupando 60% do espaço */}
          <div className="relative z-10 my-auto py-4 flex flex-col items-center text-center w-full">
            {/* Logo antiga branca mantida no mesmo local, ampliada para 60% do espaço */}
            <div className="relative w-[60%] min-w-[340px] max-w-[560px] h-28 xl:h-36 mb-6">
              <Image
                src="/logo_semfundo_branca.png"
                alt="Diogo & Mazeiro Advogados e Associados"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1280px) 420px, 560px"
              />
            </div>

            <div className="h-0.5 w-16 bg-[#7A9283]/40 mb-5" />

            <h1 className="font-heading text-xl xl:text-2xl uppercase tracking-wide max-w-sm leading-snug">
              Soluções Jurídicas Estratégicas com Segurança e Rigor Técnico
            </h1>

            <p className="font-body text-xs xl:text-sm text-[#7A9283] max-w-xs mt-3 leading-relaxed">
              Mais de 8 anos de solidez em consultoria corporativa e contencioso em Curitiba e âmbito nacional.
            </p>
          </div>

          {/* Rodapé Esquerdo */}
          <div className="relative z-10 text-[0.6875rem] font-body text-[#7A9283]/80 flex items-center justify-between border-t border-[#7A9283]/20 pt-3">
            <span>Sede: Capão Raso, Curitiba/PR</span>
            <span>© 2025 Diogo & Mazeiro</span>
          </div>
        </div>

        {/* LADO DIREITO: Fundo Claro #F9FAFB com Ações e Especialidades (Sem Scroll) */}
        <div className="bg-[#F9FAFB] flex flex-col justify-between p-8 xl:p-12 h-full overflow-hidden">
          <div className="max-w-md mx-auto w-full flex flex-col justify-center h-full my-auto space-y-4">
            {/* Cabeçalho com a Logo Nova centralizada na parte superior (ocupando 40% do espaço) */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-[65%] max-w-[300px] xl:max-w-[340px] h-16 xl:h-20 mb-3">
                <Image
                  src="/logo_nova_para_menu.png"
                  alt="Diogo & Mazeiro Advogados e Associados"
                  fill
                  priority
                  className="object-contain object-center"
                  sizes="(max-width: 1280px) 300px, 340px"
                />
              </div>
              <span className="font-heading uppercase text-[0.6875rem] tracking-widest text-[#7A9283] block mb-1">
                Acesso Rápido
              </span>
              <h2 className="font-heading text-2xl xl:text-3xl uppercase tracking-tight text-[#111827]">
                Canais de Atendimento
              </h2>
              <p className="font-body text-xs text-gray-600 mt-0.5">
                Escolha o canal desejado para se comunicar diretamente com nossa equipe.
              </p>
            </div>

            {/* 4 Botões de Ação */}
            <div className="space-y-2.5">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                const isInternal = item.href.startsWith("/");
                const buttonClasses = `w-full p-3.5 xl:p-4 rounded-xl flex items-center justify-between group transition-all duration-300 border ${
                  item.highlight
                    ? "bg-[#143525] text-white border-[#143525] hover:bg-[#0d2319] shadow-sm hover:shadow-md"
                    : "bg-white text-[#111827] border-[#7A9283]/30 hover:border-[#7A9283] shadow-2xs hover:shadow-xs"
                }`;

                const content = (
                  <>
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          item.highlight ? "bg-white/10 text-white" : "bg-[#F3F4F6] text-[#143525]"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className="font-heading text-sm uppercase tracking-wide block font-semibold leading-snug">
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
                      className={`w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
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
            <div className="p-4 rounded-xl border border-[#7A9283]/30 bg-white shadow-2xs">
              <div className="flex items-center gap-1.5 text-[0.6875rem] uppercase tracking-wider font-heading text-[#7A9283] mb-2">
                <Scale className="w-3.5 h-3.5" />
                <span>Especialidades Jurídicas</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {specialties.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-0.5 rounded-md text-[0.6875rem] font-body bg-[#F3F4F6] text-gray-700 border border-[#7A9283]/20"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Rodapé Direito */}
          <div className="text-center text-[0.6875rem] font-body text-gray-500 pt-2 border-t border-[#7A9283]/20">
            {OFFICE_INFO.address}
          </div>
        </div>
      </div>

      {/* ===================== VERSÃO MOBILE (100dvh - Sem Scroll e Logo a 40%) ===================== */}
      <div className="lg:hidden relative flex flex-col justify-between h-full max-h-[100dvh] w-full px-5 py-3 overflow-hidden bg-[#F9FAFB]">
        {/* Padrão geométrico suave */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-mobile-fixed" width="35" height="35" patternUnits="userSpaceOnUse">
                <path d="M 35 0 L 0 0 0 35" fill="none" stroke="#7A9283" strokeWidth="0.5" />
                <circle cx="0" cy="0" r="1.2" fill="#7A9283" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-mobile-fixed)" />
          </svg>
        </div>

        {/* Topo Mobile com Logo Nova Ocupando 60% da Tela e Posicionada Mais para o Centro */}
        <div className="relative z-10 flex flex-col items-center text-center pt-6 sm:pt-8 pb-2">
          {/* Logo nova ocupando 60% da largura da tela */}
          <div className="relative w-[60vw] max-w-[270px] h-16 sm:h-20 mb-3">
            <Image
              src="/logo_nova_para_menu.png"
              alt="Diogo & Mazeiro Advogados e Associados"
              fill
              priority
              className="object-contain object-center"
              sizes="60vw"
            />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border border-[#7A9283]/40 bg-white/90 text-[0.625rem] font-heading uppercase tracking-wider text-[#143525] shadow-2xs">
            <ShieldCheck className="w-3 h-3 text-emerald-700" />
            <span>{OFFICE_INFO.oabList}</span>
          </div>
        </div>

        {/* Centro Mobile: 4 Botões de Ação Compactos */}
        <div className="relative z-10 w-full max-w-xs mx-auto space-y-2 my-auto py-1">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            const isInternal = item.href.startsWith("/");
            const buttonClasses = `w-full py-2 px-3 rounded-xl flex items-center justify-between group transition-all duration-300 border ${
              item.highlight
                ? "bg-[#143525] text-white border-[#143525] shadow-sm"
                : "bg-white text-[#111827] border-[#7A9283]/35 shadow-2xs"
            }`;

            const content = (
              <>
                <div className="flex items-center gap-2.5 text-left">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      item.highlight ? "bg-white/15 text-white" : "bg-[#F3F4F6] text-[#143525]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-heading text-xs uppercase tracking-wide block font-semibold leading-tight">
                      {item.title}
                    </span>
                    <span
                      className={`font-body text-[0.5625rem] block leading-tight ${
                        item.highlight ? "text-white/80" : "text-gray-500"
                      }`}
                    >
                      {item.subtitle}
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  className={`w-3.5 h-3.5 flex-shrink-0 ${
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

        {/* Rodapé Mobile com Especialidades e Copyright */}
        <div className="relative z-10 text-center space-y-1 pb-0.5">
          <div className="w-full max-w-xs mx-auto py-1 px-2 rounded-lg bg-white/80 border border-[#7A9283]/20">
            <span className="font-body text-[0.5625rem] text-gray-600 block truncate">
              Empresarial • Trabalhista • Cível • Execução • Imobiliário
            </span>
          </div>
          <p className="font-body text-[0.5625rem] text-gray-500">
            © 2025 Diogo & Mazeiro Advogados • Curitiba/PR
          </p>
        </div>
      </div>
    </main>
  );
}
