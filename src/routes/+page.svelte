<script lang="ts">
	import { Circle } from 'svelte-loading-spinners'
	import { debounce } from '$lib/index'
	import { getLocations, type OSMNominatimPlace } from '$lib/osm_nominatim'

	let foundSuggestions: OSMNominatimPlace[] = []
	let map_loading: boolean = false

	let query: string = ''
	let need_spell_check: boolean = false

	const searchLocations = async (event: KeyboardEvent) => {
		foundSuggestions = await getLocations(query)
		need_spell_check = foundSuggestions.length == 0
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
			bind:value={query}
			on:input={debounce(searchLocations)}
		/>
		{#if map_loading}
			<p class="fs-2">Your map is loading... &#129303;</p>
			<Circle />
		{:else if need_spell_check}
			<p class="fs-2">No results... please check spelling and type again</p>
		{:else if foundSuggestions.length > 0}
			<ul>
				{#each foundSuggestions as suggestion}
					<li
						class="flex px-4 py-2 border border-gray-200 bg-gray-50 hover:bg-gray-200"
						data-sveltekit-preload-data="off"
					>
						<a
							on:click={() => {
								map_loading = true
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
