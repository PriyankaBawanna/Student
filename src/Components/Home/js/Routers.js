import React from "react";
import LoginPage from "../../../Common Components/LoginPage/js/Login";
import Registration from "../../../Common Components/RegistrationPage/AdminRegistrationPage/js/Registration";
import HomePage from "./HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Registration" element={<Registration />} />
          <Route path="Login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routers;
