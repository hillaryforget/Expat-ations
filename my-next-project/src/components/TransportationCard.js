export default function TransportationCard({cityName}){
  return (
    <div className="rounded-xl shadow-lg bg-[#fffffe] h-96 w-full flex flex-col p-4 mb-6">
      <div className=" flex justify-center text-4xl">
        <h1>{cityName} Transportation</h1>
      </div>
    </div>
  );
}