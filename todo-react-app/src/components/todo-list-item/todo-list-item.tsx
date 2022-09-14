import React, { useState } from 'react';

import './todo-list-item.css';

const TodoListItem = ({ label, important = false, onDeleted }: any): JSX.Element => {

  const [isTodoDone, setIsTodoDone] = useState(false);
  const [isTodoImportant, setIsTodoImportant] = useState(important);

  const onLabelClick = (): void => {
    setIsTodoDone((prev) => !prev);
  }

  const onImportantClick = (): void => {
    setIsTodoImportant((prev: any) => !prev);
  }

  const doneClass = isTodoDone ? 'done' : '';
  const importantClass = isTodoImportant ? 'important' : '';

  const classNames = `todo-list-item ${doneClass} ${importantClass}`;

console.log(classNames);

  return (
    <span className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={onLabelClick}
      >
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onImportantClick}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDeleted}
      >
        <i className="fa-regular fa-trash"></i>
      </button>
    </span>
  );
};

export default TodoListItem;
