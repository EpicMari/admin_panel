import styled, { css } from 'styled-components';
import polygon from '../../../assets/mainLayout/polygon.svg';

export const StyledDiv = styled.div`
  ${({ background }) =>
    background &&
    css`
      width: 100vw;
      height: 100vh;
      background: url(${polygon}) center / cover no-repeat;
      display: grid;
      grid-template-columns: 1fr 1fr;
      place-items: center;
      gap: 10%;
    `}

  ${({ form }) =>
    form &&
    css`
      background: rgba(237, 233, 232, 0.7);
      border-radius: 5px;
      height: fit-content;
      width: 300px;
      justify-self: flex-start;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
        rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
      & form {
        display: flex;
        flex-direction: column;
        padding: 30px 30px 0;
        margin-bottom: 20px;
        button {
          margin-top: 20px;
        }
        button,
        & > div {
          margin-bottom: 5px;
        }
      }
    `}
`;
