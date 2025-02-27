import React, { useRef, useState } from 'react';
import backgroundmusic from "../../public/backgroundmusic.mp3"
import {useNavigate} from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate(); // useNavigate hook to programmatically navigate

  const handleGameSelectRedirect = () => {
    audioRef.current.pause(); // Pause the audio
    navigate('/game-selection'); // Navigate to the Game Selection page
  };

  return (
    <div className="App">
      <header className="App-header">
        <header className="lobster-two-bold-italic">
          <p>The Collage of Classics</p>
        </header>
      </header>
      <div className="App-body">
        <button className="Play-button" onClick={handleGameSelectRedirect}>Play!</button>
        <br></br>
      </div>
    </div>
  );
}

export default App;
