import { Backdrop, Box, Fade, Modal } from "@mui/material";
import useTaskContext from "../hooks/useTaskContext";
import Form from "../components/Forms/Form";
import "./Modals.scss";

type Props = {};

const UpdateTaskModal = (props: Props) => {
  const { openUpdateTaskModal, handleCloseUpdateTaskModal } = useTaskContext();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openUpdateTaskModal}
      onClose={handleCloseUpdateTaskModal}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500
        }
      }}
    >
      <Fade in={openUpdateTaskModal}>
        <Box className={`br6 pad20 modal_box`}>
          <Form type="update_task" />
        </Box>
      </Fade>
    </Modal>
  );
};

export default UpdateTaskModal;
