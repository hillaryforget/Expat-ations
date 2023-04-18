import AutoComplete from "./SearchField";
import { useState } from 'react';
// import Link from 'next/link';
import { useRouter } from 'next/router'
import Link from "next/link";

function showState(propOne, propTwo) {
  console.log(propOne);
  console.log(propTwo);
}

export default function Heading({ cities }) {
  const [country_one, SetCountryOne] = useState('');
  const [country_two, SetCountryTwo] = useState('');

  const router = useRouter()
  const navigate = () => {
    if (!country_one || !country_two) return; 

    router.push({pathname: "/main", query: {city1: country_one, city2: country_two}})
  }

  return (

      <div className="flex flex-col align-center" >
         <div className="w-full md:w-96 mx-auto">
            <AutoComplete 
             stateChanger={SetCountryOne} 
             city_list={cities}
            />
          </div>
          <br></br>
          <div className="w-full md:w-96 mx-auto">
            <AutoComplete 
              stateChanger={SetCountryTwo} 
              city_list={cities}
            />
          </div>
          <br></br>
          <div className="flex align-center justify-center">
          <button
            onClick={navigate}
            className="mx-3 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
          >
            Submit
          </button>
          <Link
              className="mx-3 bg-gray-100 text-blue-500 p-2 rounded-lg shadow hover:bg-blue-600 active:bg-blue-800 focus:outline-none hover:text-gray-50 active:text-gray-50 focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
              href = "/city"
            > 
              Chat-GPT 
            </Link>
          </div>

        </div>

  );       
}

