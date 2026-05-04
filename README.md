# Darpan Foundation — Next.js 14 Website

A full Next.js 14 (App Router) implementation of the Darpan Foundation website. 31 pages, sacred-minimalist design system, all program and initiative detail pages, scroll-triggered Framer Motion animations, and stubbed-out form/payment/CMS integrations ready for credentials.

## Quick start

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Build for production:

```bash
npm run build
npm run start
```

Type-check only (fast):

```bash
npm run typecheck
```

## Tech stack

| Layer        | Tool                                                  |
| ------------ | ----------------------------------------------------- |
| Framework    | Next.js 14 (App Router)                               |
| Language     | TypeScript 5                                          |
| Styling      | Tailwind CSS 3                                        |
| Animation    | Framer Motion                                         |
| Icons        | Lucide React + custom SVGs (Youtube/Twitter/IG/FB)    |
| Fonts        | Cormorant Garamond, DM Sans, Noto Serif Devanagari, Playfair Display (via `next/font/google`) |

## Design system

Defined in `tailwind.config.ts`:

| Token        | Value     | Use                              |
| ------------ | --------- | -------------------------------- |
| `saffron`    | `#C47D2B` | Primary brand colour             |
| `forest`     | `#2D4A3E` | Secondary surface                |
| `ivory`      | `#F5F0E8` | Default page background          |
| `charcoal`   | `#1A1A1A` | Text and dark sections           |
| `goldLight`  | `#E8C87A` | Accents on dark backgrounds      |
| `creamCard`  | `#FAF6EE` | Card backgrounds                 |

Font families are exposed as `font-display` (Cormorant), `font-sans` (DM Sans), `font-quote` (Playfair italic), `font-sanskrit` (Noto Serif Devanagari).

## Site map (31 pages)

```
/                         Home
/guruji                   Guruji's biography (3 chapters + gallery)
/about-us                 About Us
/vision                   Guruji's full vision (4-pillar deep dive)

/programs                 Programs index
/ignite-self
/sahaj-smriti-kriya
/sahaj-smriti-yog
/swadhyay
/satsang
/seva
/upanishad
/nakshatra-darpan
/children-and-teens
/workshops

/initiatives              Initiatives index
/kshetra-darpan
/mann-darpan
/vidya-darpan
/kaushal-darpan
/jeevan-darpan
/atma-darpan

/visit-us                 Visit Us hub
/darpan-ashram            Ashram details, schedule, rules
/register-your-visit      Visit registration form
/host-your-event          Group event enquiry

/donate                   Donation tiers + custom amount
/volunteer                Volunteer application
/contact                  Contact form + map
/blogs                    Blog index (placeholder posts)
/information              Quick-link hub
```

## Component library

Located in `src/components/`:

- `Navbar.tsx` — transparent → solid on scroll, mega-dropdown for Programs/Initiatives/Visit, mobile overlay
- `Footer.tsx` — 4-column footer with full nav, contact, social
- `PageHero.tsx` — reusable dark or light page hero
- `Section.tsx` — section wrapper with bg/padding presets
- `Prose.tsx` — typography wrapper for body content
- `PullQuote.tsx` — full-bleed quote section
- `LotusDivider.tsx` — stylised SVG divider
- `Button.tsx` — primary / secondary / outline variants
- `CTASection.tsx` — pre-built CTA block
- `EnquiryForm.tsx` — reusable contact / program / volunteer form
- `YouTubeCard.tsx` — video thumbnail card with play button
- `SocialIcons.tsx` — inline-SVG Youtube/Instagram/Facebook/Twitter (Lucide no longer ships brand icons)
- `FadeIn.tsx` — Framer Motion scroll-triggered reveal

## Shared content registry

`src/lib/content.ts` holds the canonical list of programs, initiatives, and Upanishad video entries — used by the Home page carousel, Programs/Initiatives index, and Navbar dropdowns. Edit one place, propagate everywhere.

## Integration TODOs

Stubbed for now — search the codebase for `TODO:` to find each one.

| Integration              | File(s)                              | What to do                                                                                       |
| ------------------------ | ------------------------------------ | ------------------------------------------------------------------------------------------------ |
| Razorpay (donations)     | `src/app/donate/page.tsx`            | Replace the `alert()` call in `handleDonate()` with `new window.Razorpay({...}).open()`           |
| Form delivery            | `src/components/EnquiryForm.tsx`     | The `handleSubmit` simulates success. Wire to a Next.js API route, Resend, SendGrid, or similar. |
| Newsletter               | `src/app/page.tsx` (Section 9)       | Replace the inline form with Mailchimp / ConvertKit embed or POST to your provider               |
| Blog CMS                 | `src/app/blogs/page.tsx`             | Replace the `posts` constant with a Sanity / WordPress fetch                                     |
| Google Maps              | `src/app/contact/page.tsx`           | Swap the OpenStreetMap iframe for a Google Maps embed                                            |
| YouTube playlist         | `src/lib/content.ts` (`upanishadVideos`) | Replace each `videoId: 'M7lc1UVf-VE'` placeholder with the real ID from playlist `PLty53myrnL4TMF1g14CftemFFryIyAb_2` |

## Asset replacement

All photographs are placeholders sourced from Unsplash. They are clearly the wrong photographs of the wrong people and places — replace them with the foundation's own archive when ready.

Search for `images.unsplash.com` to find every spot. They appear in:

- `/src/app/page.tsx` — hero, Guruji portrait, ashram welcome
- `/src/app/guruji/page.tsx` — hero + 6-image gallery in Chapter 3
- `/src/app/{guruji,about-us,vision,...}/page.tsx` — each `<PageHero>` `bgImage` prop
- `/src/lib/content.ts` — each program and initiative `image`

## Forms — voice and copy

The `EnquiryForm` accepts:

- `programName` — pre-fills the program field
- `showProgramField` — toggles the program input
- `showCityField` — toggles the city input
- `showSkillsField` — toggles the skills input
- `buttonLabel` — overrides the submit button text

A privacy-policy checkbox is required by default.

## Notes on design choices

1. **Navbar transparent-to-solid logic**: routes listed in `lightPagePrefixes` (`/about-us`, `/vision`, `/donate`, etc.) get a solid Navbar from page load because they don't have a dark hero. Add new light-hero pages there.
2. **Routes are flat** (matches darpanfoundation.com): `/ignite-self` not `/programs/ignite-self`. The Programs index is its own page at `/programs`.
3. **No `prose` plugin**: typography is handled by the lightweight `Prose` component to avoid an extra Tailwind plugin dependency. Adjust `src/components/Prose.tsx` if you want different rhythm.
4. **Animations are gentle**: 0.6s fades with `viewport={{ once: true, margin: '-100px' }}`. Avoid GSAP unless you need heavier choreography.
5. **Lenis smooth-scroll** CSS hooks are pre-defined in `globals.css` but Lenis itself is not yet imported. To enable: `npm i lenis`, mount it in a top-level `'use client'` provider.

## Deployment

Designed for Vercel. Just push to a Git repo and import. No environment variables required for the placeholder build; add Razorpay / Sanity / Mailchimp keys before going live.

## Source content

The copy on every page was paraphrased from the live darpanfoundation.com (scraped May 2026), then rewritten in the warm, direct voice specified in the brand brief — favouring "you," short paragraphs, and concrete moments over corporate language.

Sanskrit terms are used and given a brief English gloss the first time they appear (e.g. *Swa* — the self).

---

Built with care. Edit liberally.
