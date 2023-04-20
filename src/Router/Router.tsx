import Footer from "Components/Footer/Footer";
import Header from "Components/Navbar/Header";
import { Routenames } from "Constants/RouteName";
import Blog from "Pages/Blog";
import Contacts from "Pages/Contacts";
import Home from "Pages/Home";
import HowItWorks from "Pages/HowItWorks";
import Login from "Pages/Login";
import LoyaltyProgram from "Pages/LoyaltyProgram";
import SignUp from "Pages/SignUp";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path={Routenames.Home}
            caseSensitive={false}
            element={<Home />}
          />
          <Route
            path={Routenames.HowItWorks}
            caseSensitive={false}
            element={<HowItWorks />}
          />
          <Route
            path={Routenames.LoyaltyProgram}
            caseSensitive={false}
            element={<LoyaltyProgram />}
          />
          <Route
            path={Routenames.Blog}
            caseSensitive={false}
            element={<Blog />}
          />
          <Route
            path={Routenames.Contact}
            caseSensitive={false}
            element={<Contacts />}
          />
          <Route
            path={Routenames.LogIn}
            caseSensitive={false}
            element={<Login />}
          />
          <Route
            path={Routenames.Signup}
            caseSensitive={false}
            element={<SignUp />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Router;
