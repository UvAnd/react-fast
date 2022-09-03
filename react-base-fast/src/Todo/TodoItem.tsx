import { useContext } from "react";
import Context from "../context";

import { ITodo } from "../interfaces/todos";

interface TodoItemProps {
  todo: ITodo,
  index: number,
  onChange(id: number): void,
}

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid $ccc',
    borderRadius: '4px',
    marginBottom: '.5rem',
  },
  span: {
    display: 'flex',
    gap: '8px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    marginRight: '1rem',
  }
}

export default function TodoItem({ todo, index, onChange }: TodoItemProps): JSX.Element {
  const removeTodo = useContext(Context);
  const classes = [];
  todo.comleted && classes.push('done');


  return (
    <li style={styles.li}>
      <span className={classes.join(' ')} style={styles.span}>
        <input
          type="checkbox"
          checked={todo.comleted}
          style={styles.input}
          onChange={() => onChange(todo.id)} />
        <strong>{index + 1}</strong>
        {todo.title}
      </span>

      <button className="rm" onClick={() => removeTodo?.removeTodo(todo.id)}>&times;</button>
    </li>
  )
}