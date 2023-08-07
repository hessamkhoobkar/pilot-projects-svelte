<script lang="ts">
	import { todoList } from '@stores/todo/todolist';
	import type { Todo } from '@customTypes/todo/index';
	import CustomSelect from './CustomSelect.svelte';

	let taskTitle: string;
	let category: string;
	let finishDate: string;

	const allCategories = ['Chores', 'Studies', 'Body Care', 'Mind Care', 'Important'];

	function formSubmit(event: Event) {
		event.preventDefault();

		let newTodo: Todo = {
			id: Math.round(Math.random() * 10000000),
			taskTitle: taskTitle,
			category: category,
			finishDate: finishDate,
			isCompleted: false
		};

		todoList.update((todos) => {
			todos.push(newTodo);
			return todos;
		});

		taskTitle = '';
		category = '';
		finishDate = '';
	}
</script>

<div class="w-full bg-[#0d1117] border border-[#30363d] rounded-xl p-4">
	<form action="" class="flex justify-start items-start flex-wrap gap-4" on:submit={formSubmit}>
		<input type="text" class="w-full" bind:value={taskTitle} />
		<CustomSelect
			bind:selectedOption={category}
			options={allCategories}
			class="min-w-[33.333333%] grow"
		/>
		<input type="date" class="grow" bind:value={finishDate} />
		<input type="submit" value="Add task" class="grow" />
	</form>
</div>

<style lang="scss">
	input {
		color-scheme: dark;
		@apply bg-[#0d1117] border border-[#30363d] px-4 py-2 rounded-xl outline-none transition-all duration-200 ease-in-out;

		&:hover {
			@apply bg-[#010409] border-[#8b949e];
		}

		&:focus {
			@apply outline-none border-orange-500;
		}

		&[type='submit'] {
			@apply bg-gradient-to-t from-orange-600 to-orange-500 border border-orange-600 px-4 py-2 rounded-xl cursor-pointer;

			&:hover {
				@apply bg-gradient-to-t from-orange-500 to-orange-400;
			}

			&:focus {
				@apply border-orange-700;
			}
		}
	}
</style>
