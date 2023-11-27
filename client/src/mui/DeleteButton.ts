"use client";
import { styled } from "@mui/material";
import { PrimaryButton } from "./PrimaryButton";

export const DeleteButton = styled(PrimaryButton)(({ theme }) => ({
  backgroundColor: "#ff0000",
  borderColor:"#ff0000",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#ff0000",
  },
}));
