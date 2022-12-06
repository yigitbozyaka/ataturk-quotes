import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound">
      <h1>404 Page Not Found!</h1>
      <Link to='/'>
        <button>back to Home</button>
      </Link>
    </div>
  );
}

export default NotFound;
