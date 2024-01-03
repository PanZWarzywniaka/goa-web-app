<script>
	import { onMount } from 'svelte'
	import ColorPicker from 'svelte-awesome-color-picker'

	export let data
</script>

<div class="row">
	<div class="col-8">
		<h1><a href="/">GOA Web</a></h1>
	</div>
</div>

<div class="row">
	<div class="col-md">
		<h2>Here is ur poster of {data.display_name}</h2>
		Map place holder
	</div>
	<div class="col-sm">Color pickers..</div>
</div>

<style>
</style>
