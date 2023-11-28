import { PrimaryButton } from "../../mui/PrimaryButton"
import LoadButton from "../LoadButton/LoadButton"

type Props = {
    loading:boolean,
    completed:boolean|undefined
}

const CompletedTaskForm = ({loading,completed}: Props) => {
  return (
  <>
  <LoadButton loading={loading}>
    <PrimaryButton type={"submit"}>{
        completed ? "Not Completed" :"Completed"}</PrimaryButton>
    </LoadButton>
    </>
  )
}

export default CompletedTaskForm