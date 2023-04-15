import * as React from 'react';

const loop = (printResult) => {
  const returnArray = []
  printResult.forEach(el => 
    returnArray.push(el))
  return ` \n ${returnArray} \n`
}

export default function HiglightCard({city}) {
  
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

  const highlight = loop(printResult); 


  return (
    <div className="rounded-xl shadow-lg bg-gray-200 h-80 w-full flex flex-row p-4">
      <div>
      <h1 className='text-lg'> 
        This city has high scores on:  
      </h1>
      </div>
        <div>
        {highlight}
        </div>
    </div>
  );
}