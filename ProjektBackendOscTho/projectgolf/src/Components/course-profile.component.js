import React, { Component } from "react";
import axios from "axios";
export default class CourseProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course_name: "",
      course_country: "",
      course_address: "",
      course_information: "",
      course_website: "",
      course_open: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/courses/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          course_name: response.data.name,
          course_country: response.data.country,
          course_address: response.data.address,
          course_information: response.data.information,
          course_website: response.data.website,
          course_open: response.data.open,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <p>name: {this.state.course_name}</p>
        <p>country: {this.state.course_country}</p>
        <p>address: {this.state.course_address}</p>
        <p>website: {this.state.course_website}</p>
        <p>information: {this.state.course_information}</p>
        <p>open: {this.state.course_open}</p>
      </div>
    );
  }
}
