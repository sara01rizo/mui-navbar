import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
    color: "purple",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "black",
      borderBottom: "1px solid white",
    },
    toolbar: {
      background: green,
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar className="navi" position="static">
      <CssBaseline />
      <Toolbar className={classes.Toolbar}>
        <div className="Logo" id="Logo">
          <Typography variant="h4" className={classes.logo}>
            WAY TO GO
          </Typography>
        </div>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link exact to="/HOME" className={classes.link}>
              HOME
            </Link>
            <Link to="/ABOUT" className={classes.link}>
              ABOUT
            </Link>
            <Link to="/HOW TO" className={classes.link}>
              HOW IT
            </Link>
            <Link to="/CONTACT" className={classes.link}>
              CONTACT
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
