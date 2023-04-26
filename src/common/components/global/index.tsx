import React, { ReactNode, Fragment } from "react";
import { globalStyles } from "./global.styles";
import { Global } from "@emotion/react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/common/styles/scss/_common.scss";

interface PropsType {
  children: ReactNode;
}
const theme = createTheme({
  // Override or create new styles, colors, palettes...
});

const GlobalStyles: React.FC<PropsType> = ({ children }) => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
      <CssBaseline enableColorScheme />
      <Global styles={globalStyles} />
    </Fragment>
  );
};

export default GlobalStyles;
