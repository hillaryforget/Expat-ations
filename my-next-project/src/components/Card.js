import * as React from 'react';

export default function MediaCard(props) {
  const [name, image, summary] = [props.name, props.image, props.summary]
  console.log("+", image);
  console.log("++", summary);
  
  return (
    <div className="rounded-xl shadow-lg bg-gray-100">
      <div className="flex flex-col">
        <div className="rounded-t-xl overflow-hidden">
          <img src={image} alt="" />
        </div>
        <div className="px-3">
          <h5 className="text-2xl md:text-3xl font-medium mt-3">{name}</h5>
          <p className="text-lg mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dui risus, molestie vitae ullamcorper ac, fermentum id sem. Integer iaculis dapibus ex a fringilla. Sed posuere eleifend mauris, nec tempor ex ornare in. Integer pellentesque ullamcorper felis, maximus pharetra nulla blandit sit amet. Quisque tempor nec velit sed pulvinar. Phasellus volutpat purus vitae leo ullamcorper, et volutpat quam malesuada. Cras suscipit nunc ut odio lobortis semper.</p>
        </div>
      </div>
    </div>
  );
}