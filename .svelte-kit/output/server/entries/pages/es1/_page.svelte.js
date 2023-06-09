import { c as create_ssr_component, d as add_attribute } from "../../../chunks/index.js";
const img = "/_app/immutable/assets/1.bb3ab01b.jpg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-g0revl_START -->${$$result.title = `<title>Esercizio 1</title>`, ""}<meta name="description" content="Esercizio 1"><!-- HEAD_svelte-g0revl_END -->`, ""}

<div class="text-column"><h1>Esercizio 1</h1>

	<img${add_attribute("src", img, 0)} alt="immagine esercizio"></div>`;
});
export {
  Page as default
};
