import { BoxProps, styled } from "@mui/material";
import { PrimaryBox } from "./PrimaryBox";

export const SpecialBox = styled(PrimaryBox)<BoxProps>(({ theme }) => ({
  paddingTop: "80px",
  [theme.breakpoints.down("lg")]: {
    paddingTop: "70px"
  },
  [theme.breakpoints.down("md")]: {
    paddingTop: "60px"
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: "50px"
  },
  [theme.breakpoints.down("xs")]: {
    paddingTop: "40px"
  }
}));
