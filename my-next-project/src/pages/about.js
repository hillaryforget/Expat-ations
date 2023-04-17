import Head from "next/head";
import Script from "next/script";
import Navbar from '../components/NavBar';
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Head>
        <title>About - Expat-ations</title>
        <meta name="description" content="About Expat-ations" />
        <link rel="icon" href="/plane-solid.svg" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <div
        className="min-h-screen bg-fixed bg-center bg-cover"
        style={{
          backgroundColor: `#e3f6f5`,
        }}
      >
       <Navbar className={'bg-transparent shadow-none text-3xl'}/> {/* Add the Navbar component */}
        {/* Add the Navbar component */}
        <div style={{
          background: `linear-gradient(250deg, #272343, rgba(255,255,255,0) 70.71%),            
          linear-gradient(127deg, #ffd803, rgba(255,255,255,.05) 80.71%)
          `
        }}>
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
            <div className="space-y-2 font-display text-2xl tracking-tight text-blue-900">
              <h1
                class="py-28 lg:py-36 font-display text-5xl font-bold tracking-tighter sm:text-7xl"
                style={{ color: "#272343" }}
              >
                About Expat-ations
              </h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div class="mx-auto max-w-2xl lg:max-w-4xl lg:px-12 mt-8 lg:mt-12">
              <div class="mt-6 space-y-2 font-display text-2xl tracking-tight text-blue-900">
                <p style={{color:'#272343'}}>
                  Discovering the perfect destination for your next adventure or
                  big move can be challenging, and that's where Expat-ations
                  comes in. We are passionate about helping you find the city
                  that matches your desires and priorities, whether you're
                  dreaming of basking in the sun by the beach, cutting living
                  expenses, or immersing yourself in a vibrant startup scene.
                </p>
                <br></br>
                <p style={{color:'#272343'}}>
                  At Expat-ations, we understand that each individual's journey
                  is unique, and our mission is to make your decision-making
                  process as smooth and enjoyable as possible. By selecting your
                  current city and the one you're considering relocating to, our
                  cutting-edge platform will provide you with comprehensive data
                  and insights on various aspects of urban life.
                </p>
                <br></br>
                <p style={{color:'#272343'}}>
                  Our user-friendly interface presents side-by-side comparisons,
                  allowing you to easily evaluate factors such as housing, cost
                  of living, transportation, safety, healthcare, education,
                  environmental quality and climate, and internet access. With
                  interactive graphs and visually appealing layouts, we make the
                  process not only informative but also engaging and fun.
                </p>
                <br></br>
                <p style={{color:'#272343'}}>
                  At Expat-ations, we believe in the power of personalization
                  and are committed to ensuring that you feel supported every
                  step of the way. Our team consists of real people with diverse
                  experiences and backgrounds, and we're excited to share our
                  knowledge with you. Together, let's embark on this thrilling
                  journey and find the perfect city to pave the way for a
                  fulfilling, joyful, and prosperous future!
                </p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div class="container mx-auto px-4"></div>
        <div
          style={{
            marginTop: "32px",
          }}
        ></div>
        <Footer />
      </div>
    </>
  );
};

export default About;
