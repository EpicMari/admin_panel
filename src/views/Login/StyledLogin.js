import styled from "styled-components";

export const LogoBox = styled.div`
  justify-self: flex-end;
`;

export const StyledText = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xxl};
`;
