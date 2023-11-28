import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Task from "../../components/Task/Task";
import { TaskTypes } from "../../types/app.types";
import styles from "./TasksSection.module.scss";

type Props = {};

const TasksSection = (props: Props) => {
  const { tasks, isLoading } = useSelector((state: RootState) => state.tasks);
  return (
      <>
      {!isLoading && tasks && tasks.length >0
        ? (
    <Box className={`${styles.tasks_box} grid jcs aifs g30`}>
    {tasks.map((task: TaskTypes, i) => <Task key={i} task={task} />)}
    </Box>
    )
        : <Typography
            variant={"h4"}
            className={`${styles.no_tasks_title} center_rel_x tac `}
          >
            No Tasks Yet...
          </Typography>}</>
  );
};

export default TasksSection;
