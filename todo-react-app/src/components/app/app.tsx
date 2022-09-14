import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';
import { useState } from 'react';

const App = (): JSX.Element => {

  const todoDataBase = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
  ];

  const [todoData, setTodoData] = useState([...todoDataBase]);

  const deleteTodo = (id: number): void => {
    // const idx = todoData.findIndex((el) => el.id === id);
    // const newArray = [
    //   ...todoData.slice(0, idx),
    //   ...todoData.slice(idx + 1)
    // ]

    // Check variant with (prev) => {prev.filter((item) => item.id !== id}

    const newArray = todoData.filter((item) => item.id !== id);
    setTodoData(newArray);
  }

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} onDeleted={deleteTodo} />
    </div>
  );
};

export default App;