---
name: Kiangjai Thailand V2
description: Authentic Bangkok workday photography, complete original App evidence and one shared responsive component system.
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
    fontSize: "52px"
    fontWeight: 750
    lineHeight: 1.35
    letterSpacing: "0"
  page:
    fontFamily: "Noto Sans Thai, sans-serif"
    fontSize: "48px"
    fontWeight: 750
    lineHeight: 1.4
  headline:
    fontFamily: "Noto Sans Thai, sans-serif"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: 1.4
  module:
    fontFamily: "Noto Sans Thai, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1.5
  title:
    fontFamily: "Noto Sans Thai, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.5
  body:
    fontFamily: "Noto Sans Thai, sans-serif"
    fontSize: "16px"
    lineHeight: 1.85
  label:
    fontFamily: "Noto Sans Thai, sans-serif"
    fontSize: "16px"
    fontWeight: 650
    lineHeight: 1.5
rounded:
  control: "10px"
  dialog: "16px"
  device: "28px"
spacing:
  space-1: "8px"
  space-2: "16px"
  space-3: "24px"
  space-4: "32px"
  space-5: "48px"
  space-6: "64px"
  space-7: "80px"
  chapter: "80px"
  chapter-mobile: "48px"
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

## Current direction

Round 14 replaces the rejected synthetic shopkeeper and inconsistent product-image treatments. Authentic workday photography supplies context; the original App supplies product evidence. Native editable HTML supplies all text, controls and layout. The old round-13 generated scene and section concepts are historical references only.

The Hero photo is Pexels 35764278 by Sommart Sopon, captured in Bangkok on 2022-02-19. Keep its source/license record in `docs/visual-assets.md`. Its subject is illustrative and is not identified as a customer, borrower, employee or endorser. Do not infer nationality, occupation or financial situation from location metadata.

## Shared typography and actions

Use self-hosted Noto Sans Thai and zero Thai letter spacing. Semantic desktop type roles are page48, chapter40, module28, item20, body16, supporting14 and caption12px; mobile page32, chapter30, module24 and item18px retain the same body/support/caption roles. Body leading is1.85. The Hero has a deliberate display exception: product name52px, tagline28px and amount72px; mobile32/23/60px. Numeral tracking is separate.

Main actions share52px minimum height,224px intended desktop width,10px radius,16px text and20px icons. Compact controls are44px. `.kj-link`, `.text-link`, `.image-tool` and `.app-image-action` consume one14px/26px text-action rule with44px hit area,8px gap and18px icons. Product-image actions use the same plus SVG.

Homepage and security FAQ use one component: desktop minimum76px,20×24px padding,16px/30px text,32px marker and20px SVG; mobile minimum72px,18×16px padding,16px/28px text,28px marker and18px SVG. No secondary-page internal overrides. Native focus, Esc and reduced motion remain required.

## Shared grid and rhythm

`.shell` caps content at1240px with desktop48px gutters,24px below1100px and20px below760px. Shared12-column grid gap is24px desktop/20px mobile. Chapters use80px desktop/48px mobile spacing, headings32px/24px to content, group24px and paragraph16px. These are project choices implemented as semantic tokens, not claimed external mandatory measurements.

Header heights remain88/76/68px; desktop navigation is independently centered. A single `--anchor-offset` supplies header height plus24px through root scroll padding. Do not add duplicate section scroll margins.

The primary product row places the complete HOME atleft and the online explanation atright; the repayment row mirrors this with explanation atleft and the complete screen atright. Both use the same grid and App component, with no giant mat behind HOME. Company and FAQ use shared4+8 column axes; all stack naturally on mobile. Four application steps retain actual sequence numbers and only03 opens matching product evidence.

## Authentic-photo Hero

Desktop Hero is edge-to-edge, minimum560px high, with a solid exact #44E0F8 copy area and the real workday photograph entering from43% horizontally. There is no gradient or synthetic people. The editable text remains in the shared content axis; a dark button supplies the primary next entry. The photo uses70% 28% focal position.

Mobile reorders the section as title,244px photograph, amount, CTA/pending note, qualification. The picture focal position is72% 35%. Both layouts retain a visible `ภาพประกอบ` caption and avoid treating the image as a loan testimonial. The same mother photo supplies1200×800 and2000×1333 WebP derivatives.

## One App-screen component

`APP_SCREENS` in `scripts/build.py` maps four original images and their existing alt text. `{{app-screen:home}}`, `repayment`, `loan-plan` and `withdrawal` render identical `.app-device > img.app-screen` markup, explicit750×1624 dimensions, lazy loading and async decoding. Original PNG pixels remain untouched.

All inline frames are240px wide desktop/210px mobile, with4px inner edge,28px/26px corners, ink background and the same `0 12px 32px #00384c18` shadow. Images retain complete height:auto proportions. Both native viewers use the same component and width `min(320px,calc((100dvh - 280px)*.46182266),100%)`; enlargement is a contextual variant, not another device design.

## Supporting pages and facts

Safety center retains a240px sticky desktop directory and task navigation on mobile, while chapter headings, body, actions and FAQs use shared roles. Contact-card titles have a separate small20px role. Policies retain the common1240px shell and max720px reading copy, natural content height and a page-level flex footer push rather than a fixed blank content height. Missing legal content remains the reviewed pending state.

Keep approved copy, public configuration, original Logo and all screenshot content unchanged. Preserve four steps, seven home FAQs, six safety FAQs, seven scam categories, native dialogs, gallery order, keyboard controls, F01/F04 targeting, menu and focus restoration. No invented rates, approval times, licenses, store links or official channels. Preview/noindex remains.

## Verification state

Sixteen current-round layouts across four pages at1440/360/375/390px have actual screenshots and measured no horizontal overflow. Build, seven-page static structure/link checks, JS syntax and core interactions were checked. Matching device geometry, chapter type, company/FAQ axes and homepage/security FAQ internals were measured at all four widths. Evidence belongs in external `../round14-preview/`; release-verification.json and live screenshots record publication independently of local checks. Historical round-13 checks do not substitute for round14 acceptance. Reused GitHub skills and their scope are recorded in `docs/round14-review.md`; no new installation is claimed.
