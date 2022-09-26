
export interface ITodoItem {
  label: string;
  important: boolean;
  done: boolean;
  id: number;
}

export interface ITabHeadings {
  id: number;
  title: string;
  name: string;
}

export type ITodoList = Array<ITodoItem>;

// Property 'filter' does not exist on type 'ITodoList'. WHY ???
// export interface ITodoList {
//   [index: number]: ITodoItem;
// }