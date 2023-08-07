import { writable } from 'svelte/store';
import type { Todo } from '@customTypes/todo/index';

const isBrowser = typeof window !== 'undefined';
let initData: Todo[] = [];

if (isBrowser) {
	initData = JSON.parse(localStorage.getItem('todos') || '[]');
}

export const todoList = writable<Todo[]>(initData || []);

if (isBrowser) {
	todoList.subscribe((value) => localStorage.setItem('todos', JSON.stringify(value)));
}
