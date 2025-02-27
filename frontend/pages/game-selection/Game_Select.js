import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';  // Import Carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import './Game_Select.css';

function GameSelect() {
  const navigate = useNavigate(); // useNavigate hook to programmatically navigate

  const handleConnect4Redirect = () => {
    navigate('/Connect4');
  };

  const handleTicTacToeRedirect = () => {
    navigate('/TicTacToe');
  };

  return (
    <div className="Select">
      <header className = "Select-header">
        <p>The Collage of Classics</p>
      </header>

      <Carousel
        showArrows={true}
        showThumbs={true}
        showStatus={false}
        infiniteLoop={true}
        emulateTouch={true}
      >
         <div>
          <button className="connect4-button" onClick={handleConnect4Redirect}>Play Connect 4!</button>
        </div>

        <div>
          <button className="ticTacToe-button" onClick={handleTicTacToeRedirect}>Play Tic Tac Toe!</button>
        </div>

       </Carousel>

    </div>
  );
}

export default GameSelect;
