import { TaskTypes,CategoryTypes } from "./app.types";

export interface AuthInitialState {
  token: string;
  userId: string;
}

export interface TasksInitialState {
  tasks: TaskTypes[] | undefined;
  isLoading: boolean;
}

export interface CategoriesInitialState {
  categories: CategoryTypes[] | undefined;
  isLoading: boolean;
}
