import * as React from 'react';

export default function HiglightCard({city,cityName}) {
  
  const num = [0,1,2,5,7,8,9,10,11,12,13];
  let categoriesObj = {}; 
  const printResult =[]; 

  for (const index of num){
    let label = city.categories[index].name
    let score = city.categories[index].score_out_of_10
    categoriesObj[label] = score; 
  }

  for (const key in categoriesObj){
    if (categoriesObj[key] >= 7){
      printResult.push(key)
    }
  } 

  return (
    <>
      <div className="rounded-xl shadow-lg bg-[#fffffe] h-full w-full flex flex-row p-4 mb-6">
        <div className='h-80 w-80'>
        <img className='h-full w-full' src='highlight.svg' alt=''/>
        </div>
        <div>
          <h1> {cityName} scores on high on the following: </h1>
          <br></br>
          <ul>
            {printResult.map(el => (
              <li>
                <br></br>
                {el}
                <br></br>
              </li>
              ))}
          </ul>
          </div>
      </div>
    </>
  );
}