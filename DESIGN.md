---
name: Kiangjai Thailand V2
description: Thai product communication with a cyan campaign and precise reading surfaces.
colors:
  cyan: "#44E0F8"
  ink: "#00384C"
  text: "#183D49"
  muted: "#566E76"
  surface: "#F3F6F6"
  line: "#D9E2E5"
  white: "#FFFFFF"
  cyan-soft: "#E7FAFD"
typography:
  display:
    fontFamily: "Noto Sans Thai, sans-serif"
    fontSize: "62px"
    fontWeight: 750
    lineHeight: 1.35
    letterSpacing: "0"
  headline:
    fontFamily: "Noto Sans Thai, sans-serif"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0"
  title:
    fontFamily: "Noto Sans Thai, sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0"
  body:
    fontFamily: "Noto Sans Thai, sans-serif"
    fontSize: "16px"
    lineHeight: 1.75
  label:
    fontFamily: "Noto Sans Thai, sans-serif"
    fontSize: "16px"
    fontWeight: 650
    lineHeight: 1.5
rounded:
  control: "12px"
  panel: "16px"
  screenshot: "22px"
  device: "32px"
spacing:
  space-1: "8px"
  space-2: "16px"
  space-3: "24px"
  space-4: "32px"
  space-5: "48px"
  space-6: "64px"
  space-7: "72px"
  chapter: "80px"
  chapter-mobile: "56px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "13px 24px"
    height: "52px"
    width: "224px"
  button-cyan:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "13px 24px"
    height: "52px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "13px 24px"
    height: "52px"
---

# Design System: Kiangjai Thailand V2

## Overview

**Creative North Star: "Everyday Cyan, Real Product"**

A coherent cyan campaign pairs original generated still-life art with the untouched Kiangjai App home. The user-selected MoneyThunder homepage informs campaign completeness and chapter rhythm; Kiangjai's identity and reviewed content remain the product authority. Native HTML supplies every webpage label, action and interaction.

The art uses ordinary work and shopping objects, tactile paper and canvas, hard-edged forms and cyan accents. It contains no people, generated App screen or financial evidence. Calm reading layouts support real company facts, help and policy content.

## Colors and Typography

Cyan carries the Hero and final download invitation. Ink anchors navigation, primary actions, the main online feature and footer. White and neutral surfaces separate product explanation, process, company and FAQ without repeated promotional banners.

The product name uses 62px/1.35, the tagline 42px/1.4 and amount 80px/1.15. Mobile sizes are 35px, 26px and 64px. Homepage headlines use 40px, mobile 30px; reading-page titles retain 48px, policy titles 31px on mobile. Natural Thai wrapping and zero Thai letter spacing remain mandatory; compact numeric tracking applies only to the amount.

## Layout and Rhythm

The shell is capped at 1200px with 40px desktop gutters, 32px below 1050px and 20px below 760px. Homepage spacing is section-specific: product 80/64px, steps 64/72px, company 72px, FAQ 64/80px; these become 48px on mobile. The frontmatter chapter values are reusable reference tokens, not a claim that every live section uses that spacing.

Hero has one cyan field and one coherent product composition. The desktop Hero is at least 700px; the complete App device is 246px wide. Mobile stacks copy, one full-width action and a 428px art stage with a complete 180px device. The raster scene sits behind the independent App image; it does not paint over the screen. The old CSS podium, white amount card and adjacent App badge are removed.

Product explanation uses a 1.65:1 hierarchy: the main ink panel combines generated folder art and the full reviewed product description; repayment is secondary with matching calendar art and a real screenshot entry. The reviewed Bangkok service area accompanies the section title. Four process nodes remain horizontal, then two-column, then vertical; only step 03 has a corresponding real confirmation image.

Company information uses a white fact layout for name, registration, address and phone with one contact entry. It does not repeat the product introduction. FAQ uses a neutral 960px reading surface; download is cyan, safety neutral and footer ink. Safety pages retain a 232px task directory and reading column; policies retain a 960px document axis.

## Shape, Depth and Assets

Controls retain 12px radii and 52px heights; main desktop download actions are 224px wide and mobile actions fill their content width. Auxiliary tools retain 44px touch areas. Generated material depth is reserved for the coherent campaign and two feature illustrations; reading sections remain flat. Device and dialog shadows separate imagery and temporary UI.

Transparent WebP campaign files live in `assets/campaign/`; original PNG masters and before/after evidence live outside the repository in `../round11-preview/`. Generation used `builtin-imagegen`; exact prompts and provenance are documented in `docs/generated-art-prompts.md` and `docs/visual-assets.md`. These are conceptual assets, not customer photography or business evidence.

## Components and Behavior

Desktop navigation remains centered between the original master Logo and 144×44px download control; below 1050px it becomes a 44px menu. Main buttons share 16px labels, 12px radii and 52px heights. Hover changes color; keyboard focus uses a 3px outline with 5px offset, cyan on ink backgrounds.

FAQ uses a 32px marker box with centered 20px SVG and one-open behavior. Native dialogs preserve gallery navigation, direction keys, Esc and focus restoration. `scrollbar-gutter:stable` prevents dialog shifts. Reduced-motion preferences disable transitions and smooth scrolling. Pending download and legal states remain explicit.

## Rules

- Use original Logo and complete App images at their natural ratios.
- Keep the generated scene behind a separate, untouched App image; no half-phone crops or generated UI.
- Preserve exact approved Thai and business configuration; art cannot imply new features or evidence.
- Keep photos, people, coins, fake approval badges and decorative logo enlargement out of this direction.
- Keep safety and policy content readable, with truthful pending states.
- Verify actual desktop and 360/375/390px mobile rendering; metadata is not an automated test result.
