import React, { Component } from "react";
import SearchBox from "./SearchBox";
import GolfCoursesList from "./GolfCoursesList";
import axios from "axios";

export default class CoursesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      golfcourses: [],
      searchCourse: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/courses/")
      .then((response) => {
        this.setState({
          ...this.state.golfcourses,
          golfcourses: response.data,
        });
        console.log(this.state.golfcourses);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({ searchCourse: e.target.value });
  };

  render() {
    let filteredCourses = this.state.golfcourses.filter((golfcourse) => {
      return golfcourse.name
        .toLowerCase()
        .includes(this.state.searchCourse.toLowerCase());
    });
    return (
      <div>
        <h1>Golf Courses</h1>
        <SearchBox handleInput={this.handleInput} />
        <GolfCoursesList filteredCourses={filteredCourses} />
      </div>
    );
  }
}
