import Head from "next/head";
import { useState } from "react";
import styles from "src/styles/index.module.css";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import CircularStatic from "../components/Circleloading";

function CircularIndeterminate() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}

function SimpleContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ height: "100vh" }}>
          {props.children}{" "}
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default function Home() {
  const [gender, setGender] = useState("man");
  const [age, setAge] = useState(30);
  const [budgetMin, setBudgetMin] = useState(100);
  const [budgetMax, setBudgetMax] = useState(10000);
  const [activity, setActivity] = useState("");
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState();

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
        body: JSON.stringify({ budgetMin, budgetMax, gender, age, activity }),
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
      </Head>
      <NavBar className={"bg-transparent shadow-none text-3xl"} />
      <SimpleContainer>
        <main className={styles.main}>
          <h3>Find a city</h3>
          <form onSubmit={onSubmit}>
            <label>Gender?</label>
            <select
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="man">Man</option>
              <option value="woman">Woman</option>
            </select>

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
            <input type="submit" value="Suggest" />
          </form>
          {loading && (
            <div>
              <h3>Looking for your cities 💡 </h3>
              <CircularStatic />
            </div>
          )}
          {result && (
            <div
              className={styles.result}
              dangerouslySetInnerHTML={{ __html: result }}
            />
          )}
        </main>
      </SimpleContainer>
    </div>
  );
}
