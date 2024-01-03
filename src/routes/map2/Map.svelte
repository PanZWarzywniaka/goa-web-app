<script lang="ts">
	const WIDTH = 4960
	const HEIGHT = 7016

	export let land_fill: string = '#338585'
	export let greenery: string
	export let greenery_fill: string = '#266464'
	export let water: string
	export let water_fill: string = '#f3f3f3'
</script>

<svg viewBox="0 0 {WIDTH} {HEIGHT}">
	<g id="map">
		<rect x="0" y="0" width={WIDTH} height={HEIGHT} id="land" fill={land_fill} />

		<g id="green" fill={greenery_fill}>
			{@html greenery}
		</g>
		<g id="water" fill={water_fill}>
			{@html water}
		</g>
	</g>
</svg>
