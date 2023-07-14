<script lang="ts">
	import { slide } from 'svelte/transition';

	export let score: number = 0;
	export let size: 'md' | 'xl' = 'md';
	export let side: 'home' | 'away';
</script>

<div transition:slide class={side} class:is-xl={size === 'xl'}>
	<span transition:slide>
		{score}
	</span>
</div>

<style lang="scss">
	div {
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
		color: transparent;
		background-color: transparent;
		border-radius: 0.5rem;
		font-weight: 500;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 3rem;
		height: 5rem;
		width: 4rem;

		&.home {
			color: #fff;
			background-color: #de2f1c;
		}
		&.away {
			color: #fff;
			background-color: #1659b2;
		}
		&.is-xl {
			font-size: 10rem;
			height: 15rem;
			width: 12rem;
		}
	}
</style>
