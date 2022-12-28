import React from "react";
import { Route, Routes } from "react-router";
import Login from "./containers/Login";
import Record from "./containers/Record";

const Router = () => {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Record" element={<Record />} />
    </Routes>
  );
};

export default Router;
