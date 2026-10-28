---
name: Kiangjai Thailand V2
description: Kanit display/UI with Noto Thai reading, stable interaction geometry and authentic product evidence.
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
    fontFamily: "Kanit, Noto Sans Thai, sans-serif"
    fontSize: "64px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0"
  page:
    fontFamily: "Kanit, Noto Sans Thai, sans-serif"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: 1.4
  headline:
    fontFamily: "Kanit, Noto Sans Thai, sans-serif"
    fontSize: "40px"
    fontWeight: 600
    lineHeight: 1.4
  module:
    fontFamily: "Kanit, Noto Sans Thai, sans-serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: 1.5
  title:
    fontFamily: "Kanit, Noto Sans Thai, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.5
  body:
    fontFamily: "Noto Sans Thai, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.85
  navigation:
    fontFamily: "Kanit, Noto Sans Thai, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.85
  label:
    fontFamily: "Kanit, Noto Sans Thai, sans-serif"
    fontSize: "17px"
    fontWeight: 500
    lineHeight: "24px"
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

Round18 addresses clicking jumps and Thai visual character. Actual MoneyThunder font-family measurements identify Kanit aliases. Licensed self-hosted Google Fonts Kanit supplies headings/UI; original Noto Sans Thai remains reading text. Product state geometry, disclosures, dialogs, same-document anchors and return states are stabilized without changing business copy or imagery.

The current Hero uses Tony Wu's Pexels 16761599, identified by the source as Bangkok, Thailand, uploaded 2023-05-10. No capture date is verified. Production files are bangkok-food-stand-1200.webp and bangkok-food-stand-2200.webp. This is illustrative photography, not evidence of a customer, borrower, employee, endorser or company location. No generative subject edits; CSS alone controls display crop and legibility overlay. Keep the source and license in docs/visual-assets.md. Former cafe photography, synthetic shopkeeper and generated concepts are historical.

MONIX informs a continuous photo-led opening and clear display hierarchy; MoneyThunder informs separate duties and content density for product explanation, financial details and help. They are different site types, and their choices are references, not universal rules or permission to copy claims, assets or credentials.

## Type, color and actions

Noto Sans Thai body stays16px/1.85/400. Kanit500/600/700 serves headings, navigation, buttons and questions, with no synthetic heading weights. Hero product64/36px, product chapter48/32px, shared page48/36 and chapter40/32, module28/24 and item20/20. Hero tagline28/21 and amount80/60 remain. Native FAQ/summary20/18px, button17px/500, text action16px/500 and image action14px. Kanit six Thai/Latin WOFF2 files total98,568B with SIL OFL, unicode-range and swap; preloadThai500/600 plus existing Noto. Sources and actual competitor metrics are external round18 evidence, not inferred from screenshots.

Main explanatory copy uses text ink #183D49; muted #566E76 is secondary metadata and captions. Exact #44E0F8 leads the amount/action and selected brand states, with white, ink #00384C, surface #F2F6F7 and quiet cyan #E7FAFD. Do not weaken every paragraph or saturate every region.

Primary actions share 52px minimum height, 224px intended desktop width, 10px corners, Kanit17px/500 and20px icons. Header compact is 44px. Text actions are Kanit16px/500 with at least 44px hit areas; resting text has no repeated underline, with hover/focus feedback retained. Contact and process entry use quiet outlined shapes. Image viewing uses a bordered control and Lucide maximize-2 (assets/icons/maximize.svg), not the FAQ plus. Direction arrows remain only where navigation warrants them. Inline prose links must remain recognizable.

The desktop header is independently centered; current navigation uses 600 and a quiet cyan fill, without an underline pseudo-element. Header heights remain 88/76/68px. Below 1100px, native menu behavior remains. Root scroll-padding supplies the sole header+24px anchor offset.

## Integrated photographic Hero

Hero is full bleed without outer inset, width cap or corners. hero-copy also carries shell, sharing the same content axis as later chapters. Minimum600px desktop/690px mobile is preserved. Mobile uses the existing20px shell gutters without another horizontal padding layer. The photograph, ink gradients, editable text and image focal points remain; no photo or person edits this round.

## Compact product explanation and spatial rhythm

The shared shell is max1120px with 48/24/20px gutters, a 24px desktop/20px mobile grid gap, 80/48px chapter spacing and 32/24px heading gap. Repeated roles share values, but sections are sized to their actual content; numerical consistency alone is insufficient.

The full product band is exact#44E0F8. Showcase columns are .85fr/1.15fr with64px gap and top alignment, no600px minimum: original media left, and one product-content group right containing heading, tabs, description and actions. DOM content precedes media, so mobile reads heading/tabs/copy/actions before the complete screen. No invented or repeated claim fills space. Explanation is20px/1.8 desktop and18px mobile; chapter padding64/40px.

Tabs are520px max100%, white tray, selected ink/white600 and unselected reading ink500, Kanit18/16px, min52/72px. Each tab controls both its text panel and paired media figure via two IDREFS. The JS splits aria-controls on whitespace and toggles both, preserving roving tabindex/Left/Right/Home/End and return-state behavior. Caption/view action sit inline desktop, stacked mobile. Both body states share one grid area, and both media states share another. Inactive hidden states keep intrinsic layout via scoped display:block override, visibility:hidden/pointer-events:none plus inert. Their longest real content sizes the group without arbitrary fixed heights. JS paired-ID visibility and preventScroll focus preserve the reading position; galleries/FAQ retain ordinary hidden rules.

All original App images use APP_SCREENS and the app-screen macro, complete 750×1624 PNGs, explicit dimensions and height:auto. One frame is 240px desktop/210px mobile, 4px inner edge, 28/26px corners, ink background and 0 12px 32px #00384c18 shadow. Both native viewers use min(320px,calc((100dvh - 280px)*.46182266),100%). Do not crop, repaint or generate a fake screen.

Four application steps use cyan48/40px square markers with14/12px corners and Kanit24/22px600 numerals. Same numbered treatment appears in safety reminders. Only step 03 opens matching loan-plan evidence. Company heading precedes1.8fr facts/1fr contact columns, gap64px; contact has a36px phone/44px action,30px phone on mobile. Mobile stacks facts then contact. FAQ keeps its heading-above-content structure. FAQ is a plain ruled list, not a stack of cards: Kanit20px/500,76px row/20px vertical padding and32/20px marker desktop; Kanit18px,72px/18px and28/18px mobile. Main FAQ and safety FAQ share this anatomy; plus/minus expresses expansion only.

## Supporting pages and integrity

Safety uses a horizontal wrapping chapter menu above the full shared axis instead of a sticky side directory. Mobile menu remains2columns. Its original help/scam/FAQ copy stays; native details share the same question typography and actual SVG plus/minus marks as homepage FAQs. Company/contact and unknown official identity remain distinct. Policies keep original Logo/return-home navigation, shared shell, readable pending state and natural-height content. Download and safety are compact horizontal rows on desktop and stacked mobile. Safety/footer remain continuous ink. Footer identity atleft combines176px Logo and company; services at right start with the existing home/product/steps/FAQ links in2columns at18/16px, then36px contact phone. Existing safety/policy/contact links occupy a separate full-width bottom row, flex desktop/grid2columns mobile. Footer columns1.25fr/1fr, gap80px; mobile stacks with156px Logo and30px phone. No new channels or business content. Missing legal bodies remain genuinely pending.

Preserve four steps, seven home FAQs, six safety FAQs, seven scam categories, original gallery order, native dialogs, Esc/direction keys, focus restoration, F01/F04 targeting, menu, contact and download behavior. Do not invent rates, approval times, licenses, eligibility, store links, official channels or customer outcomes. Preview/noindex remains.

## Interaction-position contract

Product title/tabs stay top-aligned and intrinsic stacked states reserve the true maximum body/media footprint. Hidden content is invisible and inert. Dialog open/close stores and restores scroll, focus uses preventScroll, and copy feedback reserves52px rather than resizing the centered dialog. FAQ/native details preserve the clicked control top through a measured scroll correction, with html overflow-anchor:none preventing duplicate browser anchoring. Targeted FAQ navigation sets state first and then scrolls deliberately. Same-document pathname aliases normalize index.html/.html/trailing slash, avoiding reload for hash links. Safety-return JSON restores open FAQ and scroll, accepting legacy numeric storage; product state is retained.

## Current verification state

Round18 local browser evidence:21 page/width cases with no horizontal overflow, missing ARIA targets or broken visible images;4 product-state/keyboard-return cases and8 modal open/close cases have exact0 measured geometry/scroll delta. Six disclosure checks keep the clicked row within0.25px, row height unchanged and one item open in the tested group. Fourteen interaction records cover navigation/return, skip link, pending download, real-image viewers, feedback, loaded fonts and inert inactive states. Raw records: ../../work/round18/. Static build and release are checked separately. Online conclusions use ../round18-preview/release-verification.json with commit, CI and actual browser records. This is a typography/hierarchy/interaction improvement with unchanged photography, not a claim of full competitor visual equivalence.

Existing GitHub skills are reused, not newly installed. Impeccable launcher context returned permission denied; its direct-read fallback supplied PRODUCT.md, DESIGN.md and layout/typeset/polish references. That is not a detector pass. See docs/round18-review.md for scope, observed competitor choices and rules.
