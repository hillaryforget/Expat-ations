import Head from "next/head";
import NavBar from "../components/NavBar";

const About = () => {
  return (
    <>
      <Head>
        <title>About - Expat-ations</title>
        <meta name="description" content="About Expat-ations" />
        <link rel="icon" href="/plane-solid.svg" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <NavBar />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mt-8">About Expat-ations</h1>
      </div>
      <br></br>
      <div class="container mx-auto px-4">
        <p className="text-xl mt-4">Discovering the perfect destination for your next adventure or big move can be challenging, and that's where Expat-ations comes in. We are passionate about helping you find the city that matches your desires and priorities, whether you're dreaming of basking in the sun by the beach, cutting living expenses, or immersing yourself in a vibrant startup scene.</p>
        <br></br>
        <p className="text-xl mt-4">At Expat-ations, we understand that each individual's journey is unique, and our mission is to make your decision-making process as smooth and enjoyable as possible. By selecting your current city and the one you're considering relocating to, our cutting-edge platform will provide you with comprehensive data and insights on various aspects of urban life.</p>
        <br></br>
        <p className="text-xl mt-4">Our user-friendly interface presents side-by-side comparisons, allowing you to easily evaluate factors such as housing, cost of living, transportation, safety, healthcare, education, environmental quality and climate, and internet access. With interactive graphs and visually appealing layouts, we make the process not only informative but also engaging and fun.</p>
        <br></br>
        <p className="text-xl mt-4">At Expat-ations, we believe in the power of personalization and are committed to ensuring that you feel supported every step of the way. Our team consists of real people with diverse experiences and backgrounds, and we're excited to share our knowledge with you. Together, let's embark on this thrilling journey and find the perfect city to pave the way for a fulfilling, joyful, and prosperous future!</p>
      </div>
    </>
  );
};

export default About;
