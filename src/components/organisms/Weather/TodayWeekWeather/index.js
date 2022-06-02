import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  dayConventer,
  sunriseSunset,
} from "../../../../utils/conventerFunctions";
import { listTypesWeather } from "../../../../utils/listTypes";
import Paragraph from "../../../atoms/Paragraph";
import {
  StyledBoxTemperature,
  StyledSpanTemperature,
  StyledSwiperContainer,
  StyledWeatherCard,
  StyledWeatherImg,
} from "./StyledTodayWeekWeather";

const TodayWeekWeather = ({ weekWeather, hourlyWeather, swiperWeather }) => {
  const degree = "\u00B0";
  const celsius = "\u0043";
  return (
    <StyledSwiperContainer>
      <Swiper slidesPerView={"auto"} spaceBetween={30}>
        {swiperWeather === listTypesWeather.week
          ? weekWeather.map((item) => {
              return (
                <SwiperSlide>
                  <StyledWeatherCard>
                    <Paragraph color="grey" size="l">
                      {dayConventer(item.dt)}
                    </Paragraph>
                    <StyledWeatherImg
                      src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    />
                    <StyledBoxTemperature>
                      <StyledSpanTemperature>
                        {Math.round(item.temp.day)}
                        {degree} -
                      </StyledSpanTemperature>
                      <StyledSpanTemperature>
                        {" "}
                        {Math.round(item.temp.night)}
                        {degree} {""} {celsius}
                      </StyledSpanTemperature>
                    </StyledBoxTemperature>
                  </StyledWeatherCard>
                </SwiperSlide>
              );
            })
          : hourlyWeather.map((item) => {
              return (
                <SwiperSlide>
                  <StyledWeatherCard>
                    <Paragraph color="grey" size="l">
                      {sunriseSunset(item.dt)}
                    </Paragraph>
                    <StyledWeatherImg
                      src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    />
                    <StyledBoxTemperature>
                      <StyledSpanTemperature>
                        {Math.round(item.temp)}
                        {degree} {celsius}
                      </StyledSpanTemperature>
                    </StyledBoxTemperature>
                  </StyledWeatherCard>
                </SwiperSlide>
              );
            })}
      </Swiper>
    </StyledSwiperContainer>
  );
};

export default TodayWeekWeather;
