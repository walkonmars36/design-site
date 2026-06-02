import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_Dxw41tW-.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute } from './prerender_a7HRX1Sr.mjs';
import { s as sanityClient } from './client_i-eQb6oM.mjs';

const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const projectData = await sanityClient.fetch(`
  *[_type == "project"] | order(_createdAt asc) {
    "id": slug.current,
    title,
    excerpt,
    "heroImage": heroImage.asset->url,
    "altHero": heroImage.alt,
  }
`);
  const pageTitle = "Projects | walkonmars.design";
  const description = "A collection of projects by walkonmars.design showcasing web design and development.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "description": description, "data-astro-cid-aid3sr62": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article id="main-content" data-astro-cid-aid3sr62> <h1 class="wrapper" data-astro-cid-aid3sr62>Projects</h1> ${projectData.map(({ id, title, heroImage, excerpt, altHero }) => renderTemplate`<section class="project wrapper" data-astro-cid-aid3sr62> <a${addAttribute(`/project-detail/${id}`, "href")} class="project__link-img" data-astro-cid-aid3sr62> <div class="project__img-wrapper" data-astro-cid-aid3sr62> ${heroImage && renderTemplate`<img class="border-radius-lg"${addAttribute(heroImage, "src")}${addAttribute(altHero, "alt")} title="View Project" data-astro-cid-aid3sr62>`} </div> </a> <div data-astro-cid-aid3sr62> <h2 class="project-h2" data-astro-cid-aid3sr62>${title}</h2> <p data-astro-cid-aid3sr62>${excerpt}</p> </div> <a class="project__link"${addAttribute(`/project-detail/${id}`, "href")} data-astro-cid-aid3sr62>
View project
</a> </section>`)} </article> ` })}`;
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/pages/projects.astro", void 0);

const $$file = "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
