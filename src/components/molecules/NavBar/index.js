import React, { useContext } from "react";
import { routes } from "../../../routes";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import EmailIcon from "@mui/icons-material/Email";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import BookIcon from "@mui/icons-material/Book";
import Logo from "../../atoms/Logo";
import {
  StyledButton,
  StyledFirstNav,
  StyledList,
  StyledListItem,
  StyledNavLink,
  StyledSecondNav,
  StyledSpan,
  StyledWrapper,
} from "./StyledNavBar";
import AuthContext from "../../../context";

const NavBar = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <StyledWrapper>
      <Logo size="xs" />
      <StyledFirstNav>
        <StyledList>
          <StyledListItem key={routes.dashboard}>
            <StyledNavLink exact to={routes.dashboard}>
              <HomeIcon />
              <StyledSpan>Dashboard</StyledSpan>
            </StyledNavLink>
          </StyledListItem>
          <StyledListItem key={routes.orders}>
            <StyledNavLink to={routes.orders}>
              <BookIcon />
              <StyledSpan>Orders</StyledSpan>
            </StyledNavLink>
          </StyledListItem>
          <StyledListItem key={routes.messages}>
            <StyledNavLink to={routes.messages}>
              <EmailIcon />
              <StyledSpan>Messages</StyledSpan>
            </StyledNavLink>
          </StyledListItem>
          <StyledListItem key={routes.trash}>
            <StyledNavLink to={routes.trash}>
              <DeleteSweepIcon />
              <StyledSpan>Trash</StyledSpan>
            </StyledNavLink>
          </StyledListItem>
        </StyledList>
      </StyledFirstNav>
      <StyledSecondNav>
        <StyledList>
          <StyledListItem key={routes.settings}>
            <StyledNavLink to={routes.settings}>
              <SettingsIcon />
              <StyledSpan>Settings</StyledSpan>
            </StyledNavLink>
          </StyledListItem>
          <StyledListItem>
            <StyledButton onClick={signOut}>
              <LogoutIcon />
              <StyledSpan>Logout</StyledSpan>
            </StyledButton>
          </StyledListItem>
        </StyledList>
      </StyledSecondNav>
    </StyledWrapper>
  );
};

export default NavBar;
