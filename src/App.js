import React, { Fragment } from "react";
import Appbar from "./common/Appbar";
import Home from "./pages/Home/Home";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
