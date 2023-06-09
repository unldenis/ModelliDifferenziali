import { c as create_ssr_component, d as add_attribute } from "../../../chunks/index.js";
const img1 = "/_app/immutable/assets/4a.10e4c8e6.jpg";
const img2 = "/_app/immutable/assets/4b.5aeb481a.jpg";
const img3 = "/_app/immutable/assets/4c.93adfe84.jpg";
const img4 = "/_app/immutable/assets/4d.cf239f57.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.column.svelte-1p0p0kj{float:left;width:50%;padding:0px}.row.svelte-1p0p0kj::after{content:"";clear:both;display:table}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-p1luh3_START -->${$$result.title = `<title>Esercizio 4</title>`, ""}<meta name="description" content="Esercizio 4"><!-- HEAD_svelte-p1luh3_END -->`, ""}

<div class="text-column"><h1>Esercizio 4</h1>

	<p>Inizio col calcolare l&#39;equazione differenziale.
	</p>
	<div class="row svelte-1p0p0kj"><div class="column svelte-1p0p0kj"><img${add_attribute("src", img1, 0)} alt="Immagine 1" style="width:100%"></div>
		<div class="column svelte-1p0p0kj"><img${add_attribute("src", img2, 0)} alt="Immagine 2" style="width:100%"></div></div> 


	<p>Problema di Cauchy.
	</p>

	<div class="row svelte-1p0p0kj"><div class="column svelte-1p0p0kj"><img${add_attribute("src", img3, 0)} alt="Immagine 3" style="width:100%"></div>
		<div class="column svelte-1p0p0kj"><img${add_attribute("src", img4, 0)} alt="Immagine 4" style="width:100%"></div></div> 

</div>`;
});
export {
  Page as default
};
