import * as React from 'react';

export default function Card(props) {
  const [name, image, summary] = [props.name, props.image, props.summary]
  console.log("+", image);
  // console.log("++", summary);
  
  return (
     <div className="rounded-xl shadow-lg bg-gray-100 min-h-full max-w-screen-lg">
       <div className="flex flex-col">
        <div className="rounded-t-xl overflow-hidden">
           <img src={image} alt="" />
        </div>
        <div className="px-3">
          <h5 className="text-2xl md:text-3xl font-medium mt-3">{name}</h5>
          <p className="text-lg mt-3" dangerouslySetInnerHTML={{__html: summary}}></p>
        </div>
      </div>
    </div>
  );
}