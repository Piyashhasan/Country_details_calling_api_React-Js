import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container container text-danger py-5">
      <Link className="preview-btn" to="/">
        Back
      </Link>
      <h1 className="mt-5">Not foud - 404 error</h1>
      <h3 className="text-danger my-4">type the right URL ......!</h3>
    </div>
  );
};

export default NotFound;
