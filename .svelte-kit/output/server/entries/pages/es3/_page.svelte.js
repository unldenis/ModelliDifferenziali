import { c as create_ssr_component, d as add_attribute, e as escape } from "../../../chunks/index.js";
import "chart.js/auto";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "input.svelte-1clpbz5{width:30%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const datiAbitanti = [4068, 4435, 4831, 5263, 5674, 6070, 6454, 6930, 7349];
  let n0 = `
		\\begin{align}
		\\ N_0 = 4068 \\\\
		\\ N_1 = 4435 \\\\	
		\\ N_2 = 4831 \\\\	
		\\ N_3 = 5263 \\\\
		\\end{align}`;
  let myChart;
  const coefficienteAngolare = (datiAbitanti[1] - datiAbitanti[0]) / 5;
  const calcolaPopolazione = (x) => {
    return coefficienteAngolare * (5 * x) + datiAbitanti[0];
  };
  const stimaPopolazioni = datiAbitanti.slice(0, 3 + 1);
  for (let i = 0; i < 5; i++) {
    stimaPopolazioni.push(calcolaPopolazione(i + 4));
  }
  let risChart;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-6fkbqd_START -->${$$result.title = `<title>Esercizio 3</title>`, ""}<meta name="description" content="Esercizio 3"><!-- HEAD_svelte-6fkbqd_END -->`, ""}




<div class="text-column"><h1>Esercizio 3</h1>

	<div><canvas id="myChart"${add_attribute("this", myChart, 0)}></canvas></div>
	
	${escape(n0)}

	<p>Calcolo il coefficiente angolare tra i primi due dati del &#39;75 e del &#39;80.
	</p>
	<pre>m = y1 - y0 / x1 - x0 = ${escape(datiAbitanti[1])} - ${escape(datiAbitanti[0])} / 5 = ${escape(coefficienteAngolare)}</pre>

	<p>E ora provo a fare una stima nel 2010 usando il coefficiente angolare appena trovato.
	</p>
	<pre>y= mx + q = ${escape(coefficienteAngolare)} * 35 + ${escape(datiAbitanti[0])} = ${escape(stimaPopolazioni[7])}</pre>


	<div><canvas id="risChart"${add_attribute("this", risChart, 0)}></canvas></div>

	<p>Noto che la mia stima è imprecisa. Quindi determinare la crescita della popolazione usando 
		una retta non è il massimo.
	</p>



	<h3>Modello di Malthus</h3>
	<p>E&#39; possibile ma molto difficile applicare il modello di Malthus alla popolazione.
		Con un tasso di crescita allo 0.015 ci si avvicina molto a quello reale.
	</p>
	<input type="text" placeholder="Tasso di crescita r(0.02)" class="svelte-1clpbz5">

	<p>Tuttavia noto che la crescita della popolazione rallenta e per questo si
		usa un modello piu&#39; affidabile come l&#39;equazione differenziale di Verhulst.
	</p>
</div>`;
});
export {
  Page as default
};
