import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  StyledHighlights,
  StyledWrapper,
  StyledCard,
  StyledSpanValues,
  StyledHighlightsHeading,
  StyledBoxIcon,
  StyledButton,
} from './StyledWeather';
import Paragraph from '../../atoms/Paragraph';
import { sunriseSunset } from '../../../utils/conventerFunctions';
import TodayWeekWeather from './TodayWeekWeather';
import { ReactComponent as HumidityIcon } from '../../../assets/WeatherIcon/humidity.svg';
import { ReactComponent as UvIndexIcon } from '../../../assets/WeatherIcon/uvIndex.svg';
import { ReactComponent as ArrowUpIcon } from '../../../assets/WeatherIcon/arrowUp.svg';
import { ReactComponent as ArrowDownIcon } from '../../../assets/WeatherIcon/arrowDown.svg';
import { ReactComponent as WindIcon } from '../../../assets/WeatherIcon/wind.svg';
import { ReactComponent as PressureIcon } from '../../../assets/WeatherIcon/pressure.svg';
import { ReactComponent as VisibilityIcon } from '../../../assets/WeatherIcon/visibility.svg';
import { listTypesWeather } from '../../../utils/listTypes';

const Weather = () => {
  const [swiperWeather, setSwiperWeather] = useState(listTypesWeather.week);
  const weatherData = useSelector(({ utilsReducer }) => utilsReducer.weatherData);
  const { uvi, wind_speed, humidity, visibility, pressure, sunrise, sunset } = weatherData.current;

  const setWeather = (data) => {
    setSwiperWeather(data);
  };

  return (
    <StyledWrapper>
      <StyledButton
        onClick={() => setWeather(listTypesWeather.today)}
        className={swiperWeather === listTypesWeather.today && 'active'}
      >
        Today
      </StyledButton>
      <StyledButton
        onClick={() => setWeather(listTypesWeather.week)}
        className={swiperWeather === listTypesWeather.week && 'active'}
      >
        Week
      </StyledButton>
      <TodayWeekWeather
        weekWeather={weatherData.daily}
        hourlyWeather={weatherData.hourly}
        swiperWeather={swiperWeather}
      />
      <StyledHighlights>
        <StyledHighlightsHeading>Today&apos;s Highlights</StyledHighlightsHeading>
        <StyledCard>
          <Paragraph size="l" align="left" color="grey">
            UV Index
          </Paragraph>
          <StyledBoxIcon>
            <UvIndexIcon />
            <Paragraph size="xl" align="left">
              {uvi}
            </Paragraph>
          </StyledBoxIcon>
        </StyledCard>
        <StyledCard>
          <Paragraph size="l" align="left" color="grey">
            Wind Speed
          </Paragraph>
          <StyledBoxIcon>
            <WindIcon />
            <Paragraph size="xl" align="left">
              {wind_speed}
              <StyledSpanValues>km/s</StyledSpanValues>
            </Paragraph>
          </StyledBoxIcon>
        </StyledCard>
        <StyledCard>
          <Paragraph size="l" align="left" color="grey">
            Humidity
          </Paragraph>
          <StyledBoxIcon>
            <HumidityIcon />
            <Paragraph size="xl" align="left">
              {humidity}
              <StyledSpanValues>%</StyledSpanValues>
            </Paragraph>
          </StyledBoxIcon>
        </StyledCard>
        <StyledCard>
          <Paragraph size="l" align="left" color="grey">
            Sunrise & Sunset
          </Paragraph>
          <StyledBoxIcon>
            <ArrowUpIcon />
            <Paragraph size="xl" align="left">
              {sunriseSunset(sunrise)}
            </Paragraph>
          </StyledBoxIcon>
          <StyledBoxIcon>
            <ArrowDownIcon />
            <Paragraph size="xl" align="left">
              {sunriseSunset(sunset)}
            </Paragraph>
          </StyledBoxIcon>
        </StyledCard>
        <StyledCard>
          <Paragraph size="l" align="left" color="grey">
            Visibility
          </Paragraph>
          <StyledBoxIcon>
            <VisibilityIcon />
            <Paragraph size="xl" align="left">
              {visibility}
              <StyledSpanValues>m</StyledSpanValues>
            </Paragraph>
          </StyledBoxIcon>
        </StyledCard>
        <StyledCard>
          <Paragraph size="l" align="left" color="grey">
            Pressure
          </Paragraph>
          <StyledBoxIcon>
            <PressureIcon />
            <Paragraph size="xl" align="left">
              {pressure}
              <StyledSpanValues>hPa</StyledSpanValues>
            </Paragraph>
          </StyledBoxIcon>
        </StyledCard>
      </StyledHighlights>
    </StyledWrapper>
  );
};

export default Weather;
