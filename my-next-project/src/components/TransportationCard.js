import * as React from "react";

function findCostOfLiving(prop) {
  for (let x = 0; x < prop.length; x++) {
    if (prop[x].label === "Cost of Living") {
      return prop[x].data;
    }
  }
}

function findData(city_det, string) {
  for (let x = 0; x < city_det.length; x++) {
    if (city_det[x].id === string) {
      return city_det[x];
    }
  }
  return null;
}

export default function TransportationCard({ cityName, transportation }) {
  const city_det = findCostOfLiving(transportation);
  const transportionCost = findData(city_det, "COST-PUBLIC-TRANSPORT");

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
