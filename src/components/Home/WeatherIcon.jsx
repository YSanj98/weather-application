import React from "react";
import { FaCloudRain, FaSnowflake, FaBolt, FaSmog } from "react-icons/fa";
import { WiCloud, WiDaySunny, WiSleet } from "react-icons/wi";

const WeatherIcon = ({ description }) => {
  const weatherIcons = {
    Clear: <WiDaySunny className="text-5xl" />,
    Clouds: <WiCloud className="text-5xl" />,
    Rain: <WiSleet className="text-5xl" />,
    Snow: <FaSnowflake className="text-5xl" />,
    Thunderstorm: <FaBolt className="text-5xl" />,
    Fog: <FaSmog className="text-5xl" />,
    Mist: <FaSmog className="text-5xl" />,
    Haze: <FaSmog className="text-5xl" />,
    Drizzle: <FaCloudRain className="text-5xl" />,
    // We can more weather icons as needed
  };

  return weatherIcons[description] || null;
};

export default WeatherIcon;
