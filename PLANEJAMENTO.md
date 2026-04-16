# MVR - Remodelações e Eletricidade | Planejamento do Site

## Dados da Empresa

| Campo | Valor |
|-------|-------|
| **Nome da Empresa** | MVR - Remodelações e Eletricidade |
| **Responsável** | André da Silva Mota |
| **Morada** | Rua Padre Cruz Nº49, Famões |
| **Telefone** | 927 769 445 |
| **Email** | geral.mvreletricidade@gmail.com |
| **WhatsApp** | 927 769 445 |
| **IBAN** | PT50 3560 0001 9001 8654 1685 3 |
| **MBWay** | 927 769 445 |
| **NIF** | (a definir) |

---

## Identidade Visual (extraída do app existente)

| Elemento | Valor |
|----------|-------|
| **Primary (Dark Navy)** | `#1B3A4B` |
| **Primary Light** | `#2C5F7C` |
| **Secondary (Orange/Accent)** | `#D4842A` |
| **Secondary Light** | `#E8A54D` |
| **Background** | `#F5F7FA` |
| **Surface** | `#FFFFFF` |
| **Roundness** | `12px` |
| **Logo** | `assets/logo.png` / `assets/mvr-logo-original.jpg` |

### Paleta do Site (adaptada para web)

- **Dark Navy (hero, navbar, footer):** `#1B3A4B`
- **Charcoal (textos, dark sections):** `#14171B`
- **Electric Orange (CTAs, accents):** `#D4842A`
- **Orange Light (hover states):** `#E8A54D`
- **White sections:** `#FFFFFF`
- **Light Gray background:** `#F5F7FA`
- **Text primary:** `#1A1C1E`
- **Text secondary:** `#44474E`

---

## Stack Tecnológica

| Tecnologia | Propósito |
|-----------|-----------|
| **Next.js 14** | Framework React com static export (`output: 'export'`) |
| **TailwindCSS 3** | Styling utility-first |
| **Framer Motion** | Animações e transições |
| **React Icons** | Iconografia (Lucide / Hero Icons) |
| **EmailJS** | Envio de formulário direto para email (grátis até 200/mês) |
| **Next Image** | Otimização e lazy loading de imagens |
| **Google Maps Embed** | Mapa de localização (grátis via iframe) |

### Deploy

| Serviço | Plano |
|---------|-------|
| **Vercel** | Free tier (static export) |
| **Domínio** | Pode usar `.vercel.app` ou domínio próprio |
| **Custo mensal** | 0,00 EUR |

---

## Estrutura do Site

### Navbar (sticky, transparente no hero, sólida no scroll)

- Logo MVR
- Links: Serviços | Trabalhos | Sobre | Contacto
- CTA: "Pedir Orçamento" (botão destaque)
- Menu hamburger no mobile

---

### 1. Hero Section

- **Background:** Imagem de obra/remodelação com overlay gradient escuro
- **Headline:** "Remodelação e Eletricidade com Qualidade e Confiança"
- **Subheadline:** "Transformamos espaços com soluções elétricas e remodelações profissionais em Lisboa e arredores."
- **CTA Primário:** "Pedir Orçamento" (botão laranja grande)
- **CTA Secundário:** "Ver Trabalhos" (botão outline branco)
- **Mobile:** CTA fixo/sticky no bottom da tela
- **Animação:** Fade-in do texto, scale suave da imagem

---

### 2. Services Section (Serviços)

**Título:** "Os Nossos Serviços"
**Subtítulo:** "Soluções completas em eletricidade e remodelação"

| Serviço | Descrição |
|---------|-----------|
| Instalações Elétricas | Instalação e manutenção de sistemas elétricos residenciais e comerciais |
| Remodelação de Apartamentos | Renovação completa de interiores com acabamentos de qualidade |
| Iluminação | Projetos de iluminação moderna e eficiente |
| Cozinhas | Remodelação completa de cozinhas com design funcional |
| Casas de Banho | Renovação de casas de banho com materiais premium |
| Reparações | Serviço rápido de reparações elétricas e gerais |
| Passagem de Cabos | Instalação organizada de cablagem elétrica e dados |
| Quadros Elétricos | Instalação e atualização de quadros elétricos |
| Calhas Técnicas | Instalação de calhas para organização de cablagem |

**Design:** Grid 3x3 (desktop), 2 colunas (tablet), 1 coluna (mobile)
**Cards:** Ícone + título + descrição + hover com scale + shadow

---

### 3. Before/After Gallery (Antes e Depois)

**Título:** "Os Nossos Trabalhos"
**Subtítulo:** "Veja a transformação dos nossos projetos"

- Galeria com slider antes/depois (drag handle)
- Categorias: Cozinhas | Apartamentos | Eletricidade | Acabamentos
- Modal fullscreen ao clicar
- Animação de reveal ao scroll

**Nota:** Usar imagens placeholder premium inicialmente. O cliente depois substitui por fotos reais dos projetos.

---

### 4. Why Choose Us (Porquê a MVR)

**Título:** "Porquê Escolher a MVR"

| Card | Ícone | Descrição |
|------|-------|-----------|
| Pontualidade | Clock | Cumprimos prazos rigorosamente |
| Segurança | Shield | Trabalho em conformidade com normas |
| Materiais de Qualidade | Star | Utilizamos apenas materiais certificados |
| Orçamento Transparente | FileText | Sem surpresas, preços claros desde o início |

**Design:** 4 cards em row, com ícone animado, counter/número de destaque
**Animação:** Fade-in staggered ao entrar no viewport

---

### 5. About Section (Sobre a MVR)

**Título:** "Sobre a MVR"

**Texto:**
> Com anos de experiência em eletricidade e remodelação, a MVR é uma referência em Lisboa e arredores. Liderada por André da Silva Mota, a nossa equipa combina conhecimento técnico com atenção ao detalhe para transformar cada espaço.

**Elementos:**
- Foto da equipa/técnico (placeholder)
- Badges de confiança (anos de experiência, projetos realizados, clientes satisfeitos)
- Área de atuação: Lisboa, Famões, Odivelas, Amadora, Sintra e arredores

---

### 6. Contact / Lead Form (Pedir Orçamento)

**Título:** "Pedir Orçamento Grátis"
**Subtítulo:** "Resposta em menos de 24 horas"

**Campos do formulário:**

| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| Nome | text | Sim |
| Telefone | tel | Sim |
| Email | email | Sim |
| Morada | text | Não |
| Tipo de Serviço | select | Sim |
| Mensagem | textarea | Não |

**Placeholder da mensagem:** "Descreva o que pretende fazer na sua obra ou instalação"

**Opções do select (Tipo de Serviço):**
- Instalação Elétrica
- Remodelação de Apartamento
- Remodelação de Cozinha
- Remodelação de Casa de Banho
- Iluminação
- Reparação
- Quadro Elétrico
- Outro

**Submit:** Envio via EmailJS para `geral.mvreletricidade@gmail.com`
**Feedback:** Toast de sucesso / erro

---

### 7. Contact Info Block

- Telefone: 927 769 445 (link clickável)
- WhatsApp: 927 769 445 (link direto)
- Email: geral.mvreletricidade@gmail.com
- Morada: Rua Padre Cruz Nº49, Famões
- Google Maps embed (iframe)

---

### 8. WhatsApp Float Button

- Botão fixo bottom-right
- Ícone WhatsApp verde
- Link: `https://wa.me/351927769445`
- Tooltip: "Fale connosco"
- Animação pulse suave

---

### 9. Footer

- Logo MVR
- Contactos resumidos
- Links rápidos dos serviços
- Área de serviço
- Copyright: "© 2026 MVR - Remodelações e Eletricidade. Todos os direitos reservados."

---

## SEO

### Meta Tags

```html
<title>MVR - Remodelações e Eletricidade em Lisboa | Orçamentos Grátis</title>
<meta name="description" content="Serviços profissionais de eletricidade e remodelação em Lisboa. Instalações elétricas, remodelação de apartamentos, cozinhas e casas de banho. Peça orçamento grátis." />
<meta name="keywords" content="eletricista lisboa, remodelação apartamento lisboa, remodelação cozinha, instalação elétrica, eletricista famões, remodelação odivelas" />
```

### Estrutura Semântica

- `<header>` - Navbar
- `<main>` - Conteúdo principal
- `<section>` - Cada bloco com `id` para navegação
- `<footer>` - Footer
- Heading hierarchy: H1 > H2 > H3

### Local SEO

- Schema.org LocalBusiness JSON-LD
- Open Graph tags
- Canonical URL

---

## Estrutura de Pastas

```
site/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── projects/
│   │   ├── team/
│   │   └── logo.png
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── About.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ContactInfo.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── Footer.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── SectionTitle.tsx
│   │       └── AnimatedSection.tsx
│   ├── data/
│   │   ├── services.ts
│   │   ├── projects.ts
│   │   └── company.ts
│   └── lib/
│       └── emailjs.ts
├── tailwind.config.ts
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

---

## Configuração EmailJS

1. Criar conta gratuita em emailjs.com
2. Adicionar serviço de email (Gmail: geral.mvreletricidade@gmail.com)
3. Criar template de email com variáveis do formulário
4. Usar Service ID, Template ID e Public Key no código

**Variáveis do template:**
- `{{from_name}}`
- `{{from_email}}`
- `{{phone}}`
- `{{address}}`
- `{{service_type}}`
- `{{message}}`

---

## Performance Checklist

- [ ] Imagens otimizadas (WebP, lazy loading)
- [ ] Font loading otimizado (font-display: swap)
- [ ] CSS minificado (Tailwind purge)
- [ ] Static export (zero server cost)
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals otimizados
- [ ] Responsive em todos os breakpoints

---

## Fases de Desenvolvimento

### Fase 1 - Setup e Estrutura
- Inicializar Next.js + Tailwind + Framer Motion
- Configurar tema e cores da marca
- Estrutura de componentes

### Fase 2 - Componentes Core
- Navbar + Hero
- Services + Why Choose Us
- About

### Fase 3 - Conversão
- Contact Form + EmailJS
- WhatsApp Button
- Gallery (antes/depois)

### Fase 4 - Polish
- Footer
- SEO + Meta tags
- Animações
- Responsividade final
- Testes mobile

### Fase 5 - Deploy
- Build static export
- Deploy Vercel
- Testar formulário
- Verificar SEO
