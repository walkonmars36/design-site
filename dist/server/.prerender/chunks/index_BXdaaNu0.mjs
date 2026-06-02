import { _ as __vite_glob_0_0 } from './post-1_jqNxGdzJ.mjs';
import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_Dxw41tW-.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate, a as addAttribute, d as defineScriptVars, b as renderComponent } from './prerender_a7HRX1Sr.mjs';
import 'clsx';
import { $ as $$BlogPost } from './BlogPost_CTtHkM29.mjs';

const $$ResetFilters = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button class="btn uppercase flex font-xs-step-2" id="reset-btn" data-astro-cid-zuu7vr2v>Reset Filters</button>`;
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/components/ResetFilters.astro", void 0);

const $$SelectableTag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SelectableTag;
  const { name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<label${addAttribute(name, "for")} class="uppercase flex font-xs-step-2" id="filter" data-astro-cid-4mijazro>${name}<input type="checkbox"${addAttribute(name, "name")}${addAttribute(name, "id")} data-astro-cid-4mijazro></label>`;
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/components/SelectableTag.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const postModules = /* #__PURE__ */ Object.assign({"./posts/post-1.md": __vite_glob_0_0});
  let allPosts = Object.values(postModules);
  allPosts.sort((a, b) => {
    let dateA = new Date(a.frontmatter.pubDate);
    let dateB = new Date(b.frontmatter.pubDate);
    if (dateA > dateB) {
      return -1;
    } else if (dateA < dateB) {
      return 1;
    } else {
      return 0;
    }
  });
  const tags = [
    ...new Set(
      allPosts.map((post) => post.frontmatter.tags).flat().sort()
    )
  ];
  return renderTemplate(_a || (_a = __template(["", "  <script>(function(){", '\n  let blogPosts = document.querySelectorAll("article[data-tags]");\n  console.log("Initial blogPosts: ", blogPosts); // To see the initial blogPosts nodes\n  let filters = document.querySelectorAll("input");\n  console.log("Initial filters: ", filters); // To see the initial filter checkboxes\n\n  const resetBtn = document.querySelector("#reset-btn");\n\n  let tagMap = Object.assign(...tags.map((tag) => ({ [tag]: false })));\n  console.log("Initial tagMap: ", tagMap); // To see the initial tagMap object\n\n  for (const filter of filters) {\n    filter.addEventListener("change", (e) => {\n      let isChecked = e.target.checked;\n      let name = filter.name;\n      tagMap[name] = isChecked;\n\n      console.log(\n        `Checkbox for tag ${name} has been ${\n          isChecked ? "checked" : "unchecked"\n        }`\n      );\n      console.log("Updated tagMap: ", tagMap); // To see the updated tagMap object after checkbox change\n\n      toggleVisibility();\n    });\n  }\n\n  function toggleVisibility() {\n    let checkedTags = Object.keys(tagMap).filter((tag) => tagMap[tag] === true);\n    console.log("Checked tags: ", checkedTags); // To see the array of checked tags\n\n    if (checkedTags.length === 0) {\n      blogPosts.forEach((post) => (post.style.display = "block"));\n    } else {\n      for (const blogPost of blogPosts) {\n        let tags = blogPost.dataset.tags.split(",");\n        console.log("Tags for this blogPost: ", tags); // To see the tags of the current blogPost\n\n        if (checkedTags.some((tag) => tags.includes(tag))) {\n          blogPost.style.display = "block";\n        } else {\n          blogPost.style.display = "none";\n        }\n      }\n    }\n  }\n\n  function resetTagMap() {\n    filters.forEach((filter) => (filter.checked = false));\n\n    blogPosts.forEach((post) => (post.style.display = "block"));\n\n    tagMap = Object.assign(...tags.map((tag) => ({ [tag]: false })));\n    checkedTags = Object.keys(tagMap).filter((tag) => tagMap[tag] === true);\n  }\n\n  resetBtn.addEventListener("click", resetTagMap);\n})();<\/script>'], ["", "  <script>(function(){", '\n  let blogPosts = document.querySelectorAll("article[data-tags]");\n  console.log("Initial blogPosts: ", blogPosts); // To see the initial blogPosts nodes\n  let filters = document.querySelectorAll("input");\n  console.log("Initial filters: ", filters); // To see the initial filter checkboxes\n\n  const resetBtn = document.querySelector("#reset-btn");\n\n  let tagMap = Object.assign(...tags.map((tag) => ({ [tag]: false })));\n  console.log("Initial tagMap: ", tagMap); // To see the initial tagMap object\n\n  for (const filter of filters) {\n    filter.addEventListener("change", (e) => {\n      let isChecked = e.target.checked;\n      let name = filter.name;\n      tagMap[name] = isChecked;\n\n      console.log(\n        \\`Checkbox for tag \\${name} has been \\${\n          isChecked ? "checked" : "unchecked"\n        }\\`\n      );\n      console.log("Updated tagMap: ", tagMap); // To see the updated tagMap object after checkbox change\n\n      toggleVisibility();\n    });\n  }\n\n  function toggleVisibility() {\n    let checkedTags = Object.keys(tagMap).filter((tag) => tagMap[tag] === true);\n    console.log("Checked tags: ", checkedTags); // To see the array of checked tags\n\n    if (checkedTags.length === 0) {\n      blogPosts.forEach((post) => (post.style.display = "block"));\n    } else {\n      for (const blogPost of blogPosts) {\n        let tags = blogPost.dataset.tags.split(",");\n        console.log("Tags for this blogPost: ", tags); // To see the tags of the current blogPost\n\n        if (checkedTags.some((tag) => tags.includes(tag))) {\n          blogPost.style.display = "block";\n        } else {\n          blogPost.style.display = "none";\n        }\n      }\n    }\n  }\n\n  function resetTagMap() {\n    filters.forEach((filter) => (filter.checked = false));\n\n    blogPosts.forEach((post) => (post.style.display = "block"));\n\n    tagMap = Object.assign(...tags.map((tag) => ({ [tag]: false })));\n    checkedTags = Object.keys(tagMap).filter((tag) => tagMap[tag] === true);\n  }\n\n  resetBtn.addEventListener("click", resetTagMap);\n})();<\/script>'])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Blog", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Type": "Article", "data-astro-cid-5tznm7mj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page wrapper space-xl" data-astro-cid-5tznm7mj> <h1 class="underline" data-astro-cid-5tznm7mj>Blog</h1> <main data-astro-cid-5tznm7mj> <p class="space-m" data-astro-cid-5tznm7mj>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
</p> <section class="space-xl" data-astro-cid-5tznm7mj> <h2 class="inline-b underline" data-astro-cid-5tznm7mj>Filter By Tags:</h2> ${renderComponent($$result2, "ResetFilters", $$ResetFilters, { "data-astro-cid-5tznm7mj": true })} <ul class="flex wrap" data-astro-cid-5tznm7mj> ${tags.map((tag) => renderTemplate`${renderComponent($$result2, "SelectableTag", $$SelectableTag, { "name": tag, "data-astro-cid-5tznm7mj": true })}`)} </ul> </section> <section class="space-xl" data-astro-cid-5tznm7mj> <h2 class="underline inline-b" data-astro-cid-5tznm7mj>Posts</h2> ${allPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "date": new Date(post.frontmatter.pubDate).toLocaleDateString(
    "en-GB",
    {
      month: "long",
      day: "numeric",
      year: "numeric"
    }
  ), "class": "blog-post", "url": post.url, "title": post.frontmatter.title, "description": post.frontmatter.description, "tags": post.frontmatter.tags, "image": post.frontmatter.image.url, "data-astro-cid-5tznm7mj": true })}`)} </section> </main> </div> ` }), defineScriptVars({ tags }));
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/pages/blog/index.astro", void 0);

const $$file = "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
