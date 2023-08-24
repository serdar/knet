import '@lit/reactive-element';
import 'lit-html';
import { LitElement, html } from 'lit-element/lit-element.js';
import 'lit-html/is-server.js';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderHead, d as renderComponent, e as renderSlot, f as addAttribute } from '../astro.e50c0466.mjs';
import 'html-escaper';
import 'lit/decorators.js';

async function getGithubProfileStats() {
  const url = "https://api.github.com/users/serdar";
  const response = await fetch(url);
  return response.json();
}

async function fetchApi({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList
}) {
  if (endpoint.startsWith("/")) {
    endpoint = endpoint.slice(1);
  }
  const url = new URL(`${"http://127.0.0.1:1337"}/api/${endpoint}`);
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }
  const res = await fetch(url.toString(), {
    headers: {
      "Authorization": `Bearer ${"bfb1f1a95fa7c73a667d9413b4f5aed4c9302e85212634a49c8831eae10846d05a55a329227d619983cf5a98144c8e90f75106f22f8d0142d6d393bda61a29835670c12a17aede4015b47616f465993b02f110517f56cecdcef82d0ccf4fc92d16599c2c6352ec67ffa94eb8eafe5ff8237e3c7fce2c00ac07cfa63df0c2659b"}`
    }
  });
  let data = await res.json();
  if (wrappedByKey) {
    data = data[wrappedByKey];
  }
  if (wrappedByList) {
    data = data[wrappedByList];
  }
  return data;
}

const $$Astro$3 = createAstro();
const $$BaseHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseHeader;
  return renderTemplate`${maybeRenderHead()}<h1>header 2</h1>`;
}, "/Users/serdar/dev/projects/knet/apps/frontend/src/components/BaseHeader.astro", void 0);

const $$Astro$2 = createAstro();
const $$BaseFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseFooter;
  return renderTemplate`&copy;`;
}, "/Users/serdar/dev/projects/knet/apps/frontend/src/components/BaseFooter.astro", void 0);

const $$Astro$1 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
${renderHead()}</head>
<body>
    ${renderComponent($$result, "BaseHeader", $$BaseHeader, {})}
    asdf222
    <nav>
      <a href="#">Home</a>
      <a href="#">Posts</a>
      <a href="#">Contact</a>
    </nav>
    <!-- <h1>{title}</h1> -->
    <article>
      ${renderSlot($$result, $$slots["default"])} <!-- your content is injected here -->
    </article>
    ${renderComponent($$result, "BaseFooter", $$BaseFooter, {})}
  </body></html>`;
}, "/Users/serdar/dev/projects/knet/apps/frontend/src/layouts/BaseLayout.astro", void 0);

// @customElement('greeting')
class Greeting extends LitElement {
    render() {
        return html`<p>hi</p>`
    }
}
customElements.define('c-greeting', Greeting);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await fetchApi({
    endpoint: "posts",
    wrappedByKey: "data"
  });
  const ghStats = await getGithubProfileStats();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate`
  Recent Posts d
  ${renderComponent($$result2, "Greeting", Greeting, {})}
  github followers: ${ghStats.following}${maybeRenderHead()}<div>

    ${posts.map((post) => renderTemplate`<li>
          <a${addAttribute(`/blog/${post.attributes.link}/`, "href")}>${post.attributes.title}</a>
        </li>`)}
  </div>
` })}`;
}, "/Users/serdar/dev/projects/knet/apps/frontend/src/pages/index.astro", void 0);

const $$file = "/Users/serdar/dev/projects/knet/apps/frontend/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
