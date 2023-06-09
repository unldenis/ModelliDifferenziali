import { c as create_ssr_component, e as escape } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let es = `
		\\begin{align}
		\\ N(t) = N_0 * e ^ {r * t} \\\\
		\\end{align}`;
  return `${$$result.head += `<!-- HEAD_svelte-fiy0vz_START -->${$$result.title = `<title>Esercizio 2</title>`, ""}<meta name="description" content="Esercizio 2"><!-- HEAD_svelte-fiy0vz_END -->`, ""}

<div class="text-column"><h1>Esercizio 2</h1>

	${escape(es)}

	<p>Se r = 0 la popolazione rimarrà costante(ovvero uguale alla popolazione iniziale).
		<br>
		Se r è positivo la popolazione aumenterà.
		<br>
		Se r è negativo la popolazione è destinata a estinguersi.
	</p>

	<p>La popolazione iniziale è un moltiplicatore del risultato dell&#39;esponenziale.
	</p></div>`;
});
export {
  Page as default
};
