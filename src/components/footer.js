import styled from "styled-components";
import { Typography } from "@material-ui/core";
import React, { Component } from "react";

const FooterContainer = styled.div`
  text-align: center;
  position: sticky;
  bottom: 0;
  width: 100% !important;
  height: 35px !important ;
  background: #ffffff;
  color: #9dee36;
`;

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <Typography variant="subtitle1">
          Created by Mint, with love for Henry. 2021
        </Typography>
      </FooterContainer>
    );
  }
}

export default Footer;
