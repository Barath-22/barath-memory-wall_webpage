# Barath's Memory Wall — Farewell Edition

A static GitHub Pages site featuring **233 colleague memories**, searchable flip cards, multiple categories, initials instead of photos, and Barath's three-stage promotion journey.

## Publish
1. Create a new public GitHub repository.
2. Upload `index.html`, `styles.css`, `script.js`, `data.js`, `README.md`, and the `fonts` folder (see below) to the repository root.
3. Go to **Settings → Pages → Deploy from a branch → main / (root) → Save**.
4. Wait for the deployment and open the Pages link.

## Fonts
For licensing reasons, font files are **not included in this download**. Add your own authorized `Likewize-Regular.otf` and `Likewize-Bold.otf` to `fonts/`. If missing, the site uses Arial.

## Editing memories
Open `data.js`. Each entry has `name`, `role` (a short one-liner), `categories` (an array), and `memory`. No photos are needed.

**Note:** The uploaded memories have been retained with light whitespace cleanup; review them and edit any wording before publishing. One-line roles are generated from the corresponding memory, not independently verified job titles.

## Farewell message form
The recipient is set to `barath.likewize@gmail.com`. The form opens the visitor's email app with a prepared message. **It does not send automatically or create push notifications.** The visitor must press Send; you will receive it as a regular email (and any email notification your inbox is configured to provide). For automatic website submissions, a form backend/service is required.

## Dates
Graduate Trainee: 4 Jul 2022–23 Jul 2023; Jr BI Analyst: 23 Jul 2023–1 Jul 2025; Technical Analyst: 1 Jul 2025–9 Oct 2026 (farewell date).

## Version 3 updates
- Removed the awkward hero Scroll cue. Use the clearly labeled hero buttons and navigation.
- Promotion dates are shown prominently in the three journey cards.
- Memory cards are sorted alphabetically by colleague name, even when filtered.
- All category badges appear at the top of each card, away from the initials.

## V4 card height correction
The front and back faces now fill the full 405px desktop card height, restoring the original full-size appearance and eliminating the misleading blank area between rows. Categories remain above the card content.
