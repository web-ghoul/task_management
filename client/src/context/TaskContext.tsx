import { ReactNode, createContext, useState } from "react";
import { TaskContextTypes, TaskTypes } from "../types/app.types";

export const TaskContext = createContext<TaskContextTypes | undefined>(
  undefined
);

type Props = {
  children: ReactNode;
};

const TaskProvider: React.FC<Props> = ({ children }: Props) => {
  const [updatableTaskData, setUpdatableTaskData] = useState<TaskTypes>({
    id: 0,
    title: "",
    description: "",
    dueDate: "",
    completed: false,
    userId: "",
    category: ""
  });

  const [taskId, setTaskId] = useState<number>(0);

  const [openDeleteTaskModal, setOpenDeleteTaskModal] = useState<boolean>(
    false
  );
  const [openUpdateTaskModal, setOpenUpdateTaskModal] = useState<boolean>(
    false
  );
  const [openAddTaskModal, setOpenAddTaskModal] = useState<boolean>(false);

  const handleOpenAddTaskModal = () => {
    setOpenAddTaskModal(true);
  };

  const handleCloseAddTaskModal = () => {
    setOpenAddTaskModal(false);
  };

  const handleOpenDeleteTaskModal = (id: number) => {
    setOpenDeleteTaskModal(true);
    setTaskId(id);
  };

  const handleCloseDeleteTaskModal = () => {
    setOpenDeleteTaskModal(false);
  };

  const handleOpenUpdateTaskModal = (taskData: TaskTypes, id: number) => {
    setOpenUpdateTaskModal(true);
    setTaskId(id);
    setUpdatableTaskData(taskData);
  };

  const handleCloseUpdateTaskModal = () => {
    setOpenUpdateTaskModal(false);
  };

  const TaskContextValues: TaskContextTypes = {
    openDeleteTaskModal,
    openUpdateTaskModal,
    openAddTaskModal,
    updatableTaskData,
    taskId,
    handleOpenAddTaskModal,
    handleCloseAddTaskModal,
    handleOpenDeleteTaskModal,
    handleCloseDeleteTaskModal,
    handleOpenUpdateTaskModal,
    handleCloseUpdateTaskModal
  };
  return (
    <TaskContext.Provider value={TaskContextValues}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
