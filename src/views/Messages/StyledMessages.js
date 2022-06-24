import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  height: 100vh;
  & button {
    margin: 20px;
    width: fit-content;
    place-self: flex-end;
  }
`;
