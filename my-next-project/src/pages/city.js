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
import Footer from "../components/Footer";
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

  const [errorMessages, setErrorMessages] = useState({});

  async function onSubmit(event) {
    event.preventDefault();

    const errors = {};

    if (!age) {
      errors.age = "*required";
    }
    if (!budgetMin) {
      errors.budgetMin = "*required";
    }
    if (!budgetMax) {
      errors.budgetMax = "*required";
    }
    if (!activity) {
      errors.activity = "*required";
    }

    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
      return;
    }

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
    <>
    <AppHead title="Expat-ations" />
      <div
        className="min-h-screen bg-fixed bg-center bg-cover"
        style={{
          background: `linear-gradient(to bottom, #2d334a, #bae8e8, #e3f6f5)`,
        }}
      >
        <NavBar
          className={"bg-transparent shadow-none text-3xl"}
          results={true}
        />{" "}
        <div className="flex flex-row">
          <SimpleContainer>
            <main className={styles.main}>
              <div className="bg-opacity-50 bg-#e3f6f5 p-4 rounded-md">
                <h1 className="glass-shadow text-4xl font-bold text-#2d334a mt-6">
                  Find a City
                </h1>
              </div>
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
                {errorMessages.age && <p>{errorMessages.age}</p>}

                <label>Budget from</label>
                <input
                  type="number"
                  min={1}
                  name="budgetMin"
                  placeholder="Enter the minimum budget"
                  value={budgetMin}
                  onChange={(e) =>
                    setBudgetMin(Number.parseInt(e.target.value))
                  }
                />
                {errorMessages.budgetMin && <p>{errorMessages.budgetMin}</p>}

                <label>Budget to</label>
                <input
                  type="number"
                  min={1}
                  name="budgetMax"
                  placeholder="Enter the maximum budget"
                  value={budgetMax}
                  onChange={(e) =>
                    setBudgetMax(Number.parseInt(e.target.value))
                  }
                />
                {errorMessages.budgetMax && <p>{errorMessages.budgetMax}</p>}

                <label>Activity</label>
                <input
                  type="text"
                  name="activity"
                  placeholder="Enter the activity"
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                />
                {errorMessages.activity && <p>{errorMessages.activity}</p>}
                <button
                  onClick={() => setOpenModal(true)}
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 mt-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Suggest
                </button>
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
              <div className="bg-opacity-50 bg-#e3f6f5 p-4 rounded-md">
                <h1 className="glass-shadow text-4xl font-bold text-#2d334a mt-6">
                  Compare Cities
                </h1>
              </div>
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
      <Footer />
    </>
  );
}
