import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
`;

export const StyledSingleEmail = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  padding: 10px 15px;
  border-radius: 5px;
  margin-bottom: 10px;
  &:hover {
    box-shadow: inset 0 0 0 ${({ theme }) => theme.colors.darkBlue},
      inset -1px 0 0 ${({ theme }) => theme.colors.darkBlue},
      0 1px 2px 0 rgba(9, 42, 76, 0.3), 0 1px 3px 1px rgba(9, 42, 76, 0.15);
  }
`;
