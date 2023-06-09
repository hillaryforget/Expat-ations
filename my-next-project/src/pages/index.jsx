import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CurrencyConverter from "../components/CurrencyConverter";
import AppHead from "../components/AppHead";

export async function getStaticProps() {
  const cities = [];
  const res = await fetch("https://api.teleport.org/api/urban_areas/");
  const data = await res.json();

  data._links["ua:item"].forEach((city) => cities.push(city.name));

  return {
    props: {
      city_list: cities,
    },
  };
}

export default function Home({ city_list }) {
  const navigate = () => {};

  return (
    <>
      <AppHead />
      <NavBar
        className={"bg-transparent shadow-none text-3xl"}
        results={false}
      />

      <HeroSection />

      <div
        className="flex min-h-screen bg-fixed bg-center bg-cover align-center justify-center"
        style={{
          background: `linear-gradient(to bottom, #2d334a, #bae8e8, #e3f6f5)`,
        }}
      >
        <div className="flex m-auto">
          <div className=" p-3">
            <h1 className="text-5xl font-bold mb-5 text-center text-[#2D334A]">
              Where will you go?
            </h1>
            <p className="pb-5 text-xl text-center text-[#2D334A]">
              Select the cities you want to compare to gain more insight on your
              next destination.
            </p>
            <p className="pb-5 text-xl text-center text-[#2D334A]">
              Not sure what city is for you? Explore to view suggested cities
              based on your needs.
            </p>
            <Heading cities={city_list} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
