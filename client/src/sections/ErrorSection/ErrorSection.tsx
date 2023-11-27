import styles from "./ErrorSection.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PrimaryBox } from "../../mui/PrimaryBox";
import { PrimaryContainer } from "../../mui/PrimaryContainer";
import errorImg from "../../assets/images/error.jpg";
import { PrimaryButton } from "../../mui/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { Box, ButtonGroup } from "@mui/material";

type Props = {};

const ErrorSection = (props: Props) => {
  const navigate = useNavigate();
  return (
    <PrimaryBox>
      <PrimaryContainer className={` ${styles.error_contain} grid jcs aic g50`}>
        <Box
          className={` center_rel_x flex jcc aic ${styles.error_section_image}`}
        >
          <LazyLoadImage alt={"error"} src={errorImg} />
        </Box>
        <ButtonGroup className={`flex jcc aic`}>
          <PrimaryButton
            sx={{ width: "fit-content" }}
            onClick={() => navigate(`${process.env.REACT_APP_HOME_PAGE}`)}
          >
            Go Home
          </PrimaryButton>
        </ButtonGroup>
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default ErrorSection;
