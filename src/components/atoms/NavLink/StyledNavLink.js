import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  padding: 10px;
  color: ${({ theme }) => theme.colors.grey};
`;
