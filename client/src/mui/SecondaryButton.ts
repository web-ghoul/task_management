"use client";
import { styled } from "@mui/material";
import { PrimaryButton } from "./PrimaryButton";

export const SecondaryButton = styled(PrimaryButton)(({ theme }) => ({
  backgroundColor: "#fff",
  color: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff"
  }
}));
