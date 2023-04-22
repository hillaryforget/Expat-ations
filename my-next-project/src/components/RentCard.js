import * as React from "react";
import FindCategories from "./helpers/FindCategories";
import FindData from "./helpers/FindData";

export default function RentCard({ city_data, name }) {
  const city_det = FindCategories(city_data, 'Housing');
  
  const smallRent = { 
    data: FindData(city_det, "APARTMENT-RENT-SMALL"),
    text: 'A one bedroom, one bath goes for:',
  };

  const mediumRent = { 
    data: FindData(city_det, "APARTMENT-RENT-MEDIUM"),
    text: 'A two bedroom, two bath goes for:',
  };

  const largeRent = { 
    data: FindData(city_det, "APARTMENT-RENT-LARGE"),
    text: 'A three bedroom, two bath goes for:',
  };

  function nullCheck(rent) {
    if (rent.data !== null) {
      const cost = rent.data.currency_dollar_value
      return (
        <div>
          <p className="text-md">{rent.text}</p>
          <div className=" flex justify-center text-xl">
            <b>${cost}/month</b>
          </div>
        </div>
      )
    }
    console.log('THIS IS THE LABEL: ', rent.data);
    return (
      <div>
        <p className="text-md">Data not found</p>
      </div>
    )
  }

  return (
    <div className="rounded-xl shadow-lg bg-[#fffffe] h-96 w-full flex flex-col p-4 mb-6">
      <div className="flex text-3xl w-full justify-center pt-3">
        <h1>{name} Rentals</h1>
      </div>
      <div className="flex">
        <div className="w-1/2 h-full flex flex-col justify-between mt-10 pl-3">
          {nullCheck(smallRent)}
          {nullCheck(mediumRent)}
          {nullCheck(largeRent)}
        </div>
        <div className="w-1/2 h-full">
          <div className="h-full w-full mt-6">
            <img className="h-full w-96" src="rent.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
