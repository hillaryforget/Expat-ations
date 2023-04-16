import * as React from 'react';

export default function Card(props) {
  const [name, image, summary] = [props.name, props.image, props.summary]
  
  return (
    <div className="rounded-xl shadow-lg bg-[#fffffe] h-full w-full mt-16 mb-6">
       <div className="flex flex-col">
        <div className="rounded-t-xl overflow-hidden">
           <img src={image} alt="" />
        </div>
        <div className="p-6">
          <h5 className="text-2xl md:text-3xl font-medium">{name}</h5>
          <div className="text-lg mt-3 h-40" dangerouslySetInnerHTML={{__html: summary}}></div>
        </div>
      </div>
    </div>
  );
}