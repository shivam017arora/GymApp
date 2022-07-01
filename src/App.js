import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";

function App() {
  return (
    <Box width="400px" sx={{ width: { x1: "1448px" } }} m="auto">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
