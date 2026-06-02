import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_Dxw41tW-.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute } from './prerender_a7HRX1Sr.mjs';
import { s as sanityClient } from './client_i-eQb6oM.mjs';

async function getStaticPaths() {
  const projects = await sanityClient.fetch(`
    *[_type == "project"] {
      "id": slug.current,
      title,
      heading,
      url,
      services,
      objective,
      process,
      result,
      tech,
      "heroImage": heroImage.asset->url,
      "altHero": heroImage.alt,
    }
  `);
  return projects.map((project) => ({
    params: { id: project.id },
    props: project
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const {
    title,
    heading,
    heroImage,
    url,
    services,
    objective,
    process,
    altHero,
    result,
    tech
  } = Astro2.props;
  const pageTitle = `${title} | Project detail`;
  const description = `Project detail for ${title}`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "description": description, "data-astro-cid-qdzdrxvp": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article data-astro-cid-qdzdrxvp> <h1 class="wrapper" data-astro-cid-qdzdrxvp>Project detail: <br data-astro-cid-qdzdrxvp>${title}</h1> <section class="wrapper" data-astro-cid-qdzdrxvp> ${heroImage && renderTemplate`<img${addAttribute(heroImage, "src")}${addAttribute(altHero, "alt")} data-astro-cid-qdzdrxvp>`} <div class="project-detail__info flex space-xl" data-astro-cid-qdzdrxvp> <div data-astro-cid-qdzdrxvp> <span class="project-info title-small" data-astro-cid-qdzdrxvp>Project info</span> </div> <div data-astro-cid-qdzdrxvp> <div class="project-detail-content" data-astro-cid-qdzdrxvp> <h2 class="project-detail__h2" data-astro-cid-qdzdrxvp>${heading}</h2> <div class="project-detail__url flex" data-astro-cid-qdzdrxvp> <span class="title-small" data-astro-cid-qdzdrxvp>Client site:</span> <a${addAttribute(url, "href")} target="_blank" data-astro-cid-qdzdrxvp>${url}</a> </div> </div> </div> </div> <div class="project-detail__info flex space-xl" data-astro-cid-qdzdrxvp> <h3 class="services-h3 title-small self-start" data-astro-cid-qdzdrxvp>Services</h3> <div class="project-detail__services" data-astro-cid-qdzdrxvp> <ul data-astro-cid-qdzdrxvp> ${services.map((service) => renderTemplate`<li data-astro-cid-qdzdrxvp>${service}</li>`)} </ul> </div> </div> <div class="project-detail__info-b flex" data-astro-cid-qdzdrxvp> <div class="flow" data-astro-cid-qdzdrxvp> <h3 data-astro-cid-qdzdrxvp>Objective</h3> <p data-astro-cid-qdzdrxvp>${objective}</p> </div> <div class="flow" data-astro-cid-qdzdrxvp> <h3 data-astro-cid-qdzdrxvp>Process</h3> <p data-astro-cid-qdzdrxvp>${process}</p> </div> <div class="flow" data-astro-cid-qdzdrxvp> <h3 data-astro-cid-qdzdrxvp>Result</h3> <p data-astro-cid-qdzdrxvp>${result}</p> </div> </div> </section> </article> ` })}`;
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/pages/project-detail/[id].astro", void 0);

const $$file = "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/pages/project-detail/[id].astro";
const $$url = "/project-detail/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
