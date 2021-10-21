import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ navBarWrapper }) =>
    navBarWrapper &&
    css`
      height: 100vh;
      width: 220px;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    `}

  ${({ logoWrapper }) =>
    logoWrapper &&
    css`
      margin: 40px 0 60px;
      /* display: grid;
      place-items: center; */
    `}
`;
