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

	let svg_el: SVGElement
	$: console.log(svg_el)
</script>

<svg bind:this={svg_el} viewBox="0 0 {WIDTH} {HEIGHT}">
	<g id="map">
		<rect x="0" y="0" width={WIDTH} height={HEIGHT} id="land" fill={land_col} />

		<g id="green" fill={greenery_col}>
			{@html greenery}
		</g>
		<g id="water" fill={water_col}>
			{@html water}
		</g>
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
	</g>
</svg>
