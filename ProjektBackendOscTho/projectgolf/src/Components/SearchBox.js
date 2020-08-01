import React, { Component } from "react";

function Searchbox(props) {
  return (
    <div>
      <p style={{ marginLeft: "38.6%" }}>
        Looking for something specific? <br />
        Enter the name of your prefered course!
      </p>
      <input onChange={props.handleInput} type="text" />
    </div>
  );
}

export default Searchbox;
