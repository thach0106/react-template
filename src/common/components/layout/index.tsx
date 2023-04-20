import React, { ReactNode, Fragment } from "react";
import { useOutlet } from "react-router-dom";

import Header from "./participles/header";
import Footer from "./participles/footer";

interface PropsType {
  children?: ReactNode;
}

const Layout: React.FC<PropsType> = ({ children }) => {
  const outlet = useOutlet();

  return (
    <Fragment>
      <Header />
      {outlet ?? children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
