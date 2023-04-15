import * as React from 'react';

export default function HiglightCard({city}) {
  
  const num = [0,1,2,5,7,8,9,10,11,12,13];
  let result = {}; 

  for (const index of num){
    let label = city.categories[index].name
    let score = city.categories[index].score_out_of_10
    result[label] = score; 
  }

  // console.log(`+++++ label: ${Object.keys(result)}:`)
  // console.log(`+++++ label: ${Object.values(result)}`)

  
  return (
    <div className="rounded-xl shadow-lg bg-gray-200 h-80 w-full flex flex-row p-4">
      <h1 className='text-lg'> 
        This city has high scores on:  
      </h1>
    </div>
  );
}