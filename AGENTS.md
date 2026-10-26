# Kiangjai v2 project instructions

This is a NEW standalone redesign requested on 2026-10-26. Never push changes to the original Muggle-icon/kiangjai-thailand-website repository.

- Use plain static HTML/CSS/JS and the existing Python component builder. Edit src/pages and src/components, then run python3 scripts/build.py. Generated root HTML and clean route aliases must be committed.
- Brand color is exactly #44E0F8. Retain the user's original dark cyan logo and self-hosted Noto Sans Thai. Tokens live in assets/redesign.css; homepage sections in assets/homepage.css; footer and secondary pages in assets/secondary.css.
- Exact reviewed Thai copy lives in src/content/reviewed-th.json. This is extracted from the provided reviewed 2026-10-21 HTML, with kjs-state.edits taking precedence. Preserve this file as the content reference. Do not infer product claims from competitors.
- This v2 uses the DOCX's unconfigured production-data defaults: no store links, official identity, anti-fraud channel or lending-license claim without valid confirmed configuration. Use already-reviewed Thai pending text. No demonstration QR, example domains or claims of licensing are shown. See docs/delivery.md for differences from the older demo defaults.
- Central configuration: src/config.json, compiled to assets/config.js. It contains public display data only, never secrets. Store URLs must be valid HTTPS app-store URLs. QR generation happens locally with the bundled MIT qrcode-generator.
- Keep company name/address as reviewed in Thai, not the older Chinese DOCX spelling. Registration number is 0105567184971 and is not a lending license number.
- Preserve all 7 FAQs, 4 application steps, original full App screenshots, keyboard interactions, native modal focus management, one-open FAQ groups and original evidence-free help scope.
- PC 1440; mobile 360/375/390; no horizontal overflow outside the intentional screenshot carousel. Preserve full screenshot aspect ratio. Respect reduced motion. Policy pages have only logo and return-home navigation.
- Policy bodies remain reviewed pending text until the company supplies approved legal resources. Preview uses noindex. Only set releaseStatus to production once content and operational destinations are approved.
- Screenshot concepts are design references; the delivered website must remain editable native HTML. Do not replace UI with a full-page bitmap.
- Default publication is the independent new repository. GitHub Pages workflow packages only visitor assets and generated pages, keeping source and internal documentation out of the deployed bundle.
