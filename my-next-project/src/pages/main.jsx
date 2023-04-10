import NavBar from "../components/NavBar";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Head from "next/head";
import SearchField from "../components/SearchField";
export default function Main() {
  return (
    <>
      <Head>
        <title>Expat-ations</title>
        <link rel="icon" href="/plane-solid.svg" />

        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <NavBar />
      <div className="flex justify-center">
        <SearchField />
      </div>
      <div className="flex flex-row gap-4 justify-center">
        <div>
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
    </>
  );
}
