import FindCategories from "./helpers/FindCategories";
import FindData from "./helpers/FindData";

export default function SafetyCard({ cityName, safety }) {
  const safetyData = FindCategories(safety, "Safety");

  const healthInfo = FindData(safetyData, "CRIME-RATE-TELESCORE");
  const score = healthInfo?.float_value || 0;

  function getData(score) {
    if (score < 0.5) {
      return { img: "criminal.png", background: "red", text: "Poor", text_style: "text-4xl text-center w-full text-white" }
    }
    if (score >= 0.5 && score < 0.8) {
      return { img: "policeman.png", background: "yellow", text: "Moderate", text_style: "text-4xl text-center w-full text-black" }
    }
    if (score >= 0.8) {
      return { img: "custody.png", background: "green", text: "Excellent", text_style: "text-4xl text-center w-full text-white" }
    }
  }

  const data = getData(score);

  return (
    <div className="rounded-xl shadow-lg bg-[#fffffe] h-80 w-full flex flex-col pt-6 p-4 mb-6">
      <div className=" flex justify-center text-2xl">
        <h1>{cityName} Safety Score </h1>
      </div>
       
        <div className=" w-full p-8 flex justify-evenly">
          <img className="w-2/5" src={data.img} />
          <br />
          <div className="w-1/2">
            <br />
            <h1
              className={data.text_style}
              style={{ background: data.background }}
            >
              {data.text}
            </h1>
            <br />
            <p className="text-sm text-center">
              {" "}
              *scored {Math.round(score * 100)} out of 100
            </p>
          </div>
        </div>
    </div>
  );
}
