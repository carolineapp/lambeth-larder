import React from "react";
import { Link } from "react-router-dom";

const NotFound = props => {
  return (
    <div className="errorpage__container">
      <div className="errorpage__message">
        <p className="errorpage__message--large">Oops!</p>
        <p>
          404. We can't find the page you're looking for. Please try again or
          navigate <Link to="/">home</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
