import React, { Component } from "react";
import { Link } from "react-router-dom";
function GolfCourse(props) {
  return (
    <div className="course">
      <Link to={"/course/" + props.id} style={{ textDecoration: "none" }}>
        <p
          style={{
            fontSize: "35px",
            marginLeft: "30%",
            paddingTop: "25px",
            width: "50%",
          }}
        >
          {props.name}
        </p>
      </Link>
    </div>
  );
}

export default GolfCourse;
