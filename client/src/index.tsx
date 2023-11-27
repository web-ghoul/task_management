import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import "./assets/styles/variable.scss";
import "./assets/styles/webGhoul.scss";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </CookiesProvider>
    </Provider>
  </React.StrictMode>
);
