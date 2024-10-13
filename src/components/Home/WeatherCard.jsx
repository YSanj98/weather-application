import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCardItem from "./WeatherCardItem";

const WeatherCard = ({ cityIds }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(null);

  const weatherAPIKey = process.env.REACT_APP_WEATHER_API_KEY;

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

  return (
    <div className="mt-10 flex flex-wrap justify-center lg:justify-between gap-6">
      {weatherData.map((data, index) => (
        <div key={index} className="w-full lg:w-[48%]">
          <WeatherCardItem data={data} />
        </div>
      ))}
    </div>
  );
};

export default WeatherCard;
