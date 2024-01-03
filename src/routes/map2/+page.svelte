<script>
	import { onMount } from 'svelte'
	import ColorPicker from 'svelte-awesome-color-picker'

	export let data
</script>

<div class="col-8">
	<h1><a href="/">GOA Web</a></h1>
	<h2>Here is ur poster of {data.display_name}</h2>
</div>

<div class="col" />

<style>
</style>
