import React from "react";
import { Link } from "react-router-dom";

const NoMatch = props => {
  return (
    <div className="No-Match">
      <h1>Something went wrong!</h1>
      <h2>404 Not Found</h2>
      <p>Sorry, an error has occured, Requested page not found!</p>
      <div>
        <Link to="/">Return to main page</Link> or <Link to="/searchPage">search for a book!</Link>
      </div>
    </div>
  );
};

export default NoMatch;