# TypeScript Todo Manager 📝✅

A simple and efficient Todo List application built with **TypeScript**. This project allows users to **add**, **complete**, **remove**, **update**, and **filter** todo items while tracking due dates.

## 🚀 Features

- Add new todo items with a **task description** and **due date**.
- Mark a task as **completed**.
- Remove todo items by ID.
- List all **todos**.
- Filter tasks based on their **completion status**.
- Update the **task description** of an existing todo.
- Clear all **completed** tasks.

## 🛠️ Installation

To use this project, follow these steps:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Ozioma45/TaskFlowTS
cd typescript-todo-manager
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Project

Compile and run the TypeScript code:

```bash
npx ts-node index.ts
```

---

## 📌 Usage

### ✅ Add a Todo

```typescript
myTodos.addTodo("Learn TypeScript", new Date("2025-03-01"));
```

### 🔄 Mark a Todo as Completed

```typescript
myTodos.completeTodo(1);
```

### ❌ Remove a Todo

```typescript
myTodos.removeTodo(2);
```

### 📋 List All Todos

```typescript
console.log(myTodos.listTodos());
```

### 🔍 Filter Todos (Completed/Incomplete)

```typescript
console.log(myTodos.filterTodos(false)); // Shows incomplete tasks
```

### ✏️ Update a Task Description

```typescript
myTodos.updateTodoTask(2, "Build an amazing project");
```

### 🗑️ Clear Completed Todos

```typescript
myTodos.clearCompleted();
```

---

## 📂 Project Structure

```
/typescript-todo-manager
│── src/
│   ├── index.ts       # Main application file
│   ├── TodoItem.ts    # Interface for Todo items
│   ├── TodoList.ts    # Class implementation for managing todos
│── README.md          # Documentation
│── tsconfig.json      # TypeScript configuration
│── package.json       # Dependencies and scripts
```

---

## 🎯 Goals of This Project

- **Practice TypeScript fundamentals**
- **Implement object-oriented programming (OOP)**
- **Enhance error handling and code organization**
- **Build a structured, maintainable project**

---

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 📧 Contact

For questions or feedback, feel free to reach out!  
✉️ Email: oziomaegole@gmail.com  
🐦 Twitter: [@theoziomaegole](https://twitter.com/theoziomaegole)

```

```
