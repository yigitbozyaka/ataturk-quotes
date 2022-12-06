import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Atatürk Quotes App</h1>

      <div className="buttons">
        <Link to="/english">
          <button className="mx-4 my-4">English</button>
        </Link>
        <Link to="/turkish">
          <button className="mx-4 my-4">Turkish</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
