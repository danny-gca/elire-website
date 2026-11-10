Static showcase website for the élire app, deployed on GitHub Pages: a one-page presentation, the legal notice, and « Nos données » (`/donnees/`, every dataset item of the app, read at build time from `../elire-app/src/data/dataset.json` by `scripts/fetch-dataset.mjs`). An error-report form is planned.

## Context to read first

- `PRODUCT.md`: audience, purpose, constraints (no third-party requests, no tracking, light theme only).
- `DESIGN.md` and `.impeccable/design.json`: the shared « cahier annoté » design system, inherited from the app.
- `docs/reference/direction-app.md`: the app's direction contract (reference, not a target).
- `docs/plan.md`: build plan and open decisions.

## Rules

- Always read and update `README.md` and `PRODUCT.md` when behavior changes; check for inconsistencies with the app repo (`../elire-app`).
- Facts shown on the site (counts, vote labels, principles) must match the app's data and docs. Counts come from the dataset (`src/config.ts`), never hard-coded.
- `npm test` (CSV escaping) and `npm run check` must pass; both need the app dataset (`ELIRE_APP_DIR`, default `../elire-app`).
- Use the `impeccable` skill for any UI work.
- Never use the character "—" in copy; use "-".
