import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Homepage(props){
return (
  
  <div className="container">

<nav className="navbar navbar-expand-lg text-light" class id="Navbar">
</nav>

<hr></hr><br></br>
  <form>
    <div className="form-group">
      <label htmlFor="search"><h2>Search for Your Favorite Book</h2></label>
      <input className="Input"
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Pride and Prejudice"
        id="search"
      />
      <button onClick={props.handleFormSubmit} className="btn btn-dark mt-3">
        Search
        </button>
    </div>
  </form>


  </div>
  
);
}



export default Homepage;
