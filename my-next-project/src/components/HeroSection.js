export default function HeroSection(){
  return (
    <>
      <div className="flex items-center justify-center h-[52rem] bg-fixed bg-center bg-cover" style={{ backgroundImage: `url("https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg")` }}>
      {/* <div className=" h-[52rem] absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" /> */}
        <div className="p-5 text-[#2d334a] z-10 -mt-40 max-w-7xl">
          <h1 className="glass-shadow text-5xl font-bold mb-5 text-center">Expat-ations</h1>
          <p className="glass-shadow inline text-xl text-center">
          Find your ideal city tailored to your preferences. Effortlessly compare 266+ cities worldwide, evaluating factors such as cost of living, quality of life, safety, healthcare, and more. If you're uncertain about your destination, let us guide you with personalized suggestions that align with your priorities. Know what to expect with Expat-ations.
          </p>
        </div>
      </div>
    </>
  )
}
