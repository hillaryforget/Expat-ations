import Head from "next/head";
import { useState } from "react";
import styles from "src/styles/index.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Modal from "../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Heading2 from "../components/Heading2";

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

function SimpleContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ height: "100vh" }}>{props.children} </Box>
      </Container>
    </React.Fragment>
  );
}

export default function Home({ city_list }) {
  const [age, setAge] = useState(30);
  const [budgetMin, setBudgetMin] = useState(100);
  const [budgetMax, setBudgetMax] = useState(10000);
  const [activity, setActivity] = useState("");
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState();

  const [openModal, setOpenModal] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/generate-city", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ budgetMin, budgetMax, age, activity }),
      });
      const data = await response.json();

      setResult(data.result.replaceAll("\n", "<br />"));
    } catch (e) {
      alert("Failed to suggest cities. Try later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{
        background: `linear-gradient(to bottom, #2d334a, #bae8e8, #e3f6f5)`,
      }}
    >
      <Head>
        <title>Expat-ations</title>
        <meta name="description" content="Cities" />
        <link rel="icon" href="/location.svg" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          src="https://kit.fontawesome.com/c3b30720d4.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <NavBar
        className={"bg-transparent shadow-none text-3xl"}
        results={false}
      />
      <div className="flex flex-row">
        <SimpleContainer>
          <main className={styles.main}>
            <h3>Find a city</h3>
            <form onSubmit={onSubmit}>
              <label>Age</label>
              <input
                type="number"
                min={1}
                max={99}
                name="age"
                placeholder="Enter the age"
                value={age}
                onChange={(e) => setAge(Number.parseInt(e.target.value))}
              />

              <label>Budget from</label>
              <input
                type="number"
                min={1}
                name="budgetMin"
                placeholder="Enter the minimum budget"
                value={budgetMin}
                onChange={(e) => setBudgetMin(Number.parseInt(e.target.value))}
              />

              <label>Budget to</label>
              <input
                type="number"
                min={1}
                name="budgetMax"
                placeholder="Enter the maximum budget"
                value={budgetMax}
                onChange={(e) => setBudgetMax(Number.parseInt(e.target.value))}
              />

              <label>Activity</label>
              <input
                type="text"
                name="activity"
                placeholder="Enter the activity"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
              />
              <input
                type="submit"
                value="Suggest"
                onClick={() => setOpenModal(true)}
              />
            </form>
          </main>
        </SimpleContainer>
        <SimpleContainer>
          <main className={styles.main}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <FontAwesomeIcon icon={faArrowRight} beat size="2xl" />
          </main>
        </SimpleContainer>
        <SimpleContainer>
          <main className={styles.main}>
            <h3>Compare Cities</h3>
            <Heading2 cities={city_list} />
          </main>
        </SimpleContainer>
      </div>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        loading={loading}
        result={result}
      />
    </div>
  );
}
