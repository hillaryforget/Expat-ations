import * as React from 'react';

function findHousing(prop) {
  for (let x = 0; x < prop.length; x++) {
    if(prop[x].label === 'Housing') {
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

export default function RentCard(props) {
  const city_det = findHousing(props.city_data);

  const smallRent = findData(city_det, 'APARTMENT-RENT-SMALL');
  const mediumRent = findData(city_det, 'APARTMENT-RENT-MEDIUM');
  const largeRent = findData(city_det, 'APARTMENT-RENT-LARGE');
  
  return (
    <div className="rounded-xl shadow-lg bg-[#fffffe] h-96 w-full flex flex-col p-4 mb-6">
      <div className="flex text-4xl w-2/5 justify-center">
        <h1><b>Rent</b></h1>
      </div>
      <div className="flex">
        <div className="w-1/2 h-full flex flex-col justify-around mt-5 pl-3">
          {smallRent !== null &&
            <div>
              <p className="text-lg">
                A one bedroom, one bath goes for:
              </p>
              <div className=" flex justify-center text-2xl">
                <b>${Object.values(smallRent)[0].toFixed(2)}/month</b>
              </div>
            </div>
          }
          {mediumRent !== null &&
            <div>
              <p className="text-lg">
               A two bedroom, two bath goes for:
             </p>
              <div className=" flex justify-center text-2xl">
                <b>${Object.values(mediumRent)[0].toFixed(2)}/month</b>
              </div>
            </div>
          }
          {largeRent !== null &&
            <div>
              <p className="text-lg">
                A three bedroom, two bath goes for:
              </p>
              <div className=" flex justify-center text-2xl">
                <b>${Object.values(largeRent)[0].toFixed(2)}/month</b>
              </div>
            </div>
          }
        </div>
        <div className="w-1/2 h-full">
          <div className='h-full w-full'>
            <img className='h-full w-96' src='rent.svg' alt=''/>
          </div>
        </div>
      </div>
    </div>
  );
}