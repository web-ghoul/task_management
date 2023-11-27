import { DeleteRounded, EditRounded } from "@mui/icons-material";
import { Box, Button, Divider, Typography } from "@mui/material";
import useTaskContext from "../../hooks/useTaskContext";
import styles from "./Task.module.scss";
import { TaskTypes } from "../../types/app.types";

type Props = {
  task: TaskTypes;
};

const Task = ({ task }: Props) => {
  const {
    handleOpenUpdateTaskModal,
    handleOpenDeleteTaskModal
  } = useTaskContext();
  return (
    <Box className={`${styles.task_box} relative br6 grid jcs aic`}>
      <Box
        className={`${styles.task_cat} pad10 flex jcsb aic g10`}
        sx={{ backgroundColor: "" }}
      >
        <Typography variant="h6">
          {task.category}
        </Typography>
      </Box>
      <Box className={`grid pad20 jcs aic g10`}>
        <Typography variant="h5">
          {task.title}
        </Typography>
        <Divider />
        <Typography variant="h6">
          {task.description}
        </Typography>
        <Divider />
        <Typography variant="h6">
          {task.dueDate}
        </Typography>
      </Box>
      <Box
        className={`${styles.task_menu} pad10 br4 flex flex_wrap jcsb aic g10 `}
      >
        <Button
          onClick={handleOpenUpdateTaskModal}
          className={`flex jcfs aic g5`}
        >
          <EditRounded />
          <Typography variant="h6">Edit</Typography>
        </Button>
        <Button
          onClick={handleOpenDeleteTaskModal}
          className={`flex jcfs aic g5`}
        >
          <DeleteRounded sx={{ color: "#ff0000" }} />
          <Typography sx={{ color: "#ff0000" }} variant="h6">
            Delete
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Task;
