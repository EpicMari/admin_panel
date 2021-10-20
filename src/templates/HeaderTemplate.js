import React from "react";
import NavBar from "../components/molecules/NavBar";

const HeaderTemplate = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default HeaderTemplate;
