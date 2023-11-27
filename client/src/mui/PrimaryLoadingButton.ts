import { styled } from "@mui/material";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";

export const PrimaryLoadingButton = styled(LoadingButton)<
  LoadingButtonProps
>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  borderWidth: "2px",
  borderColor: theme.palette.primary.main,
  borderStyle: "solid",
  padding: "18px !important",
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: "#fff",
    color: theme.palette.primary.main
  },
  "& svg": {
    color: "#fff"
  },
  [theme.breakpoints.down("lg")]: {
    padding: "17px !important",
    borderRadius: "3px"
  },
  [theme.breakpoints.down("md")]: {
    padding: "16px !important"
  },
  [theme.breakpoints.down("sm")]: {
    padding: "15px !important"
  },
  [theme.breakpoints.down("xs")]: {
    padding: "14px !important",
    borderRadius: "2px"
  }
}));
