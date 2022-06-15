import React from "react";
import { useSelector } from "react-redux";
import Weather from "../components/organisms/Weather";
import Spinner from "../components/molecules/Spinner";

const Dashboard = () => {
  const weatherData = useSelector(
    ({ utilsReducer }) => utilsReducer.weatherData
  );
  return <>{weatherData ? <Weather /> : <Spinner />}</>;
};

export default Dashboard;
