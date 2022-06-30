import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { OnConstruction } from "../components/OnConstruction/OnConstruction";
import { HomePage } from "./HomePage";

export const MainLayout = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="*" element={<HomePage />} />
      </Routes>
      {/* <Footer /> */}
    </React.Fragment>
  );
};
