import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import "./App.css";

class App extends Component {
 
  render() {
    return (
      <Router>
        <div>

            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/ErrorPage" component={ErrorPage} />

        </div>
      </Router>
    )
  };
};

export default App;
