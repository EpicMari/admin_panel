import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto 1fr;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
