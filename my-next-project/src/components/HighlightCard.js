import * as React from 'react';
import DoughnutGraph from './DoughnutGraph';

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
    <div className="rounded-xl shadow-lg bg-[#fffffe] h-80 w-full flex flex-col pt-10 p-4 mb-6">
      <div className=" flex justify-center text-4xl">
        <h1>{cityName} scores high:</h1>
      </div>
      <div className="flex justify-center">
        <div className="w-1/2 h-full flex flex-col justify-around mt-5 pl-3">
          {printResult.map(el => (
            <ul
            className="text-center text-2xl" 
            style={{ background: `#ffd803`}}
            
            >
                  {el}
            </ul>
          ))}          
        </div>

      </div>
    </div>
  );


  // return (
  //   <>
  //     <div className="rounded-xl shadow-lg bg-[#fffffe] h-96 w-full flex flex-row p-4 mb-6">
  //       <div className='h-80 w-80'>
  //         <img className='h-full w-full' src='highlight.svg' alt=''/>
  //       </div>
  //       <div className="flex h-full">
  //         {/* <div className="flex w-1/2 items-center pb-5">
  //           <DoughnutGraph className="h-full w-full" cityScores={city}/>
  //         </div> */}
  //         <div className="w-1/2">
  //           <br/>
  //           <h1> {cityName} scores high on the following: </h1>
  //           <br/>
  //           <ul>
  //             {printResult.map(el => (
  //               <li>
  //                 <br/>
  //                 {el}
  //               </li>
  //               ))}
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
}