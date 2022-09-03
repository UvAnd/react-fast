export interface ITodo {
  id: number,
  comleted: boolean,
  title: string,
}

export interface IAppContext {
  removeTodo(id: number): void,
}