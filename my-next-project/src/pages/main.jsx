import NavBar from "../components/NavBar";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Head from "next/head";
import SearchField from "../components/SearchField";
import { useRouter } from 'next/router' 
import { useEffect, useState } from "react";
import Loading from "../components/loading";


export default function Main() {

  const [screen, setScreen] = useState('loading2')

  const router = useRouter()
  const query = router.query
  console.log("++++", query)

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
