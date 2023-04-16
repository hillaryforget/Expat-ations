import * as React from 'react';
import { useState } from 'react';

export default function Col_Card(props) {
  const city_det = props.city_data;
  console.log('+', city_det[1]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (currentIndex) => {
    let nextIndex = 0;

    if(currentIndex === 2) {
      nextIndex = 0
    } else {
      nextIndex = currentIndex + 1;
    }

    setCurrentIndex(nextIndex);
  }

  const prevSlide = (currentIndex) => {
    let nextIndex = 0;

    if(currentIndex === 0) {
      nextIndex = 2
    } else {
      nextIndex = currentIndex - 1;
    }

    setCurrentIndex(nextIndex);
  }

  return (
    <div className="rounded-xl shadow-lg bg-[#e3f6f5] h-96 w-full flex flex-col pt-4 pl-4 pr-4">
      <div className="flex flex-row h-full">
        <div className="w-2/5 h-full">
          {currentIndex === 0 &&
          <img className="w-full h-full" src="groceries.svg" />
          }
          {currentIndex === 1 &&
          <img className="w-full h-full" src="workout.svg" />
          }
          {currentIndex === 2 &&
          <img className="w-full h-full" src="restaurant.svg" />
          }
        </div>
        <div className="w-3/5 flex justify-center">
        {currentIndex === 0 &&
          <div className="h-full w-3/4 flex flex-col justify-evenly place-items-center bg-[#fffffe] rounded-xl">
            <h1 className="text-4xl">Groceries</h1>
            <ul>
              <li>Cost of 1kg of Apples: ${Object.values(city_det[1])[0].toFixed(2)}</li>
              <br />
              <li>Cost of Bread: ${Object.values(city_det[2])[0].toFixed(2)}</li>
              <br />
              <li>Cost of a Coffee: ${Object.values(city_det[3])[0].toFixed(2)}</li>
              <br />
            </ul>
          </div>
        }
        {currentIndex === 1 &&
          <div className="h-full w-3/4 flex flex-col justify-evenly place-items-center bg-[#fffffe] rounded-xl">
            <h1 className="text-4xl">Activities</h1>
            <ul>
              <li>Cost of Movie Tickets: ${Object.values(city_det[4])[0].toFixed(2)}</li>
              <br />
              <li>Cost of a Gym Membership: ${Object.values(city_det[4])[0].toFixed(2)}</li>
              <br />
              <li>Cost for a Beer: ${Object.values(city_det[5])[0].toFixed(2)}</li>
            </ul>
          </div>
        }
        {currentIndex === 2 &&
          <div className="h-full w-3/4 flex flex-col justify-evenly place-items-center bg-[#fffffe] rounded-xl">
            <h1 className="text-4xl">Eating Out?</h1>
            <ul>
              <li>Cost for Lunch: ${Object.values(city_det[7])[0].toFixed(2)}</li>
              <br />
              <li>Cost of a Meal at a Restaurant: ${Object.values(city_det[9])[0].toFixed(2)}</li>
              <br />
            </ul>
          </div>
        }
        </div>
      </div>
      <div className="flex flex-row h-1/6 text-4xl items-center justify-between">
        <button onClick={() => prevSlide(currentIndex)}>&lt;</button>
        <button onClick={() => nextSlide(currentIndex)}>&gt;</button>
      </div>
    </div>
  );
}