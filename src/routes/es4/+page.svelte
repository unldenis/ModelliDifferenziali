<script>

	import img1 from '$lib/images/4a.jpg';
	import img2 from '$lib/images/4b.jpg';
	import img3 from '$lib/images/4c.jpg';
	import img4 from '$lib/images/4d.jpg';

</script>

<svelte:head>
	<title>Esercizio 4</title>
	<meta name="description" content="Esercizio 4" />
</svelte:head>

<div class="text-column">
	<h1>Esercizio 4</h1>

	<p>
		Inizio col calcolare l'equazione differenziale.
	</p>
	<div class="row">
		<div class="column">
			<img src={img1} alt="Immagine 1" style="width:100%">
		</div>
		<div class="column">
			<img src={img2} alt="Immagine 2" style="width:100%">
		</div>
	</div> 


	<p>
		Problema di Cauchy.
	</p>

	<div class="row">
		<div class="column">
			<img src={img3} alt="Immagine 3" style="width:100%">
		</div>
		<div class="column">
			<img src={img4} alt="Immagine 4" style="width:100%">
		</div>
	</div> 

</div>


<style>

 /* Three image containers (use 25% for four, and 50% for two, etc) */
.column {
  float: left;
  width: 50%;
  padding: 0px;
}

/* Clear floats after image containers */
.row::after {
  content: "";
  clear: both;
  display: table;
} 
</style>