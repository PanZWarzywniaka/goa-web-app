<script lang="ts">
	import Map from './Map.svelte'
	import ColorPicker from 'svelte-awesome-color-picker'

	export let data

	let colours = {
		land_col: '#338585',
		greenery_col: '#266464',
		water_col: '#f3f3f3',
		frame_col: '#f12267'
	}
</script>

<div class="row">
	<div class="col-8">
		<h1><a href="/">GOA Web</a></h1>
	</div>
</div>

<div class="row">
	<div class="col-md">
		<h2>Here is ur poster of {data.display_name}</h2>

		<!-- <Map {...data.map_data} {land_col} {greenery_col} {water_col} {frame_col} /> -->
		<Map {...data.map_data} {...colours} />
	</div>

	<div class="col-sm">
		<ColorPicker
			bind:hex={colours.land_col}
			label="Land cover"
			isAlpha={false}
			canChangeMode={false}
		/>
		<ColorPicker bind:hex={colours.water_col} label="Water" isAlpha={false} canChangeMode={false} />
		<ColorPicker
			bind:hex={colours.greenery_col}
			label="Greenery"
			isAlpha={false}
			canChangeMode={false}
		/>
		<ColorPicker bind:hex={colours.frame_col} label="Frame" isAlpha={false} canChangeMode={false} />
	</div>
</div>

<style>
</style>
