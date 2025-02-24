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
        const initialLength = this.todos.length;
        this.todos = this.todos.filter((todo) => todo.id !== id);
        if (this.todos.length === initialLength) {
            console.error(`Todo with ID ${id} not found.`);
        }
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
// Example Usage
const myTodos = new TodoList();
myTodos.addTodo("Learn TypeScript", new Date("2025-03-01"));
myTodos.addTodo("Build a project", new Date("2025-03-10"));
myTodos.completeTodo(1);
console.log("All Todos:", myTodos.listTodos());
console.log("Incomplete Todos:", myTodos.filterTodos(false));
myTodos.updateTodoTask(2, "Build an awesome project");
myTodos.clearCompleted();
console.log("After clearing completed todos:", myTodos.listTodos());
