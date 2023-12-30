<script>
	import { onMount } from 'svelte'
	import ColorPicker from 'svelte-awesome-color-picker'

	// @ts-ignore
	export let data

	let land_hex = '#ffffff'
	let isMounted = false

	$: if (isMounted) {
		console.log(`Switching colour to ${land_hex}`)
		// @ts-ignore
		document.getElementById('land').attributes.fill.value = land_hex
	}

	onMount(() => {
		let bg = document.getElementById('land')
		land_hex = bg.attributes.fill.value
		isMounted = true
	})
</script>

<div class="col-8">
	<h1><a href="/">GOA Web</a></h1>

	<div id="map-div" class="container">
		{@html data.svg_string}
	</div>
</div>

<div class="col">
	<ColorPicker bind:hex={land_hex} label="Land cover" isAlpha={false} canChangeMode={false} />
</div>

<style>
</style>
