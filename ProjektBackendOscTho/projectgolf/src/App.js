import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom";

import "./App.css";

import CourseProfile from "./Components/course-profile.component";
import Welcome from "./Components/welcome.component";
import CoursesList from "./Components/courses-list.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav>
            <div>
              <ul>
                <li>
                  <NavLink to="/welcome" activeClassName="selected">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/courses" activeClassName="selected">
                    Courses
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Redirect from="/" to="/welcome" />
        <Route path="/welcome" exact component={Welcome} />
        <Route path="/courses" component={CoursesList} />
        <Route path="/course/:id" component={CourseProfile} />
      </Router>
    );
  }
}

/*
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">


            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>

        </div>
      </Router>

*/
export default App;
