import { Backdrop, Box, Fade, Modal } from "@mui/material";
import useTaskContext from "../hooks/useTaskContext";
import Form from "../components/Forms/Form";
import "./Modals.scss";

type Props = {};

const DeleteTaskModal = (props: Props) => {
  const { openDeleteTaskModal, handleCloseDeleteTaskModal } = useTaskContext();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openDeleteTaskModal}
      onClose={handleCloseDeleteTaskModal}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500
        }
      }}
    >
      <Fade in={openDeleteTaskModal}>
        <Box className={`absolute br6 pad20 modal_box`}>
          <Form type="delete_task" />
        </Box>
      </Fade>
    </Modal>
  );
};

export default DeleteTaskModal;
