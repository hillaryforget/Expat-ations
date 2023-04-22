import * as React from "react";
import PieGraph from "./PieGraph";

export default function MediaCard(props) {
  const [name, background_colors] = [props.name, props.background_colors];
  const data_labels = [];
  const data_values = [];

  props.data.map((data) => {
    data_values.push(Object.values(data)[0]);
    data_labels.push(data.label);
  });

  return (
    <div className="rounded-xl shadow-lg bg-gray-100 min-h-full">
      <div className="flex flex-col m-5 p-3">
        <div className="flex justify-center">
          <h5 className="text-2xl md:text-3xl font-medium mt-3">{name}</h5>
        </div>
        <div className="px-3">
          <PieGraph
            labels={data_labels}
            data={data_values}
            background_colors={background_colors}
          />
        </div>
      </div>
    </div>
  );
}
