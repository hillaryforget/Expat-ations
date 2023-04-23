import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Contributor from "./Contributor"

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
      // theme.palette.mode === 'light'
      //   ? theme.palette.grey[200]
      //   : theme.palette.grey[800],
    >
      <Container maxWidth="sm">
        <Typography variant="body1" className="text-center">
          &copy; 2023 Lighthouse Labs Final. 
          <br/>
          <br/> Created by 
          <br/>
          <Contributor 
            name="Clayton"
            githubProfileUrl="https://github.com"
          />
          <FontAwesomeIcon icon={faEarthOceania} style={{backgroundColor:'darkgreen',borderRadius:'100%', color:'skyblue', fontSize:'1.25rem', margin:'0 1rem'}} />
          <Contributor 
            name="Joon"
            githubProfileUrl="https://github.com"
          />
          <FontAwesomeIcon icon={faEarthOceania} style={{backgroundColor:'darkgreen',borderRadius:'100%', color:'skyblue', fontSize:'1.25rem', margin:'0 1rem'}} />
          <Contributor 
            name="Hillary"
            githubProfileUrl="https://github.com"
          />
          <FontAwesomeIcon icon={faEarthOceania} style={{backgroundColor:'darkgreen',borderRadius:'100%', color:'skyblue', fontSize:'1.25rem', margin:'0 1rem'}} />
          <Contributor 
            name="Christian"
            githubProfileUrl="https://github.com"
          />
        </Typography>
      </Container>
    </Box>
  );
}
