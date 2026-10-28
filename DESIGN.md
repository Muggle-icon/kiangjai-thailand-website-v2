---
name: Kiangjai Thailand V2
description: Whole-page role hierarchy, summary-first product reading and a legible compact shared footer.
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

Round20 is a whole-page review, not a font-size patch. Full LINE BK,Rabbit Cash and MoneyThunder captures and measured typography/layout inform proportions, information order, density and footer legibility across home/support routes. Preserve the cyan Hero,white product,connected process,plain FAQ and one dark footer; correct each region within that framework rather than repeat business content.

Primary sources: https://www.linebk.com/th/ , https://www.rabbitcash.co.th/ and https://www.money-thunder.com/ . Metrics and complete screenshots live in ../round20-preview/competitors/. LINE BK uses LINESeedSansTH_Bd product titles40/45px desktop,25/30px mobile. Rabbit uses DB AdmanRounded X headline40/44px with Sarabun16/24px reading; equal pixels do not mean equal Kanit optical size. MoneyThunder uses orig_kanit_medium with specific product63/64px, ordinary chapters38/40px, body16px and footer heading20px/details15–17px. There is no single huge-font convention. Its390 capture is fixed desktop layout clipped at390, not valid mobile evidence; filename explicitly says desktop-clipped-390.

## Shared roles and actions

Exact cyan#44E0F8, ink#00384C, text#183D49, muted#566E76, surface#F2F6F7, line#D9E2E5 and white remain. The shared shell is max1120px with48/24/20px gutters. Noto Sans Thai remains16px/1.85/400 reading text; Kanit500/600/700 handles titles and UI. Six Thai/Latin WOFF2 files total98,568B, self-hosted underOFL with unicode-range/swap. Existing Thai500/600 and Noto preloads remain.

General page/chapter/module roles are48/40/28px desktop and36/28/24px mobile. Product/process/FAQ chapter headings now use the shared40/28px role. Product feature28px desktop; steps21px/20px mobile; FAQ questions20/18px. Hero product56px at1440,48px at<=1240,44px at<=1100,36px mobile; amount80px desktop/compact and64px mobile. Tagline28/26/24/21px across the same breakpoints. Caption token is14px; mobile legal disclaimer remains its specific12px role.

Shared primary controls are52px minimum high,224px intended width,10px corners,Kanit17px/500,20px icons. Hero specifically uses a dark244×56px action on cyan, becoming full-width/min52px mobile. Footer download is cyan on ink. Header is compact44px; footer contact44px. Product process entry is a dark bordered action; auxiliary text actions stay quieter. Image viewing uses Lucide maximize-2, not an FAQ plus. SVG stroke inheritance and focus/reduced-motion behavior remain.

Header heights88/76/68px, centered link group, quiet cyan active fill without decorative underline. Actual order: home,product,steps,FAQ,About,safety. Only home scrollspy compares existing target sections sorted by DOM order; safety page gets its own current-page state. One root header+24px scroll offset remains.

## Bright photographic Hero

Hero is full bleed without outer inset or corners, brand cyan background, dark ink copy. Desktop stage/copy minimum560px. Photo occupies the right-side composition with left inset27%, object-position77%43%, CSSscale1.42 and origin72%48%; a cyan horizontal fade joins it to the offer. CSS brightness1.06/saturation.9 applies to the same original photo. Amount80px is the main numerical emphasis; do not repeat this offer as another product headline.

Mobile copy minimum640px, title at top, real photo between title and lower offer/action. Photo inset64px0 216px, object-position80%42%, scale1.75/origin69%44%; a vertical cyan fade preserves reading. Offer uses margin:auto above the full-width action. Figcaption remains illustrative. This is a display crop, not a person/scene edit or a new generated photo. Source: Tony Wu/Pexels16761599, Bangkok source location, upload2023-05-10, unverified capture date; no customer or endorsement claim.

## Product, process and FAQ

White product chapter padding72px wide,64px compact,48px mobile. Centered shared title40px desktop/compact and28px mobile; bottom gap40/32/24px. At>1100px showcase columns1.1fr/1fr gap64px,row-gap24px,top aligned: left both240px original App frames side by side with24px gap and cyan-soft backing; right both descriptions then shared support. No desktop tabs. Feature headings28px,reading18px/1.8. Caption14px/24px and image actions14px,min44px; secondary evidence is readable rather than tiny.

At<=1100px showcase .8fr/1.2fr,gap48px plus24px rows; native paired tabs above right summary,media spans left rows. Only selected summary/media is visible and interactive; each pair uses one intrinsic grid area and inactive scoped visibility:hidden/pointer-events:none/inert. At<=760px actual DOM/visual order is tabs→short summary→media→shared support,24px gaps,210px complete frame. Copy16px/1.85; tabs16px,min72px (compact18px,min56px). The summary comes from splitting the unchanged approved online paragraph at its existing reminder sentence; builder checks the boundary and original reconstruction. The fee-reading reminder,service area and application/FAQ links are outside paired states and visible for both features. Each tab still controls exactly2IDs. Breakpoint changes preserve the focused feature and use preventScroll when focus moves from a hidden tab.

Original PNGs remain complete750×1624 via APP_SCREENS/app-screen macro. Frames240/210px,4px edge,28/26px corners,ink background and0 12px32px #00384c18 shadow. Both viewers share min(320px,calc((100dvh -280px)*.46182266),100%). No crop/repaint/fake screens.

Process has surface background,64/48px padding, centered PC heading and40px heading gap; mobile28px heading,left aligned,gap32px. Four48px cyan markers with14px corners,Kanit24px/600 connect horizontally; at<=1100px2columns with no connector; mobile one vertical sequence with40px/12px markers and22px numbers,28px item spacing. Only step03 opens the real loan-plan image.

FAQ remains seven unchanged questions, a centered chapter on PC and a max880px ruled list;72/48px section padding. Shared question20/18px,Kanit500;76/72px minrow;32/28px marker with20/18px SVG. Mobile heading28px,left aligned. Contact is one centered outlined action below the list. The list remains single-open and preserves clicked-row position.

## One complete closing footer

Old standalone main company/download/safety sections are consolidated into the common dark footer, not repeated. Order: download strip→brand/company/contact→six main links→safety notice→privacy/terms/contact plus responsible-borrowing text. About anchor kj-about stays on the footer company section.

Desktop download is one horizontal row,32px vertical padding,32px heading,224px action. Company group remains.8fr/1.7fr/1fr with40px gap and32px padding: brand180px; company24px/22px mobile; facts/contact reading16px/1.7. Phone32/30px shares a row with its14px copy action; contact action is44px. At<=1100px brand spans two lower columns1.5fr/1fr. At<=760px company padding/gap24px,132px Logo and14px tagline share a row; contact retains one divider and the phone/copy row does not wrap. Main nav16px including mobile2columns. Safety18px heading and16px/1.7 body,24/20px padding; legal actions14px and final text14px/1.7. Shared footer company facts are no longer reduced to small caption text. Original PNG receives only its existing CSS white filter on ink.

## Supporting pages and interaction integrity

Safety keeps horizontal chapter navigation above the full1120px content axis, mobile2columns, existing6FAQ/7scams and shared native SVG disclosures. Policies retain original Logo/return-home navigation, readable pending bodies and natural height, now sharing the consolidated footer. No new legal or operating claims.

Round18 position contracts remain: dialogs restore scroll/trigger focus with52px feedback space; FAQ/details pin clicked controls using measured correction with html overflow-anchor:none; same-document aliases avoid reload; safety return restores FAQ/product/scroll and legacy state. Compact product state uses preventScroll. These implementation contracts were checked against the current browser records below; untested paths are not inferred from previous rounds.

## Current verification state

Current Round20 browser evidence:21 cases covering four canonical routes x1440/390/375/360,home1024/760 and3clean aliases390,with no overflow,broken images or missing ARIA targets. Shared1120px shell/gutters48/24/20 and240/210px full frames hold. Four compact1024/390/375/360 online→repayment→Home states preserve all geometry/scroll values exactly;shared support stays visible. Eight modal cases restore company focus with0 geometry/scroll delta. Two FAQ keyboard cases keep row height and have -0.1875/0.125px top delta. Seven current actions cover preview0stores/0QR,original HOME/gallery-next/step03,copy,mobilemenu and settled88px product anchor. Static7page/link/duplicate-ID,JSsyntax/diff checks and exact paragraph/SHA assertions pass;browser warnings/errors empty. Independent full-resolution screenshot/source review found no new must-fix;updated44px contact captured again. Evidence: ../round20-preview/qa-summary.json and companion JSONs. Online conclusions use ../round20-preview/release-verification.json with commit,CI and actual browser records. Browser viewports are not physical-device certification or full competitor visual equivalence.

This round directly read Impeccable reference/layout.md,typeset.md and craft-floor.md, then applied manual layout/type rules and browser QA. Its automatic detector was not run. Vercel Web Interface Guidelines,Anthropic frontend-design and UI UX Pro Max are installed/available, not individually executed this round. No new skill or font installation. See docs/round20-review.md and docs/visual-assets.md.
