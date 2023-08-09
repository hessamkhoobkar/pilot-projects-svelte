<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let klass: string;
	export { klass as class };
	export let label: string;

	const dispatch = createEventDispatcher();

	export let checked = false;

	function handleCheck() {
		dispatch('check', {
			completed: checked
		});
	}
</script>

<div class="flex justify-start items-center {klass}">
	<input id="task-id" name="task-id" type="checkbox" bind:checked on:change={handleCheck} />
	<label for="task-id"> {label} </label>
</div>

<style lang="scss">
	input[type='checkbox'] {
		--checkbox-bg: #010409;
		--primary-color: #f97316;
		--secondary-color: #30363d;
		--secondary-color-darkest: #010409;
		--checkbox-width: 1.5rem;
		--checkbox-radius: 9999px;
		--checkbox-border-color: var(--secondary-color);
		--checkbox-hover-border-color: var(--secondary-color-darker);
		--checkbox-checked-bg: var(--primary-color);
		--checkbox-disabled-bg: var(--secondary-color-lighter);
		--checkbox-disabled-checked-bg: var(--secondary-color-darker);

		width: var(--checkbox-width);
		height: var(--checkbox-width);
		position: relative;
		background: var(--checkbox-checked-bg);
		border: none;
		border-radius: var(--checkbox-radius);
		transition: 0.3s;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		margin: 0;
		cursor: pointer;
	}

	input[type='checkbox'] ~ label {
		font-size: 1.5rem;
		margin-bottom: 0.1rem;
		margin-left: 1rem;
		cursor: pointer;
		transition: 0.3s;
		width: 100%;
	}

	input[type='checkbox']::before {
		position: absolute;
		content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24px' height='24px' fill='none' stroke-width='2px' stroke='currentColor' stroke-linecap='round' viewBox='0 0 21 21'%3E%3Cpolyline points='5 10.75 8.5 14.25 16 6'%3E%3C/polyline%3E%3C/svg%3E");
		transform: scale(0);
	}

	input[type='checkbox']::after {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		content: '';
		background: var(--checkbox-bg);
		border-radius: inherit;
		box-shadow: inset 0 0 0 1px var(--checkbox-border-color);
		transition: 0.2s;
	}

	input[type='checkbox']:hover {
		--checkbox-border-color: var(--primary-color);
	}

	input[type='checkbox']:checked::before {
		-webkit-animation: scale-in 0.1s 0.2s linear forwards;
		animation: scale-in 0.1s 0.2s linear forwards;
	}

	input[type='checkbox']:checked::after {
		transform: scale(0);
	}

	input[type='checkbox']:checked ~ label {
		opacity: 0.4;
		text-decoration: line-through;
	}

	input[type='checkbox']:disabled {
		--checkbox-bg: var(--checkbox-disabled-bg);
		--checkbox-checked-bg: var(--checkbox-disabled-checked-bg);
		cursor: not-allowed;
	}

	input[type='checkbox']:disabled ~ label {
		cursor: not-allowed;
	}

	input[type='checkbox']:indeterminate::after {
		transform: scale(0.5);
	}

	@-webkit-keyframes scale-in {
		from {
			transform: scale(0);
		}

		to {
			transform: scale(1);
		}
	}

	@keyframes scale-in {
		from {
			transform: scale(0);
		}

		to {
			transform: scale(1);
		}
	}
</style>
