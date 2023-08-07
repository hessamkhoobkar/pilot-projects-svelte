<script lang="ts">
	import type { Todo } from '@customTypes/todo/index';

	import CustomCheckBox from './CustomCheckBox.svelte';
	import Delete from './icons/Delete.svelte';
	import Tag from './icons/Tag.svelte';

	export let todo: Todo;

	let x = 0;
	let y = 0;

	function handleBorder(event: MouseEvent) {
		if (event.currentTarget) {
			const targetElement = event.currentTarget as HTMLElement;
			x = event.pageX - targetElement.offsetLeft;
			y = event.pageY - targetElement.offsetTop;
		}
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="w-full bg-[#30363d] rounded-xl p-px tsk-card relative overflow-hidden z-0 {todo.isCompleted
		? 'opacity-50'
		: ''}"
	style="--x: {x}px; --y: {y}px"
	on:mousemove={handleBorder}
>
	<div class="w-full bg-[#0d1117] rounded-xl p-4 relative z-10">
		<div class="flex justify-start items-center w-full mb-4">
			<CustomCheckBox label={todo.taskTitle} class="grow" />

			<div class="flex justify-start items-center ms-auto">
				<button
					class="bg-[#21262d] border text-[#8b949e] border-[#30363d] rounded-lg p-2 hover:bg-red-950 hover:bg-opacity-40 hover:border-rose-800 hover:text-rose-500 transition-all duration-200 ease-in-out"
				>
					<Delete size={20} />
				</button>
			</div>
		</div>
		<div class="flex justify-start items-center">
			<div class="flex justify-start items-center">
				<Tag size={24} class="text-[#484f58] {todo.category ? '' : 'text-opacity-30'}" />
				{#if todo.category}
					<span class="text-sm bg-blue-800 bg-opacity-40 text-blue-500 ms-4 rounded-full px-3 py-1">
						{todo.category || ''}
					</span>
				{/if}
			</div>
			<div class="flex justify-start items-center ms-auto">
				<span class="text-[#484f58]"> {todo.finishDate || 'no due date'} </span>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.tsk-card {
		&::before {
			--size: 0;

			content: '';
			position: absolute;
			left: var(--x);
			top: var(--y);
			width: var(--size);
			height: var(--size);
			background: radial-gradient(circle closest-side, #c9d1d9, transparent);
			transform: translate(-50%, -50%);
			transition: width 0.2s ease, height 0.2s ease;
			z-index: 1;
		}

		&:hover::before {
			--size: 300px;
		}
	}
</style>
