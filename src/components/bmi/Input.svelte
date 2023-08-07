<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let value: number | null = null;
	export let name: string;
	export let placeholder: string;
	export let unit: string;
	export let min: number | null = null;
	export let max: number | null = null;
	let focused: boolean = false;

	const dispatch = createEventDispatcher();

	const onKeyPress = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			dispatch('enter');
		}
	};

	function validateNumber() {
		if (value && min && value < min) {
			value = min;
			return;
		}
		if (value && max && value > max) {
			value = max;
			return;
		}
	}
</script>

<div
	class="flex flex-col justify-start items-start bg-slate-900 border {focused
		? 'border-lime-500'
		: 'border-transparent'} hover:border-lime-500 rounded-2xl px-6 py-4 w-full transition-all duration-200 ease-in-out"
>
	<label for={name} class="w-full {focused ? 'text-lime-500' : 'text-slate-500'}">
		Please inter your {name}
	</label>
	<div class="relative flex justify-start items-center w-full">
		<input
			{name}
			id={name}
			bind:value
			{placeholder}
			type="number"
			inputmode="numeric"
			{min}
			{max}
			on:keypress={onKeyPress}
			on:focus={() => (focused = true)}
			on:blur={() => ((focused = false), validateNumber())}
			class="bg-slate-900 py-2 ps-0 text-xl w-full focus:outline-none placeholder:text-slate-600"
		/>
		<div class="bg-slate-900 absolute h-full w-8 inset-y-0 right-6" />
		<span class="font-bold {focused ? 'text-lime-500' : 'text-slate-600'} w-8 text-right">
			{unit}
		</span>
	</div>
</div>
