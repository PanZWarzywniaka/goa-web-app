<script>
	let location = 'New York'
</script>

<div class="col-lg-6 col-md-8 mx-auto">
	<h1>Hello</h1>
	<input bind:value={location} />
	<a class="btn" href="/map/{location}">Click here to generate {location}</a>
</div>
