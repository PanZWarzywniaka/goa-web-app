<script>
	import { onMount } from 'svelte'
	import ColorPicker from 'svelte-awesome-color-picker'
	// import ColorPicker from './ColorPicker.svelte'

	// @ts-ignore
	export let data

	let land_hex = '#ffffff'

	let colours = {
		land: { value: '#ffffff', label: 'Land cover' },
		water: { value: '#aaaaff', label: 'Water cover' },
		green: { value: '#00ff00', label: 'Greenery' },
		bg: { value: '#f3f3f3', label: 'Frame' }
	}

	let isMounted = false

	//initialize
	onMount(() => {
		for (const layer_name in colours) {
			colours[layer_name].value = document.getElementById(layer_name)?.attributes.fill.value
		}

		console.log(`Colours initialized to: \n ${JSON.stringify(colours)}`)
		isMounted = true
	})

	// on every change
	$: if (isMounted) {
		console.log(`Switching colours to: \n ${JSON.stringify(colours)}`)

		for (const layer_name in colours) {
			document.getElementById(layer_name).attributes.fill.value = colours[layer_name].value
		}
	}
</script>

<div class="col-8">
	<h1><a href="/">GOA Web</a></h1>

	<div id="map-div" class="container">
		{@html data.svg_string}
	</div>
</div>

<div class="col">
	{#if isMounted}
		<div id="pickers">
			{#each Object.entries(colours) as [name, _]}
				<ColorPicker
					bind:hex={colours[name].value}
					label={colours[name].label}
					isAlpha={false}
					canChangeMode={false}
				/>
			{/each}
		</div>
	{/if}
</div>

<style>
	#pickers > div {
		border: 1px solid #ddd; /* Light gray border */
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle box shadow */
	}
</style>
