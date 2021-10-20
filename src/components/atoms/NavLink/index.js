import React from "react";
import { StyledNavLink } from "./StyledNavLink";

const NavLink = ({ children, to, mavBarNavLink }) => {
  return (
    <StyledNavLink to={to} mavBarNavLink={mavBarNavLink}>
      {children}
    </StyledNavLink>
  );
};

export default NavLink;
