import * as React from 'react';

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

  // console.log(`+++: ${Object.values(DayLength)}`)
  // console.log(`+++: ${Object.values(rainyDays)}`)
  // console.log(`+++: ${Object.values(avgHigh)}`)
  // console.log(`+++: ${Object.values(avgLow)}`)
  // console.log(`+++: ${Object.values(sunshine)}`)
  // console.log(`+++: ${Object.values(weatherType)}`)

  return (
    <div className="rounded-xl shadow-lg bg-[#fffffe] h-96 w-full flex flex-col p-4 mb-6">
      <div className=" flex justify-center text-4xl">
        <h1>{cityName} Weather Trends</h1>
      </div>
      <div className="flex justify-center pt-20">
        { dayLength!== null &&
          <div className='w-1/3'>
            <img className="h-20 w-auto" src='sunrise.png' />
              <br/>
              <div className="">
                <p><b>{dayLength.float_value} hrs</b></p>
                <p className='break-words text-sm'>{dayLength.label} </p>
              </div> 
          </div>
        }
        { rainyDays!== null &&
          <div className='w-1/3'>
            <img className="h-20 w-auto" src='rainy.png' />
              <br/>
              <div className="flex flex-col justify-center">
                <p><b>{rainyDays.float_value} days</b></p>
                <p className='break-words text-sm'>{rainyDays.label} </p>
              </div> 
          </div>
        }        
        { avgHigh!== null &&
          <div className='w-1/3'>
            <img className="h-20 w-auto" src='hot.png' />
              <br/>
              <div className="flex flex-col justify-center">
                <p><b>{avgHigh.string_value}°C</b></p>
                <p className='break-words text-sm'>{avgHigh.label} </p>
              </div> 
          </div>
        }
        { avgLow!== null &&
          <div className='w-1/3'>
          <img className="h-20 w-auto" src='cold.png' />
            <br/>
            <div className="flex flex-col justify-center">
              <p><b>{avgLow.string_value}°C</b></p>
              <p className='break-words text-sm'>{avgLow.label} </p>
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

    </div>
  );
}