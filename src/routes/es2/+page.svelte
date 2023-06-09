<script>
    import { onMount } from 'svelte';

	let es = `
		\\begin{align}
		\\ N(t) = N_0 * \e ^ {r * t} \\\\
		\\end{align}`;
	onMount(() => {

		let script = document.createElement('script');
		script.src = "./mathjax.js";
		document.head.append(script);
			
		script.onload = () => {
			MathJax = {
				tex: {inlineMath: [['$', '$'], ['\\(', '\\)']]},
				svg: {fontCache: 'global'}
			};
		};
	});

</script>

<svelte:head>
	<title>Esercizio 2</title>
	<meta name="description" content="Esercizio 2" />
</svelte:head>

<div class="text-column">
	<h1>Esercizio 2</h1>

	{es}

	<p>
		Se r = 0 la popolazione rimarrà costante(ovvero uguale alla popolazione iniziale).
		<br>
		Se r è positivo la popolazione aumenterà.
		<br>
		Se r è negativo la popolazione è destinata a estinguersi.
	</p>

	<p>
		La popolazione iniziale è un moltiplicatore del risultato dell'esponenziale.
	</p>
</div>
