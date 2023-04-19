export default function TransportationCard({cityName}){
  return (
    <div className="rounded-xl shadow-lg bg-[#fffffe] h-96 w-full flex flex-col p-4 mb-6">
      <div className="flex text-4xl w-2/5 justify-center">
        <h1><b>{cityName} Transportation</b></h1>
      </div>
    </div>
  );
}