"use client";
import { IconButtonProps, styled } from "@mui/material";
import { PrimaryIconButton } from "./PrimaryIconButton";

export const SecondaryIconButton = styled(PrimaryIconButton)<
  IconButtonProps
>(({ theme }) => ({
  backgroundColor: "#fff",
  borderColor: "#fff",
  "&:hover": {
    "& svg": {
        color: "#fff",
    }
  },
  "& svg": {
    color: theme.palette.primary.main
  }
}));
