# Replica AI — Website (March 2026)

Landing page for Replica AI, an enterprise Virtual Try-On (VTON) platform. Built with a dual-optimization approach: designed for **human buyers (SEO)** and **AI crawlers (AIO)** simultaneously.

---

## Quick Start

```bash
# Serve locally
python3 -m http.server 8080

# Open in browser
open http://localhost:8080
```

No build step, no dependencies, no framework. Pure HTML/CSS/JS — deploys anywhere (Vercel, Netlify, Cloudflare Pages, S3, any static host).

---

## File Structure

```
replica-website/
├── index.html          # Main landing page (1,005 lines)
├── styles.css          # All styles (1,644 lines)
├── script.js           # Interactivity & animations (186 lines)
├── llms.txt            # AI summary file — for ChatGPT/Claude/Perplexity (45 lines)
├── llms-full.txt       # AI knowledge base — deep RAG grounding (268 lines)
├── robots.txt          # Search engine + AI bot permissions (42 lines)
├── sitemap.xml         # XML sitemap with 14 URLs (91 lines)
└── README.md           # This file
```

---

## Architecture Overview

### The Two Audiences

| Layer | Target | Purpose |
|-------|--------|---------|
| Visual UI (HTML/CSS/JS) | Human buyer (CTO, Head of E-commerce) | Convert visitors → signups |
| Machine-readable files (llms.txt, robots.txt, sitemap.xml) | AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Googlebot) | Get cited in AI answers |
| Structured data (JSON-LD schemas) | Google Search + AI Overviews | Win rich snippets + AIO citations |
| On-page SEO (Citation Blocks, FAQ, Tables) | Both | Rank in search AND get quoted by AI |

---

## What's Included — Detailed Breakdown

### 1. Machine-Readable Files (Root Directory)

These files act as the "API for the brand." They let AI models ingest our facts without guessing.

#### `llms.txt` — AI Summary (~2,300 tokens)
- **Purpose:** Fast context for ChatGPT, Claude, Perplexity, and other LLMs
- **Contents:**
  - Brand name + 2-sentence mission statement
  - 5 key differentiators (latent diffusion drape, Shopify-native, sub-3s renders, brand controls, SOC 2)
  - Core product capabilities (7 items)
  - Platform integrations list
  - 10 core links (Product, API Docs, Pricing, Case Studies, etc.)
  - Company info (founded, HQ, contact)
- **Spec:** Kept under 10,000 tokens for fast context window ingestion

#### `llms-full.txt` — AI Knowledge Base (~11,600 tokens)
- **Purpose:** Deep research and RAG (Retrieval-Augmented Generation) grounding
- **Contents:**
  - Full company overview (mission, facts, differentiators)
  - Technical deep-dive (5-stage VTON pipeline, supported garments, fabrics, output specs)
  - Complete API reference (endpoints, request/response examples, SDKs, rate limits, Shopify Liquid snippet)
  - Full FAQ library (15+ Q&A pairs across General, Technical, Business categories)
  - 3 detailed case studies with raw numbers (return rate reduction, cost savings, conversion lift)
  - Pricing table (Free / Pro / Business / Enterprise)
  - Competitive comparison table (vs Legacy Sizing, AR Try-On, Manual Photoshoots)
  - Technology stack details
  - Glossary of key terms (VTON, latent diffusion, fabric drape, Delta-E, headless commerce, RAG)

#### `robots.txt` — Bot Permissions
- Explicitly allows all major AI crawlers:
  - `GPTBot` (OpenAI)
  - `OAI-SearchBot` (OpenAI Search)
  - `ChatGPT-User` (ChatGPT browsing)
  - `Google-Extended` (Gemini/Bard)
  - `Googlebot` (Google Search)
  - `PerplexityBot` (Perplexity)
  - `ClaudeBot` (Anthropic)
  - `Anthropic-ai` (Anthropic)
  - `CCBot` (Common Crawl)
- Points to sitemap URL
- Comments reference llms.txt and llms-full.txt locations

#### `sitemap.xml` — URL Index
- 14 URLs with priority weights and change frequencies
- Includes homepage, product pages, and all 4 content cluster articles
- Formatted for Google Search Console submission

---

### 2. JSON-LD Structured Data (in `<head>`)

Six schema blocks embedded in the HTML `<head>`, invisible to users but parsed by Google and AI:

| Schema | Type | What It Does |
|--------|------|-------------|
| **Organization** | `schema.org/Organization` | Connects brand to legal entity, founding date, social profiles (Twitter, LinkedIn, Instagram, YouTube), and contact email |
| **SoftwareApplication** | `schema.org/SoftwareApplication` | Defines Replica AI as a FashionTech tool with `applicationCategory`, feature list, 3 pricing offers (Free $0 / Pro $299 / Business $999), and aggregate rating (4.8/5) |
| **WebSite** | `schema.org/WebSite` | Enables Google sitelinks search box via `SearchAction` |
| **FAQPage** | `schema.org/FAQPage` | 10 high-intent B2B Q&A pairs with full `acceptedAnswer` text — drives FAQ rich snippets in Google and AI Overview extractions |
| **HowTo** | `schema.org/HowTo` | 5-step integration guide with position metadata — drives step-by-step rich snippets |
| *(planned)* **Person** | `schema.org/Person` | For future About Us / blog author pages — connects tech to real human experts (E-E-A-T signal) |

---

### 3. On-Page SEO/AIO Structure

#### Citation Blocks (BLUF Method)
- **What:** 40–60 word paragraphs placed immediately after every H1/H2 header
- **Why:** AI agents extract these snippets verbatim for "AI Overviews" — the Bottom Line Up Front
- **Markup:** `<p class="citation-block" data-ai-citation="true">`
- **Locations:**
  1. After H1 hero ("VTON reduces return rates by 22%...")
  2. After "Built for serious fashion" H2 (pipeline technical details)
  3. After "Thousands of looks" H2 (fabric types + output formats)
  4. After "Hear it from our users" H2 (ROI statistics)
  5. After "Replica AI vs traditional approaches" H2 (cost reduction)
  6. After "Frequently asked questions" H2 (integration platforms)

#### Entity FAQ Section (10 Questions, 4 Categories)
- **Format:** Accordion-style `<details>/<summary>` elements (native HTML, no JS dependency, accessible)
- **Categories with icons:**
  1. **Integration & Technical** (3 Qs) — platforms, latency/Core Web Vitals, no 3D models needed
  2. **Business Value & ROI** (2 Qs) — return rates/AOV impact, skin tones & lighting
  3. **User Experience & Privacy** (2 Qs) — no app/account needed, GDPR/CCPA compliance
  4. **Setup & Support** (3 Qs) — implementation timeline, complex fabrics, analytics/GA4
- **Entity mentions:** Shopify, Magento, BigCommerce, Salesforce Commerce Cloud, JavaScript SDK, REST API, GDPR, CCPA, SSL/TLS, GA4, Adobe Analytics, Core Web Vitals
- **Schema:** Mirrors the JSON-LD FAQPage schema in `<head>` exactly

#### Data & Statistics Tables
- **Format:** Native HTML `<table>` elements (AI struggles with data in images — tables are "sticky" for citation)
- **Table 1 — Competitive Comparison** (8 rows × 5 columns):
  - Replica AI vs Legacy Sizing vs AR Try-On vs Manual Photoshoots
  - Metrics: photorealistic output, render time, fabric accuracy, batch processing, cost/image, brand consistency, integration depth, color accuracy
- **Table 2 — ROI Benchmarks** (5 rows × 4 columns):
  - Before/After metrics with improvement percentages
  - Return rate, photography cost, production time, conversion rate, model diversity

---

### 4. Content Cluster Architecture

Internal linking structure designed for topical authority:

```
                    ┌─────────────────────────────┐
                    │  PILLAR PAGE (3,000+ words)  │
                    │  Ultimate Guide to VTON for  │
                    │  Enterprise                  │
                    └──────────┬──────────────────-┘
                               │
            ┌──────────────────┼──────────────────┐
            │                  │                  │
   ┌────────▼────────┐ ┌──────▼───────┐ ┌───────▼────────┐
   │   TECHNICAL     │ │  COMMERCIAL  │ │  CASE STUDY    │
   │   How to        │ │  VTON vs AR: │ │  How [Brand X] │
   │   Integrate     │ │  Which Drives│ │  Cut Returns   │
   │   VTON API      │ │  Higher AOV? │ │  by 34%        │
   └─────────────────┘ └──────────────┘ └────────────────┘
```

- All 4 pages are linked from the homepage via styled cluster cards
- All 4 are registered in `sitemap.xml` with appropriate priorities
- Pillar page gets `priority: 0.9`, clusters get `priority: 0.7`

---

### 5. Meta Tags & Social

| Tag | Value |
|-----|-------|
| `<title>` | "Replica AI — AI Virtual Try-On for Fashion Brands \| Photorealistic VTON" |
| `meta description` | 160 chars with key stats (22% returns, 80% cost reduction) |
| `meta keywords` | 9 targeted terms (virtual try-on, VTON, AI fashion, Shopify virtual try-on, etc.) |
| `canonical` | `https://replicaai.com/` |
| Open Graph | Full og:title, og:description, og:image (1200×630), og:url, og:site_name |
| Twitter Card | summary_large_image with title, description, image |
| AI Discovery | `<link rel="alternate" href="/llms.txt">` for LLM discovery |

---

### 6. Landing Page Sections (Visual UI)

| # | Section | Purpose |
|---|---------|---------|
| 1 | Announcement bar | "Introducing Mirror, our AI virtual try-on agent" — dismissible |
| 2 | Sticky header | Logo, nav (Product, Solutions, Templates, Enterprise, Pricing), Login, CTA |
| 3 | Hero | H1 + citation block + description + dual CTA (Start for free / Watch video) |
| 4 | Product mockup | Interactive demo showing 4-stage pipeline (body detection → garment mapping → render → export) |
| 5 | Category tabs | Casual wear, Formal wear, Streetwear, Activewear, Accessories |
| 6 | Trust bar | "Trusted by 500+ brands" + 6 logo placeholders (ZARA, H&M, Nike, ASOS, Nordstrom, Uniqlo) |
| 7 | Feature showcase | 4-step interactive highlight (Start anywhere → Generate → Edit → Share) + phone/card mockups |
| 8 | Features grid | 2 feature cards: Photorealistic rendering (with chart) + Brand-consistent results (with color palette) |
| 9 | Feature icons | 4-column: Export anywhere, Pixel-perfect, Real-time collaboration, Enterprise security |
| 10 | Templates | 3 template cards: Target audience, Seasonal Roadmap, Try-On Analytics |
| 11 | Testimonials | Horizontal carousel with 4 cards + prev/next navigation |
| 12 | Comparison table | Replica AI vs competitors (HTML `<table>`) |
| 13 | ROI table | Before/After benchmarks (HTML `<table>`) |
| 14 | FAQ | 10 accordion items in 4 categories with JSON-LD schema |
| 15 | Content cluster | 4 linked article cards (Pillar + 3 clusters) |
| 16 | Final CTA | "Create try-ons your customers love" + CTA button |
| 17 | Footer | 3-column link grid + brand |
| 18 | Ask AI bar | Fixed bottom bar with action icons |

---

### 7. JavaScript Features (`script.js`)

- Announcement bar dismiss (with `hidden` class toggle)
- Mobile menu hamburger toggle
- Testimonials carousel (prev/next with responsive card count)
- Scroll-based fade-in animations (IntersectionObserver)
- Feature card + template card staggered reveal
- Hero category tabs switching
- Showcase step hover interactivity
- Header shadow on scroll
- Smooth anchor scrolling (with mobile menu close)
- Chart bar animation on scroll

---

## Placeholders to Fill

Search for these in the codebase and replace with real values:

| Placeholder | File(s) | What to replace with |
|-------------|---------|---------------------|
| `[YOUR_CITY]` | llms.txt, llms-full.txt | Company headquarters city |
| `[YOUR_BACKGROUND]` | llms.txt | Founder backgrounds (e.g., "Google, Meta, and Stanford") |
| `[TEAM_SIZE]` | llms-full.txt | Number of employees |
| `[FUNDING_INFO]` | llms-full.txt | Funding stage/amount (e.g., "Seed, $3.2M") |
| `[FOUNDER_NAMES_AND_BACKGROUNDS]` | llms-full.txt | Founder names + bios |
| `[Brand X/Y/Z]` | llms-full.txt, index.html | Real case study brand names |
| `og-image.png` | index.html | Create and upload a 1200×630 OG image |
| `logo.png` | index.html (schema) | Upload actual logo file |
| `replicaai.com` | All files | Replace with actual production domain when deploying |
| `hello@replicaai.com` | llms.txt, index.html (schema) | Real contact email |

---

## Deployment Checklist

- [ ] Replace all placeholders above with real data
- [ ] Create and upload `og-image.png` (1200×630) and `logo.png`
- [ ] Register domain and update all `replicaai.com` references
- [ ] Submit `sitemap.xml` to Google Search Console
- [ ] Submit `sitemap.xml` to Bing Webmaster Tools
- [ ] Verify `robots.txt` is accessible at `yourdomain.com/robots.txt`
- [ ] Verify `llms.txt` is accessible at `yourdomain.com/llms.txt`
- [ ] Test JSON-LD with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test Open Graph with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Write the 4 content cluster articles (Pillar, Technical, Commercial, Case Study)
- [ ] Add `Person` schema to About Us / blog author pages when created
- [ ] Set up Google Analytics 4 tracking
- [ ] Set up Google Search Console monitoring

---

## Tech Stack

- **HTML5** — Semantic markup with `<section>`, `<header>`, `<footer>`, `<nav>`, `<details>`, `<table>`
- **CSS3** — Custom properties, Grid, Flexbox, `backdrop-filter`, `scroll-behavior`, responsive breakpoints at 968px and 600px
- **Vanilla JS** — IntersectionObserver, smooth scroll, carousel, no dependencies
- **Typography** — Inter (Google Fonts) at 400/500/600/700
- **Icons** — Inline SVG (no external icon library)

---

## Key AIO/SEO Decisions

1. **No framework bloat.** Static HTML means instant crawlability — no JavaScript rendering required for bots. Every piece of content is in the initial HTML payload.

2. **Native `<table>` for data.** AI models and Google extract tabular data more reliably from HTML tables than from images, CSS grids, or divs-pretending-to-be-tables.

3. **`<details>` for FAQ.** Native HTML accordion is accessible (screen readers), requires no JS, and Google parses the content inside `<details>` for indexing.

4. **Citation blocks are visible.** The BLUF paragraphs are real, readable content — not hidden or cloaked. This satisfies both human scanning and AI extraction.

5. **JSON-LD over Microdata.** Google's recommended format. Easier to maintain, doesn't pollute HTML markup, and can be validated independently.

6. **Separate `llms.txt` and `llms-full.txt`.** The short version is for fast context (fits in any LLM context window). The full version is for deep research and RAG pipelines that need complete data.

---

*Last updated: March 4, 2026*
