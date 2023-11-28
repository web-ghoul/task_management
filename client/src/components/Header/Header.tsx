import {
  AppBar,
  Box,
  Container,
  Typography,
  useMediaQuery
} from "@mui/material";
import Logo from "../Logo/Logo";
import { PrimaryButton } from "../../mui/PrimaryButton";
import { SecondaryButton } from "../../mui/SecondaryButton";
import styles from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { logout } from "../../store/authSlice";
import { useCookies } from "react-cookie";
import { LazyLoadImage } from "react-lazy-load-image-component";
import maleImg from "../../assets/images/male.png";
import femaleImg from "../../assets/images/female.png";
import { LoginRounded, LogoutRounded } from "@mui/icons-material";
import { PrimaryIconButton } from "../../mui/PrimaryIconButton";

type Props = {};

const Header = (props: Props) => {
  const { token, userId, user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies();
  const mdSize = useMediaQuery("(max-width:992px)");
  const handleLogOut = () => {
    dispatch(logout());
    removeCookie("tmToken");
    removeCookie("tmUserId");
  };
  return (
    <AppBar className={`flex center_rel_x fixed jcc aic ${styles.header}`}>
      <Container className={`flex jcsb aic g30`}>
        <Logo />
        {token && userId
          ? <Box className={`flex jcfe aic g20`}>
              {user &&
                <Box className={`flex jcfe aic g10`}>
                  <Box className={`grid jcfe aic`}>
                    <Typography variant="h5" className={`tae`}>
                      {user.username}
                    </Typography>
                    <Typography variant="subtitle1">
                      {user.email}
                    </Typography>
                  </Box>
                  <LazyLoadImage
                    className={`${styles.avatar}`}
                    src={user.gender === "male" ? maleImg : femaleImg}
                  />
                </Box>}
              <a href={`${process.env.REACT_APP_LOGIN_PAGE}`}>
                {mdSize
                  ? <PrimaryIconButton onClick={handleLogOut}>
                    <LogoutRounded/>
                  </PrimaryIconButton>
                  : <PrimaryButton onClick={handleLogOut}>
                      Logout
                    </PrimaryButton>}
              </a>
            </Box>
          : <Box className={`flex jcfe aic g20`}>
              <a href={`${process.env.REACT_APP_LOGIN_PAGE}`}>
                <PrimaryButton>
                  {mdSize ? <LoginRounded /> : "Login"}
                </PrimaryButton>
              </a>
              {mdSize &&
                <a href={`${process.env.REACT_APP_REGISTER_PAGE}`}>
                  <SecondaryButton>Register</SecondaryButton>
                </a>}
            </Box>}
      </Container>
    </AppBar>
  );
};

export default Header;
