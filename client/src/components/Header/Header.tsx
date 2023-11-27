import { AppBar, Box, Container } from "@mui/material";
import Logo from "../Logo/Logo";
import { PrimaryButton } from "../../mui/PrimaryButton";
import { SecondaryButton } from "../../mui/SecondaryButton";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import axios from "axios";

type Props = {};

const Header = (props: Props) => {
  const { token, userId } = useSelector((state: RootState) => state.auth);
  const handleLogOut = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/authentication/logout`)
      .then(res => console.log(res))
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <AppBar className={`flex center_rel_x fixed jcc aic ${styles.header}`}>
      <Container className={`flex jcsb aic g30`}>
        <Logo />
        {token && userId
          ? <Box className={`flex jcfe aic g20`}>
              <a href={`${process.env.REACT_APP_LOGIN_PAGE}`}>
                <PrimaryButton onClick={handleLogOut}>Logout</PrimaryButton>
              </a>
            </Box>
          : <Box className={`flex jcfe aic g20`}>
              <a href={`${process.env.REACT_APP_LOGIN_PAGE}`}>
                <PrimaryButton>Login</PrimaryButton>
              </a>
              <a href={`${process.env.REACT_APP_REGISTER_PAGE}`}>
                <SecondaryButton>Register</SecondaryButton>
              </a>
            </Box>}
      </Container>
    </AppBar>
  );
};

export default Header;
