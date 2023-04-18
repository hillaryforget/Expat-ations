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
      <div className="flex items-center justify-center min-h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: `url("https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg")` }}>
      </div>
      <div className="bg-gradient-to-b from-transparent to-white">
        <div className="flex-grow flex flex-col justify-end"> {/* Add this div */}
          <div className="flex flex-col items-center pb-10">
            <h1 className="text-5xl font-bold mb-5 text-center">Expat-ation</h1>
            <p className="py-5 text-xl text-center">
              Choose the cities you want to compare to gain more insight on your next destination.
            </p>
            <div className="flex flex-col items-center mt-5">
              <div className="w-full md:w-96 mx-auto">
                <AutoComplete stateChanger={SetCountryOne} city_list={cities}/>
              </div>
              <br></br>
              <div className="w-full md:w-96 mx-auto">
                <AutoComplete stateChanger={SetCountryTwo} city_list={cities}/>
              </div>
              <br></br>
              <button
                onClick={navigate}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
              >
              Submit
              </button>
            </div>
          </div>
        </div> {/* End of added div */}
      </div>
    </>
  );       
}



////////////////////

// import AutoComplete from "./SearchField";
// import { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router'

// function showState(propOne, propTwo) {
//   console.log(propOne);
//   console.log(propTwo);
// }

// export default function Heading({ cities }) {
//   const [country_one, SetCountryOne] = useState('');
//   const [country_two, SetCountryTwo] = useState('');

//   const router = useRouter()
//   const navigate = () => {
//     if (!country_one || !country_two) return; 
     
//     router.push({pathname: "/main", query: {city1: country_one, city2: country_two}})
//   }


//   return (
//     <>
//       <div className="flex items-center justify-center min-h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: `url("https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg")` }}>
//         <div className="p-5 text-white z-10 -mt-40">
//           <h1 className="text-5xl font-bold mb-5 text-center">Expat-ation</h1>
//           <p className="py-5 text-xl text-center">
//             Choose the cities you want to compare to gain more insight on your next destination.
//           </p>
//           <div className="flex flex-col items-center mt-5">
//             <div className="w-full md:w-96 mx-auto">
//               <AutoComplete stateChanger={SetCountryOne} city_list={cities}/>
//             </div>
//             <br></br>
//             <div className="w-full md:w-96 mx-auto">
//               <AutoComplete stateChanger={SetCountryTwo} city_list={cities}/>
//             </div>
//             <br></br>
//             <button
//               onClick={navigate}
//               className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
//             >
//             Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );       
//   }
