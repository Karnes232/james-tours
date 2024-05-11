import React from "react";
import useConvertTime from "../../customHooks/useConvertTime";
import { RiCelsiusLine, RiFahrenheitLine } from "react-icons/ri";

const WeatherComponent = ({ weather, checked }) => {
  let time = useConvertTime(weather.last_updated.split(" ")[1]);
  console.log(weather.condition.text);
  let tempatureC = weather.temp_c;
  let feelsLikeC = weather.feelslike_c;
  let tempatureF = weather.temp_f;
  let feelsLikeF = weather.feelslike_f;

  let windC = weather.wind_kph.toFixed(0) + "km/h";
  let windF = weather.wind_mph.toFixed(0) + "mph";
  let windGustC = weather.gust_kph.toFixed(0) + "km/h";
  let windGustF = weather.gust_mph.toFixed(0) + "mph";
  return (
    <>
      <div className="max-w-sm min-w-[22rem] my-5 mx-2 rounded-lg overflow-hidden shadow-lg flex flex-col bg-zinc-50 bg-opacity-60">
        <div className="flex justify-between text-xs font-semibold py-5 px-5 border-b border-gray-300 border-opacity-50 ">
          <div className="text-gray-500">CURRENT WEATHER</div>
          <div>{`${time.slice(0, -2)} ${time.slice(-2)}`}</div>
        </div>
        <div className="py-5 px-5 flex space-x-4">
          <div className="flex flex-col">
            <div className="flex space-x-3">
              <img
                src={`https:${weather.condition.icon}`}
                alt={weather.condition.text}
              />
              <div className="flex flex-col">
                <div className="flex justify-around items-center text-5xl font-bold space-x-1">
                  <div>
                    {checked ? (
                      <>{tempatureC.toFixed(0)}</>
                    ) : (
                      <>{tempatureF.toFixed(0)}</>
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
                    <span className="text-gray-500">RealFeel</span>{" "}
                  </div>
                  <div>
                    {checked ? (
                      <>{feelsLikeC.toFixed(0)}</>
                    ) : (
                      <>{feelsLikeF.toFixed(0)}</>
                    )}
                  </div>
                  <div>
                    {checked ? (
                      <>
                        <RiCelsiusLine size={7} />
                      </>
                    ) : (
                      <>
                        <RiFahrenheitLine size={7} />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="font-medium text-center text-sm mt-4">
              {weather.condition.text}
            </div>
          </div>
          <div className="flex flex-col w-[45%] space-y-2">
            <div className="flex justify-between border-b text-sm">
              <div>Wind</div>
              <div>
                {weather.wind_dir} {checked ? <>{windC}</> : <>{windF}</>}
              </div>
            </div>
            <div className="flex justify-between border-b text-sm">
              <div>Wind Gust</div>
              <div>{checked ? <>{windGustC}</> : <>{windGustF}</>}</div>
            </div>
            <div className="flex justify-between border-b text-sm">
              <div>Humidity</div>
              <div>{weather.humidity}%</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherComponent;
