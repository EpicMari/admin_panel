import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  height: 100vh;
  width: 220px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const StyledLogoBox = styled.div`
  margin: 40px 0 60px;
`;

export const StyledList = styled.ul``;

export const StyledFirstNav = styled.nav`
  position: absolute;
  width: 210px;
`;
export const StyledSecondNav = styled(StyledFirstNav)`
  bottom: 0;
`;

export const StyledListItem = styled.li`
  margin: 0 0 15px 10px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 10px;
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  border-radius: 5px;
  transition: 0.5s color, 0.5s background-color;

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.green};
    background-color: ${({ theme }) => theme.colors.lightGreen};
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  padding: 10px;
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  border-radius: 5px;
  transition: 0.5s color, 0.5s background-color;

  &:hover {
    color: ${({ theme }) => theme.colors.green};
    background-color: ${({ theme }) => theme.colors.lightGreen};
  }
`;

export const StyledSpan = styled.span`
  margin-left: 10px;
`;

export const StyledHeading = styled.h2`
  display: flex;
  align-items: center;
  margin-left: 15px;
  color: ${({ theme }) => theme.colors.green};

  svg.h-5 {
    width: ${({ theme }) => theme.iconSize.l};
    color: ${({ theme }) => theme.colors.gold};
  }
`;
