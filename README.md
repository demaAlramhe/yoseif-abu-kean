# Al-Yosef Global Ltd — Landing Page

Premium bilingual (Hebrew / Arabic / English) landing page for Al-Yosef Global Ltd.

## Stack

- Next.js 14 (App Router) + TypeScript
- TailwindCSS
- Framer Motion (sections — next phase)
- react-tilt (cards / logo badge — next phase)
- Custom i18n dictionaries + LanguageProvider (HE default, RTL; EN = LTR)

## Setup

```bash
npm install
npm run dev
```

## Logo

Place the exported client logo at:

- `public/logo.png` — required (header, watermark, seal, footer)
- Optional: `public/logo-badge.png` (or `.svg`) for a higher-res hero badge if the main export looks soft at large sizes

Until the real file is present, a temporary placeholder is generated at `public/logo.png`.

## Phase status

**Phase 1 (current):** project scaffold, design tokens, sticky header, HE/AR/EN language system with `dir` flipping, full content dictionaries, site config.

**Next (after confirmation):** Hero → About → Brand (VEVIA) → Vision/Mission → Why Us → Contact → Footer → Accessibility widget → motion polish.
