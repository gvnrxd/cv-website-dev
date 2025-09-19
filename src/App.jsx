import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/mainlayout/Index";
import LandingLayout from "./layouts/landinglayout/Index";

// Landing Pages
import Home from "@pages/home-page/Index";
import About from "@pages/about-page/Index";

import Error from "@pages/error-page/Index";

function App() {
  return (
    <>
      <Routes>
        <Route element={<LandingLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
        </Route>

        <Route path="about" element={<MainLayout />}>
          <Route index element={<About />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
