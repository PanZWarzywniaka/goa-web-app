<script lang="ts">
	import type { LayerData } from './map_layers'

	export let WIDTH: number
	export let HEIGHT: number

	//data
	export let greenery: Promise<string>
	export let water: Promise<string>
	export let pier: Promise<string>
	export let street_data: LayerData[]

	//colours
	export let land_col: string
	export let greenery_col: string
	export let water_col: string
	export let frame_col: string
	export let street_col: string

	export let frame_width: number
	export let bottom_area_height: number

	export let text_boxes: any

	export let svg_el: SVGElement

	console.log(street_data)
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

		{#await pier then paths}
			<g id="pier" fill={land_col}>
				{@html paths}
			</g>
		{/await}

		{#each street_data as { name, relative_width, paths }}
			{#await paths then p}
				<g id="{name}," stroke={street_col} fill="none" stroke-width={relative_width}>
					{@html p}
				</g>
			{/await}
		{/each}
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
				font-family={tb.font_family}
				font-weight={tb.font_weight}
				fill={tb.col}
			>
				{tb.value}
			</text>
		{/each}
	</g>
</svg>
