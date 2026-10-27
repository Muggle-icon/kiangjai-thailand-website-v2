---
name: Kiangjai Thailand V2
description: Authentic everyday Bangkok photography, one compact product showcase and consistent Thai typography and actions.
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
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "0"
  page:
    fontFamily: "Noto Sans Thai, sans-serif"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: 1.4
  headline:
    fontFamily: "Noto Sans Thai, sans-serif"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: 1.4
  module:
    fontFamily: "Noto Sans Thai, sans-serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: 1.5
  title:
    fontFamily: "Noto Sans Thai, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.5
  body:
    fontFamily: "Noto Sans Thai, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.85
  navigation:
    fontFamily: "Noto Sans Thai, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.7
  label:
    fontFamily: "Noto Sans Thai, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.5
rounded:
  control: "10px"
  surface: "16px"
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

Round 15 replaces the cafe split-screen composition and oversized independent repayment chapter. One complete everyday photograph establishes context; one tabbed product showcase explains two real uses. The entire site shares deliberate weight, color, control and icon roles. Keep product truth, approved Thai, brand and existing native functionality authoritative.

The current Hero uses Tony Wu's Pexels 16761599, identified by the source as Bangkok, Thailand, uploaded 2023-05-10. No capture date is verified. Production files are bangkok-food-stand-1200.webp and bangkok-food-stand-2200.webp. This is illustrative photography, not evidence of a customer, borrower, employee, endorser or company location. No generative subject edits; CSS alone controls display crop and legibility overlay. Keep the source and license in docs/visual-assets.md. Former cafe photography, synthetic shopkeeper and generated concepts are historical.

MONIX informs a continuous photo-led opening and clear display hierarchy; MoneyThunder informs separate duties and content density for product explanation, financial details and help. They are different site types, and their choices are references, not universal rules or permission to copy claims, assets or credentials.

## Type, color and actions

Self-hosted Noto Sans Thai stays. Use four weight roles only: body 400, UI 500, strong 600 and display 700. Page/chapter/module/item roles are 48/40/28/20px desktop, 32/30/24/18px mobile; body 16px/1.85, support 14px, caption 12px. Hero product/tagline/amount are 56/28/80px desktop and 32/21/60px mobile, with 700/500/700 weights. Thai tracking remains zero; numeral tracking is separate.

Main explanatory copy uses text ink #183D49; muted #566E76 is secondary metadata and captions. Exact #44E0F8 leads the amount/action and selected brand states, with white, ink #00384C, surface #F2F6F7 and quiet cyan #E7FAFD. Do not weaken every paragraph or saturate every region.

Primary actions share 52px minimum height, 224px intended desktop width, 10px corners, 16px/600 and 20px icons. Header compact is 44px. Text actions are 14px/500 with at least 44px hit areas; resting text has no repeated underline, with hover/focus feedback retained. Contact and process entry use quiet outlined shapes. Image viewing uses a bordered control and Lucide maximize-2 (assets/icons/maximize.svg), not the FAQ plus. Direction arrows remain only where navigation warrants them. Inline prose links must remain recognizable.

The desktop header is independently centered; current navigation uses 600 and a quiet cyan fill, without an underline pseudo-element. Header heights remain 88/76/68px. Below 1100px, native menu behavior remains. Root scroll-padding supplies the sole header+24px anchor offset.

## Integrated photographic Hero

Desktop outer padding is 24px, max Banner width 1600px, minimum height 600px, corners 16px. One photograph fills the stage, with an ink gradient protecting native white copy and cyan amount/CTA; no separate half-width color panel. Photo focal position is 64% 45%; picture is 120% wide with -4% offset, or 130%/-12% at compact width.

Mobile outer inset/corners are 12px; native copy establishes a 690px minimum stage. The photo remains continuous behind the composition, with a vertical ink overlay preserving the top title and bottom offer/action. Focal position is 64% 35%. Photo and text remain separately editable; do not flatten the page into a bitmap. Preserve the visible illustration caption and original image evidence.

## Compact product explanation and spatial rhythm

The shared shell is max 1240px with 48/24/20px gutters, a 24px desktop/20px mobile grid gap, 80/48px chapter spacing and 32/24px heading gap. Repeated roles share values, but sections are sized to their actual content; numerical consistency alone is insufficient.

One product-showcase contains two native tabs for online application and repayment. Full unchanged reviewed descriptions and complete original screens stay in the DOM; only one panel is visible. Desktop panel uses a common 12-column model, explanation in columns 1–6 and product media in 8–11, with a 602px minimum; the surrounding stage uses 32px 40px padding and 16px corners. Mobile stacks within 20px padding/12px corners, with natural panel height. Tab labels remain original Thai, minimum 52px desktop/72px mobile; active 600 on exact brand cyan, inactive 500 with reading-text color. Align explanation and device to the top of the shared row. Keep aria-selected/controls, hidden panels, roving tabindex and Left/Right/Home/End support.

All original App images use APP_SCREENS and the app-screen macro, complete 750×1624 PNGs, explicit dimensions and height:auto. One frame is 240px desktop/210px mobile, 4px inner edge, 28/26px corners, ink background and 0 12px 32px #00384c18 shadow. Both native viewers use min(320px,calc((100dvh - 280px)*.46182266),100%). Do not crop, repaint or generate a fake screen.

Four real application steps use 44px/400 numerals desktop and 32px/400 mobile, without cyan underlines. Only step 03 opens matching loan-plan evidence. Company and FAQ retain 4+8 axes and mobile single-column reading. FAQ is a plain ruled list, not a stack of cards: 76px row/20px vertical padding and 32/20px marker desktop, 72px/18px and 28/18px mobile. Main FAQ and safety FAQ share this anatomy; plus/minus expresses expansion only.

## Supporting pages and integrity

Safety center keeps its chapter directory and original help, scam and FAQ content. Company/contact and unknown official identity remain distinct. Policies keep original Logo/return-home navigation, shared shell, readable pending state and natural-height content. Footer typography and actions use the same roles. Missing legal bodies remain genuinely pending.

Preserve four steps, seven home FAQs, six safety FAQs, seven scam categories, original gallery order, native dialogs, Esc/direction keys, focus restoration, F01/F04 targeting, menu, contact and download behavior. Do not invent rates, approval times, licenses, eligibility, store links, official channels or customer outcomes. Preview/noindex remains.

## Current verification state

Round15 has 18 actual layout cases: four pages at1440/360/375/390 plus home1024/760. No horizontal overflow; visible text weights are400/500/600/700 and navigation has no underline or decorative pseudo-element. Both product states, Left/Right/Home/End, gallery/plan geometry, FAQ/menu/contact/preview download and support-return tab restoration were exercised. Build, seven-page static and JS syntax checks passed. Evidence lives in ../round15-preview/; release-verification.json and live screenshots record publication separately.

Existing GitHub skills are reused, not newly installed. Impeccable launcher context returned permission denied; its direct-read fallback supplied PRODUCT.md, DESIGN.md and layout/typeset/polish references. That is not a detector pass. See docs/round15-review.md for scope, observed competitor choices and rules.
