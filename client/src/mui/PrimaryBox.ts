"use client";
import { Box, BoxProps, styled } from "@mui/material";

export const PrimaryBox = styled(Box)<BoxProps>(({ theme }) => ({
  paddingTop: "50px",
  paddingBottom: "50px",
  [theme.breakpoints.down("lg")]: {
    paddingTop: "40px",
    paddingBottom: "40px"
  },
  [theme.breakpoints.down("md")]: {
    paddingTop: "30px",
    paddingBottom: "30px"
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: "20px",
    paddingBottom: "20px"
  },
  [theme.breakpoints.down("xs")]: {
    paddingTop: "10px",
    paddingBottom: "10px"
  }
}));
