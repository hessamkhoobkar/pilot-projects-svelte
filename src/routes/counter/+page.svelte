<script lang="ts">
	import ControlPanel from '@//components/counter/ControlPanel.svelte';
	import Scoreboard from '@//components/counter/Scoreboard.svelte';
</script>

<div class="main-wrapper">
	<Scoreboard />
	<ControlPanel />
</div>

<!-- 
	TODO:
	2. Redesign the UI
	3. Add animations and finioshing touches
 -->

<style lang="scss">
	.main-wrapper {
		width: 100vw;
		width: 100dvw;
		min-height: 100vh;
		min-height: 100dvh;
		padding: 4rem;

		color: #fff;
		background-color: #0d1117;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		font-size: 16px;
		font-weight: 500;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: 'inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
			Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>
