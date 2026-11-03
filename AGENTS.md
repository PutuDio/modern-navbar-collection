# Agent Instructions

## Project surfaces: do not confuse them

- **Website general / collection shell** means root website that lists the collection: root `index.html`, `style.css`, `script.js`, collection data, cards, filters, and page layout. It hosts the iframe previews. Keep this surface unchanged unless user explicitly asks for a change to the collection shell.
- **NavCollection** means the navigation/sidebar demos rendered inside those preview iframes, not the root collection shell. When user asks for a NavCollection change, change only the relevant demo(s) or iframe-preview behavior explicitly requested. Do not change the shell's appearance or interaction as a side effect.
- Each component folder (`<component>/index.html`, CSS, JS) is an individual demo site. Do not treat it as the root collection shell.

## Background and preview invariants

- Keep root collection shell background and layout unchanged when changing NavCollection previews.
- Any shared preview background/pattern must be applied consistently to all collection iframe previews, except explicit component-specific exclusions (currently `chronological-slider-navbar`).
- Apply preview-only overrides through the iframe preview layer; never set them globally on root `body` or on individual demo pages unless explicitly requested.
- Before editing styles, identify whether target is root shell, iframe preview, or component demo. Verify all three remain correctly scoped after change.

## Copyable code pages

- Every component's `NAVBAR_CODE.md` is the source for its generated `code.html`; `generate_code_html.ps1` extracts the first fenced HTML, CSS, and JavaScript/JS blocks.
- **`code update`**: when any component/NavCollection source changes, update its `NAVBAR_CODE.md` to match, then regenerate that component's `code.html` using the project generator. Verify generated code reflects source change. Do not change unrelated component code pages.
- **`code add`**: when a new NavCollection component has no copyable code page, create a `NAVBAR_CODE.md` and generated `code.html` matching the established component guide structure, metadata, copy controls, and generator conventions. Register the component in generator configuration if required, then run generator and verify page and copy behavior.
- Preserve real external, asset, font, stylesheet, email, collection, and back-to-top URLs. Only change navigation destinations when explicitly asked.

## Safe workflow

1. Identify exact surface and files from request; inspect before editing.
2. Keep diff scoped. Never alter root collection shell for an iframe/demo-only request.
3. For component changes, update copyable guide (`code update`) or create it when missing (`code add`).
4. Smoke-test the actual requested surface, plus verify root shell remains unchanged when work targets iframe previews or component demos.
