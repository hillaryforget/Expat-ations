import Head from 'next/head'
import Script from 'next/script'

export default function AppHead(props) {

  const {
    title
  } = props;
  
  return (
    <>
      <Head>
          {<title>{title || "Expat-ations"}</title>}
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/plane-solid.svg" />
          {props.children}
      </Head>
      <Script src="https://cdn.tailwindcss.com"></Script>
      <Script
        src="https://kit.fontawesome.com/c3b30720d4.js"
        crossOrigin="anonymous"
      ></Script>
    </>
  )
}
