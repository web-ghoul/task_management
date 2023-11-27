"use client";
import { Button, ButtonProps, styled } from "@mui/material";

export const PrimaryButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "30px",
  fontSize: "18px",
  boxShadow:
    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  textTransform: "uppercase",
  "&:hover": {
    backgroundColor: "#fff",
    color: theme.palette.primary.main
  },
  [theme.breakpoints.down("lg")]: {
    padding: "4px 9px",
    borderRadius: "3px",
    fontSize: "17px"
  },
  [theme.breakpoints.down("md")]: {
    padding: "4px 8px"
  },
  [theme.breakpoints.down("sm")]: {
    padding: "3px 7px",
    borderRadius: "2px",
    fontSize: "14px"
  },
  [theme.breakpoints.down("xs")]: {
    padding: "2px 6px"
  }
}));
