import * as React from "react";
import { useState } from "react";
import FindCategories from "./helpers/FindCategories";
import FindData from "./helpers/FindData";

export default function Col_Card({ city_data, name }) {
  const city_det = FindCategories(city_data, "Cost of Living");

  const apples = FindData(city_det, "COST-APPLES");
  const bread = FindData(city_det, "COST-BREAD");
  const coffee = FindData(city_det, "COST-CAPPUCCINO");
  const movies = FindData(city_det, "COST-CINEMA");
  const gym = FindData(city_det, "COST-FITNESS-CLUB");
  const beer = FindData(city_det, "COST-IMPORT-BEER");
  const lunch = FindData(city_det, "COST-RESTAURANT-MEAL");
  const dinner = FindData(city_det, "RESTAURANT-PRICE-INDEX");

  const [currentIndex, setCurrentIndex] = useState("Groceries");
  const [nextTitle, setNextTitle] = useState("Activities");
  const [prevTitle, setPrevTitle] = useState("Dining Out");

  const nextSlide = (currentIndex) => {
    let slideIndex = "";
    let nextIndex = "";

    switch (currentIndex) {
      case "Groceries":
        slideIndex = "Activities";
        nextIndex = "Dining Out";
        break;
      case "Activities":
        slideIndex = "Dining Out";
        nextIndex = "Groceries";
        break;
      case "Dining Out":
        slideIndex = "Groceries";
        nextIndex = "Activities";
    }

    setCurrentIndex(slideIndex);
    setNextTitle(nextIndex);
    setPrevTitle(currentIndex);
  };

  const prevSlide = (currentIndex) => {
    let slideIndex = "";
    let prevIndex = "";

    switch (currentIndex) {
      case "Groceries":
        slideIndex = "Dining Out";
        prevIndex = "Activities";
        break;
      case "Activities":
        slideIndex = "Groceries";
        prevIndex = "Dining Out";
        break;
      case "Dining Out":
        slideIndex = "Activities";
        prevIndex = "Groceries";
    }

    setCurrentIndex(slideIndex);
    setNextTitle(currentIndex);
    setPrevTitle(prevIndex);
  };

  return (
    <div className="rounded-xl shadow-lg bg-[#fffffe] h-96 w-full flex flex-col px-5 mb-6">
      <div className="flex flex-row h-full">
        <div className="w-full flex justify-center pt-8">
          {currentIndex === "Groceries" && (
            <div className="h-full w-full flex flex-col">
              <div className="flex w-full h-1/5 justify-center items-end">
                <p className="text-4xl">Groceries in {name}</p>
              </div>
              <div className="flex flex-row justify-evenly pt-8">
                {apples !== null && (
                  <p className="flex flex-col items-center">
                    <img className="h-16 w-auto" src="apple.png" />
                    <br />
                    <span className="text-m">apples</span>
                    <span className="text-4xl">
                      <b>${Object.values(apples)[0].toFixed(2)}</b>
                    </span>
                    <span className="text-m">per kilogram</span>
                  </p>
                )}
                {bread !== null && (
                  <p className="flex flex-col items-center">
                    <img className="h-16 w-auto" src="bread.png" />
                    <br />
                    <span className="text-m">bread</span>
                    <span className="text-4xl">
                      <b>${Object.values(bread)[0].toFixed(2)}</b>
                    </span>
                    <span className="text-m">per loaf</span>
                  </p>
                )}
                {coffee !== null && (
                  <p className="flex flex-col items-center">
                    <img className="h-16 w-auto" src="coffee-cup.png" />
                    <br />
                    <span className="text-m">coffee</span>
                    <span className="text-4xl">
                      <b>${Object.values(coffee)[0].toFixed(2)}</b>
                    </span>
                    <span className="text-m">per cup</span>
                  </p>
                )}
              </div>
            </div>
          )}
          {currentIndex === "Activities" && (
            <div className="h-full w-full flex flex-col">
              <div className="flex w-full h-1/5 justify-center items-end">
                <p className="text-4xl">Activities to do in {name}</p>
              </div>
              <div className="flex flex-row justify-evenly pt-8">
                {movies !== null && (
                  <p className="flex flex-col items-center">
                    <img className="h-16 w-auto" src="cinema.png" />
                    <br />
                    <span className="text-m">movies</span>
                    <span className="text-4xl">
                      <b>${Object.values(movies)[0].toFixed(2)}</b>
                    </span>
                    <span className="text-m">per ticket</span>
                  </p>
                )}
                {gym !== null && (
                  <p className="flex flex-col items-center">
                    <img className="h-16 w-auto" src="dumbbell.png" />
                    <br />
                    <span className="text-m">gyms</span>
                    <span className="text-4xl">
                      <b>${Object.values(gym)[0].toFixed(2)}</b>
                    </span>
                    <span className="text-m">a membership</span>
                  </p>
                )}
                {beer !== null && (
                  <p className="flex flex-col items-center">
                    <img className="h-16 w-auto" src="beer.png" />
                    <br />
                    <span className="text-m">import beer</span>
                    <span className="text-4xl">
                      <b>${Object.values(beer)[0].toFixed(2)}</b>
                    </span>
                    <span className="text-m">a drink</span>
                  </p>
                )}
              </div>
            </div>
          )}
          {currentIndex === "Dining Out" && (
            <div className="h-full w-full flex flex-col">
              <div className="flex w-full h-1/5 justify-center items-end">
                <p className="text-4xl">Dining Out in {name}</p>
              </div>
              <div className="flex flex-row justify-evenly pt-8">
                {lunch !== null && (
                  <p className="flex flex-col items-center">
                    <img className="h-16 w-auto pr-5" src="food.png" />
                    <br />
                    <span className="text-m">lunchtime meal</span>
                    <span className="text-4xl">
                      <b>${Object.values(lunch)[0].toFixed(2)}</b>
                    </span>
                    <span className="text-m">per plate</span>
                  </p>
                )}
                {dinner !== null && (
                  <p className="flex flex-col items-center">
                    <img className="h-16 w-auto" src="dinner.png" />
                    <br />
                    <span className="text-m">supper date</span>
                    <span className="text-4xl">
                      <b>${Object.values(dinner)[0].toFixed(2)}</b>
                    </span>
                    <span className="text-m">per night out</span>
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row h-1/6 w-full text-2xl items-center justify-between opacity-0 hover:opacity-100">
        <div className="bg-[#ffd803] rounded-xl w-1/4 text-center border-2 border-[#e6c300] hover:shadow-lg hover:scale-110">
          <button onClick={() => prevSlide(currentIndex)}>{prevTitle}</button>
        </div>
        <div className="bg-[#ffd803] rounded-xl w-1/4 text-center border-2 border-[#e6c300] hover:shadow-lg hover:scale-110">
          <button onClick={() => nextSlide(currentIndex)}>{nextTitle}</button>
        </div>
      </div>
    </div>
  );
}
