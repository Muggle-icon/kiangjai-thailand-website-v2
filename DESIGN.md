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
    fontSize: "64px"
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

**Creative North Star: "The Cyan Product Stage"**

The system pairs confident Thai product communication with calm, task-oriented reading. The user-selected MoneyThunder homepage supplies the campaign grammar; Kiangjai's original identity, App imagery and reviewed content remain the visual and product authority.

A complete original App screen sits on a crisp layered stage. Strong cyan and ink chapters create the homepage rhythm; support and policy pages use restrained document layouts. These are native, editable HTML/CSS surfaces.

**Key Characteristics:**

- One integrated product campaign with meaningful functional graphics.
- Original brand assets and complete App screenshots.
- Strong chapter contrast with quiet reading areas.
- Natural Thai typography and visible keyboard states.

## Colors

### Primary

Cyan carries the campaign, sequence markers and final download invitation. Ink anchors navigation, primary actions, the main feature, company identity and footer.

### Neutral

Text and muted text form the reading hierarchy. White supplies open reading space; surface and line separate help content without decorative depth. Cyan-soft supports quiet FAQ and control states.

**The Chapter Contrast Rule.** Use cyan and ink to establish purposeful chapters; keep reading areas open and neutral.

## Typography

Self-hosted Noto Sans Thai supplies all roles. The frontmatter records the desktop base hierarchy; module-specific and responsive sizes are documented in `docs/design-system.md`.

The campaign product name uses display. The tagline is smaller (44px/1.4, weight 600) and the amount uses tabular numerals (68px/1.12, weight 750). On mobile these become 35px, 26px and 60px respectively. Section headlines become 30px. Reading pages use 48px desktop titles; policy titles become 31px on mobile.

**The Thai Integrity Rule.** Preserve natural Thai wrapping and zero letter spacing; the amount's numeric tracking does not apply to Thai text.

## Layout

The content shell is capped at 1200px with 40px desktop gutters, 32px below 1050px and 20px below 760px. Homepage chapters use 80px vertical space on desktop and 56px on mobile. Supporting layouts use their own reading measures.

The homepage sequence is integrated campaign, graphic product explanation, compact four-step sequence, dark company feature, quiet FAQ, cyan download, neutral safety reminder and footer. Hero uses a single cyan background; the complete device is 250px wide on desktop and 236px on mobile. Its adjacent App badge appears only above the mobile breakpoint.

Four application nodes run horizontally on desktop, two columns below 1050px and vertically below 760px. FAQ and policy reading measures are 960px. Safety content pairs a 232px sticky task directory with the reading column; mobile links wrap above the article.

## Elevation & Depth

Hard-edged backplate and podium geometry provide structural depth in the campaign. Product-device and dialog shadows distinguish physical imagery and temporary UI; ordinary content surfaces remain flat. Exact shadow, motion and breakpoint extensions are recorded in `.impeccable/design.json`.

**The Structural Depth Rule.** Reserve depth for the complete product stage and dialogs; do not scatter floating ornaments through reading content.

## Shapes

Controls and information panels use the gentle radii in the frontmatter. The product stage deliberately keeps crisp polygon edges. Device and screenshot radii preserve the physical frame; step numbers use circles and fine connectors. Shared dividers are thin and quiet.

## Components

### Buttons

Dark primary actions, cyan secondary actions and outlined actions share label typography and control shape. Main desktop download actions use the frontmatter width; mobile actions fill the content width. Auxiliary tools retain 44px touch areas. Hover changes color; keyboard focus uses a 3px outline with 5px offset, switching to cyan on ink backgrounds.

### Navigation

Ink navigation carries a white rendition of the original master Logo. Desktop links sit between the brand and a 144×44px cyan download control. Hover and current-page states use cyan, with an underline on the current page. Below 1050px, a 44px menu control opens the stacked navigation.

### Product Stage and Feature Panels

The complete original App home is paired with native clipped geometry. The main online-application feature is an ink graphic panel; the repayment feature is smaller and pale. Their SVGs explain functions and do not assert approval or encode payment destinations.

### FAQ and Dialogs

FAQ questions use consistent plus/minus SVG markers and retain one-open behavior. Native dialogs retain gallery navigation, Esc, close controls and focus restoration. Reduced-motion preferences disable transitions and smooth scrolling. Pending download and policy states remain truthful.

## Do's and Don'ts

### Do:

- **Do** use the original master Logo and complete App images at their natural ratio.
- **Do** keep the campaign integrated and functional illustrations subordinate to product truth.
- **Do** preserve Thai wrapping, keyboard focus and reduced-motion behavior.
- **Do** use reading layouts for safety and policy content.

### Don't:

- **Don't** introduce people photos, coins, gradients, giant decorative logos or fake App screens.
- **Don't** crop a phone into half-screen decoration or split its background through the device.
- **Don't** invent financial claims, approval evidence, store links, payment QR codes or legal resources.
