<header class="container">
	<nav>
		<ul>
			<li>
				<h1><a href="/">GOA Web</a></h1>
			</li>
		</ul>
	</nav>
</header>
<main class="container">
	<slot />
</main>

<footer class="container">Contact: aleksanderosikowicz@gmail.com</footer>

<style>
	main {
		min-height: 80vh;
		display: flex;
		flex-direction: column;
	}

	footer {
		margin-top: auto;
	}
</style>
