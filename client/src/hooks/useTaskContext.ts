import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useYourContext must be used within a YourContextProvider");
  }
  return context;
};

export default useTaskContext;
