import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { OnConstruction } from "../components/OnConstruction/OnConstruction";

export const MainLayout = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="*" element={<OnConstruction />} />
      </Routes>
      {/* <Footer /> */}
    </React.Fragment>
  );
};
