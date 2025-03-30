import React from "react";

const SearchBar = ({ city, setCity, fetchWeather }) => {
  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="mb-4 p-2 rounded text-black w-full bg-gray-200"
      />
      <button
        onClick={() => fetchWeather(city)}
        className="bg-white text-blue-500 px-4 py-2 rounded mb-4 cursor-pointer" 
      >
        Get Weather
      </button>
    </div>
  );
};

export default SearchBar;
