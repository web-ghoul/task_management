import { ReactNode, createContext, useState } from "react";
import { TaskContextTypes, TaskTypes } from "../types/app.types";

export const TaskContext = createContext<TaskContextTypes>({
  openDeleteTaskModal: false,
  openUpdateTaskModal: false,
  openAddTaskModal: false,
  updatableTaskData: undefined,
  handleSetUpdatableTaskData: () => {}
});

type Props = {
  children: ReactNode;
};

const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children
}: Props) => {
  const [updatableTaskData, setUpdatableTaskData] = useState<
    TaskTypes | undefined
  >();
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

  const handleOpenDeleteTaskModal = () => {
    setOpenDeleteTaskModal(true);
  };

  const handleCloseDeleteTaskModal = () => {
    setOpenDeleteTaskModal(false);
  };

  const handleOpenUpdateTaskModal = () => {
    setOpenUpdateTaskModal(true);
  };

  const handleCloseUpdateTaskModal = () => {
    setOpenUpdateTaskModal(false);
  };

  const handleSetUpdatableTaskData = (taskData: TaskTypes) => {
    setUpdatableTaskData(taskData);
  };

  const TaskContextValues: TaskContextTypes = {
    openDeleteTaskModal,
    openUpdateTaskModal,
    openAddTaskModal,
    updatableTaskData,
    handleSetUpdatableTaskData,
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
