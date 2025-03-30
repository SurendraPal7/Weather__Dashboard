import React from "react";

const RecentSearches = ({ recentSearches, fetchWeather }) => {
  return (
    <div className="mt-4 w-full bg-#6447ad p-4 rounded-lg shadow-md"> 
<h3 className="text-black font-semibold text-center mb-2 bg-blue-300 p-2 rounded-md">
  Recent Searches
</h3>
      {recentSearches.map((search, index) => (
        <button
          key={index}
          onClick={() => fetchWeather(search)}
          className="text-black block bg-light-blue-300 hover:bg-light-blue-400 px-3 py-2 rounded-md mt-1"
        >
          {search}
        </button>
      ))}
    </div>
  );
};

export default RecentSearches;
