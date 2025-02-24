"use strict";
class TodoList {
    constructor() {
        this.todos = [];
        this.nextId = 1;
    }
    addTodo(task, dueDate) {
        const newTodo = {
            id: this.nextId++,
            task,
            completed: false,
            dueDate,
        };
        this.todos.push(newTodo);
    }
    completeTodo(id) {
        const todo = this.todos.find((todo) => todo.id === id);
        if (todo) {
            todo.completed = true;
        }
        else {
            console.error(`Todo with ID ${id} not found.`);
        }
    }
    removeTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }
    listTodos() {
        return this.todos;
    }
    filterTodos(completed) {
        return this.todos.filter((todo) => todo.completed === completed);
    }
    updateTodoTask(id, newTask) {
        const todo = this.todos.find((todo) => todo.id === id);
        if (todo) {
            todo.task = newTask;
        }
        else {
            console.error(`Todo with ID ${id} not found.`);
        }
    }
    clearCompleted() {
        this.todos = this.todos.filter((todo) => !todo.completed);
    }
}
