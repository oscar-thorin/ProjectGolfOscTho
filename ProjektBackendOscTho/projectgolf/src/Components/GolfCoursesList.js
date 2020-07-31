import React, { Component } from "react";
import GolfCourse from "./GolfCourse";

function GolfCoursesList(props) {
  let golfcourses = props.filteredCourses.map((golfcourse, i) => {
    return <GolfCourse key={i} name={golfcourse.name} id={golfcourse._id} />;
  });

  return <div>{golfcourses}</div>;
}

export default GolfCoursesList;
