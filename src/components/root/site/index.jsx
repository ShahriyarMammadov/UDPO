import React from "react";
import Header from "../../../layouts/header";
import Footer from "../../../layouts/footer";
import { Outlet } from "react-router-dom";
import SocialIcons from "../../socialIcons";
import ScrollToTop from "../../scrolltotop";

const MainRoot = () => {
  return (
    <>
      <Header />
      <Outlet />
      <SocialIcons />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default MainRoot;
