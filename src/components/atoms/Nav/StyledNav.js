import styled, { css } from "styled-components";

export const StyledNav = styled.nav`
  position: absolute;
  width: 210px;
  ${({ secondNavBar }) =>
    secondNavBar &&
    css`
      bottom: 0;
    `}
`;
