import React from 'react';
import './search-panel.css';

interface ISearchPanelProps {
  searchTodo: string;
  setSearchTodo(value: string): void;
}

const SearchPanel = ({searchTodo, setSearchTodo}: ISearchPanelProps): JSX.Element => {

  const searchHandle = (e: React.FormEvent<HTMLInputElement>):void => {
    setSearchTodo(e.currentTarget.value);
  }

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="type to search"
      value={searchTodo}
      onChange={(e) => searchHandle(e)}
    />
  );
};

export default SearchPanel;
