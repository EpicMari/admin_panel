import React from "react";
import { StyledNav } from "./StyledNav";

const Nav = ({ children, secondNavBar }) => {
  return <StyledNav secondNavBar={secondNavBar}>{children}</StyledNav>;
};

export default Nav;
