import { IconButton, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../../assets/images/logo.png";
import styles from "./Logo.module.scss";

type Props = {};

const Logo = (props: Props) => {
  return (
    <a href={`${process.env.REACT_APP_HOME_PAGE}`}>
      <IconButton
        sx={{ borderRadius: "0px !important" }}
        className={`flex jcfs aife g10 ${styles.logo} `}
      >
        <LazyLoadImage
          className={`${styles.logo_image}`}
          alt={"logo"}
          src={logo}
        />
        <Typography
          variant="h5"
          sx={{ color: theme => "#fff" }}
          className={"ttuc"}
        >
          Mindo
        </Typography>
      </IconButton>
    </a>
  );
};

export default Logo;
