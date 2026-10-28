---
name: Kiangjai Thailand V2
description: Bright cyan lending Hero, complete wide-screen product evidence and one consolidated brand footer.
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
    fontSize: "56px"
    fontWeight: 700
    lineHeight: 1.2
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

Round19 is a structural redesign of the existing static site. A bright cyan Hero carries the strongest focus; a white product chapter exposes both real workflows on wide screens, followed by a compact connected process, plain FAQ and a single dark footer containing conversion, company identity and safety. Preserve the reviewed product framework and all copy. Previous full-cyan product and standalone company/download/safety chapters are superseded current descriptions.

MoneyThunder's current Hero/product/footer screenshots are in ../round19-preview/competitors/. They inform a bold offer, distinct chapter duties and a complete close; this does not authorize copied assets or financial claims. Actual prior-round font-family metrics remain valid provenance for the independently licensed Kanit files, not a claim of visual equivalence.

## Shared roles and actions

Exact cyan#44E0F8, ink#00384C, text#183D49, muted#566E76, surface#F2F6F7, line#D9E2E5 and white remain. The shared shell is max1120px with48/24/20px gutters. Noto Sans Thai remains16px/1.85/400 reading text; Kanit500/600/700 handles titles and UI. Six Thai/Latin WOFF2 files total98,568B, self-hosted underOFL with unicode-range/swap. Existing Thai500/600 and Noto preloads remain.

General page/chapter/module roles stay48/40/28px desktop and36/32/24px mobile. Local chapter sizes follow purpose: product44/40/32px across wide/compact/mobile; product feature28px desktop; steps21px titles/20px mobile; FAQ20/18px. Hero product56px at1440,48px at<=1240,44px at<=1100,36px mobile; amount96/88/72px across wide/compact/mobile. Tagline28/26/24/21px across the same breakpoints.

Shared primary controls are52px minimum high,224px intended width,10px corners,Kanit17px/500,20px icons. Hero specifically uses a dark244×56px action on cyan, becoming full-width/min52px mobile. Footer download is cyan on ink. Header is compact44px; footer contact40px. Product process entry is a dark bordered action; auxiliary text actions stay quieter. Image viewing uses Lucide maximize-2, not an FAQ plus. SVG stroke inheritance and focus/reduced-motion behavior remain.

Header heights88/76/68px, centered link group, quiet cyan active fill without decorative underline. Actual order: home,product,steps,FAQ,About,safety. Only home scrollspy compares existing target sections sorted by DOM order; safety page gets its own current-page state. One root header+24px scroll offset remains.

## Bright photographic Hero

Hero is full bleed without outer inset or corners, brand cyan background, dark ink copy. Desktop stage/copy minimum580px. Photo occupies the right-side composition with left inset27%, object-position77%43%, CSSscale1.42 and origin72%48%; a cyan horizontal fade joins it to the offer. CSS brightness1.06/saturation.9 applies to the same original photo. Amount96px is the main numerical emphasis; do not repeat this offer as another product headline.

Mobile copy minimum700px, title at top, real photo between title and lower offer/action. Photo inset64px0 240px, object-position80%42%, scale1.12/origin75%43%; a vertical cyan fade preserves reading. Offer uses margin:auto above the full-width action. Figcaption remains illustrative. This is a display crop, not a person/scene edit or a new generated photo. Source: Tony Wu/Pexels16761599, Bangkok source location, upload2023-05-10, unverified capture date; no customer or endorsement claim.

## Product, process and FAQ

White product chapter padding72px wide,64px compact,48px mobile. Centered title44/40/32px, bottom gap48/32/24px. At>1100px showcase columns1.1fr/1fr gap64px, vertically centered: left shows both original240px App frames side by side with24px gap and a quiet cyan-soft backing; right shows both full descriptions, separated by one rule. No visible desktop tabs. Feature headings28px and reading copy18px/1.8; captions/actions12px. Content/media remain separate semantic units, not fake App interactions.

At<=1100px showcase becomes .8fr/1.2fr with48px gap/top alignment. Native paired tabs become visible above right copy, media atleft; only selected feature is visible/interactive. Both text states share one intrinsic grid area and both media another, with scoped hidden display override plus visibility:hidden/pointer-events:none/inert. At<=760px layout is one column: tabs→media→description/actions,24px gap,210px complete frame. Copy16px/1.85; tabs16px,min72px (compact18px,min56px). Breakpoint changes retain the focused feature and move focus from a hidden desktop-bound tab to its visible image action when needed. This responsive contract supersedes the previous one-tab display on all widths.

Original PNGs remain complete750×1624 via APP_SCREENS/app-screen macro. Frames240/210px,4px edge,28/26px corners,ink background and0 12px32px #00384c18 shadow. Both viewers share min(320px,calc((100dvh -280px)*.46182266),100%). No crop/repaint/fake screens.

Process has surface background,64/48px padding, centered PC heading and40px heading gap; mobile30px heading,left aligned,gap32px. Four48px cyan markers with14px corners,Kanit24px/600 connect horizontally; at<=1100px2columns with no connector; mobile one vertical sequence with40px/12px markers and22px numbers,28px item spacing. Only step03 opens the real loan-plan image.

FAQ remains seven unchanged questions, a centered chapter on PC and a max880px ruled list;72/48px section padding. Shared question20/18px,Kanit500;76/72px minrow;32/28px marker with20/18px SVG. Mobile heading32px,left aligned. Contact is one centered outlined action below the list. The list remains single-open and preserves clicked-row position.

## One complete closing footer

Old standalone main company/download/safety sections are consolidated into the common dark footer, not repeated. Order: download strip→brand/company/contact→six main links→safety notice→privacy/terms/contact plus responsible-borrowing text. About anchor kj-about stays on the footer company section.

Desktop download is one horizontal row,48px vertical padding,32px heading,224px action. Company group is .8fr/1.7fr/1fr with48px gap/padding: brand180px; company feature22px,body14px; contact phone32px and40px action. At<=1100px brand spans above two columns1.5fr/1fr. At<=760px all stack with32px gaps/padding,156px Logo,20px company title and30px phone; contact has one top divider. Main nav has six links16px desktop/14px mobile2columns. Safety18px heading/13px body,24px padding; legal actions14/13px and12px final text. All widths share the page content axis. Current Logo remains original PNG with a CSS white filter in the dark footer.

## Supporting pages and interaction integrity

Safety keeps horizontal chapter navigation above the full1120px content axis, mobile2columns, existing6FAQ/7scams and shared native SVG disclosures. Policies retain original Logo/return-home navigation, readable pending bodies and natural height, now sharing the consolidated footer. No new legal or operating claims.

Round18 position contracts remain: dialogs restore scroll/trigger focus with52px feedback space; FAQ/details pin clicked controls using measured correction with html overflow-anchor:none; same-document aliases avoid reload; safety return restores FAQ/product/scroll and legacy state. Compact product state uses preventScroll. These implementation contracts were checked against the current browser records below; untested paths are not inferred from previous rounds.

## Current verification state

Round19 local browser evidence:21 page/width cases without overflow, missing ARIA targets or broken images;1440 shows both240px original screens and two regions, no tabs. Four compact state/keyboard-return cases at1024/390/375/360 and8 modal groups have exact0 measured geometry/scroll delta, with company trigger focus restored. Two homepage FAQ keyboard cases have unchanged row height and -0.1875/0.125px clicked-row top delta. Thirteen interaction records cover breakpoint focus, mobile focus order, navigation/return, viewers, preview download and copy feedback. Static7-page build/link/duplicate-ID, JS syntax and diff checks pass. An independent full-surface visual review identified mobile brand wrapping and illustrative-caption contrast; both were corrected and rechecked on390/360 crops. Raw records: ../../work/round19/. Evidence: ../round19-preview/. Online conclusions use ../round19-preview/release-verification.json with commit,CI and actual browser records. Photo/font provenance is unchanged; browser viewport checks are not physical-device testing or proof of complete competitor visual equivalence.

Existing GitHub skills are reused; no new installation or generated-person edits. Impeccable launcher previously needed direct-read fallback; that is not an automated detector pass. See docs/round19-review.md and docs/visual-assets.md.
