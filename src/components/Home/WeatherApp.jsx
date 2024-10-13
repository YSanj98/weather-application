import React from "react";
import SearchBar from "./SearchBar.jsx";
import WeatherCard from "./WeatherCard.jsx";
import data from "../../utils/cities.json";

const WeatherApp = () => {
  const cities = data.List.map((city) => city.CityCode);

  return (
    <div className="min-h-screen bg-header bg-gray-50 flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <img
          src="/Assets/4b8fa90b8cabcd4a0ec4f82122913da1.png"
          alt="Weather App Logo"
          className="h-10 w-10 mb-3 sm:mr-3 sm:mb-0"
        />
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-100">
          Weather App
        </h2>
      </div>

      <SearchBar />

      <WeatherCard cityIds={cities} />
    </div>
  );
};


export default WeatherApp;
