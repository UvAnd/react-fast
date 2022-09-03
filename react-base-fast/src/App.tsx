import React from "react";
import { ITodo } from "./interfaces/todos";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";

function App(): JSX.Element {
  const [todos, setTodos] = React.useState<ITodo[]>([
    { id: 1, comleted: false, title: 'Buy the bread' },
    { id: 2, comleted: true, title: 'Buy the mob' },
    { id: 3, comleted: false, title: 'Buy the img' },
  ]);

function toggleTodo(id: number): void {
  const newTodos = todos.map((todo: ITodo) => {
    if (todo.id === id) {
      todo.comleted = !todo.comleted
    }
    return todo;
  })

  setTodos(newTodos)
}

function removeTodo(id: number): void {
  setTodos(todos.filter((todo) => todo.id !== id));
}

function addTodo(title: string): void {
  setTodos(
    todos.concat([
      {
        id: Date.now(),
        title: title,
        comleted: false,
      }
    ])
  );
}

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>Test  react </h1>

        <AddTodo onCreate={addTodo}></AddTodo>

        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}></TodoList> : <p>Empty</p>}
      </div>
    </Context.Provider>
  );
}

export default App;
