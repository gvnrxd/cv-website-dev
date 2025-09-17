import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "@pages/home-page/Index";
import AboutPage from "@pages/about-page/Index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
