export interface TaskTypes {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  category: string;
  dueDate: string;
}

export interface CategoryTypes {
  title: string;
  id: number;
}

export interface TaskContextTypes {
  openDeleteTaskModal: boolean;
  openUpdateTaskModal: boolean;
  openAddTaskModal: boolean;
  updatableTaskData: TaskTypes | undefined;
  handleSetUpdatableTaskData: (data: TaskTypes) => void;
  handleOpenAddTaskModal?: () => void;
  handleCloseAddTaskModal?: () => void;
  handleOpenDeleteTaskModal?: () => void;
  handleCloseDeleteTaskModal?: () => void;
  handleOpenUpdateTaskModal?: () => void;
  handleCloseUpdateTaskModal?: () => void;
}
