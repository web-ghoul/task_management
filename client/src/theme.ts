import { createTheme } from "@mui/material/styles";
import { CustomThemeOptions } from "./types/theme.types";

export const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#2b80ff"
      },
      black: "#333",
      dark: "#000",
      gray: "#777",
      white: "#ffffff",
      red: "#ff0000",
      youtube: "#ff0000",
      linkedin: "#0a66c2",
      facebook: "#1877f2",
      instagram: "#fcaf45",
      gmail: "#ea4335",
      whatsapp: "#25d366",
      github: "#333",
      pinterest: "#e60023"
    },
    breakpoints: {
      xs: {
        width: "520px"
      },
      sm: {
        width: "768px"
      },
      md: {
        width: "992px"
      },
      lg: {
        width: "1200px"
      },
      xl: {
        width: "1440px"
      }
    }
  } as CustomThemeOptions
);
theme.typography.h1 = {
  fontSize: "4rem",
  [theme.breakpoints.down("lg")]: {
    fontSize: "3.2rem"
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "3rem"
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.8rem"
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "2.6rem"
  }
};

theme.typography.h2 = {
  fontSize: "3rem",
  [theme.breakpoints.down("lg")]: {
    fontSize: "2.8rem"
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "2.6rem"
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.4rem"
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "2.2rem"
  }
};

theme.typography.h3 = {
  fontSize: "2.5rem",
  [theme.breakpoints.down("lg")]: {
    fontSize: "2.25rem"
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem"
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.8rem"
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.6rem"
  }
};

theme.typography.h4 = {
  fontSize: "2rem",
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.8rem"
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.6rem"
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.4rem"
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.2rem"
  }
};

theme.typography.h5 = {
  fontSize: "1.4rem",
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.3rem"
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.2rem"
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem"
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.8rem"
  }
};

theme.typography.h6 = {
  fontSize: "1.1rem",
  [theme.breakpoints.down("lg")]: {
    fontSize: "1rem"
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.9rem"
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.7rem"
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.5rem"
  }
};

theme.typography.subtitle1 = {
  fontSize: ".8rem",
  fontWeight: 500,
  [theme.breakpoints.down("lg")]: {
    fontSize: ".6rem"
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.5rem"
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.4rem"
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.3rem"
  }
};
theme.typography.button = theme.typography.h6;
