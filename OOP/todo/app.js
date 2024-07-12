// app.js

class Todo {
    constructor(task) {
        this.task = task;
        this.completed = false;
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }
}

class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(index) {
        this.todos.splice(index, 1);
    }

    getTodos() {
        return this.todos;
    }
}

// UI class to handle UI tasks
class UI {
    static displayTodos() {
        const todos = todoList.getTodos();

        const todoListElement = document.getElementById("todo-list");
        todoListElement.innerHTML = "";

        todos.forEach((todo, index) => {
            const todoElement = document.createElement("li");
            todoElement.className = todo.completed ? "completed" : "";
            todoElement.innerHTML = `
                ${todo.task}
                <button class="complete">Complete</button>
                <button class="delete">Delete</button>
            `;

            // Complete button event
            todoElement
                .querySelector(".complete")
                .addEventListener("click", () => {
                    todo.toggleCompleted();
                    UI.displayTodos();
                });

            // Delete button event
            todoElement
                .querySelector(".delete")
                .addEventListener("click", () => {
                    todoList.removeTodo(index);
                    UI.displayTodos();
                });

            todoListElement.appendChild(todoElement);
        });
    }

    static addTodo() {
        const todoInput = document.getElementById("todo-input");
        const task = todoInput.value.trim();

        if (task !== "") {
            const todo = new Todo(task);
            todoList.addTodo(todo);
            UI.displayTodos();
            todoInput.value = "";
        }
    }
}

// Instantiate the TodoList
const todoList = new TodoList();

// Event: Add a Todo
document.getElementById("add-todo").addEventListener("click", UI.addTodo);

// Event: Display Todos on load
document.addEventListener("DOMContentLoaded", UI.displayTodos);
