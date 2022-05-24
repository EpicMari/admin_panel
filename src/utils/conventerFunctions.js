export const dayConventer = (data) => {
  const dataDay = new Date(data * 1000);
  return dataDay.toDateString().substring(0, 3);
};

export const sunriseSunset = (data) => {
  const dataTime = new Date(data * 1000);
  return dataTime.toTimeString().substring(0, 5);
};

export const celsiusToF = (data) => {
  return (data * 9) / 5 + 32;
};
