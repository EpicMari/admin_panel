import React from "react";
import { StyledDiv } from "./StyledDiv";

const Div = ({ children, navBarWrapper }) => {
  return <StyledDiv navBarWrapper={navBarWrapper}>{children}</StyledDiv>;
};

export default Div;
