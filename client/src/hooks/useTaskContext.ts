import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const useTaskContext = () => {
  const {
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
  } = useContext(TaskContext);
  return {
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
};

export default useTaskContext;
