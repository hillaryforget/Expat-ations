export default function HeroSection(){
  return (
    <>
      <div className="flex items-center justify-center h-[52rem] bg-fixed bg-center bg-cover" style={{ backgroundImage: `url("https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg")` }}>
      {/* <div className=" h-[52rem] absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" /> */}
        <div className="p-5 text-[#2d334a] z-10 -mt-40 max-w-7xl">
          <h1 className="glass-shadow text-5xl font-bold mb-5 text-center">Expat-ations</h1>
          <p className="glass-shadow inline text-xl text-center">
          Discovering the perfect destination for your next adventure or big move can be challenging, and that's where Expat-ations comes in. We are passionate about helping you find the city that matches your desires and priorities, whether you're dreaming of basking in the sun by the beach, cutting living expenses, or immersing yourself in a vibrant startup scene.
          </p>
        </div>
      </div>
    </>
  )
}
