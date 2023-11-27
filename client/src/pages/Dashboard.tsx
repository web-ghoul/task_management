import { Box, ButtonGroup, Typography } from "@mui/material";
import { PrimaryBox } from "../mui/PrimaryBox";
import { PrimaryContainer } from "../mui/PrimaryContainer";
import TasksSection from "../sections/TasksSection/TasksSection";
import Form from "../components/Forms/Form";
import { PrimaryIconButton } from "../mui/PrimaryIconButton";
import { AddRounded } from "@mui/icons-material";
import useTaskContext from "../hooks/useTaskContext";

type Props = {};

const Dashboard = (props: Props) => {
  const { handleOpenAddTaskModal } = useTaskContext();
  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid jcs aic g30`}>
        <Typography variant="h4" className={`tac center_rel_x`}>
          My Mind
        </Typography>
        <Box className={`grid jcs aic g20`}>
          <ButtonGroup className={`flex jcfe aic`}>
            <PrimaryIconButton
              onClick={handleOpenAddTaskModal}
              sx={{ width: "fit-content" }}
              className={`flex jcc aic g5`}
            >
              <AddRounded />
              <Typography variant="h6">Add Task</Typography>
            </PrimaryIconButton>
          </ButtonGroup>
          <Form type="filter_by_category" />
          <TasksSection />
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  );
};
export default Dashboard;
