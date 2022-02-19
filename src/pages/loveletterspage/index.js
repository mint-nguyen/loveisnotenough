import React from "react";
import Navbar from "../../components/navbar";
import { Parallax } from "react-parallax";
import Footer from "../../components/footer";
import { Typography } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import GenericCard from "../../components/genericlettercard";
import { lovelettercontents } from "./letter";

const LoveLettersPage = () => {
  return (
    <div>
      <Navbar />
      <Parallax bgImage="/images/page/letters.jpg" style={{ height: 680 }}>
        <div
          style={{
            color: "white",
            background: "rgba(0, 0, 0, .33)",
          }}
        >
          <Typography variant="h1">Love Letters for Mint</Typography>

          <Typography
            variant="h6"
            style={{
              paddingTop: 20,
              paddingLeft: 50,
              paddingRight: 50,
              paddingBottom: 20,
            }}
          >
            Falling in love with you was not something within my plan, it's an
            irrational chain of events that simply cannot be stopped. Falling in
            love is easy. Staying in love is the hard part. When the rush
            disappears, we are just two flawed people trying to come up with new
            ways to fall in love. Well, nobody's perfect, choosing to stay in
            love with you is my decision. These love letters are my tokens of
            love for you, darling!
          </Typography>
        </div>
      </Parallax>

      <div
        style={{
          backgroundColor: " #E7ECE0",
          padding: "7%",
        }}
      >
        <Grid container spacing={2}>
          {lovelettercontents.map((letter) => {
            return (
              <Grid item xs={4}>
                <GenericCard letter={letter || ""} />
              </Grid>
            );
          })}
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default LoveLettersPage;
