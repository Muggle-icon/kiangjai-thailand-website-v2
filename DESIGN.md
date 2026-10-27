---
name: Kiangjai Thailand V2
description: A contextual Thai daily-life campaign followed by original App evidence and clear support reading surfaces.
colors:
  cyan: "#44E0F8"
  ink: "#00384C"
  text: "#183D49"
  muted: "#566E76"
  surface: "#F2F6F7"
  line: "#D9E2E5"
  white: "#FFFFFF"
  cyan-soft: "#E7FAFD"
typography:
  display:
    fontFamily: "Noto Sans Thai, sans-serif"
    fontSize: "56px"
    fontWeight: 750
    lineHeight: 1.35
    letterSpacing: "0"
  headline:
    fontFamily: "Noto Sans Thai, sans-serif"
    fontSize: "44px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0"
  title:
    fontFamily: "Noto Sans Thai, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0"
  body:
    fontFamily: "Noto Sans Thai, sans-serif"
    fontSize: "16px"
    lineHeight: 1.8
  label:
    fontFamily: "Noto Sans Thai, sans-serif"
    fontSize: "16px"
    fontWeight: 650
    lineHeight: 1.5
rounded:
  control: "10px"
  panel: "12px"
  hero: "16px"
  device: "28px"
spacing:
  space-1: "8px"
  space-2: "16px"
  space-3: "24px"
  space-4: "32px"
  space-5: "48px"
  space-6: "64px"
  space-7: "88px"
  chapter: "88px"
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

**Creative North Star: “Everyday Context, Clear Product”**

Round 13 follows the user's latest request for a full visual redesign based on Thai lending competitors and credible life scenes. This supersedes the former App-only/no-people direction. One complete photographic-style illustration of a Thai neighborhood shop establishes everyday context. The untouched original App HOME then explains the real product below the Hero. Native HTML supplies every text element, control, section and interaction.

The scene is generated artwork, not proof of a real customer, shop, company workplace or outcome. Six generated section concepts support implementation planning only; their text, logos, hardware and interfaces are not production assets. See `docs/generated-art-prompts.md` for exact prompts and historical rejected experiments.

MONIX informs contextual composition and display hierarchy; it is a corporate site rather than a direct lending-product page. FINNIX, MoneyThunder and Promise inform distinct product, process, fee and support responsibilities. Their business claims, testimonials and photography are not copied.

## Color, Type and Controls

Use exact cyan #44E0F8 for the Hero amount/action, concise process accents and final conversion band. White supports product and help reading; #F2F6F7 separates repayment and company facts; ink anchors mobile Hero copy, text and footer. Cyan does not become the repeated background of every section.

Noto Sans Thai is self-hosted. Desktop Hero product name is 56px/1.35, tagline 32px/1.5 and amount 80px/1.2; mobile uses 32px/1.4, 23px/1.5 and 60px/1.2. Homepage chapter headings use 44px desktop and 30px mobile. Product explanation uses 17px/1.95 desktop and 16px/1.9 mobile. Default body is 16px/1.8. Preserve natural Thai wrapping and zero Thai letter spacing; numeric tracking applies only to numerals.

Main controls are 224×52px desktop and full content width on mobile, with 10px corners. Compact header action is 44px high; text actions use at least 44px hit areas. FAQ markers are 32px with centered20px SVG on desktop and28px/18px on mobile; safety FAQ uses30px/17px and28px/16px. Focus styles, reduced motion and native keyboard behavior remain functional requirements.

## Layout and Rhythm

Content axis is capped at1240px with48px desktop,24px compact/tablet and20px mobile gutters. Header height is88px desktop,76px below1100px and68px mobile. Navigation is centered independently of Logo and action, with an expanded mobile menu below1100px.

Desktop Hero is inset24px horizontally,20px below the header, minimum640px high with16px corners. A single continuous scene fills it; a controlled left scrim supports legible editable white copy, cyan amount and action. It contains no App image. Below760px, the inset is12px and corners12px; the copy occupies an ink surface above a280px-high scene, whose focal point is72% horizontally. Narrow text is not overprinted on the photograph.

Product section uses88px top spacing, centered title and a dominant two-column row: full HOME image atleft on a neutral stage, online explanation atright. The complete reviewed introduction occurs once. Service region and F01/F04 links remain subordinate. The native product frame is240px wide desktop and210px mobile; the original750×1624 image keeps its complete ratio. Mobile puts explanation before the image.

Repayment follows as a lower-weight neutral band with40px vertical padding, explanatory copy and a complete190px image desktop/180px mobile. The QR belongs to the App example; it is not a website payment function.

Four steps use an open white sequence,80px light-weight numbers and cyan underlines; mobile uses44px numbers beside compact text rows. Only03 links to the matching loan-plan image. Company follows on a neutral band with verified name, registration, address, phone and contact action. FAQ returns to white with split title/accordion; mobile stacks the columns. Conversion is one cyan invitation, followed by a separate quiet safety strip and an ink factual footer.

Primary section spacing is88px desktop/56px mobile, with96px after the desktop process and72px/48px company spacing. Section-specific spacing is intentional; do not force every block into the same Banner or card layout.

## Supporting Pages and Behavior

Safety center uses a pale-cyan title band, a240px sticky chapter directory and a reading column; compact widths adjust the directory, mobile turns it into a two-column task list. Company/contact and unavailable official identity remain clearly distinguished. Scam details, help guidance and safety FAQ use the shared type and control system.

Policies use a1060px maximum document axis, pale-cyan title band, simple status icon and white pending-content surface. They retain only original Logo and return-home header navigation. Do not fill missing legal bodies with invented text.

Native dialogs preserve gallery order HOME/repayment/loan-plan/withdrawal, direction keys, Esc and focus restoration. Preserve FAQ single-open behavior, correct F01/F04 targeting, mobile menu behavior, pending download messaging, `scrollbar-gutter:stable` and reduced motion.

## Rules and Verification

- Keep original Logo, approved Thai, public configuration and complete App images authoritative.
- Use the generated life scene solely as illustrative context; do not present it as customer testimony or company evidence.
- Do not reuse rejected still-life props or unselected hardware frames; do not generate fake App interfaces, financial evidence or approval badges.
- Keep Hero, product, process, company, FAQ, conversion and safety responsibilities distinct.
- Preserve preview download/legal states; do not invent pricing, eligibility, speed, license, official channels, store links or payment QR.
- Verify all four pages at1440/360/375/390px with real browser screenshots, inspect scene crops and Thai wrapping, and test existing interactions.
- Round-13 browser review covers all four pages at1440/360/375/390px,17 interaction observations and visual comparison; evidence is in the external round13-preview directory. Publication is verified separately in release-verification.md.
