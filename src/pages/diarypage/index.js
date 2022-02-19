import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Parallax } from "react-parallax";
import { Typography } from "@material-ui/core";
import GenericCard from "../../components/genericlettercard";
import { Grid } from "@material-ui/core";
import { diary } from "./diary";

const DiaryPage = () => {
  return (
    <div>
      <Navbar />
      <Parallax bgImage="/images/page/diary.png" style={{ height: 680 }}>
        <div
          style={{
            color: "white",
            background: "rgba(0, 0, 0, .33)",
          }}
        >
          <Typography
            variant="h1"
            style={{
              textShadow: "3px 3px 5px #9DEE36",
            }}
          >
            MINT'S DIARY
          </Typography>
          <Typography
            variant="h6"
            style={{
              paddingTop: 20,
              paddingLeft: 50,
              paddingRight: 50,
              paddingBottom: 20,
            }}
          >
            Writing makes me feel more thoughtful and careful to express myself
            genuinely. I'm better writing down my thoughts than directly
            communicating. Sit back, take your time, read my diary, and feel my
            heart. I'm bad at expressing how much I love you, but I hope you are
            good at seeing through my writings.
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
          {diary.map((letter) => {
            return (
              <Grid item xs={4}>
                <GenericCard letter={letter} />
              </Grid>
            );
          })}
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default DiaryPage;
