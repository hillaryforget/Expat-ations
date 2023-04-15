import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarGraph({city1, city2, city1Name, city2Name}){

const labels = []
const city_one_data = []
const city_two_data = []
const num = [0,1,2,5,7,8,9,10,11,12,13]

num.forEach(item => {
  labels.push(city1.categories[item].name);
  city_one_data.push(city1.categories[item].score_out_of_10);
  city_two_data.push(city2.categories[item].score_out_of_10);
})

const options = {
  responsive: true,
  aspectRatio: 1,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "City Scores Comparison",
    },
    labels: {
        color: 'black'
      },
  },
};

const data = {
  labels: labels,
  datasets: [
    {
      label: city1Name,
      data: city_one_data,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: city2Name,
      data: city_two_data,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

  return (
    <>
    <Bar data={data} options={options} />
    </>
  )

}