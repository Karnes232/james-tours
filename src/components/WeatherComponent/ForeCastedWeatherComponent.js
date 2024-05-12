import moment from "moment/moment";
import React from "react";

import { RiCelsiusLine, RiFahrenheitLine } from "react-icons/ri";
const ForeCastedWeatherComponent = ({ weather, checked }) => {
  console.log(weather.day);
  const forecastedDate = moment(weather.date).format("MMMM DD, YYYY");
  let averageTempC = weather.day.avgtemp_c;
  let averageTempF = weather.day.avgtemp_f;
  let maxTempC = weather.day.maxtemp_c;
  let maxTempF = weather.day.maxtemp_f;
  let minTempC = weather.day.mintemp_c;
  let minTempF = weather.day.mintemp_f;
  return (
    <>
      <div className="max-w-sm min-w-[22rem] my-5 mx-2 rounded-lg overflow-hidden shadow-lg flex flex-col bg-zinc-50 bg-opacity-60">
        <div className="flex justify-end text-xs font-semibold py-5 px-5 border-b border-gray-300 border-opacity-50 ">
          <div>{forecastedDate}</div>
        </div>
        <div className="py-5 px-5 flex space-x-4">
          <div className="flex flex-col">
            <div className="flex space-x-3">
              <img
                src={`https:${weather.day.condition.icon}`}
                alt={weather.day.condition.text}
              />
              <div className="flex flex-col">
                <div className="flex justify-around items-center text-5xl font-bold space-x-1">
                  <div>
                    {checked ? (
                      <>{averageTempC.toFixed(0)}</>
                    ) : (
                      <>{averageTempF.toFixed(0)}</>
                    )}
                  </div>
                  <div>
                    {checked ? (
                      <>
                        <RiCelsiusLine size={20} />
                      </>
                    ) : (
                      <>
                        <RiFahrenheitLine size={20} />
                      </>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs space-x-1">
                  <div>
                    <span className="text-gray-500">Average</span>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="font-medium text-center text-sm mt-4">
              {weather.day.condition.text}
            </div>
          </div>
          <div className="flex flex-col w-[45%] space-y-2">
            <div className="flex justify-between border-b text-sm">
              <div>Max Temp</div>
              <div className="flex justify-center items-center space-x-1">
                <div>
                  {checked ? (
                    <>{maxTempC.toFixed(0)}</>
                  ) : (
                    <>{maxTempF.toFixed(0)}</>
                  )}
                </div>
                <div>
                  {checked ? (
                    <>
                      <RiCelsiusLine size={10} />
                    </>
                  ) : (
                    <>
                      <RiFahrenheitLine size={10} />
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-between border-b text-sm">
              <div>Min Temp</div>
              <div className="flex justify-center items-center space-x-1">
                <div>
                  {checked ? (
                    <>{minTempC.toFixed(0)}</>
                  ) : (
                    <>{minTempF.toFixed(0)}</>
                  )}
                </div>
                <div>
                  {checked ? (
                    <>
                      <RiCelsiusLine size={10} />
                    </>
                  ) : (
                    <>
                      <RiFahrenheitLine size={10} />
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-between border-b text-sm">
              <div>Humidity</div>
              <div>{weather.day.avghumidity}%</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForeCastedWeatherComponent;
