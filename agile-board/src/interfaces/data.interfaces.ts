export interface IUser {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
}

export interface ITask {
  id: string;
  title: string;
  description?: string;
  assignee?: IUser;
}

export interface IBoardSection {
  id: string;
  title: string;
  tasks: ITask[];
}

export interface IBoards {
  id: string;
  title: string;
  sections: IBoardSection[];
}

export interface IUsersStore {
  users?: IUser[];
  me: string;
}

export interface IBoardsStore {
  active?: IBoards;
  boards: IBoards[];
}

export interface IAppContextStore {
  users?: IUsersStore;
  boards?: IBoardsStore;
}
