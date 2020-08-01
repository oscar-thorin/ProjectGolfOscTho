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
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div>
          <h1 style={{ marginLeft: "10%" }}>{this.state.course_name}</h1>
          <h3 style={{ marginLeft: "10%" }}> In {this.state.course_country}</h3>
        </div>
        <img
          style={{ paddingTop: "30px" }}
          src="https://i2.wp.com/livewallpaper.info/wp-content/uploads/2017/08/Green-golf-course-wallpaper-wp4405474.jpg?w=446&h=279&ssl=1"
        />
        <div style={{ paddingTop: "30px" }}>
          <p style={{ marginLeft: "38%", fontSize: "30px" }}>
            {this.state.course_address}
          </p>
          <br />
          <a
            href="{this.state.course_website}"
            style={{
              fontSize: "30px",
              textDecoration: "none",
              marginLeft: "68px",
            }}
          >
            {this.state.course_website}
          </a>
          <br />
          <br />
          <p style={{ marginLeft: "38%", fontSize: "30px" }}>
            {this.state.course_information}
          </p>
        </div>
      </div>
    );
  }
}
