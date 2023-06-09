import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Contributor from "./Contributor";
import Script from "next/script";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthOceania } from "@fortawesome/free-solid-svg-icons";

export default function StickyFooter() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: "#e3f6f5",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" className="text-center">
          &copy; 2023 Lighthouse Labs Final.
          <br />
          <br /> Created by
          <br />
          <Contributor name="Clayton" githubProfileUrl="https://github.com" />
          <FontAwesomeIcon
            icon={faEarthOceania}
            style={{
              backgroundColor: "darkgreen",
              borderRadius: "100%",
              color: "skyblue",
              maxWidth: "1rem",
              display: "inline",
              
              margin: "0 1rem",
            }}
          />
          <Contributor name="Joon" githubProfileUrl="https://github.com" />
          <FontAwesomeIcon
            icon={faEarthOceania}
            style={{
              backgroundColor: "darkgreen",
              borderRadius: "100%",
              color: "skyblue",
              maxWidth: "1rem",
              display: "inline",
              
              margin: "0 1rem",
            }}
          />
          <Contributor name="Hillary" githubProfileUrl="https://github.com" />
          <FontAwesomeIcon
            icon={faEarthOceania}
            style={{
              backgroundColor: "darkgreen",
              borderRadius: "100%",
              color: "skyblue",
              maxWidth: "1rem",
              display: "inline",
              
              margin: "0 1rem",
            }}
          />
          <Contributor name="Christian" githubProfileUrl="https://github.com" />
          
        </Typography>
        <div className="flex">
          <a href="https://www.buymeacoffee.com/hillary" target="_blank" className="w-32 mt-3 mx-auto">
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              style={{ height: "auto", width: "100%" }}
              />
          </a>
        </div>
        <Script
          type="text/javascript"
          src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
          data-name="bmc-button"
          data-slug="hillary"
          data-color="#FFDD00"
          data-emoji=""
          data-font="Cookie"
          data-text="Buy me a coffee"
          data-outline-color="#000000"
          data-font-color="#000000"
          data-coffee-color="#ffffff"
        ></Script>
        
      </Container>
    </Box>
  );
}
