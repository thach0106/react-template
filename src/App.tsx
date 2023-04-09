import React from "react";
import { Routes, Route } from "react-router-dom";

import { PUBLIC_ROUTES } from "./routes";

const App: React.FC = () => {
  return (
    <Routes>
      {PUBLIC_ROUTES.map(({ path, page: Page, layout: Layout }, index) => (
        <Route
          key={index}
          path={path}
          element={
            <Layout>
              <Page />
            </Layout>
          }
        />
      ))}
    </Routes>
  );
};

export default App;
