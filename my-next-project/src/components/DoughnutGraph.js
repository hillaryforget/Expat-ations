import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
);

function calculateScore(score) {
  const returnArray = [];
  let cityScore = 1;

  score.categories.forEach(element => {
    cityScore += element.score_out_of_10;
  });

  const finalScore = (cityScore / 170) * 100;

  return Math.round(finalScore * 10) / 10;
}

export default function DoughnutGraph({cityScores}){ 
  const data = {
    datasets: [{
      labels: [''],
      data: [calculateScore(cityScores), 100 - calculateScore(cityScores)],
      backgroundColor: ['green', 'black'],
      borderColor: ['green', 'black']
    }]
  }

  const options = {
  }

  const plugins = [{
    beforeDraw: function(chart) {
     let width = chart.width,
         height = chart.height,
         ctx = chart.ctx;
         ctx.restore();
         let fontSize = (height / 160).toFixed(2);
         ctx.font = fontSize + "em sans-serif";
         ctx.textBaseline = "top";
         let text = `${data.datasets[0].data[0]}%`,
         textX = Math.round((width - ctx.measureText(text).width) / 2),
         textY = height / 2;
         ctx.fillText(text, textX, textY);
         ctx.save();
    } 
  }]
  
  return (
    <Doughnut data={data} options={options} plugins = {plugins} />
  )
}