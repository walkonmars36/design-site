import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_Dxw41tW-.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead } from './prerender_a7HRX1Sr.mjs';

const $$BookingSuccess = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-zcdqnosq": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-zcdqnosq> <div class="wrapper flow" data-astro-cid-zcdqnosq> <h1 data-astro-cid-zcdqnosq>Thanks for booking a call</h1> <p data-astro-cid-zcdqnosq>
I've received your booking and I'll confirm our meeting soon. If you
        haven't received a confirmation email from Cal.com, check it hasn't
        fallen into the spam.
</p> <a href="/" data-astro-cid-zcdqnosq>Back to home page</a> </div> </section> ` })}`;
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/pages/booking-success.astro", void 0);

const $$file = "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/pages/booking-success.astro";
const $$url = "/booking-success";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BookingSuccess,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
