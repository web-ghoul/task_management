import { Box, ButtonGroup, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import homeImg from "../../assets/images/cat_desk.svg";
import styles from "./MainSection.module.scss";
import { PrimaryBox } from "../../mui/PrimaryBox";
import { PrimaryButton } from "../../mui/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

type Props = {};

const MainSection = (props: Props) => {
  const navigate = useNavigate();
  const { token, userId } = useSelector((state: RootState) => state.auth);
  return (
    <PrimaryBox className={`${styles.main_section} grid jcs aic g30`}>
      <Box className={`${styles.main_section_image} flex jcc aic`}>
        <LazyLoadImage src={homeImg} alt={"Home"} />
      </Box>
      <Box className={`${styles.main_section_content} grid jcfe aic g30`}>
        <Box className={`grid jcfe aic g20`}>
          <Typography variant="h2" className={`tae main_color ttuc`}>
            Touch Your Mind
          </Typography>
          <Typography variant="h6" className={`tae`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            aliquam accusamus, eius voluptatibus maxime ea possimus in iure
            repudiandae aut doloremque architecto facilis quisquam, unde numquam
            ratione ex, provident sit.
          </Typography>
        </Box>
        <ButtonGroup className={`flex jcfe aic`}>
          {token && userId
            ? <PrimaryButton
                onClick={() =>
                  navigate(`${process.env.REACT_APP_DASHBOARD_PAGE}`)}
                sx={{ width: "fit-content" }}
              >
                My Mind
              </PrimaryButton>
            : <PrimaryButton
                onClick={() =>
                  navigate(`${process.env.REACT_APP_REGISTER_PAGE}`)}
                sx={{ width: "fit-content" }}
              >
                Start
              </PrimaryButton>}
        </ButtonGroup>
      </Box>
    </PrimaryBox>
  );
};

export default MainSection;
