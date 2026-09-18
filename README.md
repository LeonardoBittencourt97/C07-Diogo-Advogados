# Diogo & Mazeiro Advogados e Associados — Website & Landing Page

Aplicação web institucional completa, responsiva e de altíssimo padrão para o escritório **Diogo & Mazeiro Advogados e Associados**, sediado em Curitiba/PR.

Desenvolvido com inspiração estética editorial refinada (*davidlaxer.com*), bordas milimétricas, tipografia de prestígio e em estrita conformidade com o Código de Ética da OAB (Resolução CFOAB 02/2015) e o Provimento 205/2021 do CFOAB.

---

## 🏛️ Dados Institucionais

- **Escritório**: Diogo & Mazeiro Advogados e Associados
- **Endereço**: Av. Winston Churchill, 1824 - 6º andar - sala 614 - Capão Raso, Curitiba - PR, CEP 81130-000
- **Telefone / WhatsApp**: (41) 3242-8710
- **E-mail**: diogoemazeiroassessoria@gmail.com
- **Tempo de Mercado**: Mais de 8 anos de solidez jurídica
- **Inscrições**: OAB/PR 92.199 • OAB/PR 96.043 • OAB/PR 112.323
- **Horário de Atendimento**: Segunda a Sexta, das 09:00 às 18:00

---

## ⚖️ Corpo Jurídico

1. **Dr. Lucas Diogo Pereira** (Sócio Proprietário e Fundador • OAB/PR 92.199)
   - Pós-graduado em Direito Empresarial.
   - Atuação destacada em Direito Empresarial, Contratos, Imobiliário, Consumidor e Família.
2. **Dr. Bruno Almeida Mazeiro** (Sócio Proprietário e Fundador • OAB/PR 96.043)
   - Pós-graduado em Direito do Trabalho.
   - Especialista em contencioso e consultivo trabalhista corporativo, cível, família e previdenciário.
3. **Dra. Ariane Cristina Savi** (Advogada Associada • OAB/PR 112.323)
   - Especialista em Direito do Trabalho e pós-graduanda em Processo do Trabalho.
   - Ampla expertise em Execução Cível estratégica e recuperação de ativos judiciais.

---

## 🎨 Design System & Estética

- **Inspiração**: `davidlaxer.com` (design editorial minimalista, numeração de blocos sequencial, bordas milimétricas e marcadores geométricos).
- **Tipografia**:
  - Títulos & Headers: **Oswald** (Google Fonts)
  - Textos & Artigos: **Source Serif 4** (Google Fonts)
- **Paleta "Prestígio Jurídico" (60-30-10)**:
  - Fundo (60%): `#F9FAFB` (Claro) / `#0B0F14` (Escuro)
  - Leitura (30%): `#111827` (Claro) / `#E5E7EB` (Escuro)
  - Destaque/CTAs (5%): `#143525` (Verde Imperial no claro) / `#1F573B` no escuro
  - Suporte/Bordas (5%): `#7A9283` (Verde Sálvia Acinzentado)

---

## 🚀 Stack Técnica

- **Framework**: Next.js 15+ (App Router) + React 19 + TypeScript
- **Estilização**: Tailwind CSS v4
- **Scroll & Animações**: Lenis + GSAP
- **Ícones**: `lucide-react` + SVGs otimizados
- **Tema**: Toggle Claro/Escuro com persistência em `localStorage`

---

## 🧭 Estrutura de Rotas

- `/` — Landing Page principal com 12 seções completas (Hero, Sobre, Equipe, Áreas de Atuação, Artigos Educativos OAB, Depoimentos Google Reviews, Como Atuamos, FAQ dinâmico com 32 perguntas, Contato & Google Maps, Footer ético e WhatsApp flutuante).
- `/links` — Rota Link-in-Bio com Split Screen 50/50 no Desktop e padrão geométrico no Mobile para o Instagram.
- `/sitemap.xml` — Mapa do site indexável.
- `/robots.txt` — Diretrizes de rastreamento para buscadores.
- `/llms.txt` — Arquivo informativo para agentes e IAs.

---

## 💻 Como Rodar Localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Gerar build de produção
npm run build

# Iniciar servidor de produção
npm start
```
