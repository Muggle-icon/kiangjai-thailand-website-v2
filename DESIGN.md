---
name: Kiangjai Thailand V2
description: Thai product communication through original App evidence and clear reading surfaces.
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
    fontSize: "60px"
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
  screenshot: "24px"
  device: "30px"
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

# Design System: Kiangjai Thailand V 2

## Overview

**Creative North Star: "Clear Cyan, Real Product"**

The original Kiangjai App home is the sole Hero product image. A white information plane and cyan product plane separate copy, action and product evidence. Current visitor pages contain no generated raster assets. Round-11 still-life artwork was rejected by the user and withdrawn; an additional generated hardware frame was not selected after visual checks.

MoneyThunder, RabbitCash and LINE BK inform content hierarchy and composition, not Kiangjai business claims. Native HTML supplies all text, controls and interactions. This direction does not claim to reproduce the lifestyle quality of MoneyThunder's licensed human photography.

## Colors and Typography

Use exact cyan #44E 0F 8 for the product field and final download invitation. White supports the header, Hero reading plane and company facts; ink anchors actions, the primary online feature and footer. Neutral surfaces support repayment, process and help.

Hero product name is 60px/1.35, tagline 40px/1.45 and amount 88px/1.15 on desktop; mobile 35px,26px and 64px. Homepage chapter headings use 40px, mobile 30px. Preserve natural Thai wrapping and zero Thai letter spacing. Numeric tracking applies only to the amount.

## Layout and Rhythm

The shell is capped at 1200px with 40px desktop gutters,32px below 1050px and 20px below 760px. Homepage product spacing is 80px; process 64/72px, company 72px, FAQ 64/80px. Mobile main sections use 48px. Frontmatter chapter tokens are reusable references, not every live section's spacing.

Desktop Hero has min-height 720px and a 672px product stage. The native frame is 294px wide; its complete original App image is 282px. On mobile the cyan stage is 440px high, frame 186px and image 178px. The neutral border is editable CSS, not a generated or photographed device. Do not add fake operating-system furniture or obscure the original screen.

Product explanation uses a primary ink text panel and subordinate neutral repayment panel. The main panel contains the full reviewed introduction plus existing process/FAQ entries. The repayment panel uses a complete 174px original screenshot with an example caption; mobile 180px. Bangkok service area remains reviewed text. Four application nodes explain the actual sequence; only step 03 has a matching confirmation image.

Company facts, help, final download and safety retain their own content responsibilities. Safety pages keep the task directory and reading column; policy pages retain a 960px document axis and truthful pending state.

## Components, Assets and Behavior

White header: original dark Logo, centered desktop navigation and 144×44px ink action. Below 1050px the 44px menu opens a white navigation surface. Main actions are 224×52px on desktop and full content width on mobile with 12px radii. Keyboard focus uses a 3px outline and 5px offset, cyan on ink surfaces.

Hero frame radius 30px and screen 24px; mobile 24px/20px. Light native frame shadow separates the screenshot from the cyan field. FAQ uses a 32px marker with centered 20px SVG and one-open behavior. Native dialogs preserve gallery arrows, direction keys, Esc and focus restoration. Keep `scrollbar-gutter:stable` and reduced-motion behavior.

Original assets live in `assets/app/` and `assets/brand/`. Withdrawn generation masters and current unselected hardware experiment remain outside the repository as process evidence; see `docs/generated-art-prompts.md`. Metadata is not a test result.

## Rules

- Use original Logo and complete App images at natural ratios.
- Explain actual product use with real screenshots; retain example captions.
- Do not reintroduce rejected still-life props, generated device frames, people, coins or fake financial evidence.
- Preserve approved Thai and business configuration, preview downloads and legal states.
- Keep process, company, safety and FAQ responsibilities distinct.
- Check 1440px desktop and 360/375/390px mobile in a real browser; report visual limitations candidly.
