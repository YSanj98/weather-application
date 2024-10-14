import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCardItem from "./WeatherCardItem";
import OpenWeatherCard from "./OpenWeatherCard";
import SearchBar from "./SearchBar"; // Assuming you have a SearchBar component

const WeatherCard = ({ cityIds }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [showSearchBar, setShowSearchBar] = useState(true); // New state for controlling search bar visibility
  const weatherAPIKey = process.env.REACT_APP_WEATHER_API_KEY;

  const openCard = (data) => {
    setSelectedCity(data);
    setShowSearchBar(false); // Hide the search bar when a city is selected
  };

  const closeCard = () => {
    setSelectedCity(null);
    setShowSearchBar(true); // Show the search bar when closing the detailed view
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const cityIdString = cityIds.join(",");
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/group?id=${cityIdString}&units=metric&appid=${weatherAPIKey}`
        );

        setWeatherData(response.data.list);
      } catch (error) {
        setError("Could not fetch weather data. Please try again later.");
      }
    };

    fetchWeatherData();
  }, [cityIds, weatherAPIKey]);

  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!weatherData.length) return <p className="text-center">Loading...</p>;

  // Conditionally render the detailed view if a city is selected
  if (selectedCity) {
    return (
      <OpenWeatherCard
        data={selectedCity}
        onClose={closeCard} // Pass a function to close the detailed view
      />
    );
  }

  return (
    <div>
      {/* Conditionally render the search bar */}
      {showSearchBar && <SearchBar />}

      <div className="flex flex-wrap justify-center lg:justify-between gap-6 mt-10">
        {weatherData.map((data, index) => (
          <div key={index} className="w-full lg:w-[48%]">
            <WeatherCardItem data={data} onClick={() => openCard(data)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;
