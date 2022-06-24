import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
`;

export const StyledSignUpBox = styled.div`
  display: grid;
  padding-bottom: 30px;
  & button {
    justify-self: center;
    width: fit-content;
    margin-top: 20px;
  }
`;
