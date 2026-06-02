import { c as createComponent, r as renderScript, $ as $$BaseLayout } from './BaseLayout_Dxw41tW-.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate, b as renderComponent, a as addAttribute } from './prerender_a7HRX1Sr.mjs';
import 'clsx';

const $$HeroBtn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="/projects" data-astro-cid-i55w3sqc>View Projects</a>`;
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/components/HeroBtn.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-bbe6dxrz> <div class="hero wrapper-np" data-astro-cid-bbe6dxrz> <div class="hero__content" data-astro-cid-bbe6dxrz> <span data-astro-cid-bbe6dxrz>Hi, I’m Mark Lawson</span> <h1 data-astro-cid-bbe6dxrz>
A Web Designer / Developer <span data-astro-cid-bbe6dxrz>based in Bristol UK.</span> </h1> <p data-astro-cid-bbe6dxrz>
I can help you with ... <span class="typewriter" data-astro-cid-bbe6dxrz></span> </p> ${renderComponent($$result, "HeroBtn", $$HeroBtn, { "data-astro-cid-bbe6dxrz": true })} </div> <div class="hero__image-wrap" data-astro-cid-bbe6dxrz> <img src="/assets/images/mark-bk-800.avif" alt="Bristol based web designer and developer Mark Lawson" loading="eager" width="800" height="1000" data-astro-cid-bbe6dxrz> </div> </div> </section>  ${renderScript($$result, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/components/Hero.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${maybeRenderHead()}<section id="services" data-astro-cid-g5jplrhu> <div class="wrapper" data-astro-cid-g5jplrhu> <h2 data-astro-cid-g5jplrhu>Services</h2> <div class="services grid" data-astro-cid-g5jplrhu> <div class="flow wdn" data-astro-cid-g5jplrhu> <h3 data-astro-cid-g5jplrhu>Web Design</h3> <p data-astro-cid-g5jplrhu>
I create designs in Figma with a focus on user experience and
          accessibility, aiming for an intuitive and inclusive experience for
          all users. This phase is also an opportunity to explore and present
          different design options before the site goes on to be developed.
</p> </div> <div class="flow wfw" data-astro-cid-g5jplrhu> <h3 data-astro-cid-g5jplrhu>Webflow development</h3> <p data-astro-cid-g5jplrhu>
Crafting websites with Webflow’s powerful visual development platform,
          combining creative design freedom with seamless performance. This
          approach ensures top-tier hosting, effortless client management, and a
          flawless user experience across all devices.
</p> </div> <div class="flow shp" data-astro-cid-g5jplrhu> <h3 data-astro-cid-g5jplrhu>Shopify</h3> <p data-astro-cid-g5jplrhu>
With firsthand experience running my own e-commerce store, I can help
          you build a Shopify store that’s easy to manage and tailored to your
          needs.
</p> </div> <div class="flow wp" data-astro-cid-g5jplrhu> <h3 data-astro-cid-g5jplrhu>WordPress development</h3> <p data-astro-cid-g5jplrhu>
If you have an existing WordPress site, I can help with custom coding
          and building tailored solutions. While I’ve built sites from scratch
          using Oxygen and Elementor, I am now focusing on Webflow, which offers
          a more user-friendly experience, making site management simpler and
          more intuitive.
</p> </div> <div class="flow fed" data-astro-cid-g5jplrhu> <h3 data-astro-cid-g5jplrhu>Frontend Development</h3> <p data-astro-cid-g5jplrhu>
While I primarily focus on platforms like Webflow, Shopify, and
          WordPress, I’m also skilled in coding from scratch with HTML, CSS, and
          JavaScript. I’ve worked on projects using dynamic frontend frameworks
          like ReactJS and Astro and can offer versatile solutions tailored to
          your needs.
</p> </div> <div class="flow seo" data-astro-cid-g5jplrhu> <h3 data-astro-cid-g5jplrhu>SEO</h3> <p data-astro-cid-g5jplrhu>
By optimizing website structures and content, conducting technical SEO
          audits, and implementing on-page optimization strategies like keyword
          research and content optimization, I aim to improve search engine
          visibility and drive organic traffic.
</p> </div> </div> </div> </section>`;
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/components/Services.astro", void 0);

const projectData = [
	{
		id: "avon-airstream-rentals",
		title: "Avon Airstream Rentals",
		excerpt: "Website design and development of a custom Webflow site for a luxury Airstream rental business.",
		heading: "Website design and development of a custom Webflow site.",
		url: "https://avonairstreamrentals.co.uk/",
		services: [
			"Website Design",
			"Webflow Development",
			"Custom GSAP",
			"SEO"
		],
		objective: "Avon Airstream Rentals needed a new website to replace their outdated one, which was not mobile-friendly and lacked the modern aesthetic they desired. The goal was to create a visually appealing, user-friendly site that showcased their luxury Airstream rentals, offered a booking system and improved online visibility.",
		process: "I created the layout in Figma, focusing on a modern, clean design that highlighted the luxury aspect of their rentals. The site was developed in Webflow using the Lumos framework, with some custom GSAP animation. I implemented a third party booking system and embedded WhatsApp to enable instant contact.",
		result: "The new website now features a clean design, improved navigation, mobile-friendly layout and allows customers to check availability and book online.",
		images: {
			large: "/assets/images/avon-airstream-rentals-homepage.webp",
			featured: "/assets/images/webflow-aar-sq.webp"
		},
		altHero: "Screenshot of the hero section from Avon Airstream Rentals website",
		altFeatured: "Screenshot of the Webflow editor for Avon Airstream Rentals website",
		tech: [
			"Webflow",
			"CSS",
			"GSAP",
			"JavaScript"
		]
	},
	{
		id: "timothy-malnick",
		title: "Timothy Malnick",
		excerpt: "Website design and development of a custom Wordpress site for a leadership coach, facilitator and organisational psychologist.",
		heading: "Website design and development of a custom Wordpress site.",
		url: "https://timothymalnick.com/",
		services: [
			"Website Design",
			"Wordpress Development",
			"SEO",
			"Green Hosting"
		],
		objective: "Timothy Malnick, a leadership coach, facilitator, and organisational psychologist, needed a website that reflected his expertise and professional services. His existing site was outdated, difficult to navigate, and content-heavy, making it less effective for web audiences. The goal was to create an easy-to-navigate site that showcased his services, provided a platform for his blog, and adopted a punchier, more web-friendly style of writing.",
		process: "Tim provided a detailed brief and extensive content, reflecting his skill in long-form writing. It took careful collaboration to guide him toward a more concise style suitable for the web. After auditing his existing site, I designed the new layout in Figma and developed it in WordPress using Oxygen Builder, incorporating custom PHP and JavaScript for specific functionality. The site was optimized for SEO and performance, leading to faster load times and improved visibility.",
		result: "Tim was delighted with the final website, which now balances his expertise in content creation with a clear, user-friendly design. Clients and colleagues have provided excellent feedback, praising the site’s modern aesthetic, ease of navigation, and concise, impactful copy.",
		images: {
			small: "",
			large: "/assets/images/tim-hero.webp",
			featured: "/assets/images/tim-ondrian.webp"
		},
		altHero: "Screenshot of the hero section from Timothy Malnick's website",
		altFeatured: "Montage of Timothy Malnick's website in the style of Piet Mondrian",
		tech: [
			"Wordpress",
			"PHP",
			"Oxygen",
			"Custom Code"
		]
	},
	{
		id: "ilove-snacks",
		title: "iLOVE SNACKS",
		excerpt: "Web design and development of a Shopify site for this award winning ethical snack food producer.",
		heading: "Web design and development of a Shopify site.",
		url: "https://ilovesnacks.co.uk/",
		services: [
			"Website Design",
			"Shopify Development",
			"SEO"
		],
		objective: "Amanda from iLOVE SNACKS approached me with a WordPress site that was slow to load and hard to navigate. She wanted a solution that improved performance, refreshed the design, and enhanced usability.",
		process: "To address the immediate issue, I optimized the existing site’s images, improving loading times while building the new site. I then collaborated closely with Amanda through multiple design iterations, ensuring the final look and feel aligned with her vision before developing the updated site. ",
		result: "The new site is fast, user-friendly, and visually appealing, with a modern design that reflects the iLOVE SNACKS brand. Improved performance and navigation have enhanced the user experience, making it easier for customers to explore products and make purchases.",
		images: {
			small: "",
			large: "/assets/images/ilove-snacks-home.webp"
		},
		altHero: "Screenshot of the homepage hero section from I Love Snacks website",
		tech: [
			"Shopify",
			"CSS",
			"Javascript"
		]
	}
];

const $$FeaturedBtn = createComponent(($$result, $$props, $$slots) => {
  const { id } = projectData[0];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/project-detail/${id}`, "href")} data-astro-cid-hxcvhsfm>Find out more</a>`;
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/components/FeaturedBtn.astro", void 0);

const $$FeaturedProject = createComponent(($$result, $$props, $$slots) => {
  const { title, excerpt, id, images, altFeatured } = projectData[0];
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-grvnqqyp> <div class="wrapper" data-astro-cid-grvnqqyp> <div class="featured" data-astro-cid-grvnqqyp> <h2 class="" data-astro-cid-grvnqqyp>Featured project</h2> <div class="featured__content" data-astro-cid-grvnqqyp> <div class="featured__content-text flow" data-astro-cid-grvnqqyp> <h3 data-astro-cid-grvnqqyp>${title}</h3> <p data-astro-cid-grvnqqyp> ${excerpt} </p> ${renderComponent($$result, "FeaturedBtn", $$FeaturedBtn, { "data-astro-cid-grvnqqyp": true })} </div> <div class="featured__img-wrapper" data-astro-cid-grvnqqyp> <a class="project-link"${addAttribute(`/project-detail/${id}`, "href")} data-astro-cid-grvnqqyp> <img class="featured__img"${addAttribute(images.featured, "src")}${addAttribute(altFeatured, "alt")} data-astro-cid-grvnqqyp> </a> </div> </div> </div> </div> </section>`;
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/components/FeaturedProject.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="wrapper" id="testimonials" data-astro-cid-aadlzisc> <div class="testimonial" data-astro-cid-aadlzisc> <picture class="inline" data-astro-cid-aadlzisc><img class="quote-mark" src="/assets/images/quote-mark.svg" aria-hidden="true" alt="" data-astro-cid-aadlzisc></picture> <div class="testimonial__text flow" data-astro-cid-aadlzisc> <p data-astro-cid-aadlzisc>
I have run my own small business for over 20 years. In that time I have
        probably worked with 4 or 5 web designers on different iterations of my
        site.
</p> <p data-astro-cid-aadlzisc>
Mark has been far and away the best I have ever worked with and I am
        really delighted with the results.
</p> <p data-astro-cid-aadlzisc>
Mark has a rare combination of qualities that make him in my view
        perfect for supporting solo / small business owners in creating websites
        that really fit their personalities and brand.
</p> <div class="flex align-center space-xs" data-astro-cid-aadlzisc> <span class="testimonial_author" data-astro-cid-aadlzisc>Timothy Malnick</span> <img class="testimonial_author-img" src="/assets/images/tim.webp" alt="Timothy Malnick" data-astro-cid-aadlzisc> </div> </div> </div> </section>`;
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/components/Testimonials.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<section id="about-me" data-astro-cid-jlz3adq6> <div class="about flow wrapper" data-astro-cid-jlz3adq6> <div class="about__content" data-astro-cid-jlz3adq6> <div class="flow" data-astro-cid-jlz3adq6> <h2 data-astro-cid-jlz3adq6>About Me</h2> <p class="huge-5" data-astro-cid-jlz3adq6>\nI haven’t taken the typical route to becoming a freelance web\n          designer.\n</p> <p data-astro-cid-jlz3adq6>\nMy background in music, screen printing, and running a creative\n          business has shaped my approach to design and collaboration.\n</p> <p data-astro-cid-jlz3adq6>\nI focus on the Webflow platform with an emphasis on user experience\n          and accessibility, while drawing on technical knowledge from frontend\n          development and software engineering training.\n</p> </div> <details class="about-disclosure" data-astro-cid-jlz3adq6> <summary class="btn space-xs" data-astro-cid-jlz3adq6>Read more ...</summary> <div class="more-text flow" data-astro-cid-jlz3adq6> <p data-astro-cid-jlz3adq6>\nI like to work with values driven clients and my aim is to create\n            websites that reflect their goals and mission, whether this be for a\n            solopreneur, small business, or nonprofit/CIC. I really enjoy taking\n            a collaborative approach and making the process fun.\n</p> <p data-astro-cid-jlz3adq6>\nFirst exploring web design while running a sustainable printing\n            business, I created websites to promote my commercial print service\n            and also for the design range I curated with a group of independent\n            artists.\n</p> <p data-astro-cid-jlz3adq6>\nThe printing business highlighted to me how much I enjoyed working\n            with fine detail, colour, and graphic design as well as working\n            closely with clients to bring their ideas to life. The process of\n            creating websites for my business sparked a strong desire in me to\n            learn more and as a result led me to the decision to move from\n            printing to web design/development.\n</p> <p data-astro-cid-jlz3adq6>\nAlongside web design, I run an online t-shirt design business and I\n            also play the bass, the drums and am currently learning the piano.\n</p> <p data-astro-cid-jlz3adq6>\nI live in East Bristol with my wife, my son and our very silly\n            Labrador.\n</p> <button type="button" class="btn details-close" data-astro-cid-jlz3adq6>Show less</button> </div> </details> </div> </div> </section>  <script>\n  // Smooth open/close for ALL <details class="about-disclosure"> blocks on the page\n  function bindDisclosures() {\n    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;\n\n    document.querySelectorAll("details.about-disclosure").forEach((det) => {\n      if (det.dataset.bound) return;\n      det.dataset.bound = "1";\n\n      const summary = det.querySelector("summary");\n      const panel = det.querySelector(".more-text");\n      const closeBtn = det.querySelector(".details-close");\n      if (!summary || !panel) return;\n\n      panel.style.overflow = panel.style.overflow || "hidden";\n\n      const openAnim = () => {\n        det.setAttribute("open", ""); // set open state first\n        if (reduce) return;\n        panel.style.height = "0px";\n        const end = panel.scrollHeight;\n        requestAnimationFrame(() => {\n          panel.style.transition = "height 350ms ease";\n          panel.style.height = end + "px";\n        });\n        panel.addEventListener(\n          "transitionend",\n          () => {\n            panel.style.height = "";\n            panel.style.transition = "";\n          },\n          { once: true }\n        );\n      };\n\n      const closeAnim = () => {\n        if (reduce) {\n          det.removeAttribute("open");\n          return;\n        }\n        const start = panel.scrollHeight;\n        panel.style.height = start + "px";\n        requestAnimationFrame(() => {\n          panel.style.transition = "height 300ms ease";\n          panel.style.height = "0px";\n        });\n        panel.addEventListener(\n          "transitionend",\n          () => {\n            panel.style.height = "";\n            panel.style.transition = "";\n            det.removeAttribute("open");\n          },\n          { once: true }\n        );\n      };\n\n      // Open from the top summary (prevent native toggle to avoid loops)\n      summary.addEventListener("click", (e) => {\n        e.preventDefault();\n        if (!det.hasAttribute("open")) openAnim();\n      });\n\n      // Close from the bottom button\n      if (closeBtn) {\n        closeBtn.addEventListener("click", (e) => {\n          e.preventDefault();\n          if (det.hasAttribute("open")) closeAnim();\n        });\n      }\n    });\n  }\n\n  if (document.readyState === "loading") {\n    document.addEventListener("DOMContentLoaded", bindDisclosures, {\n      once: true,\n    });\n  } else {\n    bindDisclosures();\n  }\n  document.addEventListener("astro:page-load", bindDisclosures);\n  window.addEventListener("pageshow", bindDisclosures);\n<\/script>'])), maybeRenderHead());
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/components/AboutMe.astro", void 0);

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ContactForm;
  return renderTemplate`${maybeRenderHead()}<form id="contact-form" name="contact" action="/form-success" method="post" data-netlify="true" netlify-honeypot="bot-field" data-astro-cid-svshx33u> <input type="hidden" name="form-name" value="contact" data-astro-cid-svshx33u> <input type="text" name="bot-field" tabindex="-1" autocomplete="off" hidden data-astro-cid-svshx33u> <fieldset data-astro-cid-svshx33u> <label for="firstName" data-astro-cid-svshx33u>First name</label> <input id="firstName" name="firstName" type="text" autocomplete="given-name" required placeholder=" " aria-describedby="firstName-error" data-astro-cid-svshx33u> <span id="firstName-error" class="error-text font-xs-step-2" aria-live="polite" aria-atomic="true" data-astro-cid-svshx33u>
First name is required
</span> </fieldset> <fieldset data-astro-cid-svshx33u> <label for="lastName" data-astro-cid-svshx33u>Last name</label> <input id="lastName" name="lastName" type="text" autocomplete="family-name" required placeholder=" " aria-describedby="lastName-error" data-astro-cid-svshx33u> <span id="lastName-error" class="error-text font-xs-step-2" aria-live="polite" aria-atomic="true" data-astro-cid-svshx33u>
Last name is required
</span> </fieldset> <fieldset data-astro-cid-svshx33u> <label for="email" data-astro-cid-svshx33u>Email</label> <input id="email" name="email" type="email" autocomplete="email" inputmode="email" autocapitalize="none" spellcheck="false" required placeholder=" " aria-describedby="email-error" data-astro-cid-svshx33u> <span id="email-error" class="error-text font-xs-step-2" aria-live="polite" aria-atomic="true" data-astro-cid-svshx33u>
Email is not valid
</span> </fieldset> <fieldset data-astro-cid-svshx33u> <label for="message" data-astro-cid-svshx33u>Message</label> <textarea id="message" name="message" rows="5" required minlength="5" placeholder=" " aria-describedby="message-error" spellcheck="true" data-astro-cid-svshx33u></textarea> <span id="message-error" class="error-text font-xs-step-2" aria-live="polite" aria-atomic="true" data-astro-cid-svshx33u>
Message is required
</span> </fieldset> <button class="submit btn" type="submit" data-astro-cid-svshx33u>Send</button> </form>  ${renderScript($$result, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/components/ContactForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/components/ContactForm.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<section id="contact" data-astro-cid-xmivup5a> <div class="contact wrapper" data-astro-cid-xmivup5a> <div class="contact-section grid" data-astro-cid-xmivup5a> <div class="flex column flow" data-astro-cid-xmivup5a> <div class="contact__header flex align-center" data-astro-cid-xmivup5a> <h2 data-astro-cid-xmivup5a>Get in touch</h2> </div> <p data-astro-cid-xmivup5a>\nI would love to hear about your project and how I could help. Please\n          fill in the form, and I’ll get back to you as soon as possible.\n</p> <p data-astro-cid-xmivup5a>\nor email me at\n<button type="button" class="email-copy" data-user="mark" data-domain="walkonmars.co.uk" data-astro-cid-xmivup5a> <span class="email-vis" data-astro-cid-xmivup5a>\nmark@walkon<b aria-hidden="true" data-astro-cid-xmivup5a>deathtobots</b>mars.co.uk\n</span> <span class="copy-toast" aria-hidden="true" data-astro-cid-xmivup5a>Copied!</span> <span class="sr-only" aria-live="polite" data-astro-cid-xmivup5a></span> </button> </p> </div> ', ' </div> </div> </section>  <script>\n  const bindEmailCopy = () => {\n    document.querySelectorAll(".email-copy").forEach((btn) => {\n      if (btn.dataset.bound) return;\n      btn.dataset.bound = "1";\n\n      const user = btn.dataset.user;\n      const domain = btn.dataset.domain;\n      const email = `${user}@${domain}`;\n      const live = btn.querySelector(".sr-only");\n\n      async function copyNow() {\n        try {\n          if (navigator.clipboard && window.isSecureContext) {\n            await navigator.clipboard.writeText(email);\n          } else {\n            const ta = document.createElement("textarea");\n            ta.value = email;\n            ta.setAttribute("readonly", "");\n            ta.style.position = "absolute";\n            ta.style.left = "-9999px";\n            document.body.appendChild(ta);\n            ta.select();\n            document.execCommand("copy");\n            ta.remove();\n          }\n          btn.dataset.copied = "true";\n          if (live) {\n            live.textContent = "Email copied to clipboard";\n          }\n          setTimeout(() => {\n            btn.removeAttribute("data-copied");\n            if (live) {\n              live.textContent = "";\n            }\n          }, 1200);\n        } catch {}\n      }\n\n      btn.addEventListener("click", copyNow);\n      btn.addEventListener("keydown", (e) => {\n        if (e.key === "Enter" || e.key === " ") {\n          e.preventDefault();\n          copyNow();\n        }\n      });\n    });\n  };\n\n  if (document.readyState === "loading") {\n    document.addEventListener("DOMContentLoaded", bindEmailCopy, {\n      once: true,\n    });\n  } else {\n    bindEmailCopy();\n  }\n  document.addEventListener("astro:page-load", bindEmailCopy);\n  window.addEventListener("pageshow", bindEmailCopy);\n<\/script>'], ["", '<section id="contact" data-astro-cid-xmivup5a> <div class="contact wrapper" data-astro-cid-xmivup5a> <div class="contact-section grid" data-astro-cid-xmivup5a> <div class="flex column flow" data-astro-cid-xmivup5a> <div class="contact__header flex align-center" data-astro-cid-xmivup5a> <h2 data-astro-cid-xmivup5a>Get in touch</h2> </div> <p data-astro-cid-xmivup5a>\nI would love to hear about your project and how I could help. Please\n          fill in the form, and I’ll get back to you as soon as possible.\n</p> <p data-astro-cid-xmivup5a>\nor email me at\n<button type="button" class="email-copy" data-user="mark" data-domain="walkonmars.co.uk" data-astro-cid-xmivup5a> <span class="email-vis" data-astro-cid-xmivup5a>\nmark@walkon<b aria-hidden="true" data-astro-cid-xmivup5a>deathtobots</b>mars.co.uk\n</span> <span class="copy-toast" aria-hidden="true" data-astro-cid-xmivup5a>Copied!</span> <span class="sr-only" aria-live="polite" data-astro-cid-xmivup5a></span> </button> </p> </div> ', ' </div> </div> </section>  <script>\n  const bindEmailCopy = () => {\n    document.querySelectorAll(".email-copy").forEach((btn) => {\n      if (btn.dataset.bound) return;\n      btn.dataset.bound = "1";\n\n      const user = btn.dataset.user;\n      const domain = btn.dataset.domain;\n      const email = \\`\\${user}@\\${domain}\\`;\n      const live = btn.querySelector(".sr-only");\n\n      async function copyNow() {\n        try {\n          if (navigator.clipboard && window.isSecureContext) {\n            await navigator.clipboard.writeText(email);\n          } else {\n            const ta = document.createElement("textarea");\n            ta.value = email;\n            ta.setAttribute("readonly", "");\n            ta.style.position = "absolute";\n            ta.style.left = "-9999px";\n            document.body.appendChild(ta);\n            ta.select();\n            document.execCommand("copy");\n            ta.remove();\n          }\n          btn.dataset.copied = "true";\n          if (live) {\n            live.textContent = "Email copied to clipboard";\n          }\n          setTimeout(() => {\n            btn.removeAttribute("data-copied");\n            if (live) {\n              live.textContent = "";\n            }\n          }, 1200);\n        } catch {}\n      }\n\n      btn.addEventListener("click", copyNow);\n      btn.addEventListener("keydown", (e) => {\n        if (e.key === "Enter" || e.key === " ") {\n          e.preventDefault();\n          copyNow();\n        }\n      });\n    });\n  };\n\n  if (document.readyState === "loading") {\n    document.addEventListener("DOMContentLoaded", bindEmailCopy, {\n      once: true,\n    });\n  } else {\n    bindEmailCopy();\n  }\n  document.addEventListener("astro:page-load", bindEmailCopy);\n  window.addEventListener("pageshow", bindEmailCopy);\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "ContactForm", $$ContactForm, { "data-astro-cid-xmivup5a": true }));
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/components/Contact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "walkonmars.design | Web Design & Development Services in Bristol, UK.";
  const description = "walkonmars.design is a web design and development studio based in Bristol, UK. We create accessible, responsive websites that are easy to use and built to last.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "FeaturedProject", $$FeaturedProject, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "AboutMe", $$AboutMe, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/pages/index.astro", void 0);

const $$file = "/Users/Mark/Library/Mobile Documents/com~apple~CloudDocs/Development/design-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
