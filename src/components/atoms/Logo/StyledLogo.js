import styled from "styled-components";

export const StyledLogo = styled.img`
  filter: invert(100%) sepia(0%) saturate(7482%) hue-rotate(302deg)
    brightness(100%) contrast(106%);
  width: ${({ size }) =>
    size === "s"
      ? "100px"
      : size === "m"
      ? "150px"
      : size === "l"
      ? "200px"
      : "auto"};
`;
