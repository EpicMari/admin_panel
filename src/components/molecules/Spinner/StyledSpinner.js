import styled from "styled-components";
export const StyledWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;
`;

export const StyledLoadingSpinner = styled.div`
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  animation: spin 1.5s infinite linear;
  border-radius: 8px;
  box-shadow: 20px 0px 0 -4px ${({ theme }) => theme.colors.lightBlue},
    12.4698px 15.63663px 0 -4px ${({ theme }) => theme.colors.lightBlue},
    -4.45042px 19.49856px 0 -3px ${({ theme }) => theme.colors.lightBlue},
    -18.01938px 8.67767px 0 -2px ${({ theme }) => theme.colors.lightBlue},
    -18.01938px -8.67767px 0 -1px ${({ theme }) => theme.colors.lightBlue},
    -4.45042px -19.49856px 0 1px ${({ theme }) => theme.colors.lightBlue},
    12.4698px -15.63663px 0 2px ${({ theme }) => theme.colors.lightBlue};
  content: "";
  height: 8px;
  width: 8px;
`;
