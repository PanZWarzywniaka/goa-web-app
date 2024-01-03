<script lang="ts">
	import Map from './Map.svelte'
	import ColorPicker from 'svelte-awesome-color-picker'

	export let data

	let land_fill: string = '#338585'
	let greenery_fill: string = '#266464'
	let water_fill: string = '#f3f3f3'
</script>

<div class="row">
	<div class="col-8">
		<h1><a href="/">GOA Web</a></h1>
	</div>
</div>

<div class="row">
	<div class="col-md">
		<h2>Here is ur poster of {data.display_name}</h2>

		<Map {...data.map_data} {land_fill} {greenery_fill} {water_fill} />
	</div>

	<div class="col-sm">
		<ColorPicker bind:hex={land_fill} label="Land cover" isAlpha={false} canChangeMode={false} />
		<ColorPicker bind:hex={water_fill} label="Water" isAlpha={false} canChangeMode={false} />
		<ColorPicker bind:hex={greenery_fill} label="Greenery" isAlpha={false} canChangeMode={false} />
	</div>
</div>

<style>
</style>
