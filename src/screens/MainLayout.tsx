import React from "react";
import { Route, Routes } from "react-router-dom";
import Concerts from "../components/Concerts/Concerts";
import NavBar from "../components/NavBar/NavBar";
import { HomePage } from "../components/HomePage/HomePage";
import { Tickets } from "../components/Tickets/Tickets";
import { ScreenMessage } from "../components/ScreenMessage/ScreenMessage";
import { useSelector } from "react-redux";
import { IndividualConcert } from "../components/IndividualConcert/IndividualConcert";

export const MainLayout = () => {
  const { screenMessage } = useSelector((state: any) => state);

  return (
    <React.Fragment>
      {screenMessage.show ? <ScreenMessage /> : null}
      <NavBar />
      <Routes>
        <Route path="/concerts" element={<Concerts />} />
        <Route path="/concerts/:id" element={<IndividualConcert />} />
        <Route path="/tickets/:id" element={<Tickets />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      {/* <Footer /> */}
    </React.Fragment>
  );
};
