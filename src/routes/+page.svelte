<script>
	import { createSearchStore, searchHandler } from '$lib/stores/search'
	import { onDestroy } from 'svelte'
	// let location = 'New York'

	const searchStore = createSearchStore()

	const unsubscribe = searchStore.subscribe((model) => searchHandler(model))

	onDestroy(() => {
		unsubscribe()
	})
</script>

<div class="col-lg-6 col-md-8 mx-auto">
	<h1>Hello</h1>
	<input type="search" bind:value={$searchStore.search} />
	{#each $searchStore.suggestions as s}
		<p>{s}</p>
	{/each}
	<!-- <a class="btn" href="/map/{location}">Click here to generate {location}</a> -->
</div>
