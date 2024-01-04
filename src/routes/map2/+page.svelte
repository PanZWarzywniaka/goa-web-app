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

	const DEFAULT_FRAME_WIDTH: number = 300
	let frame_width: number = DEFAULT_FRAME_WIDTH
	const MIN_FRAME_WIDTH: number = 0
	const MAX_FRAME_WIDTH: number = 1500

	const DEFAULT_BOTTOM_AREA_HEIGHT: number = 300
	let bottom_area_height: number = DEFAULT_BOTTOM_AREA_HEIGHT
	const MIN_BOTTOM_AREA_HEIGHT: number = 0
	const MAX_BOTTOM_AREA_HEIGHT: number = 1500

	let text_boxes = [
		{ value: 'Kraków', x: 50, y: 94.5, font_size: 400, col: '#000000' },
		{ value: 'Polska', x: 50, y: 97.5, font_size: 200, col: '#000000' }
	]
</script>

<div class="row">
	<div class="col-8">
		<h1><a href="/">GOA Web</a></h1>
	</div>
</div>

<div class="row">
	<div class="col-md">
		<h2>Here is ur poster of {data.display_name}</h2>

		<Map {...data.map_data} {...colours} {frame_width} {bottom_area_height} {text_boxes} />
	</div>

	<!-- desperately needs better styling -->
	<div id="panel" class="col-sm">
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
			<button
				on:click={() => {
					frame_width = DEFAULT_FRAME_WIDTH
				}}
			>
				Reset
			</button>
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
			<button
				on:click={() => {
					bottom_area_height = DEFAULT_BOTTOM_AREA_HEIGHT
				}}
			>
				Reset
			</button>
		</label>

		{#each text_boxes as tb}
			<label>
				<input type="text" bind:value={tb.value} />
				<input type="range" min="10" max="90" step="1" bind:value={tb.x} />
				<input type="range" min="0" max="100" step="0.2" bind:value={tb.y} />
				<input type="range" min="100" max="1000" step="5" bind:value={tb.font_size} />
			</label>
		{/each}
	</div>
</div>

<style>
	#panel > * {
		padding: 30px;
	}
</style>
