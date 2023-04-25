import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import ScrollToColor from "../components/ScrollToColor";

const drawerWidth = 240;
const navItems = [
  {
    title: "Home",
    url:"/"
  }, 
  {
    title: "About",
    url:"/about"
  }, 
  {
    title: "Contact",
    url:"/contact"
  }
];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Expat-ations
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding className="text-3xl">
            <ListItemButton sx={{ textAlign: "center" }} href={item.url}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {props.results === true && (
        <ScrollToColor>
          <AppBar className={props.className} component="nav">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Link
                href="/"
                style={{
                  flexGrow: "1",
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                >
                  Expat-ations
                </Typography>
              </Link>

              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.title === "Home" ? "/" : `/${item.title.toLowerCase()}`}
                    passHref
                  >
                    <Button sx={{ color: "#ffd803" }}>{item.title}</Button>
                  </Link>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
        </ScrollToColor>
      )}
      {props.results === false && (
        <AppBar className={props.className} component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Link
              href="/"
              style={{
                flexGrow: "1",
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                Expat-ations
              </Typography>
            </Link>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.title === "Home" ? "/" : `/${item.title.toLowerCase()}`}
                  passHref
                >
                  <Button sx={{ color: "#ffd803" }}>{item.title}</Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      )}

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;
