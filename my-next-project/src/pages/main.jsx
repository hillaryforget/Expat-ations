import NavBar from "../components/NavBar";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Head from "next/head";
import SearchField from "../components/SearchField";
import { useRouter } from 'next/router' 
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

export async function getServerSideProps(context) {
  const query_one = context.query.city1.toLowerCase();
  const query_two = context.query.city2.toLowerCase();

  const res_city_one = await fetch(`https://api.teleport.org/api/urban_areas/slug:${query_one}/details`);
  const data_city_one = await res_city_one.json();

  const res_city_two = await fetch(`https://api.teleport.org/api/urban_areas/slug:${query_two}/details`);
  const data_city_two = await res_city_two.json();
  
  return {
    props: {
      // query: context.query,
      data_city_one: data_city_one,
      data_city_two: data_city_two
    }, // will be passed to the page component as props
  }
}

export default function Main(props) {

  const [screen, setScreen] = useState('loading2')

  const router = useRouter()
  const query = router.query
  // console.log("++++", query)
  // console.log("++", props.query)
  console.log("++++", props.data_city_one);
  console.log("++++", props.data_city_two);

  useEffect(()=>{

  },[])



  return (
    <>
      <Head>
        <title>Expat-ations</title>
        <link rel="icon" href="/plane-solid.svg" />

        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <NavBar />
      { screen === "loading"  && <Loading /> }  

      { screen !== "loading"  && <div> not testing  

      <div className="flex justify-center">
        <SearchField />
      </div>
      <div className="flex flex-row gap-4 justify-center">
        <div> xxx 
          <br />
          <br />
          <br />
          <Card1 />
        </div>
        <div>
          <br />
          <br />
          <br />
          <Card2 />
        </div>
      </div>
      </div> } 
    </>
  );
}
