"use client";
import { IconButton, IconButtonProps, styled } from "@mui/material";

export const PrimaryIconButton = styled(IconButton)<
  IconButtonProps
>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderWidth: "2px",
  borderColor: theme.palette.primary.main,
  borderStyle: "solid",
  padding: "10px",
  borderRadius: "30px",
  "&:hover": {
    "& svg": {
      color: theme.palette.primary.main
    }
  },
  "& svg": {
    color: "#fff",
    fontSize: "25px !important"
  },
  [theme.breakpoints.down("lg")]: {
    padding: "8px",
    "& svg": {
      fontSize: "22px !important"
    }
  },
  [theme.breakpoints.down("md")]: {
    padding: "6px",
    "& svg": {
      fontSize: "20px !important"
    }
  },
  [theme.breakpoints.down("sm")]: {
    padding: "5px",
    "& svg": {
      fontSize: "18px !important"
    }
  },
  [theme.breakpoints.down("xs")]: {
    padding: "4px",
    "& svg": {
      fontSize: "16px !important"
    }
  }
}));
