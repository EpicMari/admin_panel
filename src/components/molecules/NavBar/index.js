import React from "react";
import { routes } from "../../../routes";
import Div from "../../atoms/Div";
import Heading from "../../atoms/Heading";
import Li from "../../atoms/Li";
import Nav from "../../atoms/Nav";
import NavLink from "../../atoms/NavLink";
import Ul from "../../atoms/Ul";

const NavBar = () => {
  return (
    <Div navBarWrapper>
      <Div>
        <Heading>PanelStar</Heading>
      </Div>
      <Nav>
        <Ul>
          <Li navBarLi>
            <NavLink mavBarNavLink to={routes.dashboard}>
              Dashboard
            </NavLink>
          </Li>
          <Li navBarLi>
            <NavLink mavBarNavLink to={routes.orders}>
              Orders
            </NavLink>
          </Li>
          <Li navBarLi>
            <NavLink mavBarNavLink to={routes.messages}>
              Messages
            </NavLink>
          </Li>
          <Li navBarLi>
            <NavLink mavBarNavLink to={routes.trash}>
              Trash
            </NavLink>
          </Li>
        </Ul>
      </Nav>
      <Nav>
        <Ul>
          <Li navBarLi>
            <NavLink mavBarNavLink to={routes.help}>
              Help & Support
            </NavLink>
          </Li>
          <Li navBarLi>
            <NavLink mavBarNavLink to={routes.settings}>
              Settings
            </NavLink>
          </Li>
          <Li navBarLi>
            <NavLink mavBarNavLink to={routes.logout}>
              Logout
            </NavLink>
          </Li>
        </Ul>
      </Nav>
    </Div>
  );
};

export default NavBar;
