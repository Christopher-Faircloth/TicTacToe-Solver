import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../home/App';
import GameSelect from '../game-selection/Game_Select';
import Connect4 from '../Connect4/Connect4';
import TicTacToe from '../TicTacToe/TicTacToe';


const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/game-selection" element={<GameSelect />} />
        <Route path="/connect4" element={<Connect4 />} />
        <Route path="/basic-tictactoe" element={<BasicTicTacToe />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;