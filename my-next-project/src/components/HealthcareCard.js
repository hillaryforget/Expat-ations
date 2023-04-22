import FindCategories from "./helpers/FindCategories";
import FindData from "./helpers/FindData";

export default function HealthcareCard({ cityName, health }) {
  const healthData = FindCategories(health, 'Healthcare');

  const healthInfo = FindData(healthData, "HEALTHCARE-QUALITY-TELESCORE");
  const score = healthInfo.float_value;

  function getData(score) {
    if (score < 0.5) {
      return { img: "red_medicine.svg", background: "red", text: "Poor", text_style: "text-4xl text-center w-full text-white" }
    }
    if (score >= 0.5 && score < 0.8) {
      return { img: "yellow_medicine.svg", background: "yellow", text: "Moderate", text_style: "text-4xl text-center w-full text-black" }
    }
    if (score >= 0.8) {
      return { img: "green_medicine.svg", background: "green", text: "Excellent", text_style: "text-4xl text-center w-full text-white" }
    }
  }

  const data = getData(score);

  return (
    <div className="rounded-xl shadow-lg bg-[#fffffe] h-80 w-full flex flex-col pt-10 p-4 mb-6">
      <div className=" flex justify-center text-2xl">
        <h1>{cityName} Healthcare Quality Score</h1>
      </div>
      <div className=" w-full p-8 flex justify-between ">
        <img className="w-2/5" src={data.img} />
        <div className="flex flex-col items-center w-1/2">
          <br />
            <h1
              className={data.text_style}
              style={{ background: data.background }}
            >
              {data.text}
            </h1>
          <br />
          <p> *scored {Math.round(score * 100)} out of 100 </p>
        </div>
      </div>
    </div>
  );
}
