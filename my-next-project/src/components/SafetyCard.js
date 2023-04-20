


export default function SafetyCard({cityName}){
  return(
    <div className="rounded-xl shadow-lg bg-[#fffffe] h-80 w-full flex flex-col pt-10 p-4 mb-6">
      <div className=" flex justify-center text-2xl">
        <h1>{cityName} Safety Score </h1>
      </div>
      <div className=" w-full p-8 flex justify-evenly">
        <img className="w-2/5" src='custody.png' />
        <br/>
        <div className="w-1/3">
          <br/>
        <h1 
          className="text-4xl text-center w-full text-white"
          style={{ background: `green`}}
        > 
         Great
        </h1>  
        <br/>
        <p> Hello! </p>        
        </div>
      </div>
      
    </div>
  )
}