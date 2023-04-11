import AutoComplete from "./SearchField";
import { useState } from "react";

export default function Heading() {
  const [country, SetCountry] = useState(''); 

  const countryUpdate = (selectedCountry) => {
    SetCountry(selectedCountry);
  }


  return (
    <>
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-5xl font-bold">Expat-ation</h2>
        <p className="py-5 text-xl">What's your destination?</p>
        <AutoComplete onDataUpdate={countryUpdate}/>
      </div>
    </div>
        <div>
        <button onClick={()=>{console.log("submit is working")}}>
          Submit
        </button>
      </div>
    </>
  );
}
