import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ navBarWrapper }) =>
    navBarWrapper &&
    css`
      height: 100vh;
      width: 200px;
    `}
`;
