<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let klass: string | null = null;
	export { klass as class };
	export let label: String;
	export let type: 'square' | 'square-sm' | '' = '';

	let dispatch = createEventDispatcher();

	function click() {
		dispatch('click');
	}
</script>

<button class="{type} {klass}" on:click={click}>
	{label}
</button>

<style lang="scss">
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		padding: 0.75rem 2rem;
		border-radius: 0.75rem;
		background: rgb(33, 38, 45);
		border: 1px solid rgba(240, 246, 252, 0.1);
		width: 10rem;

		&:hover {
			background-color: rgb(39, 45, 52);
			border: 1px solid rgba(151, 160, 170, 0.482);
		}

		&.square-sm {
			font-size: 1rem;
			font-weight: bold;
			width: 6rem;
			height: 6rem;
		}

		&.square {
			font-size: 2rem;
			font-weight: bold;
			width: 12rem;
			height: 12rem;
		}
	}
</style>
