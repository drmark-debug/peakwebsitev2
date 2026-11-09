# Peak by MD — how to build with this design system

Peak by MD is a physician-led longevity, aesthetics, and performance medicine
practice. Every screen should read as **"physician-led optimization through data,
diagnostics, and personalized care"**: clean, data-forward, lots of white space,
medical credibility, never corporate/cold/trendy/spa-like.

## Setup — no provider needed
There is **no React context provider or theme wrapper**. Import the components and
the stylesheet once; the brand tokens, fonts, and component CSS all ship in the
stylesheet. Nothing needs wrapping.

```tsx
import { Button, Card, StatCard, Badge, Callout } from "@peak-by-md/design-system";
// the stylesheet is bound automatically; in app code: import "@peak-by-md/design-system/styles.css";
```

## Styling idiom — props + CSS variables (NOT utility classes)
This is **not** a Tailwind/utility-class system. Style in two ways only:

1. **Component props** carry the design language — prefer these over custom CSS:
   - `Button` — `variant`: `primary` (Midnight Blue, default), `secondary`
     (slate outline), `accent` (Wheat), `cta` (Pumpkin — high-energy, use
     sparingly), `ghost`; `size`: `sm|md|lg`; `block`.
   - `Badge` — `tone`: `midnight|slate|pale|wheat|lilac|grass|pumpkin|cherry|neutral`;
     `variant`: `solid|soft|outline`; `dot`.
   - `Card` — `accent`: `none|midnight|slate|pale|wheat|lilac|grass|pumpkin|cherry`;
     `elevation`: `flat|outlined|elevated`; `interactive`. Subcomponents:
     `Card.Body` (`eyebrow`, `title`), `Card.Text`, `Card.Footer`.
   - `StatCard` (data-forward metric tile) — `label`, `value`, `unit`, `delta`,
     `trend`: `up|down|flat`, `higherIsBetter` (false = lower is better, flips
     the grass/cherry color), `caption`, `accent`.
   - `Callout` — `tone`: `info` (slate), `success` (grass), `warning` (pumpkin),
     `critical` (cherry), `education` (pale blue); `title`.
   - `Field` (text input) — `label`, `hint`, `error` (sets the cherry invalid
     state), `size`: `md|lg`, `leadingIcon`/`trailingIcon` (e.g. a password
     show/hide toggle), `block`. Compose with `Button` for forms.
   - `Login` — a composed, full-page sign-in scene (Midnight Blue brand
     split-panel + form built from `Field`/`Button`); props `onSubmit`, `error`.
     A ready-made auth pattern, not a primitive — use it whole.

2. **CSS variables** for your own layout glue (the ONLY approved color/spacing
   source — never hardcode hex):
   - Colors: `--pk-midnight-blue` `#003B51` (primary authority), `--pk-slate-blue`,
     `--pk-pale-blue`, `--pk-wheat`, `--pk-lilac`, `--pk-grass`, `--pk-pumpkin`,
     `--pk-cherry`; semantic roles `--pk-color-primary`, `--pk-color-secondary`,
     `--pk-color-accent`, `--pk-color-cta`, `--pk-color-success`,
     `--pk-color-danger`, `--pk-color-bg`, `--pk-color-surface`, `--pk-color-text`,
     `--pk-color-text-muted`, `--pk-color-border`.
   - Type: `--pk-font-display` (Nexa/headlines), `--pk-font-body` (Avenir),
     `--pk-font-serif` (Minion Pro/subheads), `--pk-font-script` (Fall In Love,
     <5% use, never for medical/body copy). Optional helper classes:
     `.pk-display`, `.pk-heading`, `.pk-eyebrow`, `.pk-body`, `.pk-script`.
   - Spacing `--pk-space-1..8`, radius `--pk-radius-sm|md|lg|pill`, shadow
     `--pk-shadow-sm|md|lg`.

Accents (Wheat, Lilac, Grass, Pumpkin, Cherry) are intentional, not decorative —
use them by meaning: Grass = vitality/positive outcomes, Cherry = urgency/alerts,
Pumpkin = action/CTA, Lilac = hormone/recovery/women's health, Wheat = premium warmth.

## Light mode only
`color-scheme: light` is enforced — do not add dark-mode styling.

## Where the truth lives
Read these before styling: `_ds/<folder>/styles.css` and its imports
(`tokens/tokens.css`, `tokens/typography.css`, `fonts/fonts.css`) for the full
variable list; each component's `.prompt.md` and `.d.ts` for its exact API.

## One idiomatic example
```tsx
<Card accent="slate" elevation="elevated" style={{ display: "grid", gap: "var(--pk-space-4)" }}>
  <Card.Body eyebrow="Longevity Program" title="Comprehensive Diagnostics">
    <Card.Text>Advanced diagnostics and a physician-built plan.</Card.Text>
    <div style={{ display: "flex", gap: "var(--pk-space-4)" }}>
      <StatCard label="Biological Age" value="38" unit="yrs" delta="4.2" trend="down" higherIsBetter={false} accent />
      <StatCard label="VO₂ Max" value="52" unit="ml/kg/min" delta="3.1" trend="up" accent />
    </div>
    <Callout tone="success" title="Markers improving">Your panel moved into optimal range.</Callout>
  </Card.Body>
  <Card.Footer><Button variant="primary">Book a consult</Button></Card.Footer>
</Card>
```

# PeakDS (@peak-by-md/design-system@0.1.0)

This design system is the published @peak-by-md/design-system React library, bundled as a single
browser global. All 7 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.PeakDS`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/<group>/<Name>/<Name>.prompt.md` (example JSX + variants), `<Name>.d.ts` (types), `<Name>.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).

For a specific component, `read_file("components/<group>/<Name>/<Name>.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Components are then available at `window.PeakDS.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { Badge } = window.PeakDS;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<Badge />);
```

## Tokens

84 CSS custom properties from @peak-by-md/design-system. Names are
preserved verbatim from upstream. They are declared inside `_ds_bundle.css` (this DS ships one compiled stylesheet rather than separate token files).

- **color** (27): `--pk-color-bg`, `--pk-color-surface`, `--pk-color-surface-2`, …
- **spacing** (8): `--pk-space-1`, `--pk-space-2`, `--pk-space-3`, …
- **typography** (13): `--pk-font-display`, `--pk-font-body`, `--pk-font-serif`, …
- **radius** (4): `--pk-radius-sm`, `--pk-radius-md`, `--pk-radius-lg`, …
- **shadow** (3): `--pk-shadow-sm`, `--pk-shadow-md`, `--pk-shadow-lg`
- **other** (29): `--pk-midnight-blue`, `--pk-slate-blue`, `--pk-pale-blue`, …

## Components

### components
- `Badge` — Compact label for status, categories, and metadata.
- `Button` — Peak by MD primary action control. Pill-shaped, uppercase, confident.
- `Callout` — Inline message block for guidance, results, and critical health notes.
- `Card` — Generic surface container. Compose with Card.Body / Card.Footer. (compound: `Card.Body`, `Card.Text`, `Card.Footer`)
- `Field` — Peak by MD text input. Clean, clinical, generous touch targets. Pair with
- `StatCard` — Data-forward metric tile  the core of Peak by MD's diagnostic dashboards.

### scenes
- `Login` — Peak by MD member sign-in. Split brand panel + form, physician-led and
