export default function SafetyCard({cityName}){
  return(
    <div className="rounded-xl shadow-lg bg-[#fffffe] h-80 w-full flex flex-col pt-10 p-4 mb-6">
      <div className=" flex justify-center text-2xl">
        <h1>{cityName} Safety</h1>
      </div>
    </div>
  )
}