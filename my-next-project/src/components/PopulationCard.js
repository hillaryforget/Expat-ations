function findAge(prop) {
  for (let x = 0; x < prop.length; x++) {
    if(prop[x].label === 'Internal application use') {
      return prop[x].data;
    }
  }
}

function findPopulation(prop) {
  for (let x = 0; x < prop.length; x++) {
    if(prop[x].label === 'City Size') {
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

export default function PopulationCard({cityName, population}){
  const age = findAge(population);
  const populationInfo = findPopulation(population);
  
  const elderlyPeople = findData(age, 'ELDERLY-PEOPLE');
  const lifeExpectancy = findData(age, 'LIFE-EXPECTANCY');
  const medianAge = findData(age, 'MEDIAN-AGE');
  const populationSize = findData(populationInfo, "POPULATION-SIZE");

  // console.log(`+++ ${Object.values(elderlyPeople)}`)
  // console.log(`@@@ ${Object.values(lifeExpectancy)}`)
  // console.log(`=== ${Object.values(medianAge)}`)
  // console.log(`444 ${Object.values(populationSize)}`)

  return(
    <div className="rounded-xl shadow-lg bg-[#fffffe] h-80 w-full flex flex-col pt-6 p-4 mb-6">
      <div className=" w-full h-full flex justify-center text-2xl">
        <h1>{cityName} Population</h1>
      </div>
      <div className="flex justify-center pt-3 h-full">
        { elderlyPeople !== null &&
           <div className='w-1/3'>
            <div className='w-full h-20 flex justify-center'>
              <img className="h-20 w-auto" src='old.png' />
            </div>
              <br/>
              <div className="flex flex-col items-center">
                <p className='text-xl'><b>{Math.round(elderlyPeople.percent_value * 1000)}%</b></p>
                <p>Elderly people</p>
                <p>(65+ years)</p>
              </div> 
          </div>        
        }
        { lifeExpectancy !== null &&
           <div className='w-1/3'>
            <div className='w-full h-20 flex justify-center'>
              <img className="h-20 w-auto" src='growth.png' />
            </div>
              <br/>
              <div className="flex flex-col items-center">
                <p className='text-xl'><b>{Math.round(lifeExpectancy.float_value)} yrs</b></p>
                <p>Life expectancy</p>
                <p>at birth </p>
              </div> 
          </div>        
        }
        { medianAge !== null &&
           <div className='w-1/3'>
            <div className='w-full h-20 flex justify-center'>
              <img className="h-20 w-auto" src='rejuvenate.png' />
            </div>
              <br/>
              <div className="flex flex-col items-center">
                <p className='text-xl'><b>{Math.round(medianAge.float_value)} yrs</b></p>
                <p>Median age</p>
                <p>in country</p>
              </div> 
          </div>        
        } 
        { populationSize !== null &&
           <div className='w-1/3'>
            <div className='w-full h-20 flex justify-center'>
              <img className="h-20 w-auto" src='population.png' />
            </div>
              <br/>
              <div className="flex flex-col items-center">
                <p className='text-xl'><b>{populationSize.float_value}</b></p>
                <p>Urban area</p>
                <p>population</p>
                <p>(millions)</p>
              </div> 
          </div>        
        }                 
    </div>      
   </div>
  )
}