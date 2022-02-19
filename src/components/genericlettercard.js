import React from "react";
import { Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GenericLetter from "./genericletter";

const GenericCard = ({ letter }) => {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 500 }}>
      <CardMedia
        component="img"
        height="270"
        image={letter.image ? letter.image : "images/page/logo.png"}
        alt="H&M"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {letter.title ? letter.title : "No title"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {letter.description ? letter.description : ""}
        </Typography>
      </CardContent>
      <CardActions>
        <GenericLetter
          title={letter.title ? letter.title : "No title"}
          content={letter.content ? letter.content : "No content"}
          video={letter.video? letter.video: null}  
        />
      </CardActions>
    </Card>
  );
};

export default GenericCard;
