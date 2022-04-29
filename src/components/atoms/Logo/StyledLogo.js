import styled from "styled-components";

export const StyledLogoBox = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  justify-self: flex-end;
`;

export const StyledLogo = styled.img`
  filter: invert(100%) sepia(0%) saturate(7482%) hue-rotate(302deg)
    brightness(100%) contrast(106%);
  width: ${({ size }) =>
    size === "xs"
      ? "50px"
      : size === "s"
      ? "100px"
      : size === "m"
      ? "150px"
      : size === "l"
      ? "200px"
      : "auto"};
`;

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xxl};
`;
