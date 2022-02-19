import React from "react";
import { Typography } from "@material-ui/core";
import Navbar from "../../components/navbar";
import { Parallax } from "react-parallax";
import Footer from "../../components/footer";
import { Grid } from "@material-ui/core";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Parallax bgImage="/images/page/home.jpg" style={{ height: 680 }}>
        <div
          style={{
            color: "white",
            padding: 100,
            background: "rgba(0, 0, 0, .33)",
          }}
        >
          <Typography variant="h2">WELCOME ON BOARD</Typography>
          <Typography variant="h1">HUSBAND-TO-BE</Typography>
          <Typography variant="h5">
            Love isn’t about feelings. Love is a choice. Staying in love with
            you is my choice.
          </Typography>
        </div>
      </Parallax>
      <div style={{ backgroundColor: "#E7ECE0" }}>
        <Typography variant="h1" style={{ color: "#42670D" }}>
          LOVE IS NOT ENOUGH
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <img
              src="images/landing/trust.png"
              alt="Trust"
              style={{ width: 100 }}
            />
            <figcaption>
              <Typography variant="h5">Trust</Typography>
            </figcaption>
          </Grid>
          <Grid item xs={3}>
            <img
              src="images/landing/listen.png"
              alt="Listen"
              style={{ width: 100 }}
            />
            <figcaption>
              <Typography variant="h5">Listen</Typography>
            </figcaption>
          </Grid>
          <Grid item xs={3}>
            <img
              src="images/landing/fun.png"
              alt="Fun"
              style={{ width: 100 }}
            />
            <figcaption>
              <Typography variant="h5">Fun</Typography>
            </figcaption>
          </Grid>
          <Grid item xs={3}>
            <img
              src="images/landing/respect.png"
              alt="Respect"
              style={{ width: 100 }}
            />
            <figcaption>
              <Typography variant="h5">Respect</Typography>
            </figcaption>
          </Grid>
        </Grid>

        <Typography variant="h2">AND MANY MORE ...</Typography>
        <Typography
          variant="h1"
          style={{ paddingLeft: 248, paddingRight: 248, color: "#42670D" }}
        >
          SO, DO YOU WANT TO BUILD LOVE WITH ME, DARLING?
        </Typography>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
