# WEBWORKS STUDIO

> **ENGINEERED FOR WHAT’S NEXT.**  
> *BUILD BEYOND.*

Webworks Studio is an independent technology and development studio designing and engineering production-quality digital experiences, websites, and web applications.

---

## 1. Brand Identity & Design System

### Positioning
Independent technology and development studio delivering high-craft digital products, technical implementations, and white-label engineering for ambitious brands and creative studios.

### Color Palette
- **Obsidian**: `#0B0D0C` (Primary background)
- **Electric Lime**: `#D5FF36` (Selective technical accent)
- **Graphite**: `#171B19` (Elevated surfaces & card backdrops)
- **Off-white**: `#E8EAE5` (Primary typography and UI borders)

### Typography
- **Headings**: `Space Grotesk` (Bold, architectural display scales)
- **Body**: `Inter` (Legible, neutral content presentation)
- **Technical Detail**: `IBM Plex Mono` (Labels, metadata, navigation markers)

### Design Philosophy
- Dark, premium visual identity
- Oversized typography with asymmetrical layouts
- Experimental grid systems with 0.5px technical borders
- High contrast with purposeful whitespace
- Selective, disciplined use of electric lime for hierarchy
- Free of generic SaaS templates, excessive gradients, or fake client testimonials

---

## 2. Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server & Client Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) with custom color extensions
- **Motion & Interactions**: [GSAP 3.12](https://greensock.com/gsap/) with graceful reduced-motion fallbacks
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography Engine**: Next.js Google Fonts (`next/font/google`)
- **API Runtimes**: Next.js Route Handlers with server-side validation

---

## 3. Website Structure & Pages

1. **Home (`/`)**:
   - Full-screen composition with dynamic rotating SVG technical geometry
   - Primary headline: *"ENGINEERED FOR WHAT’S NEXT."*
   - Selected concept projects showcase (`VELOCITY`, `NOIR`, `NEXUS`)
   - 4-part Capabilities breakdown
   - 4-stage engineering process (`01 Discover`, `02 Design`, `03 Develop`, `04 Deliver`)
   - Studio approach & Agency partnership preview
   - Final CTA section (*"Have something worth building?"*)

2. **Work (`/work`)**:
   - Editorial portfolio grid featuring all concept projects
   - Explicit concept labeling with transparent design rationale

3. **Project Details**:
   - **VELOCITY (`/work/velocity`)**: Premium automotive digital experience featuring inventory matrix, model detail page, and vehicle viewing enquiry flow.
   - **NOIR (`/work/noir`)**: Contemporary gastronomy website featuring autumn tasting menu, spatial ambience gallery, and reservation enquiry workflow.
   - **NEXUS (`/work/nexus`)**: SaaS distributed telemetry dashboard featuring interactive live console tabs, SVG packet density charts, query analysis, and workspace settings.

4. **Capabilities (`/capabilities`)**:
   - Digital Experiences (Business websites, Landing pages, Redesigns, Interactive websites)
   - Web Applications (Custom dashboards, Booking systems, Web tools, Custom interfaces)
   - Commerce Systems (E-commerce websites, Product catalogues, Custom checkouts)
   - Development Partnerships (White-label development, Agency overflow, Retainers)

5. **Studio (`/studio`)**:
   - Transparent studio philosophy focused on craft, reliability, and utility without inflated claims or invented teams.
   - Comprehensive technical stack overview across frontend, backend, and infrastructure.

6. **Agency Partnerships (`/partnerships`)**:
   - Strategic white-label development guide for marketing agencies, branding studios, and freelance designers.
   - 5-step operational delivery model with strict NDA protection.

7. **Contact (`/contact`)**:
   - Fully interactive project brief enquiry form with client-side & server-side validation.
   - Integrated with Next.js Route Handler (`/api/contact`).
   - Clear loading states, error reporting, and success feedback.

8. **404 Not Found (`/not-found`)**:
   - Custom branded 404 page with return navigation.

---

## 4. Getting Started

### Prerequisites
- Node.js `20.x` or `22.x`
- npm `10.x` or higher

### Installation
Clone or navigate into the repository:

```bash
cd webworks-studio
npm install
```

### Running Locally
Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
To create an optimized production build:

```bash
npm run build
npm start
```

---

## 5. Environment Variables & Integrations

Refer to [`.env.example`](file:///.env.example) for available options:

```bash
# Public Site URL
NEXT_PUBLIC_SITE_URL=https://webworksstudio.com

# Optional Email / CRM Dispatch (e.g. Resend, Postmark, SendGrid)
# RESEND_API_KEY=re_your_api_key_here
# CONTACT_NOTIFICATION_EMAIL=studio@webworksstudio.com
```

The contact endpoint (`/api/contact`) performs strict input validation and server-side logging. To connect directly to transactional email services, add your provider SDK inside [`src/app/api/contact/route.ts`](file:///src/app/api/contact/route.ts).

---

## 6. Project Directory Layout

```
webworks-studio/
├── public/
│   ├── favicon.svg          # Original geometric brand mark
│   └── robots.txt           # SEO indexing instructions
├── src/
│   ├── app/
│   │   ├── api/contact/     # Contact form API endpoint
│   │   ├── capabilities/    # Capabilities page
│   │   ├── contact/         # Contact enquiry page
│   │   ├── partnerships/    # Agency partnerships page
│   │   ├── studio/          # Studio philosophy page
│   │   ├── work/            # Portfolio & project detail routes
│   │   │   ├── nexus/
│   │   │   ├── noir/
│   │   │   └── velocity/
│   │   ├── globals.css      # Design tokens, typography, utilities
│   │   ├── layout.tsx       # Root layout with nav & footer
│   │   ├── not-found.tsx    # Branded 404 handler
│   │   ├── page.tsx         # Studio homepage
│   │   └── sitemap.ts       # Dynamic sitemap generator
│   ├── components/
│   │   ├── home/            # Homepage sections
│   │   ├── layout/          # Navigation & Footer
│   │   └── ui/              # Button, Logo, SectionLabel
│   └── lib/
│       ├── data/            # Project catalog metadata
│       └── utils.ts         # Class merging helpers
├── .env.example
├── .gitignore
├── next.config.ts
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

---

## 7. License

Private repository. Copyright © Webworks Studio. All rights reserved.
