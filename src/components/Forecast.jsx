import React from "react";

const Forecast = ({ forecastData }) => {
  return (
    <div className="mt-4 w-full">
      <h3 className="text-lg font-semibold text-center">5-Day Forecast</h3>
      <div className="grid grid-cols-5 gap-2">
        {forecastData.map((day, index) => (
          <div
            key={index}
            className="bg-gray bg-opacity-20 p-3 rounded-lg text-center shadow-md"
            style={{
              transition: "transform 0.3s ease, box-shadow 0.3s ease", 
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)"; 
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)"; 
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
            }}
          >
            <p className="text-sm font-semibold">
              {new Date(day.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt="Weather Icon"
              className="mx-auto"
            />
            <p className="text-lg font-semibold">{Math.round(day.main.temp)}°C</p>
            <p className="text-xs">Humidity: {day.main.humidity}%</p>
            <p className="text-xs">Wind: {Math.round(day.wind.speed * 3.6)} km/h</p>
            <p className="text-xs">{day.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
