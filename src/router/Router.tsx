import React, { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../components/pages/Login";
import Page404 from "../components/pages/Page404";
import { homeRoutes } from "./HomeRoutes";
import HeaderLayout from "../components/templates/HeaderLayout";

const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login></Login>}></Route>
      <Route path="/home">
        {homeRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<HeaderLayout>{route.element}</HeaderLayout>}
          ></Route>
        ))}
      </Route>
      <Route path="*" element={<Page404></Page404>}></Route>
    </Routes>
  );
});

export default Router;
