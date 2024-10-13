import React from "react";
import WeatherIcon from "./WeatherIcon";
import { FiNavigation } from "react-icons/fi";

const WeatherCardItem = ({ data }) => {
  const {
    main: { temp, temp_min, temp_max, pressure, humidity },
    visibility,
    wind: { speed, deg },
    sys: { sunrise, sunset, country },
    weather,
    name,
  } = data;

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date
      .toLocaleString("en-US", {
        hour: "numeric", // Use "numeric" to remove leading zero
        minute: "2-digit",
        hour12: true,
      })
      .replace(/ AM| PM/, (match) => match.trim().toLowerCase()); // Convert AM/PM to lowercase
  };

  const countryColors = {
    LK: "bg-colorLK",
    JP: "bg-colorJP",
    GB: "bg-colorGB",
    AU: "bg-colorAU",
    US: "bg-colorUS",
    FR: "bg-colorFR",
    CN: "bg-colorCN",
    NO: "bg-colorNO",
  };

  const cardColor = countryColors[country] || "bg-gray-400";

  return (
    <>
      {/* Top Section*/}
      <div
        className={`weather-card bg-card mx-auto p-4 sm:p-6 ${cardColor} rounded-t-lg shadow-lg text-white`}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div>
            <h2 className="text-xl sm:text-3xl font-bold">
              {name}, {country}
            </h2>
            <p className="text-sm sm:text-base ">
              {`${formatTime(new Date().getTime() / 1000)}`},{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
              })}
            </p>
          </div>
          <div className="text-4xl sm:text-5xl font-bold">
            {Math.round(temp)}°C
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center sm:justify-between mt-4 items-center">
          <p className="text-lg flex items-center gap-2">
            <WeatherIcon description={weather[0].main} />
            {weather[0].description}
          </p>
          <div className="text-center sm:text-left">
            <p className="text-sm">Temp Min: {temp_min}°C</p>
            <p className="text-sm">Temp Max: {temp_max}°C</p>
          </div>
        </div>
      </div>

      {/* Bottom Section*/}
      <div
        className={`flex flex-col sm:flex-row justify-between weather-card mx-auto p-4 sm:p-6 bg-gray-700 rounded-b-lg shadow-lg text-white mb-10`}
      >
        <div className="flex flex-col items-center justify-center">
          <p>Pressure: {pressure}hPa</p>
          <p>Humidity: {humidity}%</p>
          <p>Visibility: {visibility / 1000}km</p>
        </div>

        <div className="hidden sm:block vertical-line"></div>

        <div className="flex flex-col items-center justify-center mt-4 sm:mt-0">
          <FiNavigation className="mb-2 text-xl" />
          <p>
            {speed}m/s {deg}°
          </p>
        </div>

        <div className="hidden sm:block vertical-line"></div>

        <div className="flex flex-col items-center justify-center mt-4 sm:mt-0">
          <p>Sunrise: {formatTime(sunrise)}</p>
          <p>Sunset: {formatTime(sunset)}</p>
        </div>
      </div>
    </>
  );
};

export default WeatherCardItem;
