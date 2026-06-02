import { c as createComponent } from './BaseLayout_Dxw41tW-.mjs';
import 'piccolore';
import { m as maybeRenderHead, a as addAttribute, r as renderTemplate } from './prerender_a7HRX1Sr.mjs';
import 'clsx';

const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BlogPost;
  const { date, url, title, description, tags, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(tags, "data-tags")} class="blog-item" data-astro-cid-xj2uyz6m> <a${addAttribute(url, "href")} data-astro-cid-xj2uyz6m> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} data-astro-cid-xj2uyz6m></a> <h3 class="blog__post-title" data-astro-cid-xj2uyz6m>${title}</h3> <time class="space-xs"${addAttribute(date, "datetime")} data-astro-cid-xj2uyz6m>${date}</time> <p class="space-s" data-astro-cid-xj2uyz6m>${description}</p> <a class="read-more space-s"${addAttribute(url, "href")} data-astro-cid-xj2uyz6m>Read More ...</a> </article>`;
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/components/BlogPost.astro", void 0);

export { $$BlogPost as $ };
