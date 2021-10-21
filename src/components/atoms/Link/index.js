import React from "react";
import { StyledLink } from "./StyledLink";

const Link = ({ children, to }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default Link;
