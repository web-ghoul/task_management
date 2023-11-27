import { ButtonGroup, Typography } from "@mui/material"
import { PrimaryButton } from "../../mui/PrimaryButton"
import useTaskContext from "../../hooks/useTaskContext"
import LoadButton from "../LoadButton/LoadButton"
import { DeleteButton } from "../../mui/DeleteButton"

type Props = {
  loading: boolean;

}

const DeleteTaskForm = ({loading}: Props) => {
    const {handleCloseDeleteTaskModal} = useTaskContext()
  return (
    <>
        <Typography variant="h5" >Are You Sure ?</Typography>
        <ButtonGroup>
            <PrimaryButton onClick={handleCloseDeleteTaskModal}>Cancel</PrimaryButton>
            <LoadButton loading={loading}>
            <DeleteButton type={"submit"}>Update</DeleteButton>
          </LoadButton>
        </ButtonGroup>
    </>
  )
}

export default DeleteTaskForm