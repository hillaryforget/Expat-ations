import NavBar from '../components/NavBar';
import Footer from "../components/Footer"; 
import Card from "../components/Card";
import Head from "next/head";
import { useRouter } from 'next/router' 
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import BarGraph from "../components/BarGraph";
import ColCard from "../components/Col_Card";
import HighlightCard from "../components/HighlightCard";
import RentCard from '../components/RentCard';
import WeatherCard from '../components/WeatherCard';
import TransportationCard from '../components/TransportationCard';
import HealthcareCard from '../components/HealthcareCard';
import PopulationCard from '../components/PopulationCard';
import SafetyCard from '../components/SafetyCard';

export async function getServerSideProps(context) {
  let query_one = context.query.city1.replace(/[,.]/g, '').toLowerCase();
  let query_two = context.query.city2.replace(/[,.]/g, '').toLowerCase();
  query_one = query_one.replace(/\s+/, '-')
  query_two = query_two.replace(/\s+/, '-')

  const cityOneName = context.query.city1
  const cityTwoName = context.query.city2

  //#region BASE LEVEL OF INFORMATION (name, continent,mayor, etc) //
  const res_city_one = await fetch(`https://api.teleport.org/api/urban_areas/slug:${query_one}/`);
  const data_city_one = await res_city_one.json();

  const res_city_two = await fetch(`https://api.teleport.org/api/urban_areas/slug:${query_two}/`);
  const data_city_two = await res_city_two.json();
  //#endregion

  //#region IMAGE INFORMATION (web-link, mobile-link, attributions, etc) //
  const res_city_one_img = await fetch(`https://api.teleport.org/api/urban_areas/slug:${query_one}/images`);
  const data_city_one_img = await res_city_one_img.json();

  const res_city_two_img = await fetch(`https://api.teleport.org/api/urban_areas/slug:${query_two}/images`);
  const data_city_two_img = await res_city_two_img.json();
  //#endregion

  //#region SCORE INFORMATION (Housing score, COL score, summary, etc) //
  const res_city_one_score = await fetch(`https://api.teleport.org/api/urban_areas/slug:${query_one}/scores/`);
  const data_city_one_score = await res_city_one_score.json();

  const res_city_two_score = await fetch(`https://api.teleport.org/api/urban_areas/slug:${query_two}/scores`);
  const data_city_two_score = await res_city_two_score.json();
  //#endregion

  //#region DETAILS INFORMATION (Weather, crime rate, cost of products, etc) //
  const res_city_one_det = await fetch(`https://api.teleport.org/api/urban_areas/slug:${query_one}/details`);
  const data_city_one_det = await res_city_one_det.json();

  const res_city_two_det = await fetch(`https://api.teleport.org/api/urban_areas/slug:${query_two}/details`);
  const data_city_two_det = await res_city_two_det.json();
  //#endregion
  
  return {
    props: {
      city_one: data_city_one,
      city_two: data_city_two,
      city_one_img: data_city_one_img,
      city_two_img: data_city_two_img,
      city_one_score: data_city_one_score,
      city_two_score: data_city_two_score,
      city_one_det: data_city_one_det,
      city_two_det: data_city_two_det,
      city_one_name: cityOneName,
      city_two_name: cityTwoName
    }, // will be passed to the page component as props
  }
}

export default function Main(props) {

  const [screen, setScreen] = useState('loading2')

  const router = useRouter()
  const query = router.query

  console.log(props.city_one_name);

  //#region Console Logs
  // console.log("City One", props.city_one);
  // console.log("City Two", props.city_two);
  // console.log("City One Image", props.city_one_img);
  // console.log("City Two Image", props.city_two_img);
  // console.log("City One Score", props.city_one_score);
  // console.log("City Two Score", props.city_two_score);
  // console.log("City One Details", props.city_one_det);
  // const data_obj = props.city_one_det.categories[8].data;
  // console.log("Data obj", data_obj);
  // console.log("Data obj values", Object.values(data_obj)[0]);
  // console.log("City Two Details", props.city_two_det);
  //#endregion

  useEffect(()=>{

  },[])

  return (
    <>
      <Head>
        <title>Expat-ations</title>
        <link rel="icon" href="/plane-solid.svg" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <NavBar className={'bg-transparent shadow-none text-3xl'} /> {/*Add the Navbar component*/}
      {screen === "loading" && <Loading />}
  
      {screen !== "loading" && (
        <div
        className="min-h-screen bg-fixed bg-center bg-cover"
        style={{
          background: `linear-gradient(to bottom, #2d334a, #bae8e8, #e3f6f5)`,
        }}
      >
          <div className="w-full">
            <div className="pt-6">
              <div className="flex flex-row gap-4 justify-center px-4 max-w-7xl mx-auto">
                <Card
                  name={props.city_one.full_name}
                  image={props.city_one_img.photos[0].image.web}
                  summary={props.city_one_score.summary}
                />
                <Card
                  name={props.city_two.full_name}
                  image={props.city_two_img.photos[0].image.web}
                  summary={props.city_two_score.summary}
                />
              </div>
  
              <div className="flex flex-row gap-4 justify-center px-4 max-w-7xl mx-auto">
                <HighlightCard
                  city={props.city_one_score}
                  cityName={props.city_one_name}
                />
                <HighlightCard
                  city={props.city_two_score}
                  cityName={props.city_two_name}
                />
              </div>

              <div className="flex flex-row gap-4 justify-center px-4 max-w-7xl mx-auto">
                <WeatherCard 
                  cityName={props.city_one_name}
                  climate={props.city_one_det.categories}
                /> 
                <WeatherCard 
                  cityName={props.city_two_name}
                  climate={props.city_two_det.categories}
                />                 
              </div>

              <div className="flex flex-row gap-4 justify-center px-4 max-w-7xl mx-auto">
                <TransportationCard 
                  cityName={props.city_one_name}
                  transportation={props.city_one_det.categories}
                /> 
                <TransportationCard 
                  cityName={props.city_two_name}
                  transportation={props.city_two_det.categories}
                />                 
              </div>

              <div className="flex flex-row gap-4 justify-center px-4 max-w-7xl mx-auto">
                <PopulationCard
                  cityName={props.city_one_name}
                  population ={props.city_one_det.categories}
                /> 
                <PopulationCard
                  cityName={props.city_two_name}
                  population={props.city_two_det.categories}
                />                 
              </div>

              <div className="flex flex-row gap-4 justify-center px-4 max-w-7xl mx-auto">
                <HealthcareCard
                  cityName={props.city_one_name}
                  // climate={props.city_one_det}
                /> 
                <HealthcareCard
                  cityName={props.city_two_name}
                  // climate={props.city_two_det}
                />                 
              </div>


              <div className="flex flex-row gap-4 justify-center px-4 max-w-7xl mx-auto">
                <SafetyCard
                  cityName={props.city_one_name}
                  // climate={props.city_one_det}
                /> 
                <SafetyCard
                  cityName={props.city_two_name}
                  // climate={props.city_two_det}
                />                 
              </div>


  
              <div className="flex flex-row gap-4 justify-center px-4 max-w-7xl mx-auto">
                <RentCard city_data={props.city_one_det.categories} />
                <RentCard city_data={props.city_two_det.categories} />
              </div>
  
              <div className="flex flex-row gap-4 justify-center px-4 max-w-7xl mx-auto">
                <ColCard city_data={props.city_one_det.categories} />
                <ColCard city_data={props.city_two_det.categories} />
              </div>
            </div>
  
            <div className="mx-4">
              <div className="flex flex-row gap-4 justify-around h-96 bg-[#fffffe] rounded-xl max-w-7xl mx-auto">
                <BarGraph
                  city1={props.city_one_score}
                  city2={props.city_two_score}
                  city1Name={props.city_one_name}
                  city2Name={props.city_two_name}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}   
