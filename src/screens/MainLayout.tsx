import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { OnConstruction } from "../components/OnConstruction/OnConstruction";
import { HomePage } from "./HomePage";
import { TestScreen } from "./TestScreen";
import { IndividualConcertPage } from "./IndividualConcertPage";

export const MainLayout = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/concerts" element={<TestScreen />} />
        <Route path="/concerts/id" element={<IndividualConcertPage />} />
      </Routes>
      {/* <Footer /> */}
    </React.Fragment>
  );
};
