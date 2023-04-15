import Head from "next/head";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar"; 

export async function getStaticProps() {
  const cities = [];
  const res = await fetch('https://api.teleport.org/api/urban_areas/');
  const data = await res.json();

  data._links['ua:item'].forEach(city => cities.push(city.name));

  return {
    props: {
      city_list: cities
    },
  }
}

export default function Home({ city_list }) {

  return (
    <>
      <Head>
        <title>Expat-ations</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/plane-solid.svg" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <NavBar />
      <Heading cities={city_list}/>
      <Footer />
    </>
  );
}

