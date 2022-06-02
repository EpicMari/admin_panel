import styled from "styled-components";

export const StyledSwiperContainer = styled.div`
  & .swiper {
    overflow: hidden;
    height: 100%;
    & .swiper-wrapper {
      display: flex;
    }
  }
`;

export const StyledSpanTemperature = styled.span`
  color: ${({ theme }) => theme.colors.grey};
  &:last-of-type {
    color: ${({ theme }) => theme.colors.white};
  }
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const StyledWeatherImg = styled.img`
  align-self: center;
  background-color: #68aef4;
  border-radius: 20px;
  margin: 10px 0;
`;

export const StyledBoxTemperature = styled.div`
  text-align: center;
`;

export const StyledWeatherCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  box-shadow: rgba(0, 0, 0, 0.1) -5px 9px 10px -7px;
  border-radius: 20px;
  padding: 20px;
  width: 160px;
`;
