import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BasicTicTacToe from "../pages/BasicTicTacToe";
import AdvancedTicTacToe from "../pages/AdvancedTicTacToe";

function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic" element={<BasicTicTacToe />} />
        <Route path="/advanced" element={<AdvancedTicTacToe />} />
      </Routes>
    </Router>
  );
}

export default MainRoutes;
