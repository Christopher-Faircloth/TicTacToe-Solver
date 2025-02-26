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

  const audioRef = useRef(new Audio(backgroundmusic)); // Create a single audio instance
  const [isPlaying, setIsPlaying] = useState(false); // State to track whether the music is playing

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Pause the audio
    } else {
      audioRef.current.currentTime = 0; // Reset to the beginning
      audioRef.current.play(); // Start playing
    }
    setIsPlaying(!isPlaying); // Toggle the state
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
        <button className="Music-button" onClick={togglePlayPause}>
            {isPlaying ? 'Stop Background Music' : 'Turn on Background Music'}
        </button>
      </div>
    </div>
  );
}

export default App;
