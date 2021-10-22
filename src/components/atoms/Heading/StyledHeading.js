import styled, { css } from "styled-components";

export const H1 = styled.h1``;
export const H2 = styled.h2`
  ${({ logoHeading }) =>
    logoHeading &&
    css`
      display: flex;
      align-items: center;
      margin-left: 15px;
      color: ${({ theme }) => theme.colors.green};

      svg.h-5 {
        width: ${({ theme }) => theme.iconSize.l};
        color: ${({ theme }) => theme.colors.gold};
      }
    `}
`;
export const H3 = styled.h3``;
export const H4 = styled.h4``;
export const H5 = styled.h5``;
export const H6 = styled.h6``;
