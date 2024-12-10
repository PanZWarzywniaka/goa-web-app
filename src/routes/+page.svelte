<script lang="ts">
	import { Circle } from 'svelte-loading-spinners'
	import { debounce } from '$lib/client/index'
	import { getLocations, type OSMNominatimPlace } from '$lib/client/osm_nominatim'

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

<article>
	<p>Generate map poster of any city 🏙️</p>
	<p>Start by typing a place below:</p>
	<form>
		<input
			name="search"
			type="search"
			placeholder="Search location"
			bind:value={query}
			on:input={debounce(searchLocations)}
		/>
		{#if map_loading}
			<p>Your map is loading... &#129303;</p>
			<Circle />
		{:else if need_spell_check}
			<p>No results... please check spelling and type again</p>
		{:else if foundSuggestions.length > 0}
			<ul>
				{#each foundSuggestions as suggestion}
					<li data-sveltekit-preload-data="off">
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
</article>
