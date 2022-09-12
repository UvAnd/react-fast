import React from "react";
import ReactDOM from 'react-dom/client';

const TodoList = () => {
  return (
    <ul>
      <li>Learn react</li>
      <li>Learn react 2</li>
    </ul>
  );
}
const AppHeader = () => {
  return (
    <h1>My Todo List</h1>
  );
}
const SearchPanel = () => {
  return (
    <input placeholder="search"></input>
  );
}

const App = () => {
  return (
    <div>
      <AppHeader></AppHeader>
      <SearchPanel></SearchPanel>
      <TodoList></TodoList>
    </div>
  );
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
