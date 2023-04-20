function findHealthInfo(prop) {
  for (let x = 0; x < prop.length; x++) {
    if(prop[x].label === 'Healthcare') {
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

export default function HealthcareCard({cityName, health}){
  const healthData = findHealthInfo(health);

  const healthInfo = findData(healthData, 'HEALTHCARE-QUALITY-TELESCORE');
  const score = healthInfo.float_value


  return(
    <div className="rounded-xl shadow-lg bg-[#fffffe] h-80 w-full flex flex-col pt-10 p-4 mb-6">
      <div className=" flex justify-center text-2xl">
        <h1>{cityName} Healthcare  Quality Score</h1>
      </div>
      <div className=" w-full p-8 flex justify-between ">
        <img className="w-2/5" src='medicine.svg' />
        <div className="flex flex-col items-center w-1/2">
          <br/>
          {score <= 0.5 &&
            
            <h1 
              className="text-4xl text-center w-full text-white"
              style={{ background: `red`}}
            > 
              Bad
            </h1>
          } 
          {score < 0.8 && score > 0.6 &&
            <h1 
            className="text-4xl text-center w-full text-white"
            style={{ background: `yellow`}}
            > 
            Moderate
            </h1>          
          } 
          {score >= 0.8 &&
            <h1 
            className="text-4xl text-center w-full text-white"
            style={{ background: `green`}}
            > 
            Excellent
            </h1>          
          }                 
        </div>
      </div>
      <div className="flex justify-center"> 
        <p> *scored {Math.round(score * 100)} out of 100 </p>
      </div>

    </div>
  )
}