import styled, { css } from "styled-components";

export const StyledLi = styled.li`
  ${({ navBarLi }) =>
    navBarLi &&
    css`
      margin-bottom: 15px;
    `}
`;
