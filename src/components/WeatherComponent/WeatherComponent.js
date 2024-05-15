import axios from "axios";
import React, { useEffect, useState } from "react";
import CurrentWeatherComponent from "./CurrentWeatherComponent";
import ForeCastedWeatherComponent from "./ForeCastedWeatherComponent";
import TextComponent from "../TextComponent/TextComponent";

const WeatherComponent = () => {
  const [weatherCurrent, setWeatherCurrent] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [checked, setChecked] = useState(true);
  useEffect(() => {
    axios.get(`/api/weather`).then((res) => {
      const weather = res.data;
      setWeatherCurrent(weather.weather.current);
      setWeatherForecast(weather.weather.forecast.forecastday.slice(1));
    });
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <TextComponent
        title="Current Forecast"
        titleClassName="my-5 2xl:mb-10 text-5xl md:text-6xl lg:text-8xl text-center font-zeyada text-primary-color"
      />
      <div className="flex justify-end mx-5 mt-5">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            defaultChecked={checked}
            onChange={() => setChecked(!checked)}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 w-20 text-right">
            {checked ? "Celsius" : "Fahrenheit"}
          </span>
        </label>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly 2xl:space-x-10 mx-auto">
        {weatherCurrent && (
          <CurrentWeatherComponent weather={weatherCurrent} checked={checked} />
        )}
        {weatherForecast?.map((weather, index) => {
          console.log(weather);
          return (
            <ForeCastedWeatherComponent
              weather={weather}
              checked={checked}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WeatherComponent;
