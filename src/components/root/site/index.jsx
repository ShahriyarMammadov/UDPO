import React from "react";
import Header from "../../../layouts/header";
import Footer from "../../../layouts/footer";
import { Outlet } from "react-router-dom";
import SocialIcons from "../../socialIcons";

const MainRoot = () => {
  return (
    <>
      <Header />
      <Outlet />
      <SocialIcons />
      <Footer />
    </>
  );
};

export default MainRoot;
