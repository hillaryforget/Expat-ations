import * as React from "react";
import FindCategories from "./helpers/FindCategories";
import FindData from "./helpers/FindData";

export default function TransportationCard({ cityName, transportation }) {
  const city_det = FindCategories(transportation, "Cost of Living");
  const transportionCost = FindData(city_det, "COST-PUBLIC-TRANSPORT");

  return (
    <div className="rounded-xl shadow-lg bg-[#fffffe] h-[26rem] w-full flex flex-col p-4 mb-6">
      <div className=" flex justify-center text-2xl">
        <h1>{cityName} Public Transportation</h1>
      </div>
      <div className=" p-8 ">
        <img src="transportation.svg" />
      </div>
      <div className="flex justify-center">
        <p className="text-2xl">
          {" "}
          Monthly Cost: <b>${transportionCost.currency_dollar_value}</b>
        </p>
      </div>
    </div>
  );
}
