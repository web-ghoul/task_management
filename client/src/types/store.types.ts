import { TaskTypes, CategoryTypes, UserTypes } from "./app.types";

export interface AuthInitialState {
  token: string;
  userId: string;
  user?: UserTypes | undefined;
}

export interface TasksInitialState {
  tasks: TaskTypes[] | undefined;
  isLoading: boolean;
}

export interface CategoriesInitialState {
  categories: CategoryTypes[] | undefined;
  isLoading: boolean;
}
