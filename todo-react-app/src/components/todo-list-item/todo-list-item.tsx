import { ITodoItem } from '../../interfaces/todo-interfaces';

import './todo-list-item.css';

interface TodoListItemProps extends Omit<ITodoItem, 'id'> {
  onDeleted(): void;
  onToggleImportant(): void;
  onToggleDone(): void;
}

const TodoListItem = ({
  label,
  important,
  done,
  onDeleted,
  onToggleImportant,
  onToggleDone,
}: TodoListItemProps): JSX.Element => {


  const doneClass = done ? 'done' : '';
  const importantClass = important ? 'important' : '';

  const classNames = `todo-list-item ${doneClass} ${importantClass}`;

  return (
    <span className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={onToggleDone}
      >
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onToggleImportant}
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
