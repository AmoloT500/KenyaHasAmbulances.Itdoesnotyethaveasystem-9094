# Design — Kenya Prehospital Care Campaign Kit

## Reference

Visual inspiration: a black-and-white NGO/advocacy template (large uppercase grotesk
headlines, hairline rules, white caption labels, full-bleed black quote band, offset
collage hero, centred uppercase section titles, minimal uppercase nav, rectangular
outlined buttons, black footer). The reference is a **layout and typographic system
only** — no text, imagery, or content is copied from it.

Publisher's house identity (bright green / red / gold, high contrast, readable from a
distance) supplies the accent system, replacing the reference's reliance on photography.

## Core idea

Black, white, and hairline grey do all the structural work. Colour is **semantic**, never
decorative:

| Colour | Meaning |
|---|---|
| `--red` | the gap / the failure (non-functional ambulances, 1:122 ratios, missing budgets) |
| `--green` | the promise, and what has actually been delivered (policy targets, the 922 dispatch centre) |
| `--gold` | money (KSh figures, budget share, the 11.725bn ask) |

One legend is published on the page so the colour coding is legible, not arbitrary.

## Typography

- **Display:** `Archivo` 800/900, uppercase, tracking `-0.02em` to `-0.035em`, very large
  (hero up to `clamp(44px, 9vw, 132px)`), centred for hero and section titles.
- **Body:** `Archivo` 400/500, 16–18px, line-height 1.6, max ~68ch.
- **Labels:** `Archivo` 600/700, uppercase, 11–12px, tracking `0.14em`.
- **Data/sources:** `IBM Plex Mono` 400/500 — figures, table-like rows, citation strings.
- Anti-patterns avoided: no Inter, no Space Grotesk, no Roboto, no rounded-corner card grids.

## Layout & spacing

- Container `max-width: 1180px`, gutters `24px` mobile / `48px` desktop.
- Section rhythm: `112px` mobile, `152px` desktop. Generous white space; density is
  reserved for the evidence tables and the social kit blocks.
- Hairline `1px solid var(--line)` used as a structural device: nav underline, table rows,
  section dividers, label boxes.
- Deliberate asymmetry in the hero: offset panels at three different widths/verticals, one
  squircle-cropped central graphic, small caption notes hanging off the edges.
- Number bands and the quote band are full-bleed black with centred type.

## Components

- **Top ticker:** full-width black bar, small uppercase mono facts, slow horizontal marquee.
- **Nav:** white, hairline bottom border, uppercase letterspaced links, outlined `DONATE`-style
  button repurposed as `SHARE THE KIT`.
- **Caption label:** white box, `1px` black border, uppercase 11px text, overlapping the
  bottom-left of an image or figure panel.
- **Stat panel:** hairline-bordered, label + huge number (mono) + source line, accent by meaning.
- **Timeline row:** year in display type at left, promise vs. reality in two columns, hairline
  between rows; `green` dot for delivered, `red` dot for unfulfilled.
- **Myth/fact row:** two columns split by a hairline, `MYTH` label in red, `FACT` in black.
- **Copy block:** `#F4F4F4` panel, mono text, rectangular black `COPY` button that flips to
  `COPIED` for 2s.
- **Form:** centred, reference-style — single field, hairline border, solid black uppercase
  button, loading state while pending.
- **Footer:** black, centred small links, sources list, methodology note.

## Motion

One orchestrated page load: hero label → headline → collage panels stagger in (60ms apart),
then the ticker. Scroll-reveal on section entries only (opacity + 12px rise, once). No
scattered micro-interactions.

## Print

`@media print` isolates the one-pager block: white background, black type, no nav, no motion,
no colour blocks (figures stay as text). It must fit on one A4/Letter page.

## Accessibility

- Body text ≥ 4.5:1 on white; accent red `#D92D20` and green `#0B8A4B` on white pass.
- Focus states: `2px` black outline, never removed.
- Ticker and marquee pause on hover and respect `prefers-reduced-motion`.
- Colour is never the only carrier of meaning — every semantic accent also carries a label.
