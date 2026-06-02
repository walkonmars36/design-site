import { A as AstroError, I as InvalidComponentArgs, e as createRenderInstruction, m as maybeRenderHead, r as renderTemplate, b as renderComponent, a as addAttribute, f as renderHead, c as renderSlot } from './prerender_a7HRX1Sr.mjs';
import 'piccolore';
import 'clsx';

function validateArgs(args) {
  if (args.length !== 3) return false;
  if (!args[0] || typeof args[0] !== "object") return false;
  return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
  const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
  const fn = (...args) => {
    if (!validateArgs(args)) {
      throw new AstroError({
        ...InvalidComponentArgs,
        message: InvalidComponentArgs.message(name)
      });
    }
    return cb(...args);
  };
  Object.defineProperty(fn, "name", { value: name, writable: false });
  fn.isAstroComponentFactory = true;
  fn.moduleId = moduleId;
  fn.propagation = propagation;
  return fn;
}
function createComponentWithOptions(opts) {
  const cb = baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
  return cb;
}
function createComponent(arg1, moduleId, propagation) {
  if (typeof arg1 === "function") {
    return baseCreateComponent(arg1, moduleId, propagation);
  } else {
    return createComponentWithOptions(arg1);
  }
}

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul class="primary-navigation" data-astro-cid-pux6a34n> <li data-astro-cid-pux6a34n><a href="/" data-astro-cid-pux6a34n>Home</a></li> <li data-astro-cid-pux6a34n><a href="/#services" data-astro-cid-pux6a34n>Services</a></li> <li data-astro-cid-pux6a34n><a href="/projects" data-astro-cid-pux6a34n>Projects</a></li> <li data-astro-cid-pux6a34n> <a href="/#testimonials" data-astro-cid-pux6a34n>Testimonials</a> </li> <li data-astro-cid-pux6a34n><a href="/#about-me" data-astro-cid-pux6a34n>About me</a></li> <li data-astro-cid-pux6a34n><a href="/#contact" data-astro-cid-pux6a34n>Get in touch</a></li> </ul>  ${renderScript($$result, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/components/Navigation.astro", void 0);

const $$NavigationMob = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul data-visible="false" class="mob-navigation" data-astro-cid-nfxc5hw2> <li data-astro-cid-nfxc5hw2><a href="/" data-astro-cid-nfxc5hw2>Home</a></li> <li data-astro-cid-nfxc5hw2><a href="/#services" data-astro-cid-nfxc5hw2>Services</a></li> <li data-astro-cid-nfxc5hw2><a href="/projects" data-astro-cid-nfxc5hw2>projects</a></li> <li data-astro-cid-nfxc5hw2> <a href="/#testimonials" data-astro-cid-nfxc5hw2>Testimonials</a> </li> <li data-astro-cid-nfxc5hw2><a href="/#about-me" data-astro-cid-nfxc5hw2>About me</a></li> <li data-astro-cid-nfxc5hw2><a href="/#contact" data-astro-cid-nfxc5hw2>Get in touch</a></li> </ul>  ${renderScript($$result, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/components/NavigationMob.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/components/NavigationMob.astro", void 0);

const $$NavToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button class="nav-toggle" aria-controls="primary-navigation" aria-label="Open Menu" aria-expanded="false" data-astro-cid-2kdq35iv> <svg fill="var(--hamburger-color)" class="hamburger" viewBox="0 0 100 100" width="60" data-astro-cid-2kdq35iv> <rect class="line top" width="50" height="8" x="25" y="27" rx="5" data-astro-cid-2kdq35iv></rect> <rect class="line middle" width="50" height="8" x="25" y="45" rx="5" data-astro-cid-2kdq35iv></rect> <rect class="line bottom" width="50" height="8" x="25" y="63" rx="5" data-astro-cid-2kdq35iv></rect> </svg> </button>`;
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/components/NavToggle.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="visible" data-astro-cid-3ef6ksr2> <div class="header wrapper-sm" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2>walkonmars design</a> <nav class="desktop-nav" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Navigation", $$Navigation, { "data-astro-cid-3ef6ksr2": true })} </nav> <nav class="mobile-nav" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "NavigationMob", $$NavigationMob, { "data-astro-cid-3ef6ksr2": true })} </nav> ${renderComponent($$result, "NavToggle", $$NavToggle, { "data-astro-cid-3ef6ksr2": true })} </div> </header>  ${renderScript($$result, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="wrapper" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>
Mark Lawson <span data-astro-cid-sz7xmlte>&copy; ${year}</span> |
<a href="/privacy-policy" data-astro-cid-sz7xmlte>Privacy Policy</a> </p> </footer>`;
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/components/Footer.astro", void 0);

const $$BackToTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button class="back-to-top" aria-label="Back to top" data-astro-cid-wlspcwf4><span class="chevron" aria-hidden="true" data-astro-cid-wlspcwf4>&#9650;</span></button>  ${renderScript($$result, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/components/BackToTop.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/components/BackToTop.astro", void 0);

const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/node_modules/astro/components/ClientRouter.astro", void 0);

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="assets/icons/favicon-16x16.png"><title>${pageTitle}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main id="main-content"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "BackToTop", $$BackToTop, {})} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, createComponent as c, renderScript as r };
