import React from "react";
import { Route, Routes } from "react-router-dom";
import Concerts from "../components/Concerts/Concerts";
import NavBar from "../components/NavBar/NavBar";
import { OnConstruction } from "../components/OnConstruction/OnConstruction";

export const MainLayout = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/concerts" element={<Concerts />} />
        <Route path="*" element={<OnConstruction />} />
      </Routes>
      {/* <Footer /> */}
    </React.Fragment>
  );
};
