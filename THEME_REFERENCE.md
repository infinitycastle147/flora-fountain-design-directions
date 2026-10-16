# Theme reference — Inbounderz

Source: [inbounderz.com](https://inbounderz.com/) and its [About](https://inbounderz.com/about) and [Services](https://inbounderz.com/services) pages. Inspected on 15 October 2026 in a browser at 1280 × 720 desktop and 390 × 844 mobile. This is a **design reference**, not a content source for the Flora Fountain prototype.

## Screenshot evidence

| View | Local screenshot |
| --- | --- |
| Home, desktop hero | [home-desktop-viewport.jpg](references/theme/home-desktop-viewport.jpg) |
| Home, complete desktop page | [home-desktop-full.jpg](references/theme/home-desktop-full.jpg) |
| Home, mobile hero | [home-mobile-viewport.jpg](references/theme/home-mobile-viewport.jpg) |
| Home, complete mobile page | [home-mobile-full.jpg](references/theme/home-mobile-full.jpg) |
| About, desktop | [about-desktop-viewport.jpg](references/theme/about-desktop-viewport.jpg) |
| Services, desktop | [services-desktop-viewport.jpg](references/theme/services-desktop-viewport.jpg) |

The screenshots are direct browser captures. Their file contents are JPEG, and the `.jpg` extensions match the verified file signatures. The full-page images preserve the page as rendered at capture time; animations, carousels, lazy media, and a delayed consultation popup can change what appears in a later capture. The desktop full-page image is 1307 px wide and the mobile full-page image is 487 px wide because the source page has horizontal overflow beyond its 1280 px and 390 px viewports. Use the viewport images for exact framing.

## Visual character

- High contrast, editorial agency aesthetic: almost black opening sections, monochrome people imagery, enormous ghosted numeral behind the hero copy, spacious centered typography, and warm yellow accents.
- Long, vertically stacked homepage with large sections and alternating dark and white backgrounds. Dark areas continue through services, awards, portfolio, videos, testimonial and blog sections. White sections give the eye a break around the agency story, global presence, clients, FAQs, and footer.
- Usually full-width bands with an inner desktop content width of about 1110 px at a 1280 px viewport (measured from the hero `h1` and service rows). Side gutters are about 85 px. Many elements use Bootstrap style container and grid classes.
- Bold use of scale rather than decoration: very large section titles, broad blank space, horizontal service rows, image-led portfolio cards, and pill calls to action. Corner radii are concentrated on pill buttons and the contact popup; the major sections remain square.

## Verified style tokens and CSS evidence

The live page loads [`/assets/css/style.css`](https://inbounderz.com/assets/css/style.css) and a [Google Fonts stylesheet](https://fonts.googleapis.com/css2?family=Georama:ital,wght@0,100..900;1,100..900&family=Manrope:wght@200..800&display=swap). Values below are **computed browser styles**, measured at 1280 px unless labelled mobile. They are more reliable for matching than visual estimates.

| Role | Computed value / observation |
| --- | --- |
| Main typeface | `Manrope`, body 16 px / 400 |
| Home hero typeface | `Georama`; `h1` 48 px / 300, 57.6 px line-height; lead `strong` 48 px / 700 |
| Black hero | `#090909` (`rgb(9,9,9)`) |
| Services dark | `#0a0a09` |
| Other dark bands | `#131312`, `#181817`, and `#1c1c1c` |
| Deep text gray | `#1f2021` |
| Hero copy | `#d4d4d4`; bold lead `#f1f1f1` |
| Service heading | `#e2e2e2`, 40 px / 300, 60 px line-height |
| Service row heading | `#b3b3b3`, 32 px / 500 |
| About giant heading | `#666`, 90 px / 800, 85 px line-height |
| Accent yellow | `#ffca2a` (`rgb(255,202,42)`) — counters, featured work heading, CTA fill |
| Desktop navigation | white `#fff`, Manrope 16 px; transparent header over hero |
| Inner page title | About `h1` 44 px, `#ddd`; centered on `#131312` |
| Mobile hero title | 28 px; source switches to a dedicated mobile group image |

The stylesheet contains Bootstrap breakpoints at 576, 768, 992, and 1200 px. The site uses `navbar-expand-lg`, so the menu collapses below the 992 px breakpoint. The visible 390 px screenshot confirms a logo icon at left and hamburger control at right.

### Selector and component inventory

The linked [computed-style snapshot](references/theme/computed-style-snapshot.css) saves selected browser-computed declarations for offline work. It is **not the source stylesheet**: inherited values, media queries, pseudo-elements, hover states and other authored rules are not captured by a computed-style summary. The original CSS URL is listed above. The source stylesheet could not be downloaded through shell DNS, and the browser session was unavailable when this snapshot was assembled; the snapshot uses values recorded during the successful live browser inspection on 15 October 2026.

| Selector / component | Verified desktop properties and structure | Responsive / interaction notes |
| --- | --- | --- |
| `body` | Manrope 16 px / 400; text `#1f2021`; white background | Manrope remains the body family on inspected pages. |
| `header.fixed-top` | Fixed header, 92 px high, transparent over the hero | Desktop horizontal navigation collapses on mobile. About and Services screenshots show the same header over dark inner pages. |
| `nav.navbar.navbar-expand-lg` | Flex layout, 92 px high, horizontal padding 15 px; desktop link text white, Manrope 16 px | Bootstrap `lg` collapse below 992 px; mobile screenshot shows icon logo and hamburger. |
| `.nbannern` | Home hero `#090909`, white base text, `200px 0 70px` padding, measured about 889 px high | Mobile rearranges image and CTA; height is content driven. |
| `.nbannern h1` / `strong` | Georama 48 px / 300 at 57.6 px line height, `#d4d4d4`; bold lead 48 px / 700 and `#f1f1f1`; 30 px bottom margin | `h1` is 28 px at 390 px viewport. The first phrase is bold while the second is light. |
| `.nbannern .text360` | Manrope 350 px / 300, line height 420 px; computed text color `#e3e2e2`, visually low contrast due to additional layering/opacity | Numeral scales and sits behind headline. Do not use the computed color alone to recreate the visual; compare screenshot. |
| `.nbannern svg` / `.mobbanner` | Desktop collage is a large inline SVG; `.mobbanner` is hidden at desktop | Dedicated [`group_banner_one.png`](https://inbounderz.com/assets/images/group_banner_one.png) is shown on mobile. |
| `.nservcs` | `#0a0a09`, `60px 0 80px` padding, measured about 1611 px high | Rows stack in one column in mobile capture. |
| `.nservcs h2` | Manrope 40 px / 300, 60 px line height, `#e2e2e2`, 90 px bottom margin | Centered, broad multi-line introduction. |
| `.nservitem` / `h3` | Full-width typographic link row, `80px 0` padding, about 206 px high; heading Manrope 32 px / 500, `#b3b3b3` | Short description and “Read More” belong to each row. |
| `.counters` | White section around a metrics image; three metric groups | Yellow numerals use `#ffca2a` and Manrope 72 px / 200. |
| `.about` / `.about h2` | White section, `70px 0 140px`; left heading Manrope 90 px / 800, line height 85 px, `#666` | Desktop two-column story plus accordion. |
| `.recognisations.googlepartner` | Image background `google-partner.webp`, `105px 0 90px` | Distinct dark recognition panel. |
| `.recognisations` | Image background `recbg.webp`, `105px 0 90px` | Awards arranged as dated entries. |
| `.portfolio` / `.portfolio h2` | Charcoal `#181817`; heading Manrope 40 px / 500, accent `#ffca2a`, `90px 0` padding | Repeated image gallery categories with card hover/view action. |
| `.inboshots` | Video sections alternate `#131312` and `#181817`, each observed near 715 px high | Repeated video thumbnail strips. |
| `.horizontal-ads-section` | `#131312`, `60px 20px 80px` padding | Separate wide video grouping. |
| `.testimonials` | `#1f2021`, `140px 0` padding | Video quotes and written testimonial carousel. |
| `.clients` | White, `140px 0` padding | Dense client logo grid. |
| `.blogs` | `#1c1c1c`, `140px 0` padding | Article cards on dark background. |
| `.faqs` | White, `80px 0` padding | Accordion questions and answers. |
| `.btn-inbo` | Yellow `#ffca2a` fill, dark text, Manrope 18 px / 600, 60 px radius, `14px 33px` padding | One observed instance was a mobile-only CTA; desktop header consultation pill uses a yellow outline instead. |
| `section.pageban.new` | About and Services inner-page title band `#131312` | Centered title and short introduction on Services; About opens with centered title and prose. |

### Layout measurements

At 1280 px wide, the header is 92 px high. The homepage hero is about 889 px high with `padding: 200px 0 70px`. Its `h1` begins 200 px from the document top and spans the 1110 px content container. The huge ghosted “360” uses Manrope at 350 px / 300 with a 420 px line-height. The following dark services section is about 1611 px high with `60px 0 80px` padding; each service row is roughly 206 px high with `80px 0` padding. These heights are observed from the live page and may shift as assets load.

The homepage About section is white with `70px 0 140px` padding. The portfolio section uses `#181817` and a 40 px / 500 yellow intro heading. The first video block uses `#131312` and subsequent video blocks alternate with `#181817`. Testimonials use `#1f2021`; blog uses `#1c1c1c`; FAQs and footer are white.

## Homepage anatomy, top to bottom

1. **Fixed transparent header.** White wordmark on desktop. Nav labels: About us, Portfolio, Services, Studio, Career, Blogs, Contact. “Services” opens a large multi-column dropdown. Rightmost “Free Consultation” is a thin yellow outlined pill. On mobile, the full wordmark becomes a compact icon and links collapse to a hamburger.
2. **Hero.** Nearly black stage. Centered two-line mixed-weight headline over a huge, low-contrast “360”. A wide grayscale montage of the team fills the lower portion. Desktop montage is embedded in a large inline SVG; mobile swaps to [`group_banner_one.png`](https://inbounderz.com/assets/images/group_banner_one.png). Mobile shows a large outlined “Free Consultation” pill under the image. A small fixed yellow “Get in touch” tab or messaging launcher sits at the lower right.
3. **Moving service marquee.** A horizontal line of service labels separated by circular bullets runs between hero and services. The mobile viewport shows the labels cropped at the edges, indicating an animated horizontal ticker.
4. **Services introduction and list.** Large, light-weight centered headline. Five prominent full-width rows for Branding, Social Media Marketing, SEO, Website Development, and Video Production, each with a short description and “Read More”. Rows are typographic, not conventional rounded cards. A “View More” link leads to the services index.
5. **Counters.** Three metrics across a wide image-backed band; thin, large yellow numerals. Labels include clients served, satisfied clients and projects.
6. **Agency story.** White background, oversized heavy gray title occupying the left column, paragraphs and accordion links on the right. The accordion offers “Why choose us...” and “How we work”.
7. **Recognition.** Dark image-backed Google Partner feature, then a separate award timeline / badge area on another dark textured image.
8. **Portfolio.** Yellow section heading on charcoal. Multiple categories use a horizontal image card gallery with project names and “View Work” overlay actions. The homepage shows social media, branding, package design and UI/UX groups. Each category includes explanatory copy and “View More”; a final “Explore More” leads to the portfolio page.
9. **Video showcase.** Several repeated full-width dark sections (AI, concept, anchor, product and horizontal video ads) with image/video tiles and “View More”.
10. **Testimonials.** Dark band with video testimonials and a carousel of written quotes / small profile portraits.
11. **Global presence and client logos.** White sections with country markers and a dense logo grid.
12. **Blogs.** Dark band of article cards, thumbnail images, category labels, title/excerpt and a “View More” action.
13. **FAQs and footer.** White accordion followed by a white multi-column footer with brand/contact/social, service links and useful links. The fixed contact widget remains available.

## Inner page patterns

- **About page:** same fixed header on dark background; simple centered one-word page title (“About”), generous dark space and centered introduction copy; subsequent mission, vision and other information blocks. See screenshot.
- **Services index:** same dark inner-page banner, centered “Services” title and short centered description, followed by repeated individual service entries. See screenshot.
- **Template inference:** the inspected inner pages share a `pageban new` dark title band and then a page-specific content section; use this as a reference for proposed About, Services or Contact prototypes. Portfolio, blog and individual service detail pages were linked but not visually audited, so their exact layouts should not be claimed as verified.

## Components and behavior to translate into prototypes

- Keep the visible *visual grammar*: dark photographic hero, black/gray/white contrast, restrained yellow, Manrope-led typography, mixed-weight headline, large display numerals, generous vertical spacing, slim yellow outlined consultation action, marquee, horizontal service list, monochrome imagery, and editorial portfolio gallery.
- The content from Flora Fountain should determine actual navigation labels, section copy, offer names, imagery and CTAs. Do not carry over Inbounderz’s agency services, team photo, awards, logos or testimonials as Flora Fountain facts.
- Use a semantic navigation, responsive menu, keyboard-operable accordions, legible text contrast, and a contact action that does not obscure mobile content. The source site’s delayed consultation modal is an observable behavior, but reproducing its interruptive timing is a product decision, not required for visual fidelity.
- On mobile, hero copy and montage stack vertically; the responsive image asset changes. The original mobile page overflows horizontally by about 97 px, so prototypes should preserve the visual treatment while removing that layout defect.

## Source asset and inspection notes

- Desktop logo: [`logo-w.svg`](https://inbounderz.com/assets/images/logo-w.svg); mobile logo icon: [`logo-icon.svg`](https://inbounderz.com/assets/images/logo-icon.svg).
- Recognition backgrounds observed in computed CSS: [`google-partner.webp`](https://inbounderz.com/assets/images/google-partner.webp) and [`recbg.webp`](https://inbounderz.com/assets/images/recbg.webp).
- Portfolio thumbnails on the homepage resolve under `/assets/images/portfolio/...` (for example, `/assets/images/portfolio/social/444.jpg`).
- The live desktop hero’s team collage is inside inline SVG rather than a single CSS `background-image`; the mobile version uses the separate PNG above.
- The browser could load and render the site, but terminal DNS access was unavailable. CSS values were read from the rendered page’s computed styles and stylesheet links in the browser. The complete source CSS was not copied into this workspace; this document records the values and components needed for independent prototype work.
