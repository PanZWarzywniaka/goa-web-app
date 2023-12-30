<script lang="ts">
	import { Circle } from 'svelte-loading-spinners'
	import { debounce } from '$lib'

	let foundSuggestions: string[] = []
	let waiting: boolean = false

	const searchLocations = async (event: KeyboardEvent) => {
		const input = event.target as HTMLInputElement
		const query = input.value

		if (!query || query.length === 0) {
			foundSuggestions = []
			return
		}
		const url = `https://nominatim.openstreetmap.org/search?q=${query}&limit=10&format=json`
		const response = await (await fetch(url)).json()

		console.log(response)
		foundSuggestions = response
			.filter((el) => el.addresstype != 'administrative')
			.map((el) => {
				el.url = `/map?lat=${el.lat}&lon=${el.lon}`
				return el
			})
	}

	$: console.log(foundSuggestions)
</script>

<div class="col-lg-6 col-md-8 mx-auto">
	<h1><a href="/">GOA Web</a></h1>
	<p>Start by typing a place below</p>
	<form>
		<input
			name="search"
			type="search"
			placeholder="Search location"
			on:input={debounce(searchLocations)}
		/>
		{#if waiting}
			<p class="fs-2">Your map is loading... &#129303;</p>
			<Circle />
		{/if}
		{#if foundSuggestions.length > 0 && !waiting}
			<ul>
				{#each foundSuggestions as suggestion}
					<li
						class="flex px-4 py-2 border border-gray-200 bg-gray-50 hover:bg-gray-200"
						data-sveltekit-preload-data="off"
					>
						<a
							on:click={() => {
								waiting = true
							}}
							href={suggestion.url}
						>
							{suggestion.display_name}
							({suggestion.addresstype})
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</form>
</div>
