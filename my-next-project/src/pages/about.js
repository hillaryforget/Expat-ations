import Head from "next/head";
import Script from "next/script";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import AppHead from "../components/AppHead";

const About = () => {
  return (
    <>
      <AppHead title="About - Expat-ations"/>
      <div
        className="min-h-screen bg-fixed bg-center bg-cover"
        style={{
          background: `linear-gradient(to bottom, #2d334a, #bae8e8, #e3f6f5)`,
        }}
      >
        <Navbar
          className={"bg-transparent shadow-none text-3xl"}
          results={false}
        />{" "}
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <div className="space-y-2 font-display text-2xl tracking-tight text-blue-900">
            <div className="bg-opacity-50 bg-#e3f6f5 p-4 rounded-md">
              <h1 className="glass-shadow text-4xl font-bold text-#2d334a mt-14">
                About Us
              </h1>
              <img
                class="mx-auto mt-4"
                src="Expat-ations (2).png"
                alt="Expat-ations"
                style={{
                  maxWidth: "40%",
                  borderRadius: "8px",
                  width: "800px",
                  height: "auto", // Maintain aspect ratio
                }}
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div class="mx-auto max-w-2xl lg:max-w-4xl lg:px-12 mt-8 lg:mt-12">
              <div class="mt-6 space-y-2 font-display text-2xl tracking-tight text-blue-900">
                <div
                  style={{
                    columnCount: 2,
                    columnGap: "1rem",
                    color: "#272343",
                  }}
                >
                  <p>
                    Discovering the perfect destination for your next adventure
                    or big move can be challenging, and that's where
                    Expat-ations comes in. We are passionate about helping you
                    find the city that matches your desires and priorities,
                    whether you're dreaming of basking in the sun by the beach,
                    cutting living expenses, or immersing yourself in a vibrant
                    startup scene.
                  </p>
                  <br></br>
                  <p style={{ color: "#272343" }}>
                    At Expat-ations, we understand that each individual's
                    journey is unique, and our mission is to make your
                    decision-making process as smooth and enjoyable as possible.
                    By selecting your current city and the one you're
                    considering relocating to, our cutting-edge platform will
                    provide you with comprehensive data and insights on various
                    aspects of urban life.
                  </p>
                  <br></br>
                  <p style={{ color: "#272343" }}>
                    Our user-friendly interface presents side-by-side
                    comparisons, allowing you to easily evaluate factors such as
                    housing, cost of living, transportation, safety, healthcare,
                    education, environmental quality and climate, and internet
                    access. With interactive graphs and visually appealing
                    layouts, we make the process not only informative but also
                    engaging and fun.
                  </p>
                  <br></br>
                  <p style={{ color: "#272343" }}>
                    At Expat-ations, we believe in the power of personalization
                    and are committed to ensuring that you feel supported every
                    step of the way. Our team consists of real people with
                    diverse experiences and backgrounds, and we're excited to
                    share our knowledge with you. Together, let's embark on this
                    thrilling journey and find the perfect city to pave the way
                    for a fulfilling, joyful, and prosperous future!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default About;
