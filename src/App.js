import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderRoutes from "./routes";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>{renderRoutes()}</Router>
  </ThemeProvider>
);
export default App;
