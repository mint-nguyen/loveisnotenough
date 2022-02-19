import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  CssBaseline,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginRight: "auto",
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    maxWidth: "45px",
  },
  link: {
    float: "right",
    textDecoration: "none",
    color: "black",
    fontSize: "14px",
    height: "60px",
    width: "150px",
    "&:hover": {
      color: "#9DEE36",
      borderBottom: "1px solid white",
      background: "#E7ECE0",
      minHeight: "25px",
      minWidth: "50px",
    },
    //TODO
    // FIX ACTIVE TAB
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar
      position="sticky"
      style={{ backgroundColor: "white", width: "100%" }}
    >
      <CssBaseline />
      <Toolbar>
        <img src="/images/page/logo.png" className={classes.logo} alt="Logo" />
        <div className={classes.navlinks}>
          <Button href="/" className={classes.link}>
            Home
          </Button>
          <Button href="/diary" className={classes.link}>
            Diary
          </Button>
          <Button href="/loveletters" className={classes.link}>
            Love Letters
          </Button>
          <Button href="/gallery" className={classes.link}>
            Gallery
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
