import React, { useEffect } from "react";
import { ITodo } from "./interfaces/todos";
import TodoList from "./Todo/TodoList";
import Context from "./context";
// import AddTodo from "./Todo/AddTodo";
import Loader from "./Loader";
import Modal from "./Modal/Modal";

const AddTodo = React.lazy(() => new Promise<any>(resolve => {
  setTimeout(() => {
    resolve(import('./Todo/AddTodo'));
  }, 3000)
}));

function App(): JSX.Element {
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
  .then(response => response.json())
  .then((todoss) => {
    setTimeout(() => {
      setTodos(todoss);
      setIsLoading(false);
    }, 2000)
  })
}, []);

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

        <Modal></Modal>

        <React.Suspense fallback={<p>Loading TODOs...</p>}>
          <AddTodo onCreate={addTodo}></AddTodo>
        </React.Suspense>

        {isLoading && <Loader></Loader>}
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}></TodoList> : !isLoading && <p>Empty</p>}
      </div>
    </Context.Provider>
  );
}

export default App;
