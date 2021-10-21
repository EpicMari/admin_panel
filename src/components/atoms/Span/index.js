import React from "react";
import { StyledSpan } from "./StyledSpan";

const Span = ({ children, navBarMenuText }) => {
  return <StyledSpan navBarMenuText={navBarMenuText}>{children}</StyledSpan>;
};

export default Span;
