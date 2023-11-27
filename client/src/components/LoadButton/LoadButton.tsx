import { CircularProgress } from "@mui/material";
import styles from "./LoadButton.module.scss";
import { DeleteLoadingButton } from "../../mui/DeleteLoadingButton";
import { PrimaryLoadingButton } from "../../mui/PrimaryLoadingButton";
import { ReactNode } from "react";

type Props={
  loading:boolean,
  children:ReactNode,
  deleted?:boolean
}

const LoadButton = ({ loading, children, deleted } : Props ) => {
  return (
    <>
      {loading ? deleted ? (
        <DeleteLoadingButton
          loadingPosition={"center"}
          variant="outlined"
          loading={true}
          loadingIndicator={
            <CircularProgress className={`${styles.loading_icon}`} />
          }
        />
      ) : (
        <PrimaryLoadingButton
          loadingPosition={"center"}
          variant="outlined"
          loading={true}
          loadingIndicator={
            <CircularProgress className={`${styles.loading_icon}`} />
          }
        />
      ) : (
        children
      )}
    </>
  );
};

export default LoadButton;
