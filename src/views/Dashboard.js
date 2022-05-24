import React from "react";
import { useSelector } from "react-redux";
import Weather from "../components/organisms/Weather";

const Dashboard = () => {
  const weatherData = useSelector(
    ({ utilsReducer }) => utilsReducer.weatherData
  );
  return <>{weatherData ? <Weather /> : <p>loading</p>}</>;
};

export default Dashboard;
