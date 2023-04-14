import * as React from 'react';

export default function Card(props) {
  const [name, image, summary] = [props.name, props.image, props.summary]
  console.log("+", image);
  // console.log("++", summary);
  
  return (
     <div className="rounded-xl shadow-lg bg-gradient-to-r from-gray-500 to-black min-h-full max-w-screen-lg relative">
       <img src='https://images.pexels.com/photos/2487443/pexels-photo-2487443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-full h-full object-cover absolute mix-blend-overlay'/>
       <div className="flex flex-col">
        {/* <div className="rounded-t-xl overflow-hidden">
           <img src={image} alt="" />
        </div> */}
        <div className="px-3">
          <h5 className="text-2xl md:text-3xl font-medium mt-3 text-white">{name}</h5>
          <div className="text-lg mt-3 text-white" dangerouslySetInnerHTML={{__html: summary}}></div>
        </div>
      </div>
    </div>
  );
}