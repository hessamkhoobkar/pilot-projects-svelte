<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { clickOutside } from '$lib/clickOutside';
	import SquareArrowDown from './icons/SquareArrowDown.svelte';

	let klass: string | null = null;
	export { klass as class };
	export let selectedOption: string | null = null;
	export let options: string[] = [];
	let isFocused: boolean = false;
	const flyOption = {
		duration: 300,
		x: 0,
		y: -10,
		easing: quintOut
	};

	function handleKeyboardToggle() {
		isFocused = true;
	}
	function handleMouseToggle() {
		isFocused = !isFocused;
	}
	function handleSelectOption(option: string) {
		selectedOption = option;
		isFocused = false;
	}
</script>

<div class="relative grow {klass}" use:clickOutside on:click_outside={() => (isFocused = false)}>
	<button
		class="w-full flex justify-start items-center bg-[#0d1117] border border-[#30363d] px-4 py-2 rounded-xl outline-none transition-all duration-200 ease-in-out hover:bg-[#010409] hover:border-[#8b949e] focus:outline-none focus:border-orange-500 relative cursor-pointer"
		on:keypress|preventDefault={handleKeyboardToggle}
		on:click|preventDefault={handleMouseToggle}
	>
		{#if selectedOption}
			<span>{selectedOption}</span>
		{:else}
			<span class="text-[#6e7681]">task category</span>
		{/if}
		<SquareArrowDown size={16} class="ms-auto {isFocused ? '' : 'text-[#6e7681]'}" />
	</button>
	{#if isFocused}
		<div
			in:fly={{ ...flyOption, opacity: 0.5 }}
			out:fly={{ ...flyOption, opacity: 0 }}
			class="absolute w-full top-full left-0 mt-2 bg-[#0d1117] border border-[#30363d] p-2 rounded-xl z-10"
		>
			{#each options as option}
				<button
					class="w-full px-4 py-3 hover:bg-[#161b22] rounded-xl cursor-pointer transition-all duration-200 ease-in-out flex justify-start items-center"
					on:keypress|preventDefault={() => handleSelectOption(option)}
					on:click|preventDefault={() => handleSelectOption(option)}
				>
					{option}
				</button>
			{/each}
		</div>
	{/if}
</div>
