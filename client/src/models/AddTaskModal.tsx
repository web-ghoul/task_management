import { Backdrop, Box, Fade, Modal } from "@mui/material";
import useTaskContext from "../hooks/useTaskContext";
import Form from "../components/Forms/Form";
import "./Modals.scss";

type Props = {};

const AddTaskModal = (props: Props) => {
  const { openAddTaskModal, handleCloseAddTaskModal } = useTaskContext();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openAddTaskModal}
      onClose={handleCloseAddTaskModal}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500
        }
      }}
    >
      <Fade in={openAddTaskModal}>
        <Box className={`absolute br6 pad20 modal_box`}>
          <Form type="add_task" />
        </Box>
      </Fade>
    </Modal>
  );
};

export default AddTaskModal;
