import {
  BreakpointsOptions,
  PaletteOptions,
  ThemeOptions
} from "@mui/material/styles";

interface CustomPalette extends PaletteOptions {
  primary: {
    main: string;
  };
  black: string;
  dark: string;
  gray: string;
  white: string;
  red: string;
  youtube: string;
  linkedin: string;
  facebook: string;
  instagram: string;
  gmail: string;
  whatsapp: string;
  github: string;
  pinterest: string;
}

interface CustomBreakPoints extends BreakpointsOptions {
  xs: { width: string };
  sm: { width: string };
  md: { width: string };
  lg: { width: string };
  xl: { width: string };
}

export interface CustomThemeOptions extends ThemeOptions {
  palette: CustomPalette;
  breakpoints: CustomBreakPoints;
}
