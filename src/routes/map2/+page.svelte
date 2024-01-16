<script lang="ts">
	import Map from './Map.svelte'
	import ColorPicker from 'svelte-awesome-color-picker'
	import { Canvg, presets } from 'canvg'

	export let data

	const WIDTH = 4960
	const HEIGHT = 7016
	let colours = {
		land_col: '#338585',
		greenery_col: '#266464',
		water_col: '#f3f3f3',
		frame_col: '#f3f3f3',
		street_col: '#f3f3f3'
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
		{
			value: data.main_label,
			x: 50,
			y: 94.5,
			font_size: 400,
			font_family: 'Arial',
			col: '#000000'
		},
		{ value: data.sub_label, x: 50, y: 97.5, font_size: 200, font_family: 'Arial', col: '#000000' }
	]

	let svg_el: SVGElement

	function downloadFromBlob(b: Blob, file_name: string) {
		// Create a download link
		const downloadLink = document.createElement('a')
		downloadLink.href = URL.createObjectURL(b)
		downloadLink.download = file_name

		// Trigger a click on the link to start the download
		document.body.appendChild(downloadLink)
		downloadLink.click()
		document.body.removeChild(downloadLink)
	}

	function downloadSVG() {
		const svgString = new XMLSerializer().serializeToString(svg_el)
		const blob = new Blob([svgString], { type: 'image/svg+xml' })
		downloadFromBlob(blob, 'your_map.svg')
	}

	async function downloadPNG() {
		const svg_str: string = new XMLSerializer().serializeToString(svg_el)

		const canvas = new OffscreenCanvas(WIDTH, HEIGHT)
		const ctx = canvas.getContext('2d') as OffscreenCanvasRenderingContext2D

		const preset = presets.offscreen()
		const v = await Canvg.from(ctx, svg_str, preset)
		await v.render()
		const blob = await canvas.convertToBlob()
		downloadFromBlob(blob, 'your_map.png')
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

		<Map
			{WIDTH}
			{HEIGHT}
			{...data.map_data}
			{...colours}
			{frame_width}
			{bottom_area_height}
			{text_boxes}
			bind:svg_el
		/>
	</div>

	<!-- desperately needs better styling -->
	<div id="panel" class="col-sm">
		<!--TODO make it a separate component -->
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
		<ColorPicker
			bind:hex={colours.street_col}
			label="Streets"
			isAlpha={false}
			canChangeMode={false}
		/>
		<ColorPicker bind:hex={colours.frame_col} label="Frame" isAlpha={false} canChangeMode={false} />
		<!--TODO Make it a seprarate shared component, for frame width and bottom area height just variables -->
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
		<!--TODO Make it a separable component -->
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
<div class="row">
	<div class="col">
		<button on:click={downloadSVG}>Download SVG</button>
		<button on:click={downloadPNG}>Download PNG</button>
	</div>
</div>
<footer>© Copyright and attribution information and OpenStreetMap Contributors</footer>

<style>
	#panel > * {
		padding: 30px;
	}
</style>
