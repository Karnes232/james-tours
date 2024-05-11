import React from "react";
import useConvertTime from "../../customHooks/useConvertTime";
import { RiCelsiusLine, RiFahrenheitLine } from "react-icons/ri";

const WeatherComponent = ({ weather }) => {
  let time = useConvertTime(weather.last_updated.split(" ")[1]);
  console.log(weather.condition.text);
  let tempatureC = weather.temp_c;
  let feelsLikeC = weather.feelslike_c;
  let tempatureF = weather.temp_f;
  let feelsLikeF = weather.feelslike_f;
  return (
    <>
      <div className="max-w-sm min-w-[22rem] my-5 mx-2 rounded-lg overflow-hidden shadow-lg flex flex-col bg-zinc-50 bg-opacity-60">
        <div className="flex justify-between text-xs font-semibold py-5 px-5 border-b border-gray-300 border-opacity-50 ">
          <div className="text-gray-500">CURRENT WEATHER</div>
          <div>{`${time.slice(0, -2)} ${time.slice(-2)}`}</div>
        </div>
        <div className="py-5 px-5 flex">
          <div className="flex flex-col">
            <div className="flex">
              <img
                src={`https:${weather.condition.icon}`}
                alt={weather.condition.text}
              />
              <div className="flex flex-col">
                <div className="flex justify-between items-center text-4xl font-bold space-x-1">
                  <div>{tempatureC.toFixed(0)}</div>
                  <div>
                    <RiCelsiusLine size={17} />
                  </div>
                </div>
                <div className="flex justify-around items-center text-[.6rem] ">
                  <span className="text-gray-500 tx">RealFeel</span>{" "}
                  {feelsLikeC.toFixed(0)}
                  <RiCelsiusLine size={7} />
                </div>
              </div>
            </div>
            <div className="font-medium text-sm">{weather.condition.text}</div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default WeatherComponent;
