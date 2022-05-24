import styled from "styled-components";

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBlue};
  width: calc(100% - 220px);
  padding: 2%;
`;

export const StyledHighlights = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr 1fr;
  place-items: center;
  gap: 30px;
  margin: 50px auto 0;
  width: 100%;
`;

export const StyledHighlightsHeading = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  grid-area: 1 / 1 / 1 / 3;
  max-width: 1000px;
`;

export const StyledCard = styled.div`
  padding: 20px 30px;
  border-radius: 20px;
  width: 70%;
  height: 160px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  box-shadow: rgba(0, 0, 0, 0.1) -5px 9px 10px -7px;
`;

export const StyledBoxIcon = styled.div`
  display: flex;
  place-items: center;
  gap: 10px;
  margin-top: 10px;
  & > svg {
    width: 40px;
    height: 40px;
    filter: invert(100%) sepia(0%) saturate(7482%) hue-rotate(302deg)
      brightness(100%) contrast(106%);
  }
  .cls-1,
  .cls-2,
  .cls-3,
  .cls-4,
  .cls-5 {
    fill: transparent;
    stroke: ${({ theme }) => theme.colors.black};
  }
`;

export const StyledSpanValues = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-bottom: 10px;

  &.active {
    border-bottom: 2px solid;
  }
`;
