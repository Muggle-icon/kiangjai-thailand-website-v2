---
name: Kiangjai Thailand V2
description: Whole-photo Hero, paired same-axis product chapters, a white identity chapter and a two-column ink close.
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

Round22 makes one targeted correction: remove the orphan support strip after repayment, restore the complete reviewed online paragraph (copy:cdd17cff597160), and keep the fixed service-area display in company contact. Duplicate Steps/F01/F04 shortcuts are removed; header/footer Steps navigation, the four-step section and full FAQ remain. No other composition change.

Round21 replaces the rejected composition in existing static code. One whole photographic Hero leads into two independent product stories, a white company chapter with cyan contact, and a two-column ink close. Round20's cyan-panel/photo join, two-phone collage, shared pale slab and equal footer ribbons are obsolete. The user pinned MoneyThunder as the reference; this is a code-led implementation, not a generated-comp exercise.

Fresh PC evidence is in ../round21-preview/competitors/moneythunder-1440.png and regions.json, from https://www.money-thunder.com/ . The current rotating Hero is a referral campaign, not necessarily its initial loan campaign. Its two product bands and layered brand close inform hierarchy; assets, financial claims and credentials are not copied. The fresh page has no directly equivalent company chapter. No new valid MoneyThunder mobile sample is claimed.

## Tokens, type and actions

Keep exact cyan #44E0F8, ink #00384C, text #183D49, muted #566E76, surface #F2F6F7, line #D9E2E5 and white. The shared axis remains 1120px with 48/24/20px gutters. Cyan emphasizes the offer/action and contact area; white and ink separate the product chapters. Do not reset the palette or add arbitrary tokens.

Body uses Noto Sans Thai 16px/1.85/400. Headings and UI use the existing licensed Kanit 500/600/700 files, six Thai/Latin WOFF2 files totaling 98,568B. SIL OFL, unicode-range, swap and prior preloads remain. Hero product/tagline/amount are 56/28/80px at1440 and 36/21/64px mobile. Page/chapter/module roles remain 48/40/28px desktop and 36/28/24px mobile. Story titles are40px on desktop; compact tabs name the selected feature. Company title/name are36/24px desktop and28/22px mobile. Close title is36/26px. FAQ questions are20/18px, captions14px/24px, and the mobile legal disclaimer12px/21px.

Common controls use a52px minimum,224px intended width,10px corners,Kanit17px/500 and20px icons. Hero uses a cyan244×56px local override despite its retained button-dark class; mobile is full width/min52px. Contact has min44px and current rendered46px; header is compact44px. Image actions use14px/min44px and Lucide maximize-2. FAQ plus/minus only expresses expansion. Preserve visible focus and reduced-motion behavior.

## Whole-photo Hero

The stage and copy have minimum600px desktop/680px mobile with no outer inset or radius. Desktop photo inset0, object-position74%44%, scale1.38 and origin76%46%; saturate.9. A horizontal ink gradient supports editable white positioning and a cyan amount/CTA without a separate solid cyan panel. Copy uses the shared shell and48px vertical padding.

Mobile photo inset0 0 170px, position64%43%, scale1.75 and origin71%43%. A vertical ink gradient separates the top title, ordinary work subject and lower offer. Copy has28px vertical padding; the offer uses auto top space. Illustrative caption top300px/right20px avoids the amount. These are CSS display changes only. Tony Wu/Pexels16761599 remains the same Bangkok-source image: uploaded2023-05-10, capture date unverified, no customer/endorsement/nationality/financial inference.

## Independent product stories

Desktop has a centered40px chapter heading with64px top/16px bottom padding. Each full-width story has40px vertical padding and an inner1.1fr/1fr grid with80px gap, vertically centered. Copy is left/max520px and its own complete App is right/max320px media group. Online is white; repayment is ink with white copy, pale caption and outlined image action. Copy/media axes stay consistent. There is no alternating zigzag, collage or common pale backing. Story reading is18px/1.85; heading40px/1.35 with24px gap.

At<=1100px, header padding48/24px, tabs max600px with18px/min56px controls, story padding32px and gap48px. Both stories stack in one intrinsic product-features grid area. JS synchronizes each story ancestor's hidden/inert with its two controlled panel/media IDs. Scoped hidden overrides reserve geometry; visibility:hidden, pointer-events:none and inert prevent painting or interaction. Wide panels instead become visible labelled regions and tabs hide. Tab visibility is owned by JS/native hidden: the source tablist starts hidden and its CSS base stays grid. A wide display:none media rule previously blurred focus before the breakpoint handler;removing that race lets the handler capture focus before activation and move it to the visible media action. Round21 tested expansion and focused-feature collapse with hiddenFocus:false.

At<=760px, title28px left aligned, header40/24px, tabs16px/min72px. Product-features defines two shared rows with24px gap. Both story wrappers span rows1/3 using subgrid; the inner wrapper is display:contents. Summary occupies row1, complete App row2, with story padding24px20px32px. Shared tracks align both states without arbitrary filler height. The full reviewed online paragraph includes its fee reminder and occupies the online summary row. No product-support strip or duplicate Steps/F01/F04 actions follow the stories. The fixed service-area display remains in company contact; header/footer Steps navigation and the full FAQ retain those entry points. The builder split-copy macro is removed.

All App PNGs stay complete750×1624 through APP_SCREENS/app-screen. Frames remain240/210px,4px edge,28/26px corners and the shared shadow. Both viewers use min(320px,calc((100dvh -280px)*.46182266),100%). Only step03 opens loan-plan; no cropped, repainted or invented product state.

## Company and brand close

The common footer starts with a separate white company chapter. Desktop company-layout is1.55fr/1fr with64px gap/padding. Real name/registration/address lead on the left; one cyan contact area has32px padding/16px radius on the right. Phone is36px with copy/contact actions beneath. About remains kj-about, with facts only once. Mobile stacks with32px gap/48px chapter padding,24px contact padding and32px phone.

Footer-close uses ink,64px padding desktop/40px mobile. Main grid is1.55fr/1fr,64px column gap and48px row gap: app identity/download left, six main links right; safety and policy groups occupy the second row as secondary information. Original app icon is80px, close heading36px, note16px/1.7 and action224px cyan. Mobile is one column with32px row gap,64px icon,26px heading,14px note and full-width action. Navigation stays two columns; legal actions wrap. This is not five full-width ribbons. Company and close are shared across all canonical/alias routes.

## Preserved behavior and evidence boundary

Steps, header and FAQ are largely retained: connected four-step sequence,48/40px markers,880px FAQ list,20/18px questions and shared SVG anatomy. Safety keeps horizontal navigation/full-axis reading with6FAQ/7scams. Policies keep original Logo/return-home navigation and truthful pending bodies. Preserve native modal/gallery/keyboard paths, scroll/focus restoration,52px feedback space, clicked-row pinning, same-document aliases and safety-return state. Content/config and asset/font files remain unchanged; preview/noindex remains.

Current Round22 browser proof is in [../round22-preview/](../round22-preview/) and [stability.json](../round22-preview/stability.json). At compact390/375/360/760/1024, online→repayment→Home has measured scroll,phone and next-section position delta0 and overflow0. Canonical home screenshots1440/390/375/360 and390 selected repayment were checked. Independent narrow review confirms strip removal, restored reminder and preserved process hierarchy. Build,7-page static link/ID andJS checks pass. See round22-preview/release-verification.json for separate live verification; no current full21-case rerun is claimed.

Round21's21 responsive cases,4 compact groups,8 modal groups,2 FAQ keyboard checks and10 actions, plus its independent screenshot/source ship verdict, are historical. See docs/round21-review.md and ../round21-preview/ for that evidence. Those results do not certify this correction or current deployment.

For Round21,Impeccable new-work/craft-floor was read directly for the pinned code-led direction. No seed-concept lottery, comp generation, automatic detector or new skill/font/asset installation ran. See docs/round21-review.md and docs/visual-assets.md.
