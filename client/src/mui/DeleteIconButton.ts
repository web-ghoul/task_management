"use client";
import { styled } from "@mui/material";
import { PrimaryIconButton } from "./PrimaryIconButton";

export const DeleteIconButton = styled(PrimaryIconButton)(({ theme }) => ({
  backgroundColor: "#ff0000",
  borderColor: "#ff0000",
  "&:hover svg": {
    color: "#ff0000"
  },
  "&:hover h6": {
    color: "#ff0000"
  }
}));
