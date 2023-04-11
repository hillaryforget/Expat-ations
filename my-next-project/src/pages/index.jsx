import Head from "next/head";
import Heading from "../components/Heading";

export async function getStaticProps() {
  const res = await fetch('https://api.teleport.org/api/urban_areas/');
  const data = await res.json();

  return {
    props: {
      data
    },
  }
}

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Expat-ations</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/plane-solid.svg" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <Heading data={data}/>
      <button onClick={()=>{showState(country_one, country_two)}}>
          Submit
      </button>
    </>
  );
}

