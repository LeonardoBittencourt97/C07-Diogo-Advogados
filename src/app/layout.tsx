import type { Metadata } from "next";
import { Oswald, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScroll } from "@/components/SmoothScroll";
import { getLegalServiceSchema } from "@/lib/schema";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://diogomazeiro.adv.br"),
  title: {
    default: "Diogo & Mazeiro Advogados e Associados | Curitiba - PR",
    template: "%s | Diogo & Mazeiro Advogados",
  },
  description:
    "Escritório de advocacia em Curitiba/PR. Mais de 8 anos de solidez em Direito Empresarial, Contratos, Direito do Trabalho, Cível e Execução Estratégica. OAB/PR 92.199, 96.043 e 112.323.",
  keywords: [
    "advogado curitiba",
    "advogado empresarial curitiba",
    "advocacia trabalhista curitiba",
    "direito civil curitiba",
    "execucao civil dividas curitiba",
    "diogo e mazeiro advogados",
    "escritorio advocacia capao raso",
  ],
  authors: [{ name: "Diogo & Mazeiro Advogados e Associados" }],
  creator: "Diogo & Mazeiro Advogados e Associados",
  publisher: "Diogo & Mazeiro Advogados e Associados",
  alternates: {
    canonical: "https://diogomazeiro.adv.br",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://diogomazeiro.adv.br",
    title: "Diogo & Mazeiro Advogados e Associados | Curitiba - PR",
    description:
      "Soluções Jurídicas Estratégicas com Segurança, Rigor Técnico e Transparência. Mais de 8 anos de experiência corporativa e contenciosa.",
    siteName: "Diogo & Mazeiro Advogados e Associados",
    images: [
      {
        url: "/logo_semfundo_preta.png",
        width: 1200,
        height: 630,
        alt: "Diogo & Mazeiro Advogados e Associados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diogo & Mazeiro Advogados e Associados | Curitiba - PR",
    description:
      "Soluções Jurídicas Estratégicas com Segurança, Rigor Técnico e Transparência. Mais de 8 anos de experiência em Curitiba.",
    images: ["/logo_semfundo_preta.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = getLegalServiceSchema();

  return (
    <html
      lang="pt-BR"
      className={`${oswald.variable} ${sourceSerif.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body selection:bg-[var(--accent)] selection:text-white">
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
