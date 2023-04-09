import React, { ReactNode, Fragment } from "react";
import { GlobalContainer, GlobalStyle } from "./global.styles";

import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface PropsType {
  children: ReactNode;
}
const GlobalStyles: React.FC<PropsType> = ({ children }) => {
  return (
    <Fragment>
      <GlobalContainer>{children}</GlobalContainer>
      <GlobalStyle />
    </Fragment>
  );
};

export default GlobalStyles;
