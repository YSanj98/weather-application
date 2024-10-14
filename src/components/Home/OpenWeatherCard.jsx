import React from "react";
import WeatherIcon from "./WeatherIcon";
import { FiNavigation } from "react-icons/fi";
import { HiArrowSmallLeft } from "react-icons/hi2";

const OpenWeatherCard = ({ data, onClose }) => {
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
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      .replace(/ AM| PM/, (match) => match.trim().toLowerCase());
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

  const cardColor = countryColors[country] || "bg-blue-500";

  return (
    <>
      {/* Top Section */}
      <div
        className={`mt-10 open-weather-card mx-auto p-6 ${cardColor} rounded-t-lg shadow-lg text-white`}
      >
        <button
          onClick={onClose}
          className="text-white text-xl p-1 rounded-full hover:bg-cyan-950 transition duration-200 ease-in-out"
        >
          <HiArrowSmallLeft />
        </button>
        <div className="flex justify-center items-center mb-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold">
              {name}, {country}
            </h2>
            <p className="text-sm justify-center">
              {`${formatTime(new Date().getTime() / 1000)}, `}
              {new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
              })}
            </p>
          </div>
          <div></div> {/* Placeholder for alignment */}
        </div>

        <div className="flex justify-evenly items-center mt-8">
          {/* Weather Info */}
          <div className="flex flex-col items-center">
            <WeatherIcon description={weather[0].main} />
            <p className="ml-2 text-lg">{weather[0].description}</p>
          </div>

          {/* Vertical Line */}
          <div className="w-px h-28 bg-gray-200 mx-4"></div>

          {/* Temps */}
          <div className="flex flex-col gap-4">
            <div className="text-5xl font-bold">{Math.round(temp)}°C</div>

            <div className="text-right">
              <p className="text-sm">Temp Min: {Math.round(temp_min)}°C</p>
              <p className="text-sm">Temp Max: {Math.round(temp_max)}°C</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className={`flex flex-col sm:flex-row justify-between open-weather-card mx-auto p-4 sm:p-6 bg-gray-700 rounded-b-lg shadow-lg text-white mb-10`}
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

export default OpenWeatherCard;
