import React from "react";
import { Header } from "../Header";
import { Banner } from "../Banner";
import { Footer } from "../Footer";

export const Layout = ({ children }) => {
  return (
    <div className="m-0 p-0 fixed w-screen h-screen overflow-hidden app-container">
      <Header />
      <Banner />
      <div className="app-wrapper">{children}</div>
      <div className="fixed bottom-0 right-0">
        <Footer />
      </div>
    </div>
  );
};
