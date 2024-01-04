<script lang="ts">
	import Map from './Map.svelte'
	import ColorPicker from 'svelte-awesome-color-picker'

	export let data

	let colours = {
		land_col: '#338585',
		greenery_col: '#266464',
		water_col: '#f3f3f3',
		frame_col: '#f3f3f3'
	}

	let frame_width: number = 300
	const MIN_FRAME_WIDTH: number = 0
	const MAX_FRAME_WIDTH: number = 1500

	let bottom_area_height: number = 300
	const MIN_BOTTOM_AREA_HEIGHT: number = 0
	const MAX_BOTTOM_AREA_HEIGHT: number = 1500
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
		<Map {...data.map_data} {...colours} {frame_width} {bottom_area_height} />
	</div>

	<!-- desperately needs better styling -->
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

		<label>
			Frame width
			<input type="number" bind:value={frame_width} min={MIN_FRAME_WIDTH} max={MAX_FRAME_WIDTH} />
			<input type="range" bind:value={frame_width} min={MIN_FRAME_WIDTH} max={MAX_FRAME_WIDTH} />
		</label>
		<label>
			Bottom area height
			<input
				type="number"
				bind:value={bottom_area_height}
				min={MIN_BOTTOM_AREA_HEIGHT}
				max={MAX_BOTTOM_AREA_HEIGHT}
			/>
			<input
				type="range"
				bind:value={bottom_area_height}
				min={MIN_BOTTOM_AREA_HEIGHT}
				max={MAX_BOTTOM_AREA_HEIGHT}
			/>
		</label>
	</div>
</div>

<style>
</style>
