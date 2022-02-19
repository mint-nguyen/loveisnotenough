import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Gallery from "./gallery";
import { Parallax } from "react-parallax";
import { Typography } from "@material-ui/core";
import { Button } from "@mui/material";

const GalleryPage = () => {
  return (
    <div>
      <Navbar />
      <Parallax
        bgImage="/images/page/gallery.jpg"
        style={{ height: 680 }}
      ></Parallax>

      <div style={{ background: "#E7ECE0", padding: "5%" }}>
        <Typography variant="h1" style={{ color: "#42670D" }}>
          HAPPY ONE-YEAR ANIVERSARY
        </Typography>
        <Typography variant="h2">I LOVE YOU, HENRY. ALWAYS DO</Typography>
        <Button
          href="https://youtu.be/8KUfXY_-I1s"
          style={{ height: "100px", width: "300", fontSize: 30 }}
        >
          CLICK HERE, DARLING
        </Button>
        <Gallery />
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;
