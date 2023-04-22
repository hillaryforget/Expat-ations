import FindCategories from "./helpers/FindCategories";
import FindData from "./helpers/FindData";

export default function PopulationCard({ cityName, population }) {
  const age = FindCategories(population, "Internal application use");
  const populationInfo = FindCategories(population, "City Size");

  const elderlyPeople = FindData(age, "ELDERLY-PEOPLE");
  const lifeExpectancy = FindData(age, "LIFE-EXPECTANCY");
  const medianAge = FindData(age, "MEDIAN-AGE");
  const populationSize = FindData(populationInfo, "POPULATION-SIZE");

  return (
    <div className="rounded-xl shadow-lg bg-[#fffffe] h-80 w-full flex flex-col pt-6 p-4 mb-6">
      <div className=" w-full h-full flex justify-center text-2xl">
        <h1>{cityName} Population</h1>
      </div>
      <div className="flex justify-center pt-3 h-full">
        {elderlyPeople !== null && (
          <div className="w-1/3">
            <div className="w-full h-20 flex justify-center">
              <img className="h-20 w-auto" src="old.png" />
            </div>
            <br />
            <div className="flex flex-col items-center">
              <p className="text-xl">
                <b>{Math.round(elderlyPeople.percent_value * 1000)}%</b>
              </p>
              <p>Elderly people</p>
              <p>(65+ years)</p>
            </div>
          </div>
        )}
        {lifeExpectancy !== null && (
          <div className="w-1/3">
            <div className="w-full h-20 flex justify-center">
              <img className="h-20 w-auto" src="growth.png" />
            </div>
            <br />
            <div className="flex flex-col items-center">
              <p className="text-xl">
                <b>{Math.round(lifeExpectancy.float_value)} yrs</b>
              </p>
              <p>Life expectancy</p>
              <p>at birth </p>
            </div>
          </div>
        )}
        {medianAge !== null && (
          <div className="w-1/3">
            <div className="w-full h-20 flex justify-center">
              <img className="h-20 w-auto" src="rejuvenate.png" />
            </div>
            <br />
            <div className="flex flex-col items-center">
              <p className="text-xl">
                <b>{Math.round(medianAge.float_value)} yrs</b>
              </p>
              <p>Median age</p>
              <p>in country</p>
            </div>
          </div>
        )}
        {populationSize !== null && (
          <div className="w-1/3">
            <div className="w-full h-20 flex justify-center">
              <img className="h-20 w-auto" src="population.png" />
            </div>
            <br />
            <div className="flex flex-col items-center">
              <p className="text-xl">
                <b>{Math.round(populationSize.float_value)}</b>
              </p>
              <p>Urban area</p>
              <p>population</p>
              <p>(millions)</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
