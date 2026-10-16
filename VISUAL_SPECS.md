# Flora Fountain — three homepage design directions

Prepared from [THEME_REFERENCE.md](THEME_REFERENCE.md), [CONTENT_REFERENCE.md](CONTENT_REFERENCE.md), and the saved desktop/mobile screenshots. These are **implementation directions for three comparable prototypes**, not new client copy. All options use Flora Fountain’s name, logo, verified copy, services, case studies, metrics, testimonials, contact details, and source images. The headline and service text should be sourced from `CONTENT_REFERENCE.md` verbatim; layout may reflow it but should not rewrite it.

## Shared prototype contract

- **Routes:** Give each option its own stable route or switcher state (`/concept-a`, `/concept-b`, `/concept-c`) with an obvious “Compare designs” control outside the client page itself. Keep one content data source so a correction reaches all three.
- **Content order:** Hero → trust/metrics and logos → agency story → nine services → differentiators → four-step process and results → four industries → featured cases → testimonials → FAQ → contact/form → footer. The order can be regrouped visually within a section, but all material blocks should appear in each concept. Blog cards may follow cases if verified source titles/links are used.
- **Navigation:** Flora’s Home, Services, Industries, Locations, Portfolio, About Us, Career, Blogs, Client Success Stories, Contact Us. Desktop can group secondary routes under menu panels; mobile requires accessible nested disclosure controls. All links must go somewhere meaningful, even if an unbuilt detail page uses the existing Flora URL temporarily.
- **Truth in imagery:** Use Flora’s own logo and source photography/art. Do not use Inbounderz team portraits, client marks, campaign work, or achievements as if they belong to Flora. A geometric treatment made with CSS is acceptable. Preserve visible original-image aspect ratios and provide descriptive alt text.
- **Shared utility:** Minimum 44 × 44 px tap targets; visible keyboard focus; functional menu, FAQ, CTA scroll/link, and form validation; semantic headings; no horizontal page overflow at 390 px; reduced-motion support. Avoid timed popups. Distinct hover/focus styling should serve navigation, not distract from reading.
- **Layout grid:** Desktop content max-width 1200 px; gutters clamp from 20 to 64 px; tablet 24–32 px; mobile 20 px. Keep text measure around 60–72 characters for paragraph blocks. Allow full-bleed dark/image bands beyond the grid.
- **Motion:** One restrained staged entrance for hero words/art, subtle marquee only if optional and pausable, and image/arrow response on card hover. Under `prefers-reduced-motion: reduce`, remove entrances, continuous motion, and smooth scrolling.

## Option A — Inbounderz faithful translation

**Pitch:** “The direction closest to your reference.” Translate the reference’s visual grammar closely while replacing every brand-specific element with Flora’s verified content. The memorable moment is a nearly black typographic hero with a huge translucent `150+` behind Flora’s headline and a Flora team photograph treated in grayscale at the bottom. `150+` is a Flora proof point; do not carry over the reference’s `360`.

| Role | Spec |
| --- | --- |
| Palette | Hero `#090909`; services `#0a0a09`; deep panels `#181817` / `#1f2021`; white `#fff`; body `#1f2021`; source reference yellow `#ffca2a` only as CTA and metric accent. |
| Typography | Manrope for navigation/body. Georama for hero, matching the reference. Hero desktop 48 px / 1.2 with mixed 700 and 300 weights; mobile 28–34 px / 1.18. Services intro 40 px / 1.5 light; list titles 32 px / 1.2 medium. |
| Header | Transparent 92 px header over hero; Flora white logo. White nav text, yellow-outline consultation/contact pill. Below 992 px, compact logo and menu trigger; open menu as solid black overlay with a clear close control. |
| Hero | Center the exact “We’re Your Strategic Digital Marketing Agency” copy and verified 150+ supporting statement. Put `150+` at 24–28vw, max 350 px, low opacity behind the words. Use Flora’s team image from the reference inventory as the lower panoramic image, grayscale with a bottom black fade. Desktop near one viewport tall; CTA outlined yellow or white below headline; no duplicate CTA on top of the photograph. |
| Services | Full-width, border-separated typographic rows on `#0a0a09`; use all nine services, not the reference site’s five. Row title left, Flora’s exact short line center/right, directional arrow at far right. Increase section length as needed rather than reducing copy. |
| Middle / proof | White metrics band with 10+ Years, 150+ Projects, 50+ Experts; oversize yellow numbers. White agency story with very large gray heading left and source paragraphs right. Dark case gallery with verified project imagery; white client logo field. |
| Footer | White FAQ and multi-column footer after a strong dark contact statement. |
| Mobile | Centered hero copy, ghost number behind only the headline, photo below, CTA after photo. Service rows become one-column with 22–25 px titles and 15–16 px copy, 32 px vertical padding. Marquee clips inside its own viewport; it must not widen the document. Disable sticky side contact tabs that cover form fields. |

**Fidelity check:** Compare rendered A at 1280 × 720 and 390 × 844 against `references/theme/home-desktop-viewport.jpg` and `references/theme/home-mobile-viewport.jpg`. Match structure, scale, contrast, and section cadence; Flora wording and assets remain the source of truth. The reference has mobile overflow; fix that defect in this translation.

## Option B — reference variation, “Dark studio / editorial grid”

**Pitch:** “Recognizably inspired by the reference, with a more contemporary agency composition.” Keep the black/white/yellow, Manrope, pill CTAs, large numbers and horizontal service language, but make the hero a deliberate asymmetrical editorial spread. The memorable moment is Flora’s *We Love Problems* artwork framed like a campaign poster beside a strong left-aligned headline.

| Role | Spec |
| --- | --- |
| Palette | Ink `#0e0e0d`; warm paper `#f4f1e9`; charcoal `#252521`; reference yellow `#ffca2a`; cool gray `#a9a9a5`. Background alternates ink and warm paper every 1–2 major sections. |
| Typography | Manrope throughout, using 700/800 for impactful words and 300 for secondary lines. Desktop hero clamp(56 px, 6vw, 92 px), line-height ~0.98; mobile 42–50 px. Small uppercase section labels at 12 px with 0.12em spacing, used sparingly. |
| Header | 80 px dark header, compact Flora lockup, fewer visible top-level items (Services, Work, About, Contact), with all current routes still available in the menu. Yellow outline CTA. |
| Hero | 7/12 left copy, 5/12 right artwork. Exact hero headline can wrap in three to four short lines. Artwork uses Flora’s `we love problems` image, framed with an offset yellow hairline rectangle; supporting 150+ statement and original CTA below. Add a small `01 / 03` concept indicator only in prototype review chrome, not the client site. |
| Services | Three featured horizontal rows above a 3×2 grid for the remaining six, with all nine using the exact source labels/descriptions. This varies density without hiding services. On hover, one verified service illustration rises slightly; base state remains legible without hover. |
| Proof / story | 10+, 150+, 50+ as tall column dividers on paper. Agency story is a 2-column pull-quote treatment using exact source text. Process appears as a four-step horizontal rail; cases as two large image tiles plus one smaller third tile. |
| Mobile | Art moves below headline and above CTA; no tiny poster text baked into inaccessible image should carry essential content. Service grid becomes single-column cards with thin dividers. Process rail becomes four vertically ordered steps. Horizontal case gallery may scroll only if cards reveal a partial next card and controls are keyboard usable; otherwise stack. |

**Variation boundary:** This is still in the client’s supplied theme family. Keep its stark contrast and yellow accents; avoid rounded pastel cards, purple gradients, or a generic SaaS dashboard look.

## Option C — recommended, “Flora in full colour”

**Pitch:** “A distinct identity that belongs to Flora Fountain.” The original Flora brand already has a multicolour mark and expressive *We Love Problems* motif. This direction lets those existing assets set the tone while presenting the same content with calmer hierarchy and stronger evidence. The memorable moment is a layered, gallery-like opening where the brand artwork occupies an architectural frame, followed immediately by measurable proof.

| Role | Spec |
| --- | --- |
| Palette | Deep aubergine `#24173f` (not a gradient), warm ivory `#faf7ef`, near black `#181617`, Flora yellow `#f5c64b`, Flora coral `#ee6a53`, and Flora violet `#4d37bf`. Apply colour mostly as panels, rules, and small brand accents; large reading surfaces stay ivory or near black. Check final palette against the exact logo asset. |
| Typography | Characterful editorial display face such as Fraunces for major display statements; Manrope for copy, UI and dense information. Font choices are a proposal, not a claim about the live site. Desktop hero 72–96 px with intentional 2–3 line wrap; mobile 42–52 px. Body 17–18 px / 1.55; data numerals 64–96 px. |
| Header | Ivory 84 px header with full-colour Flora logo, near-black links, and dark filled “Let’s Talk” pill. Keep navigation calm and legible; dropdown panels use ivory surface and strong active state. |
| Hero | Left editorial headline and support; right 1:1 or 4:5 Flora *We Love Problems* artwork with a flat colour border and a small caption using source language. Put “150+ brands in Ahmedabad. One trusted marketing partner.” as the adjacent proof line, not a rewritten headline. CTA remains “LET’S TALK”. The top should read as Flora before the visitor scrolls. |
| Services | Open, airy 3×3 modular grid on ivory. Each card has a large two-digit index, exact service title, exact short copy, then a clear link. Use the source service illustration as a cropped lower-right accent only when quality supports it; otherwise use a simple brand-colour rule. Avoid synthetic 3D icons. |
| Results / cases | The 65M+, 20M+, 1BN+ results get a dark full-bleed interlude. Case studies use verified CarzSpa, Ajay’s Cafe, and Vimal Oil images/titles in an editorial feature spread, with a direct link to each source case. A named testimonial follows, with source quote intact and restrained portrait use. |
| Story / process | Company story on warm ivory with a visible 2016 date rail. Four process steps as a clear vertical timeline or horizontal connected sequence. Industry cards use the four sourced industry images and existing text. |
| Mobile | Header 68–72 px; headline precedes art, artwork scales within viewport width, proof and CTA remain above the first fold where practical. Services become a single column of generous but compact cards. Metrics stack in a 2+1 arrangement. Contact form fields span full width, with safe bottom spacing above any mobile contact control. |

**Recommendation rationale:** C makes the client’s own visual assets, voice, and results more recognisable while keeping the content and conversion goals consistent. A and B demonstrate how the supplied reference can be followed; C gives the client a clear brand-led alternative.

## Build and review checkpoints

1. Confirm the three routes render the same verified content and all nine services; content parity matters more than matching section heights.
2. Capture each option at 1440 × 900, 1280 × 720, 768 × 1024, and 390 × 844. Review opening composition, line breaks, contrast, nav behavior, image crops, section rhythm, and footer form.
3. Test menu disclosure, nested navigation, every CTA, FAQ toggles, links to the cited case studies, focus order, and form validation. Inspect console and network for missing assets.
4. Flag source inconsistencies for copy approval: 10+ versus 11 years, 150+ projects versus brands, duplicate Google-expertise/FAQ entries. Do not resolve them by inventing claims in one concept.

