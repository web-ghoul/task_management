"use client";
import { IconButton, IconButtonProps, styled } from "@mui/material";

export const PrimaryIconButton = styled(IconButton)<
  IconButtonProps
>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow:
    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  padding: "15px",
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
    padding: "12px",
    "& svg": {
      fontSize: "22px !important"
    }
  },
  [theme.breakpoints.down("md")]: {
    padding: "10px",
    "& svg": {
      fontSize: "20px !important"
    }
  },
  [theme.breakpoints.down("sm")]: {
    padding: "8px",
    "& svg": {
      fontSize: "18px !important"
    }
  },
  [theme.breakpoints.down("xs")]: {
    padding: "6px",
    "& svg": {
      fontSize: "16px !important"
    }
  }
}));
