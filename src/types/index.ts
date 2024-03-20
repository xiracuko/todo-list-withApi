export type NewTodoType = {
  id: number;
  title: string;
  toggle: boolean;
};

export type initialStateType = {
  todos: NewTodoType[];
};

export type TodoTitleType = Pick<NewTodoType, "title">;
export type TodoToggleType = Omit<NewTodoType, "title">;
export type TodoRemoveType = Pick<NewTodoType, "id">;

export interface ITodoDataProps extends TodoTitleType {}
export interface ITodoItemProps extends NewTodoType {}
