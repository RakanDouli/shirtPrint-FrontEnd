import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./spinner.css";

export default function Loading() {
  return (
    <div className="loading_spinner">
      <div animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
