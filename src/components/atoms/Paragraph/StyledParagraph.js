import styled from "styled-components";

export const StyledParagraph = styled.p`
  font-size: ${({ size, theme }) =>
    size === "m"
      ? theme.fontSize.m
      : size === "l"
      ? theme.fontSize.l
      : size === "xl"
      ? theme.fontSize.xl
      : size === "xxl"
      ? theme.fontSize.xxl
      : theme.fontSize.s};

  text-align: ${({ align }) =>
    align === "left" ? "left" : align === "right" ? "right" : "center"};
  color: ${({ color, theme }) =>
    color === "grey" ? theme.colors.grey : theme.colors.white};

  font-weight: ${({ bold }) => (bold === "700" ? "700" : "400")};
`;
