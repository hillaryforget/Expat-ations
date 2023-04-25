export default function HeroSection() {
  return (
    <>
      <div
        className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg")`,
        }}
      >
        <div className="p-5 text-[#2d334a] max-w-5xl">
          <img
            className="mx-auto my-0"
            src="Expat-ations (2).png"
            alt="Expat-ations"
            style={{
              maxWidth: "100%",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.4)",
            }}
          />
          <p className="glass-shadow inline text-sm lg:text-xl text-center">
            Find your ideal city tailored to your preferences. Effortlessly
            compare 266+ cities worldwide, evaluating factors such as cost of
            living, quality of life, safety, healthcare, and more. If you&apos;re
            uncertain about your destination, let us guide you with personalized
            suggestions that align with your priorities. Know what to expect
            with Expat-ations.
          </p>
        </div>
      </div>
    </>
  );
}
