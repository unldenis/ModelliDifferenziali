<script>
	import { onMount } from 'svelte';
    import Chart from "chart.js/auto";

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
	}

	const stimaPopolazioni = datiAbitanti.slice(0, 3 + 1);
	for(let i = 0; i < 5; i++) {
		stimaPopolazioni.push(calcolaPopolazione(i + 4));
	}

	const calcolaPopolazioneConTasso = (iniziale, t, r) => {
		return iniziale * (Math.E ** (t * 5 * r));
	}
	let stimaPopolazioniConTasso = [];
	for(let i = 0; i < 9; i++) {
		stimaPopolazioniConTasso.push(calcolaPopolazioneConTasso(datiAbitanti[0], i, 0.02));
	}


	const lbl1 = [1975, 1980, 1985, 1990];
	const data1 = {
	labels: lbl1,
		datasets: [
			{
				label: 'Popolazione mondiale nel tempo (in milioni)',
				data: datiAbitanti,
				fill: false,
				borderColor: 'rgb(75, 192, 192)',
				tension: 0.1
			},
	]
	};

	const cfg1 = {
		type: 'line',
		data: data1,
		options: {
			responsive: true,
			plugins: {
				legend: {
					position: 'top',
				}
			}
		},
	};


	let risChart;

	const lbl2 = [1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015];
	const data2 = {
	labels: lbl2,
		datasets: [
			{
				label: 'Popolazione mondiale nel tempo (in milioni)',
				data: datiAbitanti,
				fill: false,
				borderColor: 'rgb(75, 192, 192)',
				tension: 0.1
			},
			{
				label: 'Stima calcolata',
				data: stimaPopolazioni,
				fill: false,
				borderColor: 'rgb(220,20,60)',
				tension: 0.1
			},
			{
				label: 'Stima s',
				data: stimaPopolazioniConTasso,
				fill: false,
				borderColor: 'rgb(0, 255, 0)',
				tension: 0.1
			},
	]
	};

	const cfg2 = {
		type: 'line',
		data: data2,
		options: {
			responsive: true,
			plugins: {
				legend: {
					position: 'top',
				}
			}
		},
	};


	let chart1;
	let chart2;

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
		new Chart(myChart, cfg1);
		chart2 = new Chart(risChart, cfg2);
	});

	const handleChange = (tassoCrescita) => {
		stimaPopolazioniConTasso = [];
		for(let i = 0; i < 9; i++) {
			stimaPopolazioniConTasso.push(calcolaPopolazioneConTasso(datiAbitanti[0], i, tassoCrescita));
		}

		chart2.data.datasets[2].data = stimaPopolazioniConTasso;
		chart2.update();
		
		
	};

</script>

<svelte:head>
	<title>Esercizio 3</title>
	<meta name="description" content="Esercizio 3" />
</svelte:head>




<div class="text-column">
	<h1>Esercizio 3</h1>

	<div >
		<canvas bind:this={myChart} id="myChart"></canvas>
	</div>
	
	{n0}

	<p>
	Calcolo il coefficiente angolare tra i primi due dati del '75 e del '80.
	</p>
	<pre>m = y1 - y0 / x1 - x0 = {datiAbitanti[1]} - {datiAbitanti[0]} / 5 = {coefficienteAngolare}</pre>

	<p>
	E ora provo a fare una stima nel 2010 usando il coefficiente angolare appena trovato.
	</p>
	<pre>y= mx + q = {coefficienteAngolare} * 35 + {datiAbitanti[0]} = {stimaPopolazioni[7]}</pre>


	<div >
		<canvas bind:this={risChart} id="risChart"></canvas>
	</div>

	<p>
		Noto che la mia stima è imprecisa. Quindi determinare la crescita della popolazione usando 
		una retta non è il massimo.
	</p>



	<h3>Modello di Malthus</h3>
	<p>
		E' possibile ma molto difficile applicare il modello di Malthus alla popolazione.
		Con un tasso di crescita allo 0.015 ci si avvicina molto a quello reale.
	</p>
	<input on:input={e => handleChange(e.target.value)} type="text" placeholder="Tasso di crescita r(0.02)"/>

	<p>
		Tuttavia noto che la crescita della popolazione rallenta e per questo si
		usa un modello piu' affidabile come l'equazione differenziale di Verhulst.
	</p>
</div>

<style>

input {
	width: 30%;
}
</style>
