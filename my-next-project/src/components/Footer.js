import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

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
        <Typography variant="body1">
          &copy; 2023 Lighthouse Labs Final. Created by Clayton, Joon, Hillary
          and Christian.
        </Typography>
      </Container>
    </Box>
  );
}
