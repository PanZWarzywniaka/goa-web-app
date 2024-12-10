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

<footer class="container">
	Special mapping request? 🗺️ Email me at: <span class="highlight"
		>aleksanderosikowicz@gmail.com</span
	>
</footer>

<style>
	.highlight {
		font-weight: bold;
		color: #007bff; /* Adjust the color as needed */
	}
	main {
		min-height: 80vh;
		display: flex;
		flex-direction: column;
	}

	footer {
		margin-top: auto;
	}
</style>
