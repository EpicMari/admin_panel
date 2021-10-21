import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  padding: 10px;
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  border-radius: 5px;
  transition: 0.5s color, 0.5s background;

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.green};
    background: ${({ theme }) => theme.colors.lightGreen};
  }
`;
