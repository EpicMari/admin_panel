import React from "react";
import { StyledLi } from "./StyledLi";

const Li = ({ children, navBarLi }) => {
  return <StyledLi navBarLi={navBarLi}>{children}</StyledLi>;
};

export default Li;
