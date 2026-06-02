import { _ as __vite_glob_0_0 } from './post-1_jqNxGdzJ.mjs';
import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_Dxw41tW-.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead } from './prerender_a7HRX1Sr.mjs';
import { $ as $$BlogPost } from './BlogPost_CTtHkM29.mjs';

async function getStaticPaths() {
  const postModules = /* #__PURE__ */ Object.assign({"../blog/posts/post-1.md": __vite_glob_0_0});
  const allPosts = Object.values(postModules);
  const uniqueTags = [
    ...new Set(allPosts.map((post) => post.frontmatter.tags).flat())
  ];
  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter(
      (post) => post.frontmatter.tags.includes(tag)
    );
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
}
const $$tag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$tag;
  const { tag: selectedTag } = Astro2.params;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": selectedTag, "data-astro-cid-tge3q7ae": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<nav class="wrapper space-l" aria-label="breadcrumb" data-astro-cid-tge3q7ae> <ul class="breadcrumb flex" role="list" data-astro-cid-tge3q7ae> <li class="breadcrumb-item" data-astro-cid-tge3q7ae> <a href="/blog/" data-astro-cid-tge3q7ae>Blog /</a> </li> <li class="breadcrumb-item active" aria-current="page" data-astro-cid-tge3q7ae> ${selectedTag} </li> </ul> </nav> <main class="wrapper" data-astro-cid-tge3q7ae> <h1 class="space-xl underline" data-astro-cid-tge3q7ae>Posts tagged - ${selectedTag}</h1> <ul data-astro-cid-tge3q7ae> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "date": new Date(post.frontmatter.pubDate).toLocaleDateString(
    "en-GB",
    {
      month: "long",
      day: "numeric",
      year: "numeric"
    }
  ), "class": "blog-post", "url": post.url, "title": post.frontmatter.title, "description": post.frontmatter.description, "tags": post.frontmatter.tags, "image": post.frontmatter.image.url, "data-astro-cid-tge3q7ae": true })}`)} </ul> </main> ` })}`;
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/pages/tags/[tag].astro", void 0);

const $$file = "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
