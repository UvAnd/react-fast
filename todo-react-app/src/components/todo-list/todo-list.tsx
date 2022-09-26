import { ITodoItem, ITodoList } from '../../interfaces/todo-interfaces';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

interface ITodoListProps {
  todos: ITodoList | undefined;
  onDeleted(id: number): void;
  onToggleImportant(id: number): void;
  onToggleDone(id: number): void;
}

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }: ITodoListProps): JSX.Element => {

  const elements = todos?.map((item: ITodoItem) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps }
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
