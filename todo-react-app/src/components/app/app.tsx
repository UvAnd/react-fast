import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';
import { useState } from 'react';
import ItemAddForm from '../item-add-form';

const App = (): JSX.Element => {

  const createTodoItem = (label: string): any => {
    return {
      label: label,
      important: false,
      done: false,
      id: Date.now(),
    }
  }

  const todoDataBase = [
    { label: 'Drink Coffee', important: false, done: false, id: 1 },
    { label: 'Make Awesome App', important: true, done: false, id: 2 },
    { label: 'Have a lunch', important: false, done: false, id: 3 }
  ];

  const [todoData, setTodoData] = useState([...todoDataBase]);

  const deleteTodo = (id: number): void => {
    // const idx = todoData.findIndex((el) => el.id === id);
    // const newArray = [
    //   ...todoData.slice(0, idx),
    //   ...todoData.slice(idx + 1)
    // ]

    // INFO: Check variant with (prev) => {prev.filter((item) => item.id !== id}
    const newArray = todoData.filter((item) => item.id !== id);
    setTodoData(newArray);
  }

  const addTodo = (label: string): void => {
    const newItemTodo = createTodoItem(label);

    // INFO: Should we use (prev) => {prev ?
    const newArray = [...todoData, newItemTodo];
    setTodoData(newArray);
  }

  const toggleProperty = (arr: any, id: any, propName: any): any => {
    const idx = arr.findIndex((el: any) => el.id === id);

    // 1. update obj
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};

    // 2. construnct new array
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  const onToggleImportant = (id: number): void => {
    setTodoData(toggleProperty(todoData, id, 'important'));
  }

  const onToggleDone= (id: number): void => {
    setTodoData(toggleProperty(todoData, id, 'done'));
  }

  // TOOD: check with useState and useEffect
  const doneCount = todoData.filter((el) => el.done).length;
  const todoCount = todoData.length - doneCount;

  // NOTE: Searched Todos ===========
  const [searchTodo, setSearchTodo] = useState('');

  const serchedTodos = todoData.filter(
    (item) => {
      return (
        item.label.toLowerCase().includes(searchTodo.toLowerCase())
      )
    }
  );
  const resultTodo = searchTodo ? serchedTodos : todoData;

  // One more variant
  // const search = (items: any, term: string): any => {
  //   if (searchTodo.length === 0) {
  //     return items;
  //   }

  //   return items.filter((item: any) => {
  //     return item.label.toLowerCase().indexOf(term) > -1;
  //   });
  // }
  // const resultTodo = search(todoData, searchTodo);

  // NOTE: Filtered Todos ===========
  const tabHeadings = [
    {
      id: 1,
      title: 'All',
      name: 'all',
    },
    {
      id: 2,
      title: 'Active',
      name: 'active',
    },
    {
      id: 3,
      title: 'Done',
      name: 'done',
    }
  ];
  const [statusFilter, setStatusFilter] = useState('All');

  const filterTodos = (items: any, filter: string): any => {
    switch(filter.toLowerCase()) {
      case 'all': return items;
      case 'active' : return items.filter((item: any) => !item.done);
      case 'done' : return items.filter((item: any) => item.done);
      default : items;

    }
  }

  const filterResultTodo = filterTodos(resultTodo, statusFilter);

  console.log('tabHeadings', statusFilter);

  return (
    <div className="todo-app">
      <AppHeader toDo={todoCount} done={doneCount} />
      <div className="top-panel d-flex">
        <SearchPanel searchTodo={searchTodo} setSearchTodo={setSearchTodo} />
        <ItemStatusFilter tabHeadings={tabHeadings} statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
      </div>

      <TodoList todos={filterResultTodo} onDeleted={deleteTodo} onToggleImportant={onToggleImportant} onToggleDone={onToggleDone} />

      <ItemAddForm onAddTodo={addTodo}></ItemAddForm>
    </div>
  );
};

export default App;