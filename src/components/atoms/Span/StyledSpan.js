import styled, { css } from "styled-components";

export const StyledSpan = styled.span`
  ${({ navBarMenuText }) =>
    navBarMenuText &&
    css`
      margin-left: 10px;
    `}
`;
