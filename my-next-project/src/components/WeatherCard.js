import * as React from "react";
import { useState } from "react";
import FindData from "./helpers/FindData";
import FindCategories from "./helpers/FindCategories";

export default function WeatherCard({ cityName, climate }) {
  const weather = FindCategories(climate, 'Climate');
  const dayLength = FindData(weather, "WEATHER-AV-DAY-LENGTH");
  const rainyDays = FindData(weather, "WEATHER-AV-NUMBER-RAINY-DAYS");
  const avgHigh = FindData(weather, "WEATHER-AVERAGE-HIGH");
  const avgLow = FindData(weather, "WEATHER-AVERAGE-LOW");
  const weatherType = FindData(weather, "WEATHER-TYPE");

  const [currentIndex, setCurrentIndex] = useState("Weather Trends");
  const [nextTitle, setNextTitle] = useState("Weather Type");

  const nextSlide = (currentIndex) => {
    let slideIndex = "";
    let nextIndex = "";

    switch (currentIndex) {
      case "Weather Trends":
        slideIndex = "Weather Type";
        nextIndex = "Weather Trends";
        break;
      case "Weather Type":
        slideIndex = "Weather Trends";
        nextIndex = "Weather Type";
        break;
    }

    setCurrentIndex(slideIndex);
    setNextTitle(nextIndex);
  };

  return (
    <>
    {weather !== null && (
      <div className="rounded-xl shadow-lg bg-[#fffffe] h-96 w-full flex flex-col p-4 mb-6">
        {currentIndex === "Weather Type" && (
          <>
            <div className=" flex justify-center text-2xl">
              <h1>{cityName} Weather Type</h1>
            </div>
            {weatherType !== null && (
              <div className="w-full h-full flex flex-col justify-center align-middle items-center">
                <div className=" w-1/3 ">
                  <img className="  " src="weather.png" />
                </div>
                <br />
                <div className="flex flex-col items-center">
                  <p className="text-xl">
                    <b>{weatherType.string_value}</b>
                  </p>
                </div>
              </div>
            )}
          </>
        )}
        {currentIndex === "Weather Trends" && (
          <>
            <div className=" flex justify-center text-2xl">
              <h1>{cityName} Weather Trends</h1>
            </div>
            <div className="flex justify-center pt-10 h-full">
              {dayLength !== null && (
                <div className="w-1/3">
                  <div className="w-full h-20 flex justify-center">
                    <img className="h-20 w-auto" src="sunrise.png" />
                  </div>
                  <br />
                  <div className="flex flex-col items-center">
                    <p className="text-xl">
                      <b>{dayLength.float_value} hrs</b>
                    </p>
                    <p>Average day</p>
                    <p>length</p>
                  </div>
                </div>
              )}
              {rainyDays !== null && (
                <div className="w-1/3">
                  <div className="w-full h-20 flex justify-center">
                    <img className="h-full w-auto" src="rainy.png" />
                  </div>
                  <br />
                  <div className="flex flex-col items-center">
                    <p className="text-xl">
                      <b>{rainyDays.float_value} days</b>
                    </p>
                    <p> Average number</p>
                    <p> of rainy days</p>
                    <p> per year</p>
                  </div>
                </div>
              )}
              {avgHigh !== null && (
                <div className="w-1/3">
                  <div className="w-full h-20 flex justify-center">
                    <img className="h-full w-auto" src="hot.png" />
                  </div>
                  <br />
                  <div className="flex flex-col items-center">
                    <p className="text-xl">
                      <b>{avgHigh.string_value}°C</b>
                    </p>
                    <p>Average high</p>
                    <p>temperature</p>
                  </div>
                </div>
              )}
              {avgLow !== null && (
                <div className="w-1/3">
                  <div className="w-full h-20 flex justify-center">
                    <img className="h-full w-auto" src="cold.png" />
                  </div>
                  <br />
                  <div className="flex flex-col items-center">
                    <p className="text-xl">
                      <b>{avgLow.string_value}°C</b>
                    </p>
                    <p> Average low</p>
                    <p> temperature</p>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
        <br />
        <div className="flex justify-center">
          <br />
          <button
            className="text-center text-2xl rounded-xl w-full"
            style={{ background: `#ffd803` }}
            onClick={() => nextSlide(currentIndex)}
          >
            Switch to {nextTitle}
          </button>
        </div>
      </div>
    )}
    {weather === null && (
      <div className="rounded-xl shadow-lg bg-[#fffffe] h-96 w-full flex flex-col p-4 mb-6">
        <p>NO DATA FOUND</p>
      </div>
    )}
    </>
  );          
}