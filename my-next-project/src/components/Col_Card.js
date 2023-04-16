import * as React from 'react';
import { useState } from 'react';

export default function Col_Card(props) {
  const city_det = props.city_data;

  const titles = ['Groceries', 'Activities', 'Eating Out?']

  const [currentIndex, setCurrentIndex] = useState('Groceries');
  const [nextTitle, setNextTitle] = useState('Activities');
  const [prevTitle, setPrevTitle] = useState('Eating Out');

  const nextSlide = (currentIndex) => {
    let slideIndex = '';
    let nextIndex = '';

    switch(currentIndex) {
      case 'Groceries':
        slideIndex = 'Activities';
        nextIndex = 'Eating Out';
        break;
      case 'Activities':
        slideIndex = 'Eating Out';
        nextIndex = 'Groceries';
        break;
      case 'Eating Out':
        slideIndex = 'Groceries';
        nextIndex = 'Activities';
    }

    setCurrentIndex(slideIndex);
    setNextTitle(nextIndex);
    setPrevTitle(currentIndex);
  }

  const prevSlide = (currentIndex) => {
    let slideIndex = '';
    let prevIndex = '';

    switch(currentIndex) {
      case 'Groceries':
        slideIndex = 'Eating Out';
        prevIndex = 'Activities';
        break;
      case 'Activities':
        slideIndex = 'Groceries';
        prevIndex = 'Eating Out';
        break;
      case 'Eating Out':
        slideIndex = 'Activities';
        prevIndex = 'Groceries';
    }

    setCurrentIndex(slideIndex);
    setNextTitle(currentIndex);
    setPrevTitle(prevIndex);
  }

  return (
    <div className="rounded-xl shadow-lg bg-[#fffffe] h-96 w-full flex flex-col pt-4 pl-4 pr-4 mb-6">
      <div className="flex flex-row h-full">
        <div className="w-2/5 h-full">
          {currentIndex === 'Groceries' &&
          <img className="w-full h-full" src="groceries.svg" />
          }
          {currentIndex === 'Activities' &&
          <img className="w-full h-full" src="workout.svg" />
          }
          {currentIndex === 'Eating Out' &&
          <img className="w-full h-full" src="restaurant.svg" />
          }
        </div>
        <div className="w-3/5 flex justify-center">
        {currentIndex === 'Groceries' &&
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
        {currentIndex === 'Activities' &&
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
        {currentIndex === 'Eating Out' &&
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
      <div className="flex flex-row h-1/6 text-2xl items-center justify-between">
        <button onClick={() => prevSlide(currentIndex)}>&lt; {prevTitle}</button>
        <button onClick={() => nextSlide(currentIndex)}>{nextTitle} &gt;</button>
      </div>
    </div>
  );
}