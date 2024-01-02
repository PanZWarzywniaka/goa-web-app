<script>
	import { onMount } from 'svelte'
	import ColorPicker from 'svelte-awesome-color-picker'

	// @ts-ignore
	export let data

	let land_hex = '#ffffff'

	let colours = {
		land: '#ffffff',
		water: '#aaaaff',
		green: '#00ff00'
	}

	let isMounted = false

	//initialize
	onMount(() => {
		colours.land = document.getElementById('land')?.attributes.fill.value
		colours.water = document.getElementById('water')?.attributes.fill.value
		colours.green = document.getElementById('green')?.attributes.fill.value

		console.log(`Colours initialized to: \n ${JSON.stringify(colours)}`)
		isMounted = true
	})

	// on every change
	$: if (isMounted) {
		console.log(`Switching colours to: \n ${JSON.stringify(colours)}`)

		document.getElementById('land').attributes.fill.value = colours.land
		document.getElementById('water').attributes.fill.value = colours.water
		document.getElementById('green').attributes.fill.value = colours.green
	}
</script>

<div class="col-8">
	<h1><a href="/">GOA Web</a></h1>

	<div id="map-div" class="container">
		{@html data.svg_string}
	</div>
</div>

<div class="col">
	<ColorPicker bind:hex={colours.land} label="Land cover" isAlpha={false} canChangeMode={false} />
	<ColorPicker bind:hex={colours.water} label="Water" isAlpha={false} canChangeMode={false} />
	<ColorPicker bind:hex={colours.green} label="Greenery" isAlpha={false} canChangeMode={false} />
</div>

<style>
</style>
