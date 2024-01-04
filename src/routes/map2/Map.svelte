<script lang="ts">
	const WIDTH = 4960
	const HEIGHT = 7016

	//data
	export let greenery: string
	export let water: string

	//colours
	export let land_col: string
	export let greenery_col: string
	export let water_col: string
	export let frame_col: string

	export let frame_width: number
	export let bottom_area_height: number

	export let text_boxes: any

	let svg_el: SVGElement

	//print on change
	$: {
		console.log('SVG EL:')
		console.log(svg_el)
	}
</script>

<svg bind:this={svg_el} viewBox="0 0 {WIDTH} {HEIGHT}">
	<g id="map" transform="translate(0 {-bottom_area_height})">
		<rect x="0" y="0" width={WIDTH} height={HEIGHT} id="land" fill={land_col} />

		{#await greenery then paths}
			<g id="green" fill={greenery_col}>
				{@html paths}
			</g>
		{/await}

		{#await water then paths}
			<g id="water" fill={water_col}>
				{@html paths}
			</g>
		{/await}
	</g>
	<g id="frame">
		<rect
			id="main-frame"
			x="0"
			y="0"
			width={WIDTH}
			height={HEIGHT}
			stroke={frame_col}
			stroke-width={frame_width}
			fill="none"
		/>
		<rect
			x="0"
			y={HEIGHT - (bottom_area_height + frame_width)}
			width={WIDTH}
			height={bottom_area_height + frame_width}
			id="bottom-area"
			fill={frame_col}
		/>

		<!-- Text boxes -->
		{#each text_boxes as tb}
			<text
				x="{tb.x}%"
				y="{tb.y}%"
				text-anchor="middle"
				alignment-baseline="middle"
				font-size={tb.font_size}
				fill={tb.col}
			>
				{tb.value}
			</text>
		{/each}
	</g>
</svg>
