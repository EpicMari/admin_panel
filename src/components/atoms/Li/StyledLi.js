import styled, { css } from "styled-components";

export const StyledLi = styled.li`
  ${({ navBarLi }) =>
    navBarLi &&
    css`
      margin: 0 0 15px 10px;
    `}
`;
