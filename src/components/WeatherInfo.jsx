import React from "react";

const WeatherInfo = ({ weatherData }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">{weatherData.location}</h2>
      <h1 className="text-6xl font-semibold my-2">{weatherData.temperature}&deg;C</h1>
      <p className="text-lg">{weatherData.condition}</p>
      <p>Humidity: {weatherData.humidity}%</p>
      <p>Wind Speed: {weatherData.windSpeed} km/h</p>
      <img src={weatherData.icon} alt="weather icon" />
    </div>
  );
};

export default WeatherInfo;