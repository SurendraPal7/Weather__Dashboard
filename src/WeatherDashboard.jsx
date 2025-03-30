import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherInfo from "./components/WeatherInfo";
import Forecast from "./components/Forecast";
import RecentSearches from "./components/RecentSearches";

const WeatherDashboard = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);
  const apiKey = "969a3401f95ef3ec5553ff68d57f5f41"; 
  const fetchWeather = async (cityName, lat = null, lon = null) => {
    setLoading(true);
    setError(null);
    try {
      let weatherUrl = "";
      let forecastUrl = "";

      if (cityName) {
        weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
        forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;
      } else if (lat && lon) {
        weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      }

      const weatherResponse = await axios.get(weatherUrl);
      setWeatherData({
        location: weatherResponse.data.name,
        temperature: Math.round(weatherResponse.data.main.temp),
        condition: weatherResponse.data.weather[0].main,
        humidity: weatherResponse.data.main.humidity,
        windSpeed: weatherResponse.data.wind.speed,
        icon: `http://openweathermap.org/img/wn/${weatherResponse.data.weather[0].icon}@2x.png`,
      });

      const forecastResponse = await axios.get(forecastUrl);
      const dailyForecast = forecastResponse.data.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );
      setForecastData(dailyForecast);

      if (cityName && !recentSearches.includes(cityName)) {
        setRecentSearches((prev) => [cityName, ...prev.slice(0, 4)]);
      }
    } catch (err) {
      setError("City not found or API error. Please try again.");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(null, latitude, longitude); 
        },
        () =>
          setError("Location access denied. Please enter a city manually."),
        { enableHighAccuracy: true }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="flex flex-col items-center bg-blue-500 text-white p-6 rounded-lg w-96 mx-auto shadow-lg">
      <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
      {loading && <p className="text-white">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {weatherData && <WeatherInfo weatherData={weatherData} />}
      {forecastData.length > 0 && <Forecast forecastData={forecastData} />}
      <RecentSearches
        recentSearches={recentSearches}
        fetchWeather={fetchWeather}
      />
    </div>
  );
};

export default WeatherDashboard;
