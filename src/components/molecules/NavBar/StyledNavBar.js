import styled from 'styled-components';
import polygon from '../../../assets/mainLayout/polygon.svg';

import { NavLink } from 'react-router-dom';

export const StyledWrapper = styled.div`
  height: 100vh;
  width: 220px;
  background: url(${polygon}) center / cover no-repeat;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  div:first-child {
    margin: 40px 0;
  }
`;

export const StyledList = styled.ul``;

export const StyledFirstNav = styled.nav`
  width: 220px;
  &:last-of-type {
    position: absolute;
  }
`;
export const StyledSecondNav = styled(StyledFirstNav)`
  bottom: 0;
`;

export const StyledListItem = styled.li`
  margin: 0 10px 15px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 10px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  border-radius: 5px;
  transition: 0.5s color, 0.5s background-color;

  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  padding: 10px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  border-radius: 5px;
  transition: 0.5s color, 0.5s background-color;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }
`;

export const StyledSpan = styled.span`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.white};
`;
