<script lang="ts">
	let foundSuggestions: string[] = []

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
		foundSuggestions = response.map((el) => {
			return el.display_name
		})
	}

	const debounce = (callback: Function, wait = 300) => {
		let timeout: ReturnType<typeof setTimeout>

		return (...args: any[]) => {
			clearTimeout(timeout)
			timeout = setTimeout(() => callback(...args), wait)
		}
	}

	$: console.log(foundSuggestions)
</script>

<div class="col-lg-6 col-md-8 mx-auto">
	<h1>Hello</h1>
	<form>
		<input
			name="search"
			type="search"
			placeholder="Search location"
			on:keyup={debounce(searchLocations)}
		/>

		{#if foundSuggestions.length > 0}
			<ul>
				{#each foundSuggestions as suggestion}
					<li class="flex px-4 py-2 border border-gray-200 bg-gray-50 hover:bg-gray-200">
						{suggestion}
					</li>
				{/each}
			</ul>
		{/if}
	</form>
</div>
