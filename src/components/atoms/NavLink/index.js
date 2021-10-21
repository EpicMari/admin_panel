import React from "react";
import { StyledNavLink } from "./StyledNavLink";

const NavLink = ({ children, to, navBarNavLink, exact }) => {
  return (
    <StyledNavLink exact={exact} to={to} navBarNavLink={navBarNavLink}>
      {children}
    </StyledNavLink>
  );
};

export default NavLink;
