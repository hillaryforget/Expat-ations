import AutoComplete from "./SearchField";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

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
    <>
      <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
        <div className="p-5 text-white z-[2] mt-[-10rem]">
          <h2 className="text-5xl font-bold">Expat-ation</h2>
          <p className="py-5 text-xl">What's your destination?</p>
          <AutoComplete stateChanger={SetCountryOne} city_list={cities} />
          <AutoComplete stateChanger={SetCountryTwo} city_list={cities}/>
          <br></br>
          <button
            onClick={navigate}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
>           Submit
            </button>
        </div>
      </div>
    </>
  );
}
