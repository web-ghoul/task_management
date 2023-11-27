import { styled } from "@mui/material";
import { PrimaryLoadingButton } from "./PrimaryLoadingButton";

export const DeleteLoadingButton = styled(
  PrimaryLoadingButton
)(({ theme }) => ({
  backgroundColor: "#ff0000",
  borderColor: "#ff0000",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#ff0000"
  }
}));
