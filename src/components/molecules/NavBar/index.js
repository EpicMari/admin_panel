import React from "react";
import { routes } from "../../../routes";
import Div from "../../atoms/Div";
import Heading from "../../atoms/Heading";
import Li from "../../atoms/Li";
import Nav from "../../atoms/Nav";
import NavLink from "../../atoms/NavLink";
import Ul from "../../atoms/Ul";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import EmailIcon from "@mui/icons-material/Email";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import BookIcon from "@mui/icons-material/Book";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Span from "../../atoms/Span";

const NavBar = () => {
  return (
    <Div navBarWrapper>
      <Div logoWrapper>
        <Heading headingType="h2" logoHeading>
          <StarBorderIcon />
          <Span navBarMenuText>PanelStar</Span>
        </Heading>
      </Div>
      <Nav>
        <Ul>
          <Li navBarLi>
            <NavLink exact navBarNavLink to={routes.dashboard}>
              <HomeIcon />
              <Span navBarMenuText>Dashboard</Span>
            </NavLink>
          </Li>
          <Li navBarLi>
            <NavLink navBarNavLink to={routes.orders}>
              <BookIcon />
              <Span navBarMenuText>Orders</Span>
            </NavLink>
          </Li>
          <Li navBarLi>
            <NavLink navBarNavLink to={routes.messages}>
              <EmailIcon />
              <Span navBarMenuText>Messages</Span>
            </NavLink>
          </Li>
          <Li navBarLi>
            <NavLink navBarNavLink to={routes.trash}>
              <DeleteSweepIcon />
              <Span navBarMenuText>Trash</Span>
            </NavLink>
          </Li>
        </Ul>
      </Nav>
      <Nav secondNavBar>
        <Ul>
          <Li navBarLi>
            <NavLink navBarNavLink to={routes.help}>
              <HelpCenterIcon />
              <Span navBarMenuText>Help & Support</Span>
            </NavLink>
          </Li>
          <Li navBarLi>
            <NavLink navBarNavLink to={routes.settings}>
              <SettingsIcon />
              <Span navBarMenuText>Settings</Span>
            </NavLink>
          </Li>
          <Li navBarLi>
            <NavLink navBarNavLink to={routes.login}>
              <LogoutIcon />
              <Span navBarMenuText>Logout</Span>
            </NavLink>
          </Li>
        </Ul>
      </Nav>
    </Div>
  );
};

export default NavBar;
