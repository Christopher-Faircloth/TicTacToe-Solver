import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";  // Import the CSS file

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Tic-Tac-Toe</h1>
      <button onClick={() => navigate("/basic")}>Play Basic Version</button>
      <button onClick={() => navigate("/advanced")}>Play Advanced Version</button>
    </div>
  );
}

export default Home;
