import React, { ReactNode, Fragment } from "react";
import { globalStyles } from "./global.styles";
import { Global } from "@emotion/react";

import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/common/styles/scss/_common.scss";

interface PropsType {
  children: ReactNode;
}

const GlobalStyles: React.FC<PropsType> = ({ children }) => {
  return (
    <Fragment>
      {children}
      <Global styles={globalStyles} />
    </Fragment>
  );
};

export default GlobalStyles;
