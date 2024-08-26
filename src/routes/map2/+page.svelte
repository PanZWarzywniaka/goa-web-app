<script lang="ts">
	import Map from './Map.svelte'
	import ColorPicker from 'svelte-awesome-color-picker'
	import { Canvg, presets } from 'canvg'
	import { RotateCcw } from 'lucide-svelte'

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
			main: true,
			value: data.main_label,
			x: 50,
			y: 94.5,
			font_size: 400,
			font_family: 'Montserrat',
			font_weight: 400,
			col: '#000000'
		},
		{
			main: false,
			value: data.sub_label,
			x: 50,
			y: 97.5,
			font_size: 200,
			font_family: 'Montserrat',
			font_weight: 400,
			col: '#000000'
		}
	]

	let svg_el: SVGElement
	let downloading: boolean = false

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
		downloading = true
		const svg_str: string = new XMLSerializer().serializeToString(svg_el)

		const canvas = new OffscreenCanvas(WIDTH, HEIGHT)
		const ctx = canvas.getContext('2d') as OffscreenCanvasRenderingContext2D

		const preset = presets.offscreen()
		const v = await Canvg.from(ctx, svg_str, preset)
		await v.render()
		const blob = await canvas.convertToBlob({ type: 'image/png' })
		downloadFromBlob(blob, 'your_map.png')
		downloading = false
	}
</script>

<h2>{data.display_name}</h2>
<div class="grid">
	<div>
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
	<article>
		<details>
			<summary role="button">Change colors</summary>
			<!--TODO make it a separate component -->
			<section class="grid">
				<article>
					<ColorPicker
						bind:hex={colours.land_col}
						label="Background"
						isAlpha={false}
						canChangeMode={false}
					/>
				</article>
				<article>
					<ColorPicker
						bind:hex={colours.water_col}
						label="Water"
						isAlpha={false}
						canChangeMode={false}
					/>
				</article>
				<article>
					<ColorPicker
						bind:hex={colours.greenery_col}
						label="Greenery"
						isAlpha={false}
						canChangeMode={false}
					/>
				</article>
			</section>
			<section class="grid">
				<article>
					<ColorPicker
						bind:hex={colours.street_col}
						label="Streets"
						isAlpha={false}
						canChangeMode={false}
					/>
				</article>

				<article>
					<ColorPicker
						bind:hex={colours.frame_col}
						label="Frame"
						isAlpha={false}
						canChangeMode={false}
					/>
				</article>

				<!-- <article /> -->
			</section>

			<!--TODO Make it a seprarate shared component, for frame width and bottom area height just variables -->
		</details>

		<details>
			<summary role="button">Change frame</summary>
			<label class="grid">
				<p>Frame width:</p>
				<input type="range" bind:value={frame_width} min={MIN_FRAME_WIDTH} max={MAX_FRAME_WIDTH} />
				<button
					class="outline"
					on:click={() => {
						frame_width = DEFAULT_FRAME_WIDTH
					}}
				>
					<RotateCcw />
				</button>
			</label>
			<label class="grid">
				<p>Bottom area height:</p>
				<input
					type="range"
					bind:value={bottom_area_height}
					min={MIN_BOTTOM_AREA_HEIGHT}
					max={MAX_BOTTOM_AREA_HEIGHT}
				/>
				<button
					class="outline"
					on:click={() => {
						bottom_area_height = DEFAULT_BOTTOM_AREA_HEIGHT
					}}
				>
					<RotateCcw />
				</button>
			</label>
		</details>
		<details>
			<summary role="button">Change caption</summary>
			<!--TODO Make it a separable component -->
			{#each text_boxes as tb}
				<article>
					<label>
						<header>
							{#if tb.main}
								Main caption:
							{:else}
								Sub caption:
							{/if}
						</header>
						<input type="text" bind:value={tb.value} />
					</label>
					<label class="grid">
						<p>Size</p>
						<input type="range" min="100" max="1000" step="5" bind:value={tb.font_size} />
					</label>
					<label class="grid">
						<p>Horizontal position</p>
						<input type="range" min="10" max="90" step="1" bind:value={tb.x} />
					</label>
					<label class="grid">
						<p>Vertical position</p>
						<input type="range" min="0" max="100" step="0.2" bind:value={tb.y} />
					</label>
				</article>
			{/each}
		</details>
		<div>
			<!-- <p>Export</p> -->
			<section class="grid">
				<button on:click={downloadPNG} data-tooltip="Smaller file size but worse quality"
					>Download PNG</button
				>
				<button on:click={downloadSVG} data-tooltip="Bigger file size but best map quality"
					>Download SVG</button
				>
			</section>
			{#if downloading}
				<progress />
			{/if}
		</div>
	</article>
</div>

<footer>© Copyright and attribution information and OpenStreetMap Contributors</footer>

<style>
</style>
