import React from "react";
import { StyledDiv } from "./StyledDiv";

const Div = ({ children, navBarWrapper, logoWrapper }) => {
  return (
    <StyledDiv navBarWrapper={navBarWrapper} logoWrapper={logoWrapper}>
      {children}
    </StyledDiv>
  );
};

export default Div;
