import { ITodo } from "../interfaces/todos";
import TodoItem from "./TodoItem";

interface ITodoListProps {
  todos: ITodo[],
  onToggle(id: number): void,
}

export default function TodoList({todos, onToggle}: ITodoListProps): JSX.Element {
  return (
    <ul>
      { todos.map((todo: ITodo, index: number) => {
        return <TodoItem key={todo.id} todo={todo} index={index} onChange={onToggle}></TodoItem>
      })}
    </ul>
  )
}