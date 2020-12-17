import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Homepage(props){
return (
  
  <div className="container">

<nav className="navbar navbar-expand-lg text-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Google Books</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/search"
                            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                        > Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/saved"
                            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                        >Saved</Link>
                    </li>
                </ul>
            </div>
</nav>

  <form>
    <div className="form-group">
      <label htmlFor="search"><h2>Search for Your Favorite Book</h2></label>
      <input
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
