import * as React from 'react';

export default function Card(props) {
  const [name, image, summary] = [props.name, props.image, props.summary]
  console.log("+", image);
  // console.log("++", summary);
  
  return (
    <div className="rounded-xl shadow-lg bg-[#e3f6f5] min-h-full max-w-screen-lg">
       <div className="flex flex-col">
        <div className="rounded-t-xl overflow-hidden">
           <img src={image} alt="" />
        </div>
        <div className="px-3">
          <h5 className="text-2xl md:text-3xl font-medium mt-3">{name}</h5>
          <div className="text-lg mt-3" dangerouslySetInnerHTML={{__html: summary}}></div>
        </div>
      </div>
    </div>
  );
}