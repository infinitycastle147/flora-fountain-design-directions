# Flora Fountain — design directions

Three static design directions for client review: The Reference, The Evolution, and Our Recommendation. The switcher at the top of the homepage changes the visual system throughout the site.

## Site and local preview

The publishable site is in `docs/`. Serve it locally with `python3 -m http.server 8000 --directory docs`, then open `http://localhost:8000`. `generate_pages.py` regenerates About, Portfolio, and Contact in `docs/`.

GitHub Pages should publish from the default branch, `/docs` folder. `docs/.nojekyll` tells Pages to serve the static files directly.

The repository can be private, but a GitHub Pages website is normally public. Pages from a private repository requires a supported paid GitHub plan; private website visibility is an Enterprise Cloud feature.

## Research and design decisions

`THEME_REFERENCE.md` records the visual/CSS analysis of Inbounderz; `CONTENT_REFERENCE.md` and `CONTENT_MAP.md` record Flora Fountain content. Screenshots and inventories are in `references/`. `DESIGN_BRIEF.md` and `VISUAL_SPECS.md` document the three directions and review criteria.

This is a prototype. The enquiry forms open an email app, and production lead capture needs a backend. The site loads images and logos from Flora Fountain's website; confirm permission and move approved assets to stable hosting before launch. Resolve the source copy discrepancies listed in `CONTENT_MAP.md` with the client.
