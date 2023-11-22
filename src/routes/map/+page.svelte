<script>
	// @ts-nocheck

	import { onMount } from 'svelte'
	import ColorPicker from 'svelte-awesome-color-picker'

	export let data

	let hex = '#f2ff00'

	onMount(() => {
		let svg_element = document.getElementsByTagName('svg')[0]
		// svg_element.removeAttribute('width')
		// svg_element.removeAttribute('height')

		let bg = document.getElementById('land')

		// hex = bg.attributes.fill()
		console.log(hex)

		hex = bg.attributes.fill.value
	})

	function handleColourChange(ev) {
		document.getElementById('land').attributes.fill.value = hex
	}
</script>

<div class="col-8">
	<h1><a href="/">GOA Web</a></h1>

	<div id="map-div" class="container">
		{@html data.svg_string}
	</div>
</div>
<div class="col">
	<ColorPicker
		on:input={handleColourChange}
		bind:hex
		label="Land"
		isAlpha={false}
		canChangeMode={false}
	/>
</div>

<style>
</style>
