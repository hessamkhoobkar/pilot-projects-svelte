<script lang="ts">
	import ScoreDisplay from '@components/counter/ScoreDisplay.svelte';
	import { gameStore } from '@stores/counter/theGame';
</script>

<div class="scoreboard">
	<div>
		<ScoreDisplay side="home" score={$gameStore.point.home} size="xl" />
		<ScoreDisplay side="home" score={$gameStore.gameSet.home} />
	</div>
	<div>
		<ScoreDisplay side="away" score={$gameStore.gameSet.away} />
		<ScoreDisplay side="away" score={$gameStore.point.away} size="xl" />
	</div>
</div>

<style lang="scss">
	.scoreboard {
		background-color: #010409;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 4rem;
		padding: 1rem 2rem 4rem;
		border-radius: 1rem;

		& > div {
			display: flex;
			justify-content: center;
			align-items: flex-start;
			gap: 1rem;
		}
	}
</style>
