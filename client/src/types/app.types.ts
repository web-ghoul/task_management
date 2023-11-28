export interface TaskTypes {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  category: string;
  userId: string;
  dueDate: string;
}

export interface UserTypes {
  gender: string;
  username: string;
  email: string;
}

export interface CategoryTypes {
  title: string;
  id: number;
}

export interface FilterTasksTypes {
  target: { value: string };
}

export interface TaskContextTypes {
  openDeleteTaskModal: boolean;
  openUpdateTaskModal: boolean;
  openAddTaskModal: boolean;
  updatableTaskData: TaskTypes;
  taskId: number;
  handleOpenAddTaskModal: () => void;
  handleCloseAddTaskModal: () => void;
  handleOpenDeleteTaskModal: (id: number) => void;
  handleCloseDeleteTaskModal: () => void;
  handleOpenUpdateTaskModal: (data: TaskTypes, id: number) => void;
  handleCloseUpdateTaskModal: () => void;
}
