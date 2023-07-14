<script lang="ts">
	import Button from '@components/counter/Button.svelte';
	import { gameStore } from '@stores/counter/theGame';
</script>

<div class="control-panel">
	<div>
		<div>
			<Button
				on:click={() => gameStore.updateScore('home', 'sub')}
				type="square-sm"
				label="point back"
			/>
			<Button on:click={() => gameStore.updateScore('home', 'add')} type="square" label="Point" />
		</div>
		<div>
			<Button on:click={() => gameStore.updateScore('away', 'add')} type="square" label="Point" />
			<Button
				on:click={() => gameStore.updateScore('away', 'sub')}
				type="square-sm"
				label="point back"
			/>
		</div>
	</div>
	<div>
		<Button on:click={() => gameStore.restGame()} label="New Game" />
		<Button on:click={() => gameStore.restRound()} label="Reset set" />
	</div>
</div>

<style lang="scss">
	.control-panel {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 8rem;

		& div {
			display: flex;
			justify-content: center;
			align-items: flex-end;
			gap: 1rem;
			margin-top: 1rem;
		}

		& > div {
			gap: 4rem;
		}
	}
</style>
