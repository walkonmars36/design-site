import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_Dxw41tW-.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead } from './prerender_a7HRX1Sr.mjs';

const $$FormSuccess = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-wmashgfb": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-wmashgfb> <div class="wrapper flow" data-astro-cid-wmashgfb> <h1 data-astro-cid-wmashgfb>Thanks for getting in touch</h1> <p data-astro-cid-wmashgfb>
I've received your contact form and I'll get back to you soon. If you
        haven't received a reply after two days, check I haven't fallen into the
        spam.
</p> <a href="/" data-astro-cid-wmashgfb>Back to home page</a> </div> </section> ` })}`;
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/pages/form-success.astro", void 0);

const $$file = "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/pages/form-success.astro";
const $$url = "/form-success";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FormSuccess,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
