import * as React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieGraph(props) {
  const pie_data = {
    labels: props.labels,
    datasets: [
      {
        data: props.data,
        backgroundColor: props.background_colors
      }
    ]
  }

  const pie_options = {
    plugins: {
      legend: {
        labels: {
          color: 'black'
        }
      }
    }
  }

  return (
     <Pie data={pie_data} options = {pie_options}></Pie>
  );
}