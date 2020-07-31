import React, { Component } from "react";
import { Link } from "react-router-dom";
function GolfCourse(props) {
  return (
    <div>
      <Link to={"/course/" + props.id}>
        <p>Name: {props.name}</p>
      </Link>
    </div>
  );
}

export default GolfCourse;
