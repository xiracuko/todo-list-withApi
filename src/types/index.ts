export type newTodoType = {
  id: number;
  title: string;
  toggle: boolean;
};

export type initialStateType = {
  todos: newTodoType[];
};

export type TodoTitleType = Pick<newTodoType, "title">;
export type TodoToggleType = Pick<newTodoType, "toggle">;

export interface ITodoDataProps extends TodoTitleType {}
export interface ITodoItemProps extends newTodoType {}
