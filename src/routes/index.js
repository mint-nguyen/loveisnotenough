import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landingpage";
import DiaryPage from "../pages/diarypage";
import GalleryPage from "../pages/gallerypage";
import LoveLettersPage from "../pages/loveletterspage";
const routes = [
  {
    path: "/",
    exact: true,
    page: LandingPage,
  },
  {
    path: "/diary",
    exact: true,
    page: DiaryPage,
  },
  {
    path: "/loveletters",
    exact: true,
    page: LoveLettersPage,
  },
  {
    path: "/gallery",
    exact: true,
    page: GalleryPage,
  },
];

const renderRoutes = () => {
  return (
    <Routes>
      {routes.map((route, i) => {
        const Page = route.page;
        return (
          <Route key={i} path={route.path} exact element={<Page />}></Route>
        );
      })}
    </Routes>
  );
};

export default renderRoutes;
