interface Todo {
	taskTitle: string;
	category: string | null;
	finishDate: string | null;
}

export function validate(inputedValue: Todo) {
	if (inputedValue.taskTitle === null || inputedValue.taskTitle.length < 3) {
		return -1;
	}
}
