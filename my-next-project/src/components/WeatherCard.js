import * as React from 'react';
import { useState } from 'react';

function findClimate(prop) {
  for (let x = 0; x < prop.length; x++) {
    if(prop[x].label === 'Climate') {
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

export default function WeatherCard({cityName, climate}){

  const weather = findClimate(climate)
  const dayLength = findData(weather, 'WEATHER-AV-DAY-LENGTH')
  const rainyDays = findData(weather, 'WEATHER-AV-NUMBER-RAINY-DAYS')
  const avgHigh = findData(weather, 'WEATHER-AVERAGE-HIGH')
  const avgLow = findData(weather, 'WEATHER-AVERAGE-LOW')
  const sunshine = findData(weather, 'WEATHER-SUNSHINE-AMOUNT')
  const weatherType = findData(weather, 'WEATHER-TYPE')

  const [currentIndex, setCurrentIndex] = useState('Weather Trends');
  const [nextTitle, setNextTitle] = useState('Weather Type');

  const nextSlide = (currentIndex) => {
    let slideIndex = '';
    let nextIndex = '';

    switch(currentIndex) {
      case 'Weather Trends':
        slideIndex = 'Weather Type';
        nextIndex = 'Weather Trends';
        break;
      case 'Weather Type':
        slideIndex = 'Weather Trends';
        nextIndex = 'Weather Type';
        break;
    }

    setCurrentIndex(slideIndex);
    setNextTitle(nextIndex);
  }

  return (
    <div className="rounded-xl shadow-lg bg-[#fffffe] h-96 w-full flex flex-col p-4 mb-6">
      { currentIndex === "Weather Type" &&
      <>
        <div className=" flex justify-center text-2xl">
          <h1>{cityName} Weather Type</h1>
        </div>
        { weatherType!== null &&
            <div className='w-full h-full'>
              <div className=' w-1/3 flex items-center p-5'>
                <img className=" " src='weather.png' />
              </div>
                <br/>
                <div className="flex flex-col items-center">
                  <p className='text-xl'><b>{weatherType.string_value}</b></p>
                </div> 
            </div>
          }
      </>

      }
      { currentIndex === "Weather Trends" && 
      <>
        <div className=" flex justify-center text-2xl">
          <h1>{cityName} Weather Trends</h1>
        </div>
        <div className="flex justify-center pt-10 h-full">
          { dayLength!== null &&
            <div className='w-1/3'>
              <div className='w-full h-20 flex justify-center'>
                <img className="h-20 w-auto" src='sunrise.png' />
              </div>
                <br/>
                <div className="flex flex-col items-center">
                  <p className='text-xl'><b>{dayLength.float_value} hrs</b></p>
                  <p>Average day</p>
                  <p>length</p>
                </div> 
            </div>
          }
          { rainyDays!== null &&
            <div className='w-1/3'>
              <div className='w-full h-20 flex justify-center'>
                <img className="h-full w-auto" src='rainy.png' />
              </div> 
              <br/>
              <div className="flex flex-col items-center">
                  <p className='text-xl'><b>{rainyDays.float_value} days</b></p>
                  <p> Average number</p>
                  <p> of rainy days</p>
                  <p> per year</p>
                </div> 
            </div>
          }        
          { avgHigh!== null &&
            <div className='w-1/3'>
              <div className='w-full h-20 flex justify-center'>
                <img className="h-full w-auto" src='hot.png' />
              </div>
              <br/>
              <div className="flex flex-col items-center">
                <p className='text-xl'><b>{avgHigh.string_value}°C</b></p>
                <p>Average high</p>
                <p>temperature</p>
              </div> 
            </div>
          }
          { avgLow!== null &&
            <div className='w-1/3'>
            <div className='w-full h-20 flex justify-center'>
              <img className="h-full w-auto" src='cold.png' />
            </div>
            <br/>
              <div className="flex flex-col items-center">
                <p className='text-xl'><b>{avgLow.string_value}°C</b></p>
                <p> Average low</p>
                <p> temperature</p>
              </div> 
            </div>
          }
          {/* { sunshine!== null &&
            <div className='w-1/3'>
            <img className="h-16 w-auto" src='sunny.png' />
              <br/>
              <div className="flex flex-col justify-center">
                <p><b>{sunshine.float_value}Mj/m²</b></p>
                <p className='break-words text-sm'>{sunshine.label} </p>
              </div> 
          </div>
          }                 */}
        </div>
      </>
    } 
    <br/>
    <div className='flex justify-center'>
      <br/>
      <button 
        className="text-center text-2xl rounded-xl w-full" 
        style={{ background: `#ffd803`}}
        onClick={() => nextSlide(currentIndex)}> 
      Switch to {nextTitle}
      </button>
    </div>
    </div>
  );
}