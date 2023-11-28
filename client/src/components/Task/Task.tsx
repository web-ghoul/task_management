import {
  DateRangeRounded,
  DeleteRounded,
  DescriptionRounded,
  EditRounded,
  TitleRounded
} from "@mui/icons-material";
import { Box, Button, Divider, Typography } from "@mui/material";
import useTaskContext from "../../hooks/useTaskContext";
import styles from "./Task.module.scss";
import { TaskTypes } from "../../types/app.types";
import Form from "../Forms/Form";

type Props = {
  task: TaskTypes;
};

const Task = ({ task }: Props) => {
  const {
    handleOpenUpdateTaskModal,
    handleOpenDeleteTaskModal
  } = useTaskContext();
  return (
    <Box className={`${styles.task_box}  relative br6 grid jcs aic`}>
      <Box
        className={`${styles.task_cat} pad10 flex jcsb aic g10`}
        sx={{ backgroundColor: "" }}
      >
        <Typography variant="h6">
          {task.category}
        </Typography>
        {task.completed
          ? <Typography className={`${styles.completed_flag}`} variant="h6">
              Completed
            </Typography>
          : <Typography className={`${styles.not_completed_flag}`} variant="h6">
              Completing...
            </Typography>}
      </Box>
      <Box
        className={`${task.completed
          ? styles.completed
          : styles.not_completed} grid pad20 jcs aife g10`}
      >
        <Box className={`flex jcfs aic g10`}>
          <TitleRounded sx={{ color: theme => theme.palette.primary.main }} />
          <Typography variant="h5">
            {task.completed
              ? <del>
                  {task.title}
                </del>
              : task.title}
          </Typography>
        </Box>
        <Divider />
        <Box className={`flex jcfs aic g10`}>
          <DescriptionRounded
            sx={{ color: theme => theme.palette.primary.main }}
          />
          <Typography variant="h6">
            {task.completed
              ? <del>
                  {task.description}
                </del>
              : task.description}
          </Typography>
        </Box>
        <Divider />
        <Box className={`flex jcfs aic g10`}>
          <DateRangeRounded
            sx={{ color: theme => theme.palette.primary.main }}
          />
          <Typography variant="h6">
            {task.dueDate}
          </Typography>
        </Box>
        <Box className={`${styles.task_menu} flex flex_wrap jcsb aic g10 `}>
          {!task.completed &&
            <Button
              onClick={() => handleOpenUpdateTaskModal(task, task.id)}
              className={`flex jcfs aic g5`}
            >
              <EditRounded />
              <Typography variant="h6">Edit</Typography>
            </Button>}
          <Button
            onClick={() => handleOpenDeleteTaskModal(task.id)}
            className={`flex jcfs aic g5`}
          >
            <DeleteRounded sx={{ color: "#ff0000" }} />
            <Typography sx={{ color: "#ff0000" }} variant="h6">
              Delete
            </Typography>
          </Button>
        </Box>
        <Form
          id={task.id}
          type={task.completed ? "not_completed_task" : "completed_task"}
          completed={task.completed}
        />
      </Box>

      <Box className={`flex jcc aic pad10  g10 `} />
    </Box>
  );
};

export default Task;
