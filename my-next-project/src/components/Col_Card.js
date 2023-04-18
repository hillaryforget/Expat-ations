import * as React from 'react';
import { useState } from 'react';

function findCostOfLiving(prop) {
  for (let x = 0; x < prop.length; x++) {
    if(prop[x].label === 'Cost of Living') {
      return prop[x].data;
    }
  }
}

function findData(city_det, string) {
  for (let x = 0; x < city_det.length; x++) {
    if(city_det[x].id === string) {
      return city_det[x];
    }
  }
  return null;
}

export default function Col_Card(props) {
  const city_det = findCostOfLiving(props.city_data);

  const apples = findData(city_det, 'COST-APPLES');
  const bread = findData(city_det, 'COST-BREAD');
  const coffee = findData(city_det, 'COST-CAPPUCCINO');
  const movies = findData(city_det, 'COST-CINEMA');
  const gym = findData(city_det, 'COST-FITNESS-CLUB');
  const beer = findData(city_det, 'COST-IMPORT-BEER');
  const lunch = findData(city_det, 'COST-RESTAURANT-MEAL');
  const dinner = findData(city_det, 'RESTAURANT-PRICE-INDEX');

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
        <div className="w-3/5 flex justify-center pt-8">
        {currentIndex === 'Groceries' &&
          <div className="h-full w-full flex flex-col">
            <div className="flex w-full h-1/5 justify-center items-end">
              <p className="text-4xl"><b>Groceries</b></p>
            </div>
            <div className="flex flex-row justify-evenly pt-5">
              {apples !== null &&
              <p className='flex flex-col items-center'>
                <img className="h-16 w-auto" src='apple.png' />
                <br/>
                <span className="text-m">apples</span>
                <span className="text-4xl"><b>${Object.values(apples)[0].toFixed(2)}</b></span>
                <span className="text-m">per kilogram</span>
              </p>
              }
              {bread !== null &&
              <p className="flex flex-col items-center">
                <img className="h-16 w-auto" src='bread.png' />
                <br/>
                <span className="text-m">bread</span>
                <span className="text-4xl"><b>${Object.values(bread)[0].toFixed(2)}</b></span>
                <span className="text-m">per loaf</span>
              </p>
              }
              {coffee !== null &&
              <p className="flex flex-col items-center">
                <img className="h-16 w-auto" src='coffee-cup.png' />
                <br/>
                <span className="text-m">coffee</span>
                <span className="text-4xl"><b>${Object.values(coffee)[0].toFixed(2)}</b></span>
                <span className="text-m">per cup</span>
              </p>
              }
            </div>
          </div>
        }
        {currentIndex === 'Activities' &&
          <div className="h-full w-full flex flex-col">
            <div className="flex w-full h-1/5 justify-center items-end">
              <p className="text-4xl"><b>Activities</b></p>
            </div>
            <div className="flex flex-row justify-evenly pt-5">
              {movies !== null &&
              <p className='flex flex-col items-center'>
                <img className="h-16 w-auto" src='cinema.png' />
                <br/>
                <span className="text-m">movies</span>
                <span className="text-4xl"><b>${Object.values(movies)[0].toFixed(2)}</b></span>
                <span className="text-m">per ticket</span>
              </p>
              }
              {gym !== null &&
              <p className="flex flex-col items-center">
                <img className="h-16 w-auto" src='dumbbell.png' />
                <br/>
                <span className="text-m">gyms</span>
                <span className="text-4xl"><b>${Object.values(gym)[0].toFixed(2)}</b></span>
                <span className="text-m">a membership</span>
              </p>
              }
              {beer !== null &&
              <p className="flex flex-col items-center">
                <img className="h-16 w-auto" src='beer.png' />
                <br/>
                <span className="text-m">import beer</span>
                <span className="text-4xl"><b>${Object.values(beer)[0].toFixed(2)}</b></span>
                <span className="text-m">a drink</span>
              </p>
              }
            </div>
          </div>
        }
        {currentIndex === 'Eating Out' &&
          <div className="h-full w-full flex flex-col">
            <div className="flex w-full h-1/5 justify-center items-end">
              <p className="text-4xl"><b>Eating Out</b></p>
            </div>
            <div className="flex flex-row justify-evenly pt-5">
              {lunch !== null &&
              <p className='flex flex-col items-center'>
                <img className="h-16 w-auto pr-5" src='food.png' />
                <br/>
                <span className="text-m">lunchtime meal</span>
                <span className="text-4xl"><b>${Object.values(lunch)[0].toFixed(2)}</b></span>
                <span className="text-m">per plate</span>
              </p>
              }
              {dinner !== null &&
              <p className="flex flex-col items-center">
                <img className="h-16 w-auto" src='supper.png' />
                <br/>
                <span className="text-m">supper date</span>
                <span className="text-4xl"><b>${Object.values(dinner)[0].toFixed(2)}</b></span>
                <span className="text-m">per night out</span>
              </p>
              }
            </div>
          </div>
        }
        </div>
      </div>
      <div className="flex flex-row h-1/6 text-2xl items-center justify-between opacity-0 hover:opacity-100">
        <button onClick={() => prevSlide(currentIndex)}>&lt; {prevTitle}</button>
        <button onClick={() => nextSlide(currentIndex)}>{nextTitle} &gt;</button>
      </div>
    </div>
  );
}