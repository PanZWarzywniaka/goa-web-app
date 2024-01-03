<script>
	import Map from './Map.svelte'

	export let data

	let text = 'world'
</script>

<div class="row">
	<div class="col-8">
		<h1><a href="/">GOA Web</a></h1>
	</div>
</div>

<div class="row">
	<div class="col-md">
		<h2>Here is ur poster of {data.display_name}</h2>
		<Map {...data.map_data} land_fill={text} />
	</div>

	<div class="col-sm">
		<input bind:value={text} />
		Color pickers..
		<h1>Hello {text}!</h1>
	</div>
</div>

<style>
</style>
