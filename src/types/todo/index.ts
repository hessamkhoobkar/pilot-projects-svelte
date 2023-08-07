export interface Todo {
	id: number;
	taskTitle: string;
	category: string | null;
	finishDate: string | null;
	isCompleted: boolean;
}
