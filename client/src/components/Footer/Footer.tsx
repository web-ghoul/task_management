import { Box, Container, Link, Typography } from "@mui/material";
import styles from "./Footer.module.scss";
import { PrimaryBox } from "../../mui/PrimaryBox";
import {
  FacebookRounded,
  GitHub,
  LinkedIn,
  WhatsApp
} from "@mui/icons-material";
import { SecondaryIconButton } from "../../mui/SecondaryIconButton";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Box component={"footer"} className={`${styles.footer} grid jcs aic g10`}>
      <PrimaryBox className={`${styles.footer_upper}`}>
        <Container
          className={`${styles.footer_upper_contain} grid jcs aic g30 flex_wrap`}
        >
          <Box className={`${styles.footer_icons} flex jcc aic g50 `}>
            <a
              title={""}
              target="_blank"
              rel="noreferrer"
              href={"https://www.facebook.com/mahmoud.gogoo.5/"}
            >
              <SecondaryIconButton>
                <FacebookRounded />
              </SecondaryIconButton>
            </a>
            <a
              title={""}
              target="_blank"
              rel="noreferrer"
              href={"https://www.linkedin.com/in/mahmoud-salama-23b627211/"}
            >
              <SecondaryIconButton>
                <LinkedIn />
              </SecondaryIconButton>
            </a>
            <a
              title={""}
              target="_blank"
              rel="noreferrer"
              href={
                "https://api.whatsapp.com/send/?phone=%2B201009344881&text&type=phone_number&app_absent=0"
              }
            >
              <SecondaryIconButton>
                <WhatsApp />
              </SecondaryIconButton>
            </a>
            <a
              title={""}
              target="_blank"
              rel="noreferrer"
              href={"https://github.com/web-ghoul"}
            >
              <SecondaryIconButton>
                <GitHub />
              </SecondaryIconButton>
            </a>
          </Box>
          <Box className={`${styles.links} flex jcc aic g30 flex_wrap`}>
            <Link href={`${process.env.REACT_APP_HOME_PAGE}`}>
              <Typography variant="h6">Home</Typography>
            </Link>
            <Link href={`${process.env.REACT_APP_LOGIN_PAGE}`}>
              <Typography variant="h6">Login</Typography>
            </Link>
            <Link href={`${process.env.REACT_APP_REGISTER_PAGE}`}>
              <Typography variant="h6">Register</Typography>
            </Link>
          </Box>
        </Container>
      </PrimaryBox>
      <Box className={`pad20 ${styles.footer_lower}`}>
        <Container
          className={`${styles.footer_lower_contain} tac flex jcc aic`}
        >
          <Typography
            variant="h6"
            className={`${styles.footer_lower_box} flex jcc aic g5`}
          >
            Made With Love By webGhoul ©{" "}
            <span className={`main_color`}>2024</span>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
