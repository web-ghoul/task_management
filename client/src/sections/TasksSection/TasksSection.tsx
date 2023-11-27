import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Task from "../../components/Task/Task";
import { TaskTypes } from "../../types/app.types";
import styles from "./TasksSection.module.scss";

type Props = {};

const TasksSection = (props: Props) => {
  const { tasks, isLoading } = useSelector((state: RootState) => state.tasks);
  return (
    <Box className={`${styles.tasks_box} grid jcs aic g30`}>
      {!isLoading &&
        tasks &&
        tasks.map((task: TaskTypes, i) => <Task key={i} task={task} />)}
    </Box>
  );
};

export default TasksSection;
